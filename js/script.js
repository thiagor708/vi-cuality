// Script principal del sitio.
// Este archivo controla la apertura del menú y los submenús.

// Muestra u oculta el menú principal al hacer clic en el botón.
function toggleMenu() {
    // Cambia la clase "active" para mostrar u ocultar el menú.
    document.getElementById("menu").classList.toggle("active");
}

// Abre o cierra la carpeta de opciones de gestión de la calidad.
function toggleSubmenu(event) {
    // Evita que el clic se propague a otros elementos.
    event.stopPropagation();

    // Busca el contenedor del grupo de opciones.
    const folder = event.currentTarget.parentElement;

    // Alterna la clase "open" para mostrar o esconder el submenú.
    const isOpen = folder.classList.toggle("open");

    // Actualiza el estado accesible del botón para lectores de pantalla.
    event.currentTarget.setAttribute("aria-expanded", isOpen);
}