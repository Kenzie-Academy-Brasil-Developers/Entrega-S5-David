import { NextFunction, Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { ZodError } from "zod";

export class AppError extends Error {
  statusCode: number;
  constructor(status: number, message: string) {
    super(message);
    this.statusCode = status;
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else if (err instanceof ZodError) {
    return res
      .status(400)
      .json(
        err.flatten().formErrors.length > 0
          ? { message: err.flatten().formErrors }
          : { message: err.flatten().fieldErrors }
      );
  } else {
    return res.status(500).json({ message: "internal server error" });
  }
};
