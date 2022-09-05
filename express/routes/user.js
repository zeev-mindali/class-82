const { request } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("Create new user..");
});

router.get("/list", (req, res) => {
  res.send(users);
});
// /users/search/1
// /users/search/2
// /users/search/1024

router.post("/addNew", (req, res) => {
  res.send(`get user with id ${req.params.id}`);
  console.log(req.body.name, req.body.age); //name, age
});

router.post("/login", (req, res) => {
  //res.send(`user: ${req.body.user}  password:${req.body.password}`);
  const user = req.body.user;
  const password = req.body.password;
  if (user === "zeev" && password === "12345") {
    res.send("OK, you can login");
  } else {
    res.send("Who the F*** are you?");
  }
  console.log(`user: ${req.body.user}  password:${req.body.password}`);
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
  { id: 1, name: "Zeev", age: 48 },
  { id: 2, name: "Noa", age: 23 },
  { id: 3, name: "Matan", age: 25 },
  { id: 4, name: "Or", age: 22 },
  { id: 5, name: "Snir", age: 28 },
  { id: 6, name: "Eitai", age: 23 },
  { id: 7, name: "Maya", age: 19 },
  { id: 8, name: "Tamir", age: 20 },
  { id: 9, name: "Elior", age: 40 },
  { id: 10, name: "Brachi", age: 34 },
  { id: 11, name: "Efrat", age: 18 },
  { id: 12, name: "Haron", age: 23 },
  { id: 13, name: "Eden", age: 58 },
];

const city = [
  { id: 1, city: "qiryat yam" },
  { id: 2, city: "Rishon Le Zion" },
  { id: 3, city: "Holon" },
  { id: 4, city: "Rishon Le Zion" },
  { id: 5, city: "Raannaa" },
  { id: 6, city: "Beer Sheva" },
  { id: 7, city: "Holon" },
  { id: 8, city: "Holon" },
  { id: 9, city: "Rishon Le Zion" },
  { id: 10, city: "Jerusalem" },
  { id: 11, city: "Jerusalem" },
  { id: 12, city: "Petch Tikva" },
  { id: 13, city: "Natanya" },
];

//cool feature

router.param("id", (req, res, next, id) => {
  //console.log(users[id]);
  req.user = { id: id, name: users[id - 1].name, city: city[id - 1].city }; //users[id];
  next();
});

module.exports = router;
