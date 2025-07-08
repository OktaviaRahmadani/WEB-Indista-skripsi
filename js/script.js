// Dropdown toggle on click
const dropdownBtn = document.querySelector('.dropdown > a');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function (e) {
  e.preventDefault();
  dropdownMenu.classList.toggle('active');
});

// Click outside to close dropdown
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    dropdownMenu.classList.remove('active');
  }
});

// Login popup toggle
const loginModal = document.getElementById("loginModal");
const loginBtn = document.querySelector(".login-button");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

   // Carousel Automation
const track = document.querySelector('.carrousel-track');
let index = 0;
const total = track.children.length;
const carWidth = 100 / total;

function moveCarousel() {
  index = (index + 1) % total;
  track.style.transform = `translateX(-${index * carWidth}%)`;
}

setInterval(moveCarousel, 3000);

// Additional animation effects
const blurCircles = document.querySelectorAll('.blur-circle');
blurCircles.forEach(circle => {
  circle.style.animation = `float ${6 + Math.random() * 3}s ease-in-out infinite, pulse ${4 + Math.random() * 2}s ease-in-out infinite`;
});




  