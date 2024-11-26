function includeHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      if (elementId === 'navbar') {
        initializeNavbarScrollEffect();
      }
    });
}

function initializeNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

window.onload = () => {
  includeHTML('./Components/Navbar/navbar.html', 'navbar');
  includeHTML('./Components/Footer/footer.html', 'footer');
};
