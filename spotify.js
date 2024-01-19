console.log("Welcome to spotify")

//intialize the variable 
let songIndex = 0 ;
let audioElemet = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let songs = [
    {songName: "salem-e-ishq " , filePath :"songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/2.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/3.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/4.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/5.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/6.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salem-e-ishq " , filePath :"songs/1.mp3" , coverPath : "covers/1.jpg"},
]

//audio element.play()

//handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElemet.paused || audioElemet.currentTime<=0){
        audioElemet.play();
    }
})
//listen to event 
myprogressbar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    //update seekbar
})
