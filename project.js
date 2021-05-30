var http = require('http');
var request = require('request')

var req_body = undefined;

request('https://www.bnefoodtrucks.com.au/api/1/trucks', function(err, req_res, body) {
  req_body = body; 
})

http.createServer( function (req, res) {
  if(req_body) {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    res.end(req_body)
  } else {
    res.writeHead(200, { 
      'Content-Type': 'text/plain'
    });
    res.end('Nothing retrieved yet')
  }
}).listen(8080)