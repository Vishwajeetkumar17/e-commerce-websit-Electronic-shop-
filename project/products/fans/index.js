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




var imageSources = [["/products/fans/images/1.png","/products/fans/images/2.png","/products/fans/images/3.png","/products/fans/images/4.png","/products/fans/images/5.png","/products/fans/images/6.png","/products/fans/images/7.png","/products/fans/images/13.png"]];
var currentIndexes = [0];
function changeImage(index) {
    currentIndexes[index] = (currentIndexes[index] + 1) % imageSources[index].length; // Cycle through images
    var images = document.getElementsByClassName('main-image'); // Get all elements with the class 'main-image'
    images[index].src = imageSources[index][currentIndexes[index]]; // Change the source of the specified image
}
setInterval(function () {
    changeImage(0);
},3000);