// Menu Toggle
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// Remove Menu on Mobile Link Click
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Active Link Highlight
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {delay: 400});
sr.reveal('.home__social-icon', {interval: 200});
sr.reveal('.skills__data, .work__img, .contact__input', {interval: 200});

// Contact Send Button Animation
document.getElementById('sendButton').addEventListener('click', function() {
    // Add the animation class to the button
    this.classList.add('animate');

    // Simulate form submission (you can replace this with actual form handling)
    setTimeout(() => {
        // Show success message after the animation
        document.getElementById('successMessage').style.display = 'block';

        // Reset animation class to allow future animations
        this.classList.remove('animate');
    }, 600); // This matches the animation duration (0.6s)
});
