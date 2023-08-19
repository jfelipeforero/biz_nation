import express from 'express'
import * as CharacterController from '../controllers/CharacterController'

const router = express.Router()

router.post('/create', CharacterController.createCharacter)
router.get('/:id', CharacterController.getByIdCharacter)
router.get('/characters?order', CharacterController.getAllCharacters)
router.put('/update', CharacterController.updateCharacter)
router.delete('/delete/:id', CharacterController.deleteCharacter)

export { router as charactersRouter }
