import express from 'express'
import * as UserController from '../controllers/UserController'

const router = express.Router()

router.post('/register', UserController.register)

export { router as authController }
