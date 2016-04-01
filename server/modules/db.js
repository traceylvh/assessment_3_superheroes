var mongoose = require("mongoose");

var mongoURI = "mongodb://localhost/superheroes_db";
var MongoDB = mongoose.connect(mongoURI).connection;


MongoDB.on("error", function(err){
    console.log("Mongo connection error ", err);
});

MongoDB.once("open", function(){
    console.log("Mongo connection open");
});

module.exports = MongoDB;
