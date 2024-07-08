// JavaScript


// Scroll reveal JS
ScrollReveal({ reset: true });
ScrollReveal().reveal('.card', { delay: 200, distance: '30%', origin: 'bottom' });


// List filter search function definition
function filterSearch(filterTextIdName, filterListClassName) {
    const filterText = document.getElementById(filterTextIdName);

    filterText.addEventListener('input', () => {
        document.querySelectorAll("."+filterListClassName).forEach((el) => {
            if (el.textContent.trim().toLowerCase().includes(filterText.value.toLowerCase())) {
                el.classList.remove("d-none"); // Show
            } else {
                el.classList.add("d-none"); // Hide
            }
        });
    });
}

// API list filter
filterSearch("api-list-search", "api-list-element");