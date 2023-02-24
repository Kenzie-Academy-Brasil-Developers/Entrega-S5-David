import { Router } from "express";
import { getAllMoviesController } from '../controllers/getAllMovies.controllers';
import { validateBody } from '../middlewares/validatePost.middleware';
import { requestMovieSchema, updateMovieSchema } from "../schemas/movies.schemas";
import { postMovie } from "../services/postMovie.services";
import { postMovieController } from '../controllers/postMovie.controller';
import { validateId } from '../middlewares/validateId.middleware';
import { deleteMovieController } from "../controllers/deleteMovie.controllers";
import { updateMovieController } from "../controllers/updateMovie.controllers";
import { validateUnique } from "../middlewares/validateUnique.middle";


export const movieRouter = Router()

movieRouter.get("", getAllMoviesController);
movieRouter.post("",validateUnique,validateBody(requestMovieSchema), postMovieController)
movieRouter.delete("/:id", validateId, deleteMovieController )
movieRouter.patch("/:id", validateUnique, validateId, validateBody(updateMovieSchema), updateMovieController )
