function person(n, a){
  this.name = n;
  this.age = a;
}

var a = new person("mark", 30);

document.write(a.name + " " + a.age);
