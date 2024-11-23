function includeHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    });
}
window.onload = () => {
  includeHTML('./Components/Navbar/navbar.html', 'navbar');
  includeHTML('./Components/Footer/footer.html', 'footer');
};
