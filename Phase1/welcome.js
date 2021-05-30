const { count } = require('console');
var http = require('http');
var moment = require('moment');

function callbackServer(req, res) {
  var month_birth = moment('010', 'MM');
  var days_birth =  moment('18', 'DD');

  var month_down = Math.abs(parseInt(month_birth.diff(moment(), 'months')))

  var days_down = moment().diff(days_birth, 'days')
  
  var time = ''

  if(month_down > 0) {
    time = `It is ${days_down} days until your birthday`
  } else if (month_down === 1) {
    time = `It is a month and ${days_down} days until your birthday`
  } else {
    time = `It is ${month_down} months and ${days_down} days until your birthday`
  }

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(
    'Welcome to my headspace! \n'  +
    ' today is : \n'
    + moment().format('LLL') +
    ' \n ' + time
  )
}

http.createServer(callbackServer).listen(8081);