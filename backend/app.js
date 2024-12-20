const express = require('express')
const router = express();
const port = 3000
router.get("/",(req,res) => {
    res.send("Hello world");
})

router.listen(port,() => {
    console.log(`listning at port ${port}`)
})