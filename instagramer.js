/*
Just draw a border round the document.body.
*/

var intervalId = window.setInterval(function(){
  document.querySelector("._ac11").parentNode.removeChild(document.querySelector("._ac11"));
}, 1);

var intervalId2 = window.setInterval(function(){
	document.querySelector("video").setAttribute("controls", "");  
}, 1);

var intervalId3 = window.setInterval(function(){
  document.querySelector("video").nextElementSibling.parentNode.removeChild(document.querySelector("video").nextElementSibling);
}, 1);