import { AllMovies, findConfig, MovieRequest } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movies.entities";
import { Repository } from "typeorm";
import { getMoviePage } from "./getMoviePage.services";

export const getAllMoviesService = async (payload: any) => {
  let page: number = Number(payload.page) || 1;
  let perPage: number = Number(payload.perPage) || 5;

  if (page <= 0) page = 1;

  if (perPage <= 0) perPage = 5;

  if (perPage >= 6) perPage = 5;

  const nextPayload = { ...payload, page: page + 1 };
  const sort: string = payload.sort || "id";
  const order: string = payload.order || "asc";

  const findConfig:findConfig = {
    take: perPage,
    skip: perPage * (page - 1),
    order: { [sort]: order },
  }

  if(!payload.sort)
  delete findConfig.order

 

  const moviesRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const allMovies: Movie[] = await moviesRepo.find(findConfig);

  const finalResult: AllMovies = {
    prevPage:
      page - 1 > 0
        ? `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`
        : null,
    nextPage:
      (await getMoviePage(nextPayload)).length > 0
        ? `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`
        : null,
    count: (await moviesRepo.find()).length,
    data: allMovies,
  };

  return finalResult;
};
