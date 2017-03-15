function person(n, a){
  this.name = n;
  this.age = a;
  // Method = function called as a parameter of an object
  this.changeName = function(name){
    this.name = name;
  }
  // Calling external function to the object to calculate date of birth
  this.yob = yearOfBirth;
}

function yearOfBirth(){
  return 2017 - this.age;
}

var aName = prompt("please enter your name");
var aAge = prompt("please enter your age");
alert('thanks :)');

var a = new person(aName, aAge);
var b = new person("bob", 21);
var aSingleInstanceOfAnObject = {faveFood: "steak", fingers: 10};

document.write(a.name + " " + a.age + "<br />");
document.write(b.name + " " + b.age + " " + aSingleInstanceOfAnObject.faveFood  + "<br />");
// Calling the method of the person object 'a'
a.changeName("dave the goat");
// print out with year of birth calculated
document.write(a.name + " " + a.age + " " + a.yob() + "<br />");
