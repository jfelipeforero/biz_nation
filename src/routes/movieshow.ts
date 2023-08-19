import express from 'express'
import * as MovieShowController from '../controllers/MovieShowController'

const router = express.Router()

router.post('/create', MovieShowController.createMovieShow)
router.get('/query', MovieShowController.getByQueryMovieShow)
router.get('/', MovieShowController.getAllMovieShow)
router.get('', MovieShowController.getAllMovieShow)
router.get('/movies/:id', MovieShowController.getMovieShowById)
router.put('/update', MovieShowController.updateMovieShow)
router.delete('/delete/:id', MovieShowController.deleteMovieShow)

export { router as movieshowRouter }
