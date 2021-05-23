var http = require('http');
//start server by calling node

//function all
function serverCallback(req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end("Hello " + process.argv[2]); //perm to call in the start message
}

//create the sever
http.createServer(serverCallback).listen(8080);
