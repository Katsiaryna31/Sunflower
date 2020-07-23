import logo from '../assets/images/logo-mobile.png';
import dutch from '../assets/images/dutch.png';
import english from '../assets/images/english.png';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const dutchClass = document.querySelector('.slider-image--dutch');
dutchClass.src = dutch;

const englishClass = document.querySelector('.slider-image--english');
englishClass.src = english;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})