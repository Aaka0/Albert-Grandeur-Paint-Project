function fillTool(){
	this.name = "fill";
	this.icon = "assets/fillTool.jpg";
    this.draw = function(){
    }
    this.currentColor;
    this.m2p;
    this.fillBlank = function (pixelNumber)
            {
                 console.log('running start') // this doesnt run 
             if(currentColor == color(pixels[pixelNumber - cWidth*4], pixels[pixelNumber - cWidth*4+1], pixels[pixelNumber - cWidth*4]+2)) // check the pixel above the current one 
                {
                    
                    pixels[pixelNumber - cWidth*4] = 0; // then changes all the variables checked to the new colour
                     pixels[pixelNumber - cWidth*4+1] = 0; // changes colour to new colour
                     pixels[pixelNumber - cWidth*4+2] = 0; // changes colour to new colour
                    fillBlank(pixelNumber - cWidth*4) // need to finish this not done
                    console.log('running 1')
                    
                }

             if(currentColor == color(pixels[pixelNumber - 4], pixels[pixelNumber - 4+1], pixels[pixelNumber - 4+2])) // checks the one to the left
                {
                    pixels[pixelNumber - 4] = 0; // changes colour to new colour
                    pixels[pixelNumber - 4+1] = 0; // changes colour to new colour
                    pixels[pixelNumber - 4+2] = 0; // changes colour to new colour
                    fillBlank(pixelNumber - 1-4)
                    console.log('running 2')
                }

             if(currentColor == color(pixels[pixelNumber + 4], pixels[pixelNumber + 4+1],pixels[pixelNumber + 4+2])) // checks the one to the right
                {
                    pixels[pixelNumber + 4] = 0; // changes colour to new colour
                    pixels[pixelNumber + 4+1] = 0; // changes colour to new colour
                    pixels[pixelNumber + 4+2] = 0; // changes colour to new colour
                    fillBlank(pixelNumber + 1+5)
                    console.log('running 3')
                }

             if(currentColor == color(pixels[pixelNumber + cWidth], [pixelNumber + cWidth+1],[pixelNumber + cWidth+2])) // checks the one bellow 
                {
                    pixels[pixelNumber + cWidth*4] = 0; // changes colour to new colour
                    pixels[pixelNumber + cWidth*4+1] = 0; // changes colour to new colour
                    pixels[pixelNumber + cWidth*4+2] = 0; // changes colour to new colour
                    
                     fillBlank(pixelNumber + cWidth*4)
                    console.log('running 4')
                }
                console.log('running end')
                
                // try change the collor pallete to rgb colours
                // mouse click does vot reconise the colour its clicks
                // fix slider pos
                
                
            }

            
            
                
            
        }
    
    
    
//    mousepressed function Make mouse press function, replace m2p and current colour with this.
        
                
        loadPixels();  // m2p stores the mouse pos to the array pos
        if(mouseIsPressed){
         m2p =(mouseX + (mouseY-1) * width)*4 // converts the mouse possition  to the pixle 
         
         currentColor = color(pixels[m2p],pixels[m2p+1], pixels[m2p+2])
        console.log(currentColor)
         pixels[m2p] = selectedC
            console.log('running') // runs till here 
            
   fillBlank(m2p);
            
            updatePixels();
        
        
    }



