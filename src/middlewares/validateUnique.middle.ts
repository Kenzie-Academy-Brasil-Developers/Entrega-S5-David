import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/ErrorHandler.errors";

export const validateUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.name) {
    const name: string = req.body.name;
    const movieRepo = AppDataSource.getRepository(Movie);
    const validate = await movieRepo.exist({ where: { name: name } });
    if (validate) throw new AppError(409, "Movie already exists.");
  }

  return next();
};
