const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const volumeBtn = document.getElementById("volume");


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#dde5ec',
    progressColor: '#03cebf',
    barWidth: 4,
    height:90,
    responsive:true,
    hideScrollbar:true,
    barRadius: 2 ,
});

wavesurfer.load('/media/media/YaZinaDiriLatay.mp3');

playBtn.onclick = () =>{
    wavesurfer.playPause();

    if(playBtn.src.includes("play.png")){
        playBtn.src="/media/media/pause.png";
    }else{
        playBtn.src="/media/media/play.png";
    }
}

stopBtn.onclick = () =>{
    wavesurfer.stop();
    playBtn.src="/media/media/play.png";
}

volumeBtn.onclick = () =>{
    wavesurfer.toggleMute();

    if(volumeBtn.src.includes("volume.png")){
        volumeBtn.src="/media/media/mute.png";
    }else{
        volumeBtn.src="/media/media/volume.png";
    }
}