document.addEventListener("DOMContentLoaded", function () {
  const currentPage = document.body.dataset.page;
  const customTitle = document.body.dataset.title;

  fetch('header.html')
    .then(response => response.text())
    .then(html => {
      // Insertar el header en el DOM
      document.getElementById('header-container').innerHTML = html;

      // Resaltar enlace activo
      const activeLink = document.querySelector(`nav a[data-page="${currentPage}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }

      // Insertar título personalizado
      const titleElement = document.querySelector('#dynamic-title');
      if (titleElement && customTitle) {
        titleElement.textContent = customTitle;
      }
    })
    .catch(error => {
      console.error("Error cargando el header:", error);
    });
});
