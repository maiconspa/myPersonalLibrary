import { Router, Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

const bookRouter = Router();

export interface IBook {
    title: string,
    author: string,
    addDate: Date,
    conclusionDate: Date,
    rating: number,
    status: number,
    ownerId: ObjectId
}

export const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    addDate: { type: Date, required: true },
    conclusionDate: { type: Date },
    rating: { type: Number },
    status: { type: Number, required: true },
    ownerId: { type: ObjectId, required: true }
})

export const Book = model<IBook>('Book', bookSchema);

bookRouter.post(
    '/book/create',
    async (request: Request, response: Response) => {
        const {
            title,
            author,
            addDate,
            conclusionDate,
            rating,
            status,
            ownerId
        } = request.body;

        const book = new Book({
            title: title,
            author: author,
            addDate: new Date(addDate),
            conclusionDate: new Date(conclusionDate),
            rating: rating,
            status: status,
            ownerId: new ObjectId(ownerId)
        });

        try {
            await book.save();
            response.status(204).send();
        } catch (error: any) {
            console.error('error', error);
            response.status(422).send();
        }
    }
)

bookRouter.put(
    '/book/update',
    async (request: Request, response: Response) => {
        const {
            id,
            title,
            author,
            addDate,
            conclusionDate,
            rating,
            status,
            ownerId
        } = request.body;

        const newBookInfos = {
            id: id,
            title: title,
            author: author,
            addDate: new Date(addDate),
            conclusionDate: conclusionDate ? new Date(conclusionDate) : null,
            rating: rating ?? null,
            status: status,
            ownerId: new ObjectId(ownerId)
        };

        try {
            await Book.findByIdAndUpdate(id, newBookInfos);
            response.status(204).send();
        } catch (error: any) {
            console.error('error', error);
            response.status(422).send();
        }
    }
)

bookRouter.get(
    '/book/read/byOwner/:ownerId',
    async (request: Request, response: Response) => {
        const { ownerId } = request.params;

        try {
            const books: Array<IBook> = await Book.find({ ownerId });
            response.send(books);
        } catch (error: any) {
            console.error('error', error);
            response.status(422).send();
        }
    }
)

bookRouter.delete(
    '/book/delete',
    async (request: Request, response: Response) => {
        const { id } = request.body;

        try {
            const book = await Book.findById(new ObjectId(id))

            if (book) {
                await book.delete();
                response.status(204).send();
            } else {
                response.status(404).send()
            }
        } catch (error: any) {

        }
    }
)

export default bookRouter;
