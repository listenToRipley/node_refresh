var http = require('http');
var moment = require('moment');

function callbackServer(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(
    'Welcome to my headspace!'  +
    ' today is : '
    + moment().format('LLL') +
    ' it is ' + moment('08', 'MM').fromNow()  + ' and ' + moment('18', 'DD').fromNow() + ' until your birthday'
  )
}

http.createServer(callbackServer).listen(8081);