import logo from '../assets/images/logo-mobile.png';
import music from '../assets/images/music-basic.jpg';
import musicTiny from '../assets/images/music-basic-tiny.jpg';
import dancing from '../assets/images/dancing.jpg';
import dancingTiny from '../assets/images/dancing-tiny.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const musicClass = document.querySelector('.slider-image--music');
musicClass.href = music;

const musicClassTiny = document.querySelector('.slider-music-tiny');
musicClassTiny.src = musicTiny;

const dancingClass = document.querySelector('.slider-image--dancing');
dancingClass.href = dancing;

const dancingClassTiny = document.querySelector('.slider-dancing-tiny');
dancingClassTiny.src = dancingTiny;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})