function Randomcircle(){
	this.name = "cirlce";
	this.icon = "assets/circle.jpg";
    this.draw = function()
        {
            // created an pbject for my X and Y varibles 
            var spot = 
                {
                    x: 100,
                    y: 50
                }

            var col = 
                {
                    r: 0,
                    g: 0,
                    b: 0
                }
          
                   
                col.r = random(0, 255);
                col.g = random(0, 255)
                col.b = random(0, 255);
                
                spot.x = random(0, width);
                spot.y = random(0, height);
                noStroke();
                fill(col.r, col.g, col.b, random(1, 255)); // randomised the alpha, changes the transparance of each circle 
                ellipse(spot.x, spot.y, 24, 24);
                   
                
                   
               
                
        // draws random circles on the screen
        // its and infinates loop, this is because its in the draw function gets drawn every frame
        // the circles are filled with random clours when they get drawn.
                
            
        
       
           
        }
    }