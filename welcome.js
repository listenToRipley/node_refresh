var http = require('http');
var moment = require('moment');

function callbackServer(req, res) {
  var birth_month = moment('07', 'MM')
  var birth_day = moment('18', 'DD')
  var month_down = moment().diff(birth_month)
  var days_down = moment().diff(birth_day)

  //test if we are in the month, just count down days
  //if the month is greater than 1, it should be months
  //if month is equal to 1, it should be month

  //if both month and day equals to 0, today is your birthday 
  //if days greater than 1, it should be days
  //if day is equal to 1, it should be day

  
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(
    'Welcome to my headspace! \n'  +
    ' today is : \n'
    + moment().format('LLL') +
    ' \n it is ' + moment('08', 'MM').fromNow()  + ' and ' + moment('18', 'DD').fromNow() + ' until your birthday'
  )
}

http.createServer(callbackServer).listen(8081);