var express = require("express");

const path = require('path');

// const bodyParser = require("body-parser");
// const path = require("path");
const app = express();

const port = process.env.port || process.env.PORT || 1337;



//Serving Static files
app.use('/app.js',express.static(path.join(__dirname, '/app.js')));
app.use('/directive.js',express.static(path.join(__dirname, '/directive.js')));
app.use('/service.js',express.static(path.join(__dirname, '/service.js')));
app.use('/data.json',express.static(path.join(__dirname, '/data.json')));
app.use('/app.js',express.static(path.join(__dirname, '/app.js')));
app.use('/assets',express.static(path.join(__dirname, '/assets')));
app.use('/node_modules',express.static(path.join(__dirname, '/node_modules')));
app.use('/app',express.static(path.join(__dirname, '/app')));
app.use('/css',express.static(path.join(__dirname, '/css')));
app.use('/js',express.static(path.join(__dirname, '/js')));
app.use('/fonts',express.static(path.join(__dirname, '/fonts')));
app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/templates',express.static(path.join(__dirname, '/templates')));


app.get('/*', (req,res)=>{

  res.sendFile(__dirname  + "/index.html");

});


// app.use(express.bodyParser());
app.listen(port, ()=>{

  console.log("Diggr frontend is live on port " + port);

});
