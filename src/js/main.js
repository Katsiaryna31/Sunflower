import logo from '../assets/images/logo-mobile.png';
import earth from '../assets/images/earth.png';
import earthMini from '../assets/images/earth-mini.png';
import grass from '../assets/images/grass.png';
import grassMini from '../assets/images/grass-mini.png';
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

const body = document.querySelector('body');

mapContainer.addEventListener('click', () => {
    mapBig.classList.add('map--active');
    body.style.overflow = 'hidden';
})

mapButton.addEventListener('click', () => {
    mapBig.classList.remove('map--active');
    body.style.overflow = 'visible';
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


const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
    } else {
        activitiesLink.href = "#activities";
    }
})

const contactForm = document.getElementById('sendmailform');
const spiner = document.querySelector('.lds-spinner');


const popupOpen = (message) => {
    spiner.style.display = 'none';
    const popup = document.getElementById('popup');
    const popupText = document.querySelector('.popup-text');
    const popupButton = document.querySelector('.popup-button');
    popup.style.display = 'block';
    popupText.innerHTML = message;
    popupButton.addEventListener('click', () => {
        popup.style.display = 'none';
        contactForm.reset();
    })
}


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
    spiner.style.display = 'inline-block';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/sendmail.php");
    xhr.onload = function (event) {
        popupOpen("Повідомлення надіслано");
    };
    xhr.onerror = function (event) {
        popupOpen("Виникла помилка. Спробуй пізніше");
    };
    // or onerror, onabort
    var formData = new FormData(document.getElementById("sendmailform"));
    xhr.send(formData);
    console.log(formData);
});