function BrushTool(slider){ // takes inputs form another function.
	this.name = "Brush";
	this.icon = "assets/brushtool.jpg";
    this.draw = function(){
        if(mouseIsPressed) // when mouse is pressed this funtion runs 
            {
            ellipse(mouseX,mouseY,slider.value(),slider.value()); // used the slider varible created and the values set to change the size of the brush 
               
            }
    }
}