function person(n, a){
  this.name = n;
  this.age = a;
}

var aName = prompt("please enter your name");
var aAge = prompt("please enter your age");

var a = new person(aName, aAge);
var b = new person("bob", 21);

document.write(a.name + " " + a.age + "<br />");
document.write(b.name + " " + b.age);
