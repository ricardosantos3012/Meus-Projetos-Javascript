const music = document.querySelector('.music');
const elapsedTime = document.querySelector('.initial');
const musicDuration = document.querySelector('.final');
const image = document.querySelector('img');
const nameMusic = document.querySelector('h1');
const artistName = document.querySelector('.title-music i');
const musics = [
    {
        src: './assets/musics/A tempestade e o Sol.mp3',
        title: 'A Tempestade e o sol',
        artist: 'Catedral'
    },
    {
        src: './assets/musics/Back In Black.mp3',
        title: 'Back In Black',
        artist: 'Ac/Dc'
    },
    {
        src: './assets/musics/Beggin.mp3',
        title: 'Beggin',
        artist: 'Måneskin'
    },
    {
        src: './assets/musics/I Was Born to Love You.mp3',
        title: 'I Was Born to Love You',
        artist: 'Queen'
    }
];
let indexMusic = 0;

const musicPlay = () => {
    music.play();
    document.querySelector('.pause').style = ('display: block;');
    document.querySelector('.play').style = ('display: none;');
}

const pauseMusic = () => {
    music.pause();
    document.querySelector('.pause').style = ('display: none;');
    document.querySelector('.play').style = ('display: block;');
}

function barUpdate() {
    const bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

const musicProgress = () => {
    music.addEventListener('timeupdate', barUpdate);
}

const secondsToMinutes = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let second = seconds % 60;

    if(second < 10) {
        second = '0' + second;
    }

    return (`${minutes}:${second}`);
}

const playList = (index) => {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

const nextMusic = () => {
    
}

const playMusic = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;

        if(element.classList.contains('play')) {
            musicPlay();
            musicProgress();
        }
        if(element.classList.contains('pause')) {
            pauseMusic();
        }
        if(element.classList.contains('fa-step-backward')) {
            indexMusic--;
            if(indexMusic < 0) {
                indexMusic = 0;
            }
            playList(indexMusic);
            musicPlay();
        }
        if(element.classList.contains('fa-step-forward')) {
            indexMusic++;
            if(indexMusic > 3) {
                indexMusic = 0;
            }
            playList(indexMusic);
            musicPlay();
        }
    });
}
playList(indexMusic);
playMusic();