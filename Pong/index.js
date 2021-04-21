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
  "W": 38,
  "S": 40,
  "UP": 38,
  "DOWN": 40
}
///Ball variable///

  // Game Item Objects
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

 

///Creating Variables///
var leftPaddle = factory("#leftPaddle");
var rightPaddle = factory("#rightPaddle");
var ball = factory("#ball");
var board = factory("#board");

// Default speeds //
ball.speedX = 5;


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeydown);
 $(document).on('keyup', handleKeyup);
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
  ballCollision();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeydown(event) {
    if (event.which === KEY.DOWN) {
    rightPaddle.speedY = 5;
    
  }
   
  else if (event.which === KEY.UP) {
    
    rightPaddle.speedY= -5;
  }
 
   else if (event.which === KEY.W){
       leftPaddle.speedY = -5;
   }

   else if (event.which === KEY.S){
       leftPaddle.speedY = 5;
   }
  }
  ///Handle key up///
 function handleKeyup(event) {
    if (event.which === KEY.DOWN) {
    rightPaddle.speedY = 0;
    
  }
   
  else if (event.which === KEY.UP) {
    
    rightPaddle.speedY= 0;
  }
 
   else if (event.which === KEY.W){
       leftPaddle.speedY = 0;
   }

   else if (event.which === KEY.S){
       leftPaddle.speedY = 0;
   }
  }

  ///example///
  
  ///Ball Collision Function///
function ballCollision(){
    
    
    // TODO: Return true if they are overlapping, false otherwise
 if (ball.y > rightPaddle.y){
     ball.speedY *= -1;
 }
 else if (ball.x > rightPaddle.x){
     ball.speedX *= -1;
 }
    else if (ball.y < leftPaddle.y){
     ball.speedY *= -1;
 }
 else if (ball.x < leftPaddle.x){
     ball.speedX *= -1;
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
