$(document).ready(function(){
  var domElem = document.getElementById("mydiv");
  domElem.innerHTML = "hello world";
  // document.getElementsByTagName(name)
  var arr = document.getElementsByClassName("divvy");
    for (var x = 0; x < arr.length; x++) {
      arr[x].innerHTML = "Hi there";
    }
  var arr1 = document.getElementsByClassName("divver");
    for (var x = 0; x < arr1.length; x++) {
      arr1[x].innerHTML = "Hellooooooooooooooo";
    }
});
