//Headers
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());//?
app.use(bodyParser.urlencoded({extended:true}));//use body-parser to grab the data from the html file we want
app.set('view engine', 'ejs');//to use ejs with express
app.use(express.static("public"));//use static files like style.css and js

 

app.get("/", function(req, res){
  // console.log(req);
  // res.sendFile();
  res.sendFile(__dirname + "/index.html");
  // res.send(__dirname);

})

app.post("/", function(req, res){
  // var numb1 = Number(req.body.num1);
  // var numb2 = Number(req.body.num2);
  // results = numb1 + numb2;

  res.send("The results of ");
})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
