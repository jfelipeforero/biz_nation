import express from 'express'
import * as GenreController from '../controllers/GenreController'

const router = express.Router()

router.post('/', GenreController.createGenre)


export { router as genresRouter }
