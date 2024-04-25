var imageSources = [["/products/fridges/images/main1.avif","/products/fridges/images/main2.jpg","/products/fridges/images/main8.png","/products/fridges/images/main9.png","/products/fridges/images/main10.png"], 
                    ["/products/fridges/images/main3.webp","/products/fridges/images/main4.webp","/products/fridges/images/main5.webp","/products/fridges/images/main6.webp"], 
                    ["/products/fridges/images/main17.png","/products/fridges/images/main18.png","/products/fridges/images/main19.png","/products/fridges/images/main20.png"]];
var currentIndexes = [0, 0,0]; // Indexes of the currently displayed images

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
    changeImage(2);
}, 3000);


