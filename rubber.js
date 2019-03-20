function RubberTool(slider){
	this.name = "Rubber";
	this.icon = "assets/ereaser.jpg";
    this.draw = function(){
        if(mouseIsPressed) // when mouse is pressed this funtion runs 
            {
            push();   // allows the fill only to be used in the script
            noStroke();
            fill(255,255,255); // fills the canvas white 
            ellipse(mouseX,mouseY,slider.value(),slider.value()); // allow the rubber size to be changed with the sliders 
            pop(); // stops the fill being used in other 
            
                
            }
        }
    }



