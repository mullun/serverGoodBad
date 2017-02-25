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

// create server to serve up Good messages
var serverGood = http.createServer(handleRequestGood);

// create server to serve up depressing messages
var serverBad = http.createServer(handleRequestBad);

// listen on the GOOD_port and execute the callback function
serverBad.listen(PORT_BAD, function(){
	console.log("Get a handle on yourself - you stick!");
});

// listen on the BAD_port and execute the callback function
serverGood.listen(PORT_GOOD, function(){
	console.log("Ah!  You are such a doll!");
});


