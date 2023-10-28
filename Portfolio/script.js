// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset =  sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id')
        
//         if(top >=offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                
//             });

//         };
//     });
// };


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
        
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('header nav a[href*="#' + id + '"]').classList.add('active');
//         }
//     });
// };

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here

    let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = document.querySelector('header nav a[href="#' + id + '"]');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove the "active" class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add the "active" class to the corresponding navigation link
            link.classList.add('active');
        }
    });
};

// });


//remove toggle icon and navbar when click link

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// menuIcon = classList.remove('bx-x');
// navbar = classList.remove('active');






