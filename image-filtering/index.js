// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter(reddify);
applyFilter(decreaseBlue);
applyFilter(increaseGreenByBlue);



    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here
function applyFilter(filterFunction){
for (var x = 0; x < image.length; x++){
    for (var y = 0; y < image[x].length; y++){
  var rgbString = image[x][y];
  var rgbNumbers = rgbStringToArray(rgbString);
  filterFunction(rgbNumbers);
  rgbString = rgbArrayToString(rgbNumbers);
  image[x][y] = rgbString;
    }
}
}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions

function reddify (Yeehaw){
  Yeehaw[RED] = 255;
}
function decreaseBlue (Yeehaw){
    var blue  = Math.max( 0, Yeehaw[BLUE] - 30);
    return blue;
    
}
function increaseGreenByBlue (Yeehaw){
    var green = Math.min(Yeehaw[BLUE] + Yeehaw[GREEN], 255);
    return green; 
}

// CHALLENGE code goes below here
