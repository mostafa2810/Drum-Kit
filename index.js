// adding action listner to buttons
//----------------------------------------------------
//first way
/*
document.querySelectorAll("button")[0].addEventListener("click" , handleCick)
document.querySelectorAll("button")[1].addEventListener("click" , handleCick)
document.querySelectorAll("button")[2].addEventListener("click" , handleCick)
document.querySelectorAll("button")[3].addEventListener("click" , handleCick)
document.querySelectorAll("button")[4].addEventListener("click" , handleCick)
document.querySelectorAll("button")[5].addEventListener("click" , handleCick)
document.querySelectorAll("button")[6].addEventListener("click" , handleCick)

function handleCick(){
    alert("I got clicked");
}
*/
//----------------------------------------------------
// secound way:the most powerfull way is to use loop
/*
for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , handleCick)
}
function handleCick(){
    alert("I got clicked");
}
*/
//secound way: better code
/*
var numbersOfButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<numbersOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    alert("I got clicked");
    });
}
*/
//--------------------------------------------------------------------------------------------------------------------
var numbers_of_buttons=document.querySelectorAll(".drum").length;
for(var i=0 ; i<numbers_of_buttons;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function(){

     var button_Inner_Html= this.innerHTML;

makeSound(button_Inner_Html);
makeAnimation(button_Inner_Html);
 });
}


 document.addEventListener("keypress",function(event){
makeSound(event.key);
makeAnimation(event.key);
 });


 function makeSound(key){
    switch (key) {
        case "w":
          var tom1=  new Audio('sounds/tom-1.mp3');
          tom1.play();
            break;
            case "a":
          var tom2=  new Audio('sounds/tom-2.mp3');
          tom2.play();
            break;
            case "s":
               var tom3=  new Audio('sounds/tom-3.mp3');
               tom3.play();
                 break;
                 case "d":
          var tom4=  new Audio('sounds/tom-4.mp3');
          tom4.play();
            break;
            case "j":
          var kick=  new Audio('sounds/kick-bass.mp3');
          kick.play();
            break;
            case "k":
               var crash=  new Audio('sounds/crash.mp3');
               crash.play();
                 break;
                 case "l":
                   var snare=new Audio('sounds/snare.mp3');
                   snare.play();
                     break;
        default:
            
 }
}
function makeAnimation(currentkey){
 var activeBtn =document.querySelector(`.${currentkey}`);
 activeBtn.classList.add("pressed");
 setTimeout(function(){
     activeBtn.classList.remove("pressed");
 },100);
}