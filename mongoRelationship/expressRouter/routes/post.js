const express = require("express");
const router = express.Router();

//post
router.get("/", (req, res)=>{
    res.send("Get req from user");
})

router.get("/:id", (req, res)=>{
    res.send("Get req from id");
})

router.post("/", (req, res)=>{
    res.send("Get req from new");
})

router.delete("/:id", (req, res)=>{
    res.send("Get req from delete");
})

module.exports = router;