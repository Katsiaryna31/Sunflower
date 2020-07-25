import logo from '../assets/images/logo-mobile.png';
import dutch from '../assets/images/dutch.png';
import dutchTiny from '../assets/images/dutch-tiny.png';
import english from '../assets/images/english.png';
import englishTiny from '../assets/images/english-tiny.png';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const dutchClass = document.querySelector('.slider-image--dutch');
dutchClass.href = dutch;

const dutchClassTiny = document.querySelector('.slider-dutch-tiny');
dutchClassTiny.src = dutchTiny;

const englishClass = document.querySelector('.slider-image--english');
englishClass.href = english;

const englishClassTiny = document.querySelector('.slider-english-tiny');
englishClassTiny.src = englishTiny;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})