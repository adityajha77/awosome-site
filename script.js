const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

btn.addEventListener('click', () => {
  msg.textContent = "You clicked the button! 🎉";
});
