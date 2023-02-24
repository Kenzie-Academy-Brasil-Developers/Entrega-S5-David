import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movies.entities";
import { MovieUpdate } from "../interfaces";

export const updateMovieService = async (id: number, payload:MovieUpdate) => {
  const moviesRepo = AppDataSource.getRepository(Movie);
  await moviesRepo.save({ id: id, ...payload });
  const updated =  moviesRepo.findOneBy({id:id})
  
  return updated;
};
