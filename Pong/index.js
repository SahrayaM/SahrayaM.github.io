/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
     var KEY = {
  
  "UP": 38,
  "DOWN": 40
}


  // Game Item Objects
function factory($id){
    var newObject = {
        id = $id,
        x: 20,
        y: 20,
        speedX = 0,
        speedY = 0,

    }
}
///Creating Variables///
var leftPaddle = factory("#leftPaddle");
var rightPaddle = factory("#rightPaddle");
var ball = factory("#ball");

// Default speeds //
ball.speedX = 5;


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeydown);

   // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
  moveObject(ball);
  moveObject(leftPaddle);
  moveObject(rightPaddle);
  updatePosition(ball);
  updatePosition(leftPaddle);
  updatePosition(rightPaddle);
  }
  
  /* 
  Called in response to events.
  */
  function handleKeydown(event) {
    if (event.which === KEY.DOWN) {
    speedY = 5;
    
  }
   
  else if (event.which === KEY.UP) {
    
    speedY= -5;
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
