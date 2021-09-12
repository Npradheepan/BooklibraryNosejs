const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Hallo thie page from router")
})

module.exports = router