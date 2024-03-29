// SHOW MENU //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// BACKGROUND HEADER //
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

// CINEMATICS //
var items = document.querySelectorAll(".cinematic_item img");

items.forEach((val, index) => {
    val.src = "./Res/cineImg" + (index + 1) + ".jpg";
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cinematics_wrapper",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "50%+=500px",
    }
});
tl.to(".cinematic_items img", { scale: 1 }, 0)
    .to(".cinematic_items", { scale: 2, rotate: 0 }, 0)
    .to(".cinematics_overlay", { height: "100%" }, .2)
    .to(".cinematics_data", { scale: 1 }, .6)
    .to(".cinematic_items", { scale: .8, opacity: .2 }, .6);


// MOVIE MARATHONS //
function bg1() {
    document.querySelector('.movie_container').style.background = "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url('./Res/mM1.jpg') center center / cover";
}
function bg2() {
    document.querySelector('.movie_container').style.background = "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url('./Res/mM2.jpg') center center / cover";
}
function bg3() {
    document.querySelector('.movie_container').style.background = "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url('./Res/mM3.jpg') center center / cover";
}
function bg4() {
    document.querySelector('.movie_container').style.background = "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url('./Res/mM4.jpg') center center / cover";
}
function bg5() {
    document.querySelector('.movie_container').style.background = "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url('./Res/mM5.jpg') center center / cover";
}
function bg6() {
    document.querySelector('.movie_container').style.background = "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url('./Res/mM6.jpg') center center / cover";
}