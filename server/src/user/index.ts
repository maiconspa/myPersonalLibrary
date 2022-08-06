import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { Book } from "../book";

const userRouter = Router();

interface IUser {
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

userRouter.post(
    "/user/create",
    async (request: Request, response: Response) => {
        try {
            const { email, password } = request.body;
            const user = new User({ email, password });

            const hasRegisteredEmail: Boolean = (await User.findOne({ email })) !== null;

            if (hasRegisteredEmail) {
                response.status(409).send("Email already registered");
            } else {
                user.save();
                response.send();
            }
        } catch (error: any) {
            console.error("error", error);
            response.status(422).send();
        }
    }
);

userRouter.post("/user/login", async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;

        const user = await User.findOne({ email, password });

        user ? response.send() : response.status(404).send();
    } catch (error: any) {
        console.error("error", error);
        response.status(422).send();
    }
});

userRouter.delete(
    "/user/delete",
    async (request: Request, response: Response) => {
        try {
            const { email, password } = request.body;

            const dbUser = await User.findOne({ email, password });

            if (dbUser) {
                await Book.deleteMany({ ownerId: new ObjectId(dbUser.id) });
                await dbUser.delete();
                response.status(204).send();    
            } else {
                response.status(404).send();
            }
        } catch (error: any) {
            console.error("error", error);
            response.status(422).send();
        }
    }
);

export default userRouter;