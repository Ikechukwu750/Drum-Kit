const btn = document.querySelectorAll(".drum");

for(let i=0; i < btn.length; i++) {
  
  let audios = ["sounds/crash.mp3", "sounds/snare.mp3", "sounds/kick-bass.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
  
 btn[i].addEventListener("click", () => {
  let audio = new Audio(audios[i]);
 audio.play();
});
}


