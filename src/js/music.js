import logo from '../assets/images/logo-mobile.png';
import music from '../assets/images/music-basic.jpg';
import dancing from '../assets/images/dancing.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const musicClass = document.querySelector('.slider-image--music');
musicClass.src = music;

const dancingClass = document.querySelector('.slider-image--dancing');
dancingClass.src = dancing;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})