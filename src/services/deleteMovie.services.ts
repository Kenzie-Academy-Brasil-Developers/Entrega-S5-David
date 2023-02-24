import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movies.entities";

export const deleteMovieService = async (id: number) => {
  const moviesRepo = AppDataSource.getRepository(Movie);
  const deleted: Movie[] = await moviesRepo.findBy({ id: id });
  await moviesRepo.remove(deleted);
};
