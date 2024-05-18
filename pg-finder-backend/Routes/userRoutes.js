const express = require ('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.get('/user', userController.getUserData)
router.post('/user',userController.addUser)
router.get('/user/:id',userController.getUserById)
router.put('/user/:id',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)
router.post('/user/login',userController.loginUser)



module.exports= router;