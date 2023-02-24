import { Request, Response } from "express";
import { deleteMovieService } from "../services/deleteMovie.services";


export const deleteMovieController = async (req:Request, res:Response) => {

    await deleteMovieService(Number(req.params.id))

    return res.status(204).send()
}