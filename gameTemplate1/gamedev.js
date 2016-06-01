var generator = Math.floor((Math.random()*464)+16);

$( document ).ready(function() {
	generate();

	function right(){
		//.animate to more right
	}
	function left(){
		//.animate to move left
	}
	function up(){
		//.animate to move up
	}
	function down(){
		//.animate to move down
	}

});

var right =0; 
var left =0;
var up =0;
var down =0;

var ronetop;
var rtwotop;
var rthreetop;
var roneleft;
var rtwoleft;
var rthreeleft;

document.addEventListener("keydown", function(event){
	if(event.code === "KeyD") {
		console.log("Move Right")
		$("#player").stop().animate({
            left: '+=32'
        }); //move right
	}
	if(event.code === "KeyW") {
		console.log("Move Up")
		$("#player").stop().animate({
            top: '-=32'
        });
	}
	if(event.code === "KeyA") {
		console.log("Move Left")
		$("#player").stop().animate({
            left: '-=32'
        });
	}
	if(event.code === "KeyS") {
		console.log("Move Down")
		$("#player").stop().animate({
            top: '+=32'
        });
	}
});

function generate(){
	ronetop = generator;
	$("#rockone").css({"top": generator});
	console.log("rockone top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	roneleft = generator;
	$("#rockone").css({"left": generator});
	console.log("rockone left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 	

	rtwotop = generator;
	$("#rocktwo").css({"top": generator});
	console.log("rocktwo top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	rtwoleft = generator;
	$("#rocktwo").css({"left": generator});
	console.log("rocktwo left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 

	rthreetop = generator;
	$("#rockthree").css({"top": generator});
	console.log("rockthree top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	rthreeleft = generator; 
	$("#rockthree").css({"left": generator});
	console.log("rockthree left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 
}

	


