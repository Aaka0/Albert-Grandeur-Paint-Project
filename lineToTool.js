function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
// Code Commentary - When the loadPixels / updatePixels function is commented out the Line function doesn't perforom properly and draw a single line.  Multiple lines are drawn instead of one.                            Both functions update the window with data within the pixel array. Whenever the pixels change it uses this function to save the drawing to an array.

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        


		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
