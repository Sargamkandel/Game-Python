let audio = document.querySelector('audio');
let img = document.querySelector('img');
let title = document.querySelector('#title')
let playBtn = document.querySelector('#play')
let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right');
let progress = document.querySelector('#progress');
let progressed = document.querySelector('#progressed')
let bool = true;
let list = true;

audio.ontimeupdate = function (e) {
    progressed.style.width = Math.floor(audio.currentTime * 100 / audio.duration) + "%";
    // console.log(audio.duration);
}
progress.onclick = function (e) {
    audio.currentTime = ((e.offsetX / progress.offsetWidth) * audio.duration)
}

let songs = [
   {
       name:"maya",
       title:"Maya ~ Ashutosh Kc",
   },
   {
       name:"baby",
       title:"Baby ~ Justin bieber"
   },
   {
       name:"Fulko_Aankhma",
       title:"Fulko Akhama ~ Anil Drolma",
   }
   ,{
       name: "tum-jese-chutityo",
       title: "Tum Jese chityo ~ Rajiv Raja"
   }
]
playBtn.addEventListener('click',()=>{
  if(bool){
      playMusic();
  }
  else{
      pauseMusic();
  }
});

const playMusic = () =>{
    bool = false;
    audio.play();
    playBtn.classList.replace('fa-play','fa-pause');
    img.classList.add('animation');
    document.getElementById('progress').style.display="block"
}
const pauseMusic = () =>{
    bool = true;
    audio.pause();
    playBtn.classList.replace('fa-pause','fa-play')
    img.classList.remove('animation')
}

const changeMusic = (songs) =>{
    title.textContent=songs.title;
    audio.src=songs.name+".mp3";
    img.src=songs.name+".png";
}

let index = 0;

const nextBtn = () =>{
    index=(index+1)%songs.length;
    changeMusic(songs[index]);
    pauseMusic()
    img.classList.remove('animation');
    document.getElementById('progress').style.display="none"
    playBtn.classList.replace('fa-pause','fa-play')
    console.log('Clicked')
}
const prevBtn = ()=>{
    index=(index-1+songs.length)%songs.length;
    changeMusic(songs[index]);
    pauseMusic()
    img.classList.remove('animation');
    document.getElementById('progress').style.display="none"
    playBtn.classList.replace('fa-pause','fa-play')
    console.log('Clicked')
}


function maya(){
    pauseMusic();
    img.classList.remove('animation')
    document.getElementById('progress').style.display="none"
    title.textContent=songs[0].title;
    audio.src=songs[0].name+".mp3";
    img.src=songs[0].name+".png";
}
function baby(){
    img.classList.remove('animation')
    document.getElementById('progress').style.display="none"
    title.textContent=songs[1].title;
    audio.src=songs[1].name+".mp3"
    img.src=songs[1].name+".png";
}
function ful(){
    pauseMusic();
    img.classList.remove('animation')
    
    document.getElementById('progress').style.display="none"
    title.textContent=songs[2].title;
    audio.src=songs[2].name+".mp3";
    img.src=songs[2].name+".png";
} 

function tum(){
    pauseMusic();
    img.classList.remove('animation')
    
    document.getElementById('progress').style.display="none"
    title.textContent=songs[3].title;
    audio.src=songs[3].name+".mp3";
    img.src=songs[3].name+".png";
} 
$('#hide-show').on('click',function(){
    $('.music').toggle(600);
var list = document.querySelector('#hide-show');
if(list.innerHTML == "Hide"){
    list.innerHTML = 'Show';
    $('#info').css('display','block')
}
else{
    list.innerHTML = 'Hide';
    $('#info').css('display','none')
}
})
var lenghtOfSong = document.querySelector('#no-of-song').innerHTML=songs.length;

leftBtn.addEventListener('click',nextBtn);
rightBtn.addEventListener('click',prevBtn);