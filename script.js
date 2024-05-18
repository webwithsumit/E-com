
// landing page animation ----------------------------------------------------------------

gsap.from('#glitch', {
    scale: 1.6,
    duration: 1,
    ease: "bounce.out",
    onComplete: function () {this._targets[0].remove() }
})







// footer animation ----------------------------------------------------------------

document.querySelectorAll('.upper h1').forEach((e, i) => {
    let clutter = '';
    
    e.textContent.trim().split('').forEach((letter) => {
        clutter += `<span style="display: inline-block;">${letter}</span>`
    })
    e.innerHTML = clutter;
    
    e.addEventListener("mouseenter", (dets) => {
        gsap.to(e.querySelectorAll('span'), {
            y: '100%',
            stagger: .03,
        })
        e.addEventListener("mouseleave", (dets) => {    
            gsap.to(e.querySelectorAll('span'), {
                delay:.3,
                y: "0%",
                stagger: .03
            })
        })
    })
})


//Swiper Animation-----------------------------------------
var swiper5 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: "auto",
    direction: 'vertical',
    grabCursor: true,
    effect: "creative",
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    creativeEffect: {
        prev: {
            // shadow: true,
            translate: [0, "-120%", -500],
        },
        next: {
            // shadow: true,
            translate: [0, "120%", -500],
        },
    },
});