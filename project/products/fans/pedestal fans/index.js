document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
}); 




var imageSources = [["images/main/1.png","images/main/2.png","images/main/4.png","images/main/6.png"],
["images/main/3.png","images/main/5.png","images/main/6.png"],
];

var currentIndexes = [0,0];
function changeImage(index) {
    currentIndexes[index] = (currentIndexes[index] + 1) % imageSources[index].length; // Cycle through images
    var images = document.getElementsByClassName('main-image'); // Get all elements with the class 'main-image'
    images[index].src = imageSources[index][currentIndexes[index]]; // Change the source of the specified image
}
setInterval(function () {
    changeImage(0);
    changeImage(1);
},3000);