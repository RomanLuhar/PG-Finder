const express = require ('express')
const router = express.Router()
const roleController = require ('../Controllers/roleController')

router.get('/get', roleController.getAllRoles)
router.post('/add',roleController.addRole);
module.exports= router;