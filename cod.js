import anime from "./node_modules/animejs/lib/anime.es.js"

let elem = document.querySelector('.img')
elem.addEventListener('mouseenter',()=>{
    anime({
        targets: elem,
        duration: 200,
        borderRadius: '25%',
        easing: 'easeInOutSine',
    })
})
elem.addEventListener('mouseleave',()=>{
    anime({
        targets: elem,
        duration: 200,
        borderRadius: '0%',
        easing: 'easeInOutSine',
    })
})