
import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movies.entities";
import { Repository } from "typeorm";

export const getMoviePage= async (payload: any) => {
  const page:number = Number(payload.page) || 1;
  const perPage: number = Number(payload.perPage) || 5;
  const nextPayload = { ...payload, page: page + 1 };
  const sort: string = payload.sort || "id";
  const order: string = payload.order || "asc";
  const moviesRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const allMovies: Movie[] = await moviesRepo.find({
    take: perPage,
    skip: perPage * (page - 1),
    order: { [sort]: order },
  });

  

  return allMovies;
};
