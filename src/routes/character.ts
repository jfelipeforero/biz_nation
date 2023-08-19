import express from 'express'
import * as CharacterController from '../controllers/CharacterController'
import isAuth from '../middlewares/isAuth'

const router = express.Router()

router.post('/create', CharacterController.createCharacter)
router.get('/query', CharacterController.getByQueryCharacters)
router.get('/:id', CharacterController.getByIdCharacter)
router.get('/', CharacterController.getAllCharacters)
router.put('/update/:characterId', CharacterController.updateCharacter)
router.delete('/delete/:id', CharacterController.deleteCharacter)

export { router as charactersRouter }
