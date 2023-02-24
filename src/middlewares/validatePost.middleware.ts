import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { MovieRequest } from "../interfaces";
import { requestMovieSchema } from "../schemas/movies.schemas";

export const validateBody = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const payload: MovieRequest = req.body;
    const validated: MovieRequest = schema.parse(payload);
    req.body = validated;
    return next();
  };
};
