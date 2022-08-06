import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";

const bookRouter = Router();

interface IBook {
    title: string,
    author: string,
    addDate: Date,
    conclusionDate: Date,
    rating: number,
    status: number,
    ownerId: ObjectId
}

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    addDate: { type: Date, required: true },
    conclusionDate: { Date: String },
    rating: { type: Number },
    status: { type: Number, required: true },
    ownerId: { type: ObjectId, required: true }
})

const Book = model<IBook>('Book', bookSchema);

bookRouter.post("/book/create", async (req: Request, res: Response) => {
    
    console.log('req: ', req.body)
    
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        addDate: new Date(req.body.addDate),
        conclusionDate: new Date(req.body.conclusionDate),
        rating: req.body.rating,
        status: req.body.status,
        ownerId: new ObjectId(req.body.ownerId)
    })

    console.log('book: ', book)

    await book.save();
    res.status(200).send();
})

export default bookRouter;
