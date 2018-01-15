console.log('loaded');


window.onload = function () {
    var images = document.querySelectorAll('.left li');
    
    var currentImage = 0;

    setInterval(function () {
        currentImage++;
        if (currentImage === images.length) {
            currentImage = 0;
        }
        console.log(currentImage);
    }, 2000);
    
    // var img = document.querySelector('.left img');

    // var leftHeight = left.clientHeight;
    // var imgHeight = img.clientHeight;

    // console.log(leftHeight);
    // console.log(imgHeight);

    // var gap = (imgHeight - leftHeight) / 2;

    // img.style.height = gap;

    // window.addEventListener('resize', function () {
    //     var left = document.querySelector('.left');
    //     var img = document.querySelector('.left img');
    
    //     var leftHeight = left.clientHeight;
    //     var imgHeight = img.clientHeight;
    
    //     console.log(leftHeight);
    //     console.log(imgHeight);
    
    //     var gap = (imgHeight - leftHeight) / 2;
        
    //     img.style.height = gap;
    // })
};
