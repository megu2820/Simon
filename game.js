
var buttoncolors = ["red","blue","green","yellow"];
var gamepattern = [];
var userclickedpattern = [];
var Level = 0;
var started = "false";
 $(document).keypress(function(e){
  if(started === "false")
  {   $("h1").text("Level "+Level);
    	newsequence();
      started = "true";
   }
});

$(".btn").click(function(){

var userchosencolor = $(this).attr("id");
userclickedpattern.push(userchosencolor);
playsound(userchosencolor);
animatepress(userchosencolor);
checkanswer(userclickedpattern.length-1);

             
             

});
 function checkanswer(currentLevel) {

    if (gamepattern[currentLevel] === userclickedpattern[currentLevel]) {
      if (userclickedpattern.length === gamepattern.length){
        setTimeout(function () {
          
             newsequence();
             $("h1").text("Level "+ Level++);
        }, 1000);
      }
    } else {
     playsound("wrong");
       
      $("body").addClass("game-over");
       $("h1").text("Game Over! Press Any key to Restart");

      setTimeout(function () {
        
        $("body").removeClass("game-over");
      }, 2000);

      startover();
    }
  }




function newsequence(){

  userclickedpattern = [];
  
  
  
 var	random = Math.floor(Math.random()*4);
  
var randomcolor = buttoncolors[random];
    gamepattern.push(randomcolor);
 
    $("#"+randomcolor).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    playsound(randomcolor);
    

    
}


function playsound(name)
{
   switch(name)
    {
      case "blue":
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
        break;
      case "yellow":
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
        break;
      case "red":
        var red = new Audio("sounds/red.mp3");
        red.play();
        break;
      case "green":
        var green= new Audio("sounds/green.mp3");
        green.play();
        break;
      case "wrong":
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        break;



    }

  }
  function animatepress(currentcolor)
  {
       $("#"+currentcolor).addClass("pressed");
    
     setTimeout(function(){
     	      $("#"+currentcolor).removeClass("pressed");
     },100);



  }


  
function startover(){
  
     
  Level = 0;
  gamePattern = [];
  started = false;
   $(document).keypress( function(){ 
     $("h1").text("Level "+Level);
    newsequence();});

   
}

