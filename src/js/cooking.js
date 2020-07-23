import logo from '../assets/images/logo-mobile.png';
import cooking from '../assets/images/cook.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const cookingClass = document.querySelector('.slider-image--cooking');
cookingClass.src = cooking;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})