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

        await book.save();
        response.status(200).send();
    })

bookRouter.get(
    '/book/read/byOwner/:ownerId',
    async (request: Request, response: Response) => {

        const { ownerId } = request.params;

        const books: Array<IBook> = await Book.find({ ownerId });

        response.send(books);
    })

export default bookRouter;
