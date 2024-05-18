const express = require ('express')
const router = express.Router()
const propertyDetails= require ('../Controllers/propertyDetailsController')
const multer = require('multer');
const imgUpload = multer({
    dest:'public/images'
})

router.get('/propertyDetails', propertyDetails.getAllPropertyDetails)
router.post('/propertyDetails',imgUpload.single('image'),propertyDetails.addPropertyDetails)
router.get('/propertyDetails/:id',propertyDetails.getPropertyDetailsById)
router.put('/propertyDetails/:id',propertyDetails.updatePropertyDetails)
router.delete('/propertyDetails/:id',propertyDetails.deletePropertyDetails)

module.exports= router;
