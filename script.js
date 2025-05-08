// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };


// let sections=document.querySelectorAll('section');
// // let navLinks=document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };

//     });
//     let header=document.querySelector('header');

//     header.classList.toggle('sticky',window.screenY>100);
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// ScrollReveal({
//     //reset:true,
//     distance:'80px',
//     duration:2000,
//     delay:200
// });

// ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
// ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
// ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
// ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// const typed = new Typed('.multiple-text',{
//     strings:['NodeJs Developer ','Backend Developer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });


// function addClassToTarget() {
//     const target = document.getQuerySelectorAll('myTarget');
//     target.classList.add('active');
//   }


// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//   link.addEventListener('click', function () {
//     navLinks.forEach(l => l.classList.remove('active')); // remove from all
//     this.classList.add('active'); // add to clicked one
//   });
// });



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a'); // Make sure nav links are defined

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) targetLink.classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Activate link on click
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active')); // Remove from all
        this.classList.add('active'); // Add to clicked one
    });
});

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typing effect
const typed = new Typed('.multiple-text', {
    strings: ['NodeJs Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let lastScrollTop = 0; // Last scroll position track karna
const header = document.querySelector('.header'); // Header ko select karna

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Agar scroll down ho raha ho
    if (currentScroll > lastScrollTop) {
        // Scroll down: Header ko hide karna
        header.style.top = "-100px"; // Aap yeh value header ki height ke hisaab se adjust kar sakte hain
    } else {
        // Scroll up: Header ko show karna
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Scroll position ko update karna
}, false);
