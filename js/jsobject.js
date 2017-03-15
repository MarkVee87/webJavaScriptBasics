function person(n, a){
  this.name = n;
  this.age = a;
}

var a = new person("mark", 30);
var b = new person("bob", 21);

document.write(a.name + " " + a.age + "<br />");
document.write(b.name + " " + b.age);
