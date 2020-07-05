import logo from '../assets/images/logo-mobile.png';
import earth from '../assets/images/earth.png';
import earthMini from '../assets/images/earth-mini.png';
import grass from '../assets/images/grass.png';
import grassMini from '../assets/images/grass-mini.png'; 
import aboutusImage from '../assets/images/aboutus-photo.jpg';
import arrow from '../assets/images/arrow.png';
import star from '../assets/images/star.png';
import puzzle from '../assets/images/puzzle2.png';
import cross from '../assets/images/cross.svg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const earthImage = document.querySelector('.earth-image');
earthImage.src = earth;

const miniEarth = document.querySelector('.mini-earth');
miniEarth.srcset = earthMini;

const mainGrass = document.querySelector('.main-grass');
mainGrass.src = grass;

const miniGrass = document.querySelector('.mini-grass');
miniGrass.srcset = grassMini;

const aboutImage = document.querySelector('.about-us-photo');
aboutImage.src = aboutusImage;

const arrowLeft = document.querySelector('.slider-left-button');
arrowLeft.src = arrow;

const arrowRight = document.querySelector('.slider-right-button');
arrowRight.src = arrow;

const starImages = document.querySelectorAll('.star');
starImages.forEach((starImage) => {
    starImage.src = star;
});

const map = document.querySelector('.callback-image');
map.src = puzzle;

const mapContainer = document.querySelector('.callback-map');
const mapBig = document.getElementById('map');

const mapButton = document.querySelector('.map-close');
mapButton.src = cross;

mapContainer.addEventListener('click', () => {
    mapBig.classList.add('map--active');
})

mapButton.addEventListener('click', () => {
    mapBig.classList.remove('map--active');
})

const activitiesItemList = document.querySelectorAll('.activities-item');
const activitiesActiveList = document.querySelectorAll('.activities-item--active');
activitiesItemList.forEach((activitiesItem) => {
    activitiesItem.addEventListener('touch', () => {
        activitiesActiveList.forEach((activeElement) => {
            activeElement.style.display = 'none';
        });
        const activitiesItemActive = activitiesItem.querySelector('.activities-item--active');
        activitiesItemActive.style.display = 'block';
    });
})



