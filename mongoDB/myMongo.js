//npm install mongoose

//tell our js that we need the mongoose module
let mongoose = require("mongoose");
//let's connect  to mongoDB..... , direcory class 82
mongoose.connect("mongodb://localhost/class82");
//using db for connection to mongoose connection
let db = mongoose.connection;
//error handling
db.on("error", (err) => console.log("connection error: " + err));
//if it's open, show connection works....
db.once("open", () => console.log("connection works"));

//let's create our schema
var dogSchema = mongoose.Schema({
  voice: String,
});

//let create our method , WTF?!?!?
dogSchema.methods.speak = () => {
  console.log(this.voice);
};

//create our dog model
var dog = mongoose.model("Dog", dogSchema);

var spot = new dog({
  voice: "bark",
});

spot.speak();
spot.save();
