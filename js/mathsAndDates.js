document.write(Math.PI + "<br />");

//var n = prompt("enter a number to find its square root");
var n = 4;
var number = Math.sqrt(n);

//alert("the square root of " + n + " is " + number);
document.write(number + "<br />");

// setInterval runs the myAlert function every 3 seconds
function myAlert(){
  alert('look, an alert');
}
setInterval(myAlert, 3000);
