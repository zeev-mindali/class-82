//create a server
const { request } = require('express');
const express = require('express');
const app = express();

//on which port we will listen
app.listen(3000);

//set our engine
app.set('view engine','ejs');

app.get("/", (req,res)=>{
    //res.send("Hello class 82");
    console.log("root data was sent");
    //res.sendStatus(500);
    //res.status(500).send("איך אני מרענן את הדף?");
    //res.status(500).json({err:"500", message:"oops i did it again",owner:"matan"});
    //res.download('server.js');

    res.render('index',{name:"Zeev Mindali",noiseMaker:"Or Jiny"});

});