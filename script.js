console.log("welcome to spotify");
// initilaize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "warriyo -Mortals", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "cielo - huma huma", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "deaf keav -Invincible", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Different heaven and EHIED", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Janji heroes", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: " rabba -Salam-e-ishq", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-ishq", filePath:"songs/3.mp3",coverPath:"covers/7.jpg"},
    {songName: "Bhula dena - Salam-e-ishq", filePath:"songs/3.mp3",coverPath:"covers/8.jpg"},
    {songName: "tumhari kasam - Salam-e-ishq", filePath:"songs/3.mp3",coverPath:"covers/9.jpg"},
    {songName: "kasam - Salam-e-ishq", filePath:"songs/4.mp3",coverPath:"covers/10.jpg"},   
]
songItems.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration/100)   
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');    
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');             
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex > 9){
        songIndex = 0
    }
    else{
        songIndex += 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
