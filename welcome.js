const { count } = require('console');
var http = require('http');
var moment = require('moment');

function callbackServer(req, res) {
  var month_birth = moment('07', 'MM');
  var days_birth =  moment('18', 'DD');

  var month_down = month_birth.diff(moment(), 'months')

  var days_down = Math.abs(parseInt(days_birth.diff(moment(), 'days')))

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(
    'Welcome to my headspace! \n'  +
    ' today is : \n'
    + moment().format('LLL') +
    ' \n ' + 
    ' It is ' +
    month_down + ' months and ' + days_down + ' days until your birthday!'
  )
}

http.createServer(callbackServer).listen(8081);