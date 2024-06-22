var btn = document.querySelectorAll(".drum").length;
for (var i = 0; i < btn; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){        
    playDrum(this.innerHTML);  
    playAnimation(this.innerHTML);      
    
});
}
document.addEventListener('keydown',function(event){
    var key = (event.key).toLowerCase();
    playDrum(key);
    playAnimation(key);
    
});

var audio;
function playDrum(i){
    var drum = i;
    // console.log(drum);
switch(drum){
    case 'w' : audio = new Audio('sounds/tom-1.mp3');
               audio.play();
    break;

    case 'a' : audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case 's' : audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case 'd' : audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case 'j': audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case 'k': audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case 'l' : audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
    break;
}

}


function playAnimation(activeButton){
   
   var currentKey = document.querySelector("."+activeButton); 
   currentKey.classList.add("pressed");

   setTimeout(function(){
    currentKey.classList.remove("pressed");
   },100);
}