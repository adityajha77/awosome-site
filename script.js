// Button click message
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("msg").textContent = "You clicked the button!";
});

// Navbar burger toggle for mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
