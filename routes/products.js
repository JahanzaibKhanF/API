const express = require('express')
const {getAllPorducts,getAllPorductsTesting}=require("../controllers/products")
const router = express.Router()
router.route('/').get(getAllPorducts)
router.route('/testing').get(getAllPorductsTesting)
module.exports = router