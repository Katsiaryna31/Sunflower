const mapContainer = document.querySelector('.callback-map');
const mapBig = document.getElementById('map');

const mapButton = document.querySelector('.map-close');

const body = document.querySelector('body');

mapContainer.addEventListener('click', () => {
    mapBig.classList.add('map--active');
    body.style.overflow = 'hidden';
})

mapButton.addEventListener('click', () => {
    if (mapBig.classList.contains('map--active')) {
        mapBig.classList.remove('map--active');
    }
    body.style.overflow = 'visible';
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