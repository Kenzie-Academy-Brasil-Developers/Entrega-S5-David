import { type } from "os";
import z from "zod";
import { moviesSchema } from "./schemas/movies.schemas";
import { Repository } from 'typeorm';
import { Movie } from './entities/movies.entities';

export type iMovie = z.infer<typeof moviesSchema>;

export type MovieRequest = Omit<iMovie, "id">;

export type MovieUpdate = Partial<MovieRequest>;

export type iMovieRepo = Repository<Movie>

export interface AllMovies {
    prevPage: string | null,
    nextPage: string | null,
    count: number,
    data: Movie[],
}

export interface findConfig {
    take: number;
    skip: number;
    order?: {
        [x: string]: string;
    };
}

