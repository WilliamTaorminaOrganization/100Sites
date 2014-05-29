

function draw(x,y){

	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d"); // established a 2d context
	
	ctx.fillStyle = "rgb(200,0,0)"; // style for red box
	ctx.fillRect(10,10,55,50); // draws the ractangle
	
	ctx.fillStyle = "rgba(0,0,200,0.5)"; // style for red box
	ctx.fillRect(30,30,55,50); // draws the ractangle

	ctx.save(); //save the canvase state if required
	ctx.clearRect(0,0,550,400); // clears the canvas for redrawing
	
	ctx.restore(); // restore the canvas state if saved
	x += 5; // increment the x position by some numeric value
	var loopTimer = setTimeout('draw('+x+', '+y+')', 10);

}