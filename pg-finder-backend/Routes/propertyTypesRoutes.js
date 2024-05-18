const express = require ('express')
const router = express.Router()
const propertyTypesController = require ('../Controllers/propertyTypeController')

router.get('/get', propertyTypesController.getAllPropertyType)
router.post('/add',propertyTypesController.addPropertyType);
router.get('/get/:id',propertyTypesController.getPropertyTypeById)
router.put('/update/:id',propertyTypesController.updatePropertyType)
router.delete('/delete/:id',propertyTypesController.deletePropertyType)
module.exports= router;