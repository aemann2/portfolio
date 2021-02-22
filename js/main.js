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
