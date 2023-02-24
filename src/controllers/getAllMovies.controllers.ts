import { Request, Response } from "express"
import { Movie } from "../entities/movies.entities"
import { getAllMoviesService } from "../services/getAllMovies.services"
import { AllMovies } from '../interfaces';


export const getAllMoviesController = async (req: Request, res: Response): Promise<Response> =>{
    
    const response: AllMovies = await getAllMoviesService(req.query)
    return res.status(200).json(response)

}