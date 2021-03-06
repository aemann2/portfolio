// hamburger menu

const navLinks = document.getElementById('nav-links');

function hamburgerMenu() {
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}

function restoreNav() {
  if (window.innerWidth > 550) {
    navLinks.style.display = 'flex';
  } else navLinks.style.display = 'none';
}

window.addEventListener('resize', restoreNav);

// navbar color transition

const navbar = document.querySelector('#navbar');

window.onscroll = () => {
  if (window.scrollY > window.innerHeight - 50) {
    navbar.style.backgroundColor = 'rgb(22, 39, 89)';
    navbar.style.mixBlendMode = 'normal';
  } else {
    navbar.style.backgroundColor = '';
    navbar.style.mixBlendMode = 'difference';
  }
};

// photo slider

const slider = document.querySelector('.arrow-slider');

function sliderHandler() {
  console.log('click');
}

slider.addEventListener('click', sliderHandler);
