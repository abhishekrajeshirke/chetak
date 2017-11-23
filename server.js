var app = require("express")();


app.get("/", function(req, res){
  res.sendFile("index.html");
});
