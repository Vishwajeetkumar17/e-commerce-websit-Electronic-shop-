var imageSources = [["images/side2.png","images/bosch1.webp","images/lg main.avif"], ["images/3main.png","images/4main.png","images/5main.png"]];
var currentIndexes = [0, 0]; // Indexes of the currently displayed images

// Function to change the image for a specific index every 5 seconds
function changeImage(index) {
    currentIndexes[index] = (currentIndexes[index] + 1) % imageSources[index].length; // Cycle through images
    var images = document.getElementsByClassName('main-image'); // Get all elements with the class 'main-image'
    images[index].src = imageSources[index][currentIndexes[index]]; // Change the source of the specified image
}

// Call changeImage function for each image every 5 seconds
setInterval(function () {
    changeImage(0);
    changeImage(1);
}, 3000);





