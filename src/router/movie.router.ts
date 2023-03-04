import { Router } from "express";
import { getAllMovies, createMovie, deleteMovie, updateMovie, getMovieByName, getMovieByGenre, getMovieByRating } from "../controler/movie.controler";
import validate from "../middileware/validate";
import { Movietype } from "../zodSchema/zod.movie";

const router = Router()

router.get('/',getAllMovies )
router.get('/byName',getMovieByName )
router.get('/byGenre',getMovieByGenre )
router.get('/byRating',getMovieByRating )
router.post('/',validate(Movietype), createMovie )
router.put('/:id',updateMovie )
router.delete('/:id',deleteMovie )

export default router