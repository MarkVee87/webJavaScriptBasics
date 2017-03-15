// static array
var fruits = new Array("apples", "oranges", "pears");
document.write(fruits + "<br />");

// fixed size/length array
var vegetables = new Array(3);
vegetables[0] = "potato";
vegetables[1] = "turnip";
vegetables[2] = "donut";
document.write(vegetables + "<br />");

// dynamic array
var vehicles = new Array();
vehicles[0] = "car";
vehicles[1] = "unicycle";
document.write(vehicles + "<br />");

// array literal
var animals = ["hedgehog", "cat", "snake"];
document.write(animals + "<br />");

// getting the length of an array
var aLength = animals.length;
document.write(aLength + "<br />");

// concatenating two arrays into one
var concatArray = vehicles.concat(animals);
document.write(concatArray + "<br />");

// associative array (named elements, producing an object)
var person = [];
person["name"] = "mark";
person["age"] = 30;
document.write(person.name + " " + person["age"] + "<br />");
