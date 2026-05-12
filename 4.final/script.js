/* 1. SCROLL BUTTON LOGIC */
const mybutton = document.getElementById("topBtn");

window.onscroll = function() {
    // Show button after 100px of scrolling
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Smooth scroll to top when clicked
mybutton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* 2. SMOKEY & TEXT ANIMATIONS */
window.addEventListener('DOMContentLoaded', () => {
    const smokeyImage = document.querySelector('.smokey-img');
    const footprintText = document.querySelector('.footprint-text');
    
    setTimeout(() => {
        if (smokeyImage) {
            smokeyImage.classList.add('echo-active');
        }
        if (footprintText) {
            footprintText.classList.add('text-active');
        }
    }, 300);
});

/* 3. CONTACT FORM VALIDATION */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your eco-request has been sent.`);
        contactForm.reset();
    });
}