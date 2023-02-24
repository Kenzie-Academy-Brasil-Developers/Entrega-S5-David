import { MovieRequest } from "../interfaces";
import { Movie } from "../entities/movies.entities";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

export const postMovie = async (payload: Movie): Promise<Movie> => {
  const moviesRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const user: Movie = moviesRepo.create(payload);
  const savedMovie: Movie = await moviesRepo.save(user);
  return savedMovie;
};
