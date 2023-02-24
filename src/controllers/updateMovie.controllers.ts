import { Request, Response } from "express";
import { deleteMovieService } from "../services/deleteMovie.services";
import { updateMovieService } from "../services/updateMovie.services";


export const updateMovieController = async (req:Request, res:Response) => {

    const response = await updateMovieService(Number(req.params.id), req.body)

    return res.status(200).json(response)
}