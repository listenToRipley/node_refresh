const { count } = require('console');
var http = require('http');
var moment = require('moment');
const { parse } = require('path/posix');

function callbackServer(req, res) {
  var month_birth = moment('07', 'MM');
  var days_birth =  moment('18', 'DD');
  var month_today = moment.format('MM');
  var day_today = moment.format('DD');

  var month_down = parseInt(month_birth) - parseInt(month_today)

  var days_down = parseInt(day_today) - parseInt(days_birth)

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