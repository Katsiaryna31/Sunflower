import './scss/main.scss';
import earth from './assets/images/earth.png';
import aboutusImage from './assets/images/aboutus-photo.jpg';
import babyImage from './assets/images/baby.png';
import childImage from './assets/images/child.png';
import preschoolerImage from './assets/images/preschooler.png';
import arrow from './assets/images/arrow.png';
import star from './assets/images/star.png';
import bell from './assets/images/bell.png';

const earthImage = document.querySelector('.earth-image');
earthImage.src = earth;

const aboutImage = document.querySelector('.about-us-photo');
aboutImage.src = aboutusImage;

const babyPhoto = document.querySelector('.group-baby-photo');
babyPhoto.src = babyImage;

const childPhoto = document.querySelector('.group-child-photo');
childPhoto.src = childImage;

const preschoolerPhoto = document.querySelector('.group-preschooler-photo');
preschoolerPhoto.src = preschoolerImage;

const arrowLeft = document.querySelector('.slider-left-button');
arrowLeft.src = arrow;

const arrowRight = document.querySelector('.slider-right-button');
arrowRight.src = arrow;

const starImages = document.querySelectorAll('.star');
starImages.forEach((starImage) => {
    starImage.src = star;
});

const bellImage = document.querySelector('.bell');
bellImage.src = bell;
