window.onload=function(){
	var boundary1= document.getElementById("boundary1");
	var walls = document.querySelectorAll(".boundary");
	var end= document.getElementById("end");
	var status = document.getElementById("status");
	var start= document.getElementById("start");
	var maze= document.getElementById("maze");
	
	boundary1.onmouseover = function(){
		boundary1.setAttribute("class", "boundary youlose");
	}
	for (var i = 0; 1 < walls.length - 1; i++{
		walls[i].onmouseover = function(){
			for(var i = 0; i < walls.length - 1; i++){
				walls[i].setAttribute("class", "boundary youlose");
				status.innerHTML = "You lose. Click 'S' to try again.";
			}
		}
	}
	end.onmouseover = function(){
		if(boundary1.getAttribute("class")!="boundary youlose"){
			status.innerHTML = status.innerHTML ="Congratulations!!!! YOU WON!!!!";
		}
	}

	start.onClick =function(){
		for(var i = 0; i < walls.length - 1; i++){
			walls[i].setAttribute("class", "boundary");
		}
		
		status.innerHTML = "Move your mouse over the 'S' to begin.";
	}
	
	maze.onmouseleave = function(){
		for (var i =0; i < walls.length - 1, i++){
			walls[i].setAttribute("class", "boundary youlose");
		}
		
		status.innerHTML ="NO CHEATING!!!! You Lose! Click 'S' to restart.";
	}
}