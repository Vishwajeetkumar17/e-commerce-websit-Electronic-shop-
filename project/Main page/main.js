var imageSources = [
    ["../thumbnail images/main/1.png", "../thumbnail images/main/2.png", "../thumbnail images/main/3.png", "../thumbnail images/main/4.png", "../thumbnail images/main/5.png"],
    ["../products/television/main6.png", "../products/fridges/images/main2.jpg", "../products/Induction/images/0.jpg", "../products/music systems/new/main2.webp", "../products/washing machine/images/bosch1.webp", "../thumbnail images/main slide/3.webp"],
];
var currentIndexes = [0, 0];

function changeImage(index) {
    currentIndexes[index] = (currentIndexes[index] + 1) % imageSources[index].length;
    var images = document.getElementsByClassName('main-image');
    images[index].src = imageSources[index][currentIndexes[index]];
}

setInterval(function () {
    changeImage(0);
    changeImage(1);
}, 3000);


let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');

searchBtn.onclick = function () {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
}

closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
}
menuToggle.onclick = function () {
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');

}

document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "carousel"
    var carousels = document.querySelectorAll('.carousel');

    // Loop through each carousel and initialize Flickity
    carousels.forEach(function (carousel) {
        new Flickity(carousel, {
            wrapAround: true,
            autoPlay: 2000 // Change slides every 5 seconds (5000 milliseconds)
        });
    });
});




