
import express, { json } from "express"
import "express-async-errors";
import { errorHandler } from "./errors/ErrorHandler.errors";
import { movieRouter } from './routers/movies.routers';

export const app = express()
app.use(json())

app.use("/movies",movieRouter);

app.use(errorHandler)


export default app
