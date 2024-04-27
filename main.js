window.addEventListener('scroll', function(){
        let elements = document.querySelector(".fading");
        let windpost = window.scrollY;

        if(windpost > 300){           
            elements.classList.add('fade-out');
        }
        else{   
           elements.classList.remove('fade-out');
        }
    });
    
    window.addEventListener('scroll', function (){
        let elements2 = document.querySelector('.fading2');
        
        let window2 = window.scrollY;
        
        if(window2 > 750){
            
            elements2.classList.add('fade-out');
        }
        else{
            
            elements2.classList.remove('fade-out');
        }
    });
    
    window.addEventListener('scroll', function (){
        let elements3 = document.querySelector('.fading3');
        
        let window2 = window.scrollY;
        
        if(window2 > 1205){
            
            elements3.classList.add('fade-out');
        }
        else{
            
            elements3.classList.remove('fade-out');
        }
    });
    
    window.addEventListener('scroll', function () {
    let elements5 = document.querySelectorAll('.fading5');
    let window5 = window.scrollY;

    elements5.forEach(function (element) {
        if (window5 < 899) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        } else {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }
    });
});
    
    window.addEventListener('scroll', function () {
    let elements4 = document.querySelectorAll('.fading4');
    let window4 = window.scrollY;

    elements4.forEach(function (element) {
        if (window4 < 699) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        } else {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }
    });
});
