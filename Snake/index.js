/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 10;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects



//Factory Function//
 function factory($id){
  var revealInfo = {}
  revealInfo.id = $id;
  revealInfo.x = parseFloat($($id).css('left'));
  revealInfo.y = parseFloat($($id).css('top'));
  revealInfo.width = $($id).width();
  revealInfo.height = $($id).height();
  revealInfo.speedX = 0;
  revealInfo.speedY = 0;
  

  return revealInfo;
}

var snakehead = factory("#snakehead");
var apple = factory("#apple");

//default speed

snakehead.speedX = 5;



  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   moveObject(snakehead);
updatePosition(snakehead);
  }
  
  /* 
  Called in response to events.
  */
 var KEY = {
     "W": 87,
     "A": 65,
     "S": 83,
     "D": 68
 }
  function handleDown(event) {
 if (event.which === KEY.W){
     snakehead.speedY = -5;
 }
 else if (event.which === KEY.A){
     snakehead.speedX = -5;
 }
 else if(event.which === KEY.S){
     snakehead.speedY = 5;

 }
 else if(event.which === KEY.D){
     snakehead.speedX = 5;
 }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
 function moveObject(whichObject){
          whichObject.x += whichObject.speedX;
          whichObject.y += whichObject.speedY;

      }
    function updatePosition(whichObject){
        $(whichObject.id).css('left', whichObject.x);
        $(whichObject.id).css('top', whichObject.y);

    }
    

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
