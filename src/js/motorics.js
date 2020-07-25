import logo from '../assets/images/logo-mobile.png';
import applique from '../assets/images/applique.png';
import appliqueTiny from '../assets/images/applique-tiny.png';
import puzzle from '../assets/images/puzzle.png';
import puzzleTiny from '../assets/images/puzzle-tiny.png';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const appliqueMotorics = document.querySelector('.slider-image--applique');
appliqueMotorics.href = applique;

const appliqueMotoricsTiny = document.querySelector('.slider-applique-tiny');
appliqueMotoricsTiny.src = appliqueTiny;

const puzzleMotorics = document.querySelector('.slider-image--puzzle');
puzzleMotorics.href = puzzle;

const puzzleMotoricsTiny = document.querySelector('.slider-puzzle-tiny');
puzzleMotoricsTiny.src = puzzleTiny;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})