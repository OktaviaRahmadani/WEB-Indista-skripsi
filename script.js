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