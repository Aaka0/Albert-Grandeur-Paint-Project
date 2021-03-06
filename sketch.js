//global variables that will store the toolboxm colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var cWidth
var cHeight
var selectedC; // this is the current colour 


function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    cWidth = canvasContainer.innerHeight()
    cHeight = canvasContainer.innerWidth()
    c.parent("content")

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
      // create sliders
    var rSlider = createSlider(20, 100, 30);
    rSlider.position(800, 650);
    
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new RubberTool(rSlider)); // new tools added
    toolbox.addTool(new BrushTool(rSlider));  // new tools added
    toolbox.addTool(new spiralTool());
    toolbox.addTool(new fillTool());
    toolbox.addTool(new Randomcircle());
   // toolbox.addTool(new bubbleremoverTool());
    

}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
}


