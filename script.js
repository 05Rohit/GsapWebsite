
function herosection() {
    const tl_1 = gsap.timeline(
        {scrollTrigger:
        {
            trigger:"#main",
            markers:true,
            start:"38% 50%",
            end:"100% 50%",
            scrub:2,
            pin:true,
            duration: 3,
            stagger: 0.5,
          
        }
    }
    );

    gsap.from(".main_contain-1", {
        duration: 2,
        opacity: 0
    })


    tl_1.from(".nav-left ,.nav-right", {
        x: "-100%",
        opacity: 0,
        duration: 1

    });

    tl_1.from(".hero_title p", {
        opacity: 0,
        y: '-100%',


    })
    tl_1.from(".hero_para p, .btn", {
        opacity: 0,
        y: '-100%',

    })
}

herosection();

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });


var cursor = document.querySelectorAll('#cursor'),
    mouseX = 0,
    mouseY = 0
    gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})






