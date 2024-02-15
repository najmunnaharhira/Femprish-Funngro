const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

const preloadImage = () => {
    const preloadedImage = new Image();
    preloadedImage.src = "girl.jpg";
}

navSlide();
preloadImage();  
