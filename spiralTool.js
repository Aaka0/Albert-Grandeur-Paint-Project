function spiralTool(){
	this.icon = "assets/spiralTool .jpg";
	this.name = "spiralTool";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();// loads the pixels to the pixel array so it can be seen in the draw funtion without this the pixel data point cant be loaded in to the array
			}

			else{
				//updatePixels(); // udates the window with data in the pixel array, each time the pixels are changed it uses this function to save the drawing to the array 
                 // when this is commented out it doest know when to start/end  upateding the pixles to the array so it justs carries on drawing 
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
