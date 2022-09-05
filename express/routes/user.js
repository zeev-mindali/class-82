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
    console.log(req.user);
    //res.send(`get user with id ${req.params.id}`);
    res.send(req.user);
  })
  .put((req, res) => {
    res.send(`put user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id ${req.params.id}`);
  });

const users = [
  { name: "Zeev", age: 48 },
  { name: "Noa", age: 23 },
  { name: "Matan", age: 25 },
  { name: "Or", age: 22 },
  { name: "Snir", age: 28 },
  { name: "Eitai", age: 23 },
  { name: "Maya", age: 19 },
  { name: "Tamir", age: 20 },
  { name: "Elior", age: 40 },
  { name: "Brachi", age: 34 },
  { name: "Efrat", age: 18 },
  { name: "Haron", age: 23 },
  { name: "Eden", age: 58 },
];

//cool feature

router.param("id", (req, res, next, id) => {
  //console.log(users[id]);
  req.user = users[id];
  next();
});

module.exports = router;
