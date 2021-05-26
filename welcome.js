const { count } = require('console');
var http = require('http');
var moment = require('moment');

function callbackServer(req, res) {
  var month_down = moment('07', 'MM').fromNow();
  var days_down = moment('18', 'DD').fromNow();

  console.log(' months ', month_down)
  console.log( ' days ' , days_down)

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(
    'Welcome to my headspace! \n'  +
    ' today is : \n'
    + moment().format('LLL') +
    ' \n ' + 
    month_down + ' ' + days_down
  )
}

http.createServer(callbackServer).listen(8081);