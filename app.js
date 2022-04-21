// Node Server

const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
//const request = require("request"); //Just in case

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Global variables
let items = [];

app.get("/", function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("es-CO", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

  // res.sendFile(__dirname + "/index.html"); // To recive from a Form
});

app.post("/", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server runnig on port 3000".bgWhite.blue);
});
