let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrowLeft')
let arrowRight = document.querySelector('#arrowRight')
let current = 0

function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none'
    }
}

function startSlide() {
    reset()
    sliderImages[0].style.display = 'block'
}

function nextSlide() {
    reset() 
    sliderImages[current + 1].style.display = 'block'
    current = current + 1
}

function prevSlide() {
    reset()
    sliderImages[current - 1].style.display = 'block'
    current = current - 1
}

arrowRight.addEventListener('click', function() {
    if(current === sliderImages.length - 1) {
        current = -1
    }
    nextSlide()
})

arrowLeft.addEventListener('click', function() {
    if(current === 0) {
        current = sliderImages.length
    }
    prevSlide()
})

startSlide()