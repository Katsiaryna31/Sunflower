import earth from '../assets/images/earth.png';
import grass from '../assets/images/grass.png';
import aboutusImage from '../assets/images/aboutus-photo.jpg';
import arrow from '../assets/images/arrow.png';
import star from '../assets/images/star.png';

const earthImage = document.querySelector('.earth-image');
earthImage.src = earth;

const mainGrass = document.querySelector('.main-grass');
mainGrass.src = grass;

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