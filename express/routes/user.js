const express = require('express');
const router = express.Router();

router.get ("/",(req,res)=>{  
    res.send("User List");
});

router.get("/new",(req,res)=>{
    res.send("Create new user..")
});

// /users/search/1
// /users/search/2
// /users/search/1024
router.get("/search/:id",(req,res)=>{
    res.send(`get user with id ${req.params.id}`)
});

module.exports=router;