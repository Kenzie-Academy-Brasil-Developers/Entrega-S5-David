import { Request, Response } from "express";
import { MovieRequest } from "../interfaces";
import { postMovie } from "../services/postMovie.services";
import { Movie } from "../entities/movies.entities";

export const postMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {

  const payload: Movie = req.body;

  const response = await postMovie(payload);

  return res.status(201).json(response);
};
