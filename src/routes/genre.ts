import express from 'express'
import * as GenreController from '../controllers/GenreController'

const router = express.Router()

router.post('/create', GenreController.createGenre)
router.get('/', GenreController.getAllGenres)
//router.delete('/delete/:id', GenreController.)

export { router as genresRouter }
