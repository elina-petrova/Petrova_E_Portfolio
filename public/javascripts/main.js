function fadeOut() {
    TweenMax.to(".myBtn", 0.8, {
        y: -20,
        opacity: 0
    });

    TweenMax.to(".screen", 2, {
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 0.8
    });
    TweenMax.to(".overlay_text", 2, {
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 0.8
    });
    TweenMax.to(".logo", 2, {
        y: -100,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 0.8
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 1.6,
        top: "-110%",
        ease: Expo.easeInOut
    })
    TweenMax.to(".overlay-2", 2, {
        delay: 2,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".content", 2, {
        delay: 2.2,
        opacity: 0,
        y: 300,
        ease: Power2.easeInOut
    });

    TweenMax.to(".content", 2, {
        opacity: 1,
        y: 0,
        delay: 2.2,
        ease: Expo.easeInOut
    })
}


var portdoliArray = [
    ['portfolio/work-lrg', 'Portfolio Project 1'],
    ['portfolio/work-lrg', 'Portfolio Project 2'],
    ['portfolio/work-lrg', 'Portfolio Project 3'],
    ['portfolio/work-lrg', 'Portfolio Project 4'],
    ['portfolio/work-lrg', 'Portfolio Project 5'],
    ['portfolio/work-lrg', 'Portfolio Project 6'],
    ['portfolio/work-lrg', 'Portfolio Project 7'],
    ['portfolio/work-lrg', 'Portfolio Project 8'],
    ['portfolio/work-lrg', 'Portfolio Project 9'],
    ['portfolio/work-lrg', 'Portfolio Project 10']
];




var tl = new TimelineLite();





function playTween() {

    tl = new TimelineLite;

    tl.to('.project-preview', 1, {
        width: "80vw",
        ease: Expo.easeInOut
    });

    TweenMax.set(".project-preview", { backgroundImage: 'url(images/' + this.dataset.back + '.jpg)' });
}

function reverseTween() {
    tl = new TimelineLite;

    tl.to('.project-preview', 1, {
        width: "0px",
        ease: Expo.easeInOut
    });

}

window.addEventListener("scroll", () => {
    var scroll = window.pageYOffset / 2;
    console.log(scroll);
    document.querySelector(".progressbar").style.height = scroll + "px";
});



document.querySelectorAll(".navigation-item span").forEach(item => item.addEventListener("mouseover", playTween));
document.querySelectorAll(".navigation-item span").forEach(item => item.addEventListener("mouseleave", reverseTween));


