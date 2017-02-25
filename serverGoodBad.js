var http = require("http");

// port to give user GOOD messages
var PORT_GOOD = 7000;

// port to give user BAD messages
var PORT_BAD = 7500;

// create generic function to handle requests
function handleRequestGood(request, response) {
  response.end("You the Man!");
}

// create generic function to handle requests
function handleRequestBad(request, response) {
  response.end("Keep working!");
}

// create server
var serverGood = http.createServer(handleRequestGood);


var serverBad = http.createServer(handleRequestBad);

// listen on the port and execute the callback function
serverBad.listen(PORT_BAD, function(){
	console.log("Get a handle on yourself - you stick!");
});

// listen on the port and execute the callback function
serverGood.listen(PORT_GOOD, function(){
	console.log("Ah!  You are such a doll!");
});


