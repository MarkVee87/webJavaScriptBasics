$(document).ready(function(){
  var domElem = document.getElementById("mydiv");
  domElem.innerHTML = "hello world";
  // document.getElementsByTagName("p");
  // changing all elements with a div class name of 'divvy'
  var arr = document.getElementsByClassName("divvy");
  for (var x = 0; x < arr.length; x++) {
    arr[x].innerHTML = "Hi there";
  }
  // changing all elements with a div class name of 'divver'
  var arr1 = document.getElementsByClassName("divver");
  for (var x = 0; x < arr1.length; x++) {
    arr1[x].innerHTML = "Hellooooooooooooooo";
  }

  var arr2 = document.getElementById("anotherDiv");
  var a = arr2.childNodes;
  for(var x = 0; x < a.length; x++) {
    a[x].innerHTML = "look, some new text";
  }

  // change link on page to another
  var elhref = document.getElementsByTagName("a");
  elhref[0].href = "http://www.google.com";

  // change image on page to another
  var elimage = document.getElementById("myimg");
  elimage.src = "../images/apple.jpg";
});
