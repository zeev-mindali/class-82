const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("Create new user..");
});

// /users/search/1
// /users/search/2
// /users/search/1024

router.post("/search/:id", (req, res) => {
  res.send(`get user with id ${req.params.id}`);
});

// router.get("/search/:id",(req,res)=>{
//     res.send(`get user with id ${req.params.id}`)
// });

// router.put("/search/:id",(req,res)=>{
//     res.send(`put user with id ${req.params.id}`);
// });

// router.delete("/search/:id",(req,res)=>{
//     res.send(`delete user with id ${req.params.id}`);
// });

const searchPath = "/search/:id";

router
  .route(searchPath)
  .get((req, res) => {
    res.send(`get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`put user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id ${req.params.id}`);
  });

module.exports = router;
