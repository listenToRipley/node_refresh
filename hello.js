var http = require('http');

//function all
function serverCallback(req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end("Hello World");
}

//create the sever
http.createServer(serverCallback).listen(8080);
