window.onload = myFunction;

var last = "O"
var turn = false;
var squares=[0,0,0,0,0,0,0,0,0];
turn = false; //false for x, true for o
squaresDivs=[];

function switchTile(index,square){
	if(squares[index]===0 && turn===false){
		square.className="square square X";
		square.innerHTML = "X";
		squares[index] = 1
		turn = true
	}
	else if(squares[index]===0 && turn===true){
		square.className="square square O";
		square.innerHTML = "O";
		squares[index] = 1
		turn = false
	}

}

function myFunction(){
	//var x = document.querySelector("#game>#board").children;
	var x = document.querySelector("#game>#board").querySelectorAll("div")
	var reloadButton = document.getElementsByClassName("btn")[0].onclick = function(){
		location.reload();
	}

	for (let i=0; i<x.length; i++){
		let element = x[i]
		element.classList.add("square");
		element.addEventListener("mouseover",function(){element.classList.add("hover")})
		element.addEventListener("mouseleave",function(){element.classList.remove("hover")})
		
	}
    x.forEach(function(square,i) {
		
		square.addEventListener("click" , function(){
			switchTile(i,square);
			console.log(i);

			
		}
		)
	});
}


