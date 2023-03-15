const express = require("express")
const router = express.Router()
const { getAllusers } = require("../controllers/user.controller")


router.get("/",getAllusers)
module.exports = router