// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter();




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here
function applyFilter(){
for (var x = 0; x < image.length; x++){
    for (var y = 0; y < image[x].length; y++){
  var rgbString = image[x][y];
  var rgbNumbers = rgbStringToArray(rgbString);
  rgbNumbers[RED] = 255;
  rgbString = rgbArrayToString(rgbNumbers);
  image[x][y] = rgbString;
    }
}
}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions
function reddify (){

}
reddify(image);
// CHALLENGE code goes below here
