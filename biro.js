// Typing Effect
const phrases = ['Web Designer', 'Frontend Developer', 'UI/UX Enthusiast','Graphic Designer'];
let currentPhrase = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById('typing-effect');
  const fullPhrase = phrases[currentPhrase];

  if (isDeleting) {
    currentText = fullPhrase.substring(0, currentText.length - 1);
  } else {
    currentText = fullPhrase.substring(0, currentText.length + 1);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && currentText === fullPhrase) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 150);
}

function submitForm(event) {
  event.preventDefault(); // Prevent default form submission
  alert("Sent"); // Show pop-up message
  event.target.submit(); // Submit the form
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("zoomImage");
  image.classList.add("zoom-in-out");
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
