// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
 applyFilter(reddify);
applyFilter(decreaseBlue);
 applyFilter(increaseGreenByBlue);
applyFilter(increaseBlue);
applyFilterNoBackground(reddify);
applyFilterNoBackground(increaseBlue);

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
function applyFilterNoBackground(filterFunction){
 for (var x = 0; x < image.length; x++){
    for (var y = 0; y < image[x].length; y++){ 

  var rgbString = image[x][y];
  var rgbNumbers = rgbStringToArray(rgbString);

        if (rgbString === image[0][0]){
    rgbString = image[0][0];
        }
 else {
  filterFunction(rgbNumbers);
  rgbString = rgbArrayToString(rgbNumbers);
  image[x][y] = rgbString;
      }
    }
  }
}
// TODO 2 & 4: Create filter functions

function reddify (Yeehaw){
  Yeehaw[RED] = 255;
}
function decreaseBlue (Yeehaw){
    Yeehaw[BLUE]  = Math.max( 0, Yeehaw[BLUE] - 70);
    
    
}
function increaseGreenByBlue (Yeehaw){
    Yeehaw[GREEN] = Math.min(Yeehaw[BLUE] + Yeehaw[GREEN], 255);
    
}
function increaseBlue (Yeehaw){
    Yeehaw[BLUE] = Math.max(0, Yeehaw[BLUE] + 70);
}

// CHALLENGE code goes below here
