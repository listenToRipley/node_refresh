var http = require('http');
var request = require('request')

var req_body = undefined;

function response(data) {
  var html_string = '<html> \n <header> \n <title. Data aggregator </title> \n </header> \n <body> \n <table>';

  html_string+= '<tr> \n';
  for(var item in data[0]) {
    if(typeof data[0][item] !== 'object') {
      html_string += '<td' + item + '</td> \n';
    }
  }
  html_string += '</tr> \n </table> \n </body>'
}

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