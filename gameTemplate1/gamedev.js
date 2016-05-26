var generator = Math.floor((Math.random()*464)+16);

$( document ).ready(function() {
	generate();

boolean up;
boolean down;
boolean left;
boolean right;

var x = $("#player").width;

});

document.addEventListener("keydown", function(event){
	if(event.code === "KeyD") {
		console.log("Move Right")
		right = true;
	}
	if(event.code === "KeyW") {
		console.log("Move Up")
		up = true;
	}
	if(event.code === "KeyA") {
		console.log("Move Left")
		left = true;
	}
	if(event.code === "KeyS") {
		console.log("Move Down")
		down = true;
	}
});

function generate(){
	$("#rockone").css({"top": generator});
	console.log("rockone top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	$("#rockone").css({"left": generator});
	console.log("rockone left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 	

	$("#rocktwo").css({"top": generator});
	console.log("rocktwo top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	$("#rocktwo").css({"left": generator});
	console.log("rocktwo left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 

	$("#rockthree").css({"top": generator});
	console.log("rockthree top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	$("#rockthree").css({"left": generator});
	console.log("rockthree left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 	
}

while (up = true) {

}
