function includeHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      // Create a temporary element to hold the fetched HTML content
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;

      // Get the target element where the content should be injected
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.innerHTML = ''; // Clear the existing content
        while (tempElement.firstChild) {
          // Append the fetched content as child elements
          targetElement.appendChild(tempElement.firstChild);
        }
      }

      // If it's the navbar, initialize the scroll effect
      if (elementId === 'navbar') {
        initializeNavbarScrollEffect();
      }
    })
    .catch(error => {
      console.error('Error loading the file:', error);
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
