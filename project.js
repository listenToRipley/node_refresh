var http = require('http');
var request = require('request')

var req_body = undefined;

function response_JSON(data) {
  var html_string = '<html> \n <header> \n <title. Data aggregator </title> \n </header> \n <body> \n <table>';
  
  data.forEach(function(obj) {
    html_string+= '<tr> \n';
    for(var item in obj) {
      if(typeof obj[item] !== 'object') {
        html_string += '<td' + obj[item] + '</td> \n';
      }
    }
    html_string += '</tr> \n '
  });

  html_string+= '</table> \n </body> \n </html>'

  return html_string
}

request('https://www.bnefoodtrucks.com.au/api/1/trucks', function(err, req_res, body) {
  req_body = body; 
})

http.createServer( function (req, res) {
  if(req_body) {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    res.end(response_JSON(JSON.parse(req_body)))
  } else {
    res.writeHead(200, { 
      'Content-Type': 'text/plain'
    });
    res.end('Nothing retrieved yet')
  }
}).listen(8080)