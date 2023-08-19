import express from 'express'
import * as MovieShowController from '../controllers/MovieShowController'

const router = express.Router()

router.post('/create', MovieShowController.createMovieShow)
router.get('/show', MovieShowController.getMovieShowById)
router.get('/movies', MovieShowController.getAllMovieShow)
router.put('/update', MovieShowController.updateMovieShow)
router.delete('/delete', MovieShowController.deleteMovieShow)

export { router as movieshowRouter }
