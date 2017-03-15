
// setInterval runs the myAlert function every 3 seconds
/*
function myAlert(){
  alert('look, an alert');
}
setInterval(myAlert, 3000);
*/

// get the current date and time
var d = new Date();
var day = dayArray(d.getDay());
var month = monthArray(d.getMonth());
var year = d.getFullYear();
document.write("Full date: " + d + "<br />");
document.write("Day: " + day + " -- Month: " + month + " -- Year: " + year + "<br />");

function dayArray(i){
  var days = new Array();
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";
  return days[i];
}

function monthArray(i){
  var months = new Array();
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dev";
  return months[i];
}

var d = new Date("12 March 1987");
document.write(d + "<br />");

// writes time to html and updates every second

function printTime() {
  var elem = document.getElementById("mydiv");
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  elem.innerHTML = hours+":"+mins+":"+secs;
  // document.write(hours+":"+mins+":"+secs);
}
setInterval(printTime, 1000);
