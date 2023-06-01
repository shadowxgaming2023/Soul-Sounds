console.log("Welcome To Spotify");

//intialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: " Elevated", filePath: "Songs/1.mp3", coverPath: "Covers/1.jpg"},
    {songName: " Tere Pyaar Me", filePath: "Songs/2.mp3", coverPath: "Covers/2.jpg"},
    {songName: " Pyaar Hota Kai Baar Hai", filePath: "Songs/3.mp3", coverPath: "Covers/3.jpg"},
    {songName: " Waalian", filePath: "Songs/4.mp3", coverPath: "Covers/4.jpg"},
    {songName: " Vaaste", filePath: "Songs/5.mp3", coverPath: "Covers/5.jpg"},
    {songName: " Lamberghini", filePath: "Songs/6.mp3", coverPath: "Covers/6.jpg"},
    {songName: " Made In India", filePath: "Songs/7.mp3", coverPath: "Covers/7.jpg"},
    {songName: " Raatan Lambiyan", filePath: "Songs/8.mp3", coverPath: "Covers/8.jpg"},
    {songName: " Takdaa Rawaan", filePath: "Songs/9.mp3", coverPath: "Covers/9.jpg"},
    {songName: " Malang Sajna", filePath: "Songs10.mp3", coverPath: "Covers/10.jpg"},
    {songName: " Maan Meri Jaan-Afterlife", filePath: "Songs/11.mp3", coverPath: "Covers/11.jpg"},
    {songName: " Chaudhary", filePath: "Songs/12.mp3", coverPath: "Covers/12.jpg"},
]

//audioElement.play();

// Handle to play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

songItems.forEach((element, i)=>{
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs [i].songName;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})