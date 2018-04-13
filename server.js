// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require Mongoose
app.use(express.static( __dirname + '/dist' ));
console.log(__dirname + '/pokemanapi/dist');

// app.get('/pokeman', function(req, res){
//     // Task.find({}, function(err, tasks){
//     //     console.log(tasks);
//     //     if(err){
//     //         console.log("Returned error", err);
//     //         // respond with JSON
//     //         res.json({message: "Error", error: err});
//     //     } else {
//     //         // respond with JSON
//     //         res.json({message: "Success", data: tasks});
//     //     };
//     // });
// });

// Setting our Server to Listen on Port: 8055
app.listen(8055, function() {
    console.log("listening on port 8055");
});