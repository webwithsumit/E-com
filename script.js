
// landing page animation ----------------------------------------------------------------

function landingJs(){
    gsap.from('#glitch', {
        scale: 1.6,
        duration: 1,
        ease: "bounce.out",
        onComplete: function () {this._targets[0].remove() }
    })
}









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





function categoryJs() {
    const progressLineParent = document.querySelector('.progressLineParent')
const width = progressLineParent.clientWidth - 20
function gsapAnimeCards() {





    var tl = gsap.timeline({
        scrollTrigger: {
            start: 'top 0%',
            end: 'top -100%',
            scroller: 'body',
            trigger: '.container',
            scrub: 2,
            pin: true,
            snap: [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1],
        }
    })

    tl.to('.card2,.card3,.card4,.card5,.card6,.card7,.card8', {
        x: '-=18vw',
        ease: 'slow'
    }, 'anime')

        .to('.card3,.card4,.card5,.card6,.card7,.card8', {
            x: '-=18vw',
            ease: 'slow'
        }, 'anime1')

        .to('.card4,.card5,.card6,.card7,.card8', {
            x: '-=18vw',
            ease: 'slow'
        }, 'anime2')

        .to('.card5,.card6,.card7,.card8', {
            x: '-=18vw',
            ease: 'slow'
        }, 'anime3')

        .to('.card6,.card7,.card8', {
            x: '-=18vw',
            ease: 'slow'
        }, 'anime4')

        .to('.card7,.card8', {
            x: '-=18vw',
            ease: 'slow'
        }, 'anime5')

        .to('.card8', {
            x: '-=18vw',
            ease: 'slow'
        }, 'anime6')


        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 1 / 2)} 200 ${((width) / 7) * 1} 200`,
            },
            ease: 'slow'
        }, 'anime')
        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 2) / 2} 200 ${((width) / 7) * 2} 200`,
            },
            ease: 'slow'
        }, 'anime1')
        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 3) / 2} 200 ${((width) / 7) * 3} 200`,
            },
            ease: 'slow'
        }, 'anime2')
        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 4) / 2} 200 ${((width) / 7) * 4} 200`,
            },
            ease: 'slow'
        }, 'anime3')
        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 5) / 2} 200 ${((width) / 7) * 5} 200`,
            },
            ease: 'slow'
        }, 'anime4')
        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 6) / 2} 200 ${((width) / 7) * 6} 200`,
            },
            ease: 'slow'
        }, 'anime5')
        .to('.progressLine', {
            attr: {
                d: `M 00 200 Q ${(((width) / 7) * 7) / 2} 200 ${((width) / 7) * 7} 200`,
            },
            ease: 'slow'
        }, 'anime6')


        .to('.circle span',{
            rotate:'-=360.7deg',
            duration:1,
        },'anime')
        .to('.circle span',{
            rotate:'-=360.7deg',
            duration:1,
        },'anime1')
        .to('.circle span',{
            rotate:'-=360.7deg',
            duration:1,
        },'anime2')
        .to('.circle span',{
            rotate:'-=360.7deg',
            duration:1,
        },'anime3')
        .to('.circle span',{
            rotate:'-=360.7deg',
            duration:1,
        },'anime4')
        
        .to('.circle span',{
            rotate:'-=360.7deg',
            duration:1,
        },'anime5')


        
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 1,
            ease: 'slow'
        }, 'anime')
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 2,
            ease: 'slow'
        }, 'anime1')
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 3,
            ease: 'slow'
        }, 'anime2')
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 4,
            ease: 'slow'
        }, 'anime3')
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 5,
            ease: 'slow'
        }, 'anime4')
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 6,
            ease: 'slow'
        }, 'anime5')
        .to(progressLineParent.querySelector('svg'), {
            width:((width) / 7) * 7,
            ease: 'slow'
        }, 'anime6')
        





        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime')
        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime1')
        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime2')
        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime3')
        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime4')
        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime5')
        .to('.page01,.page02,.page03,.page04,.page05,.page06,.page07,.page08', {
            top: '-=100%',
            ease: 'slow'
        }, 'anime6')


}


document.querySelectorAll('.card').forEach((card) => {
    var img = card.querySelector('.image')
    var text = card.querySelector('.text')

    card.addEventListener('mouseover', () => {
        gsap.to([img], {
            opacity: 1
        })
        gsap.to([text], {
            opacity: 0
        })
    })
    card.addEventListener('mouseleave', () => {
        gsap.to([img], {
            opacity: 0
        })
        gsap.to([text], {
            opacity: 1
        })
    })

})

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('mousemove', (dets) => {
    dets.target.style.cursor = "none"
    gsap.to('.mousemover', {
        left: dets.clientX,
        top: dets.clientY,
        cursor: 'none',
        opacity: 1
    })
})

wrapper.addEventListener('mouseleave', () => {
    gsap.to('.mousemover', {
        opacity: 0
    })
})



function settingSvgWidth() {
    const progressLineParent = document.querySelector('.progressLineParent')
    const width = 0
    progressLineParent.querySelector('svg').setAttribute('width', width)
}



window.addEventListener('resize', () => {
    location.href = '/index.html'
})

function svgAnime() {
    const svg = progressLineParent.querySelector('svg')
    svg.addEventListener('mousemove', (dets) => {
        const d = progressLineParent.querySelector('svg path').getAttribute('d').toString()
        const newD = d.split(" ").map((val, index) => {
            if (index == 4) {
                const x = gsap.utils.clamp(0,svg.getBoundingClientRect().width,dets.clientX - svg.getBoundingClientRect().left)
                return x
            }
            if (index == 5) {
                const x = gsap.utils.clamp(0,svg.getBoundingClientRect().height,dets.clientY - svg.getBoundingClientRect().top)
                return x
            }
            return val
        })
        
        
        gsap.to('.progressLine', {
            attr: {d: newD.join(" ").toString()},
            duration:1,
            ease:'power2.out'
        })
    })
    
    
    svg.addEventListener('mouseleave',()=>{
        const d = progressLineParent.querySelector('svg path').getAttribute('d').toString()
        const newD = d.split(" ").map((val, index) => {
            if(index == 5){
                val = 200
                return val 
            }
            return val 
        })
        gsap.to('.progressLine', {
            attr: {d: newD.join(" ").toString(),},
            duration:1,
            ease:"elastic.out(1.2,0.1)"
        })
    })
}

svgAnime()
settingSvgWidth()
gsapAnimeCards()




    
}

landingJs()
categoryJs()
footerJs()