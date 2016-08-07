var express=require('express');

//Create app
var app=express();
app.use(express.static('public'));

//Make the server listen to port
app.listen(3000,function(){
	console.log("Server listening on port : 3000");
});