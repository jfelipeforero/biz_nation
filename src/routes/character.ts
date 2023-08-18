import express from 'express'
import * as CharacterController from '../controllers/CharacterController'

const router = express.Router()

router.post('/create', CharacterController.createCharacter)

export { router as charactersRouter }
