const { count } = require('console');
var http = require('http');
var moment = require('moment');

function callbackServer(req, res) {
  var birth_month = moment('07', 'MM')
  var birth_day = moment('18', 'DD')
  var month_down = moment().diff(birth_month)
  var days_down = moment().diff(birth_day)
  var count_down = ''

  //test if we are in the month, just count down days
  //if the month is greater than 1, it should be months
  //if month is equal to 1, it should be month

  //if both month and day equals to 0, today is your birthday 
  //if days greater than 1, it should be days
  //if day is equal to 1, it should be day

  if(month_down === 0 && days_down === 0) {
    count_down = ' TODAY IS YOUR BIRTHDAY!'
  } 

  if(month_down === 0) {
    count_down = `${days_down} days until your birthday! `
  } else if (month_down === 1) {
      
    if(days_down === 1) {
        count_down = `${month_down} month and ${days_down} day until your birthday! `
      } else {
        count_down = `${month_down} month and ${days_down} days until your birthday! `
      }
  } else {
    count_down = `${month_down} months and ${days_down} days until your birthday! `
  }

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(
    'Welcome to my headspace! \n'  +
    ' today is : \n'
    + moment().format('LLL') +
    ' \n ' + 
    count_down
  )
}

http.createServer(callbackServer).listen(8081);