import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/ErrorHandler.errors";

export const validateId = async (req: Request, res: Response, next: NextFunction) => {
  const id: number = Number(req.params.id);
  const movieRepo = AppDataSource.getRepository(Movie);
  const validate = await movieRepo.exist({ where: { id: id } });
  if (!validate) throw new AppError(404, "Movie not found");

  return next();
};
