const express = require ('express')
const router = express.Router()

const pgType = require ('../Controllers/pgTypeController')

router.post ('/add', pgType.addPgType)
router.get ('/get', pgType.getAllPgType)
router.get ('/get/:id', pgType.getPgTypeById)
router.put ('/update/:id', pgType.updatePgType)
router.delete ('/delete/:id', pgType.deletePgType)

module.exports = router



