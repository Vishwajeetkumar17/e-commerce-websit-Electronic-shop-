var imageSources = [["new/main1.webp","new/main2.webp","new/sony1.png","new/main2.webp"],
 ["new/jbl1.webp","new/jbl2.webp","new/jbl3.webp","new/jbl4.webp"],
 ["new/alpine2.png","new/alpine3.jpg","new/alpine4.jpg","new/alpine5.jpg","new/alpine6.jpg"],
 ["new/sony2.webp","new/sony3.webp","new/sony4.webp","new/sony5.webp"],
 ["new/universal1.png","new/universal2.jpg","new/universal3.jpg","new/universal4.jpg"],
 ["new/ahuja1.png","new/ahuja2.png","new/ahuja3.png","new/ahuja4.png"],
 ["new/boat1.webp","new/boat2.png","new/boat3.png"],
 ["new/intex1.webp","new/intex2.webp","new/intex3.webp","new/intex4.webp","new/intex5.webp","new/intex6.webp"],
];
var currentIndexes = [0, 0,0,0,0,0,0,0]; // Indexes of the currently displayed images

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
    changeImage(3);
    changeImage(4);
    changeImage(5);
    changeImage(6);
    changeImage(7);
}, 3000);




window.onload = function() {
    var imageItems = document.querySelectorAll('.image-item');
    imageItems.forEach(function(item) {
        item.classList.add('animate-fly-in');
        setTimeout(function() {
            item.classList.remove('animate-fly-in');
        }, 1000); // Adjust the delay to match the duration of the animation
    });
};


