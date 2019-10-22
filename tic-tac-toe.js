window.onload = myFucntion;

var last = "O";

function myFunction(){
	var x = document.getElementById("board").children;
	var element;
	var i;
	
	for (i=0; i<x.length; i++){
		element = x[i];
		element.classList.add("square");
	}
}

