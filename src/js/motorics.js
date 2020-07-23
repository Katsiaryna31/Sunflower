import logo from '../assets/images/logo-mobile.png';
import applique from '../assets/images/applique.png';
import puzzle from '../assets/images/puzzle.png';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const appliqueMotorics = document.querySelector('.slider-image--applique');
appliqueMotorics.src = applique;

const puzzleMotorics = document.querySelector('.slider-image--puzzle');
puzzleMotorics.src = puzzle;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})