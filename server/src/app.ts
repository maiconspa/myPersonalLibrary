import express from 'express'
import cors from 'cors'
import mongoose, { connect } from 'mongoose';
import dotenv from "dotenv";
import bookRouter from './book';
import userRouter from './user';
dotenv.config();

class App {
    public express: express.Application
    private db_uri: string = '';

    public constructor() {
        this.express = express()
    
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {

        if (process.env.DB_URI) {
            this.db_uri = process.env.DB_URI
        } else {
            throw new Error("DB_URI environment variable is not set")
        }
    
        mongoose.connect(this.db_uri, {}),
    
        mongoose.connection.on('error', () => {
          console.warn("Erro na conexão com o banco de dados")
        })
    
        mongoose.connection.on('disconnect', () => {
          console.warn("Aplicação desconectada do banco de dados")
        })
    
        mongoose.connection.on("connected", () => {
          console.warn("Aplicação conectada ao banco de dados")
        })
    }

    private routes(): void {
        this.express.use(bookRouter);
        this.express.use(userRouter);
    }
}


export default new App().express;