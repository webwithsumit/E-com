
// landing page animation ----------------------------------------------------------------

gsap.from('#glitch', {
    scale: 1.6,
    duration: 1,
    ease: "bounce.out",
    onComplete: function () {this._targets[0].remove() }
})









// footer animation ----------------------------------------------------------------

function footerJs(){
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
}


