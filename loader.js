// Cargar componentes HTML
async function loadComponents() {
    try {
        // Cargar Header
        const headerResponse = await fetch('components/header/header.html');
        const headerHTML = await headerResponse.text();
        document.getElementById('header-container').innerHTML = headerHTML;

        // Cargar Home
        const homeResponse = await fetch('components/home/home.html');
        const homeHTML = await homeResponse.text();
        document.getElementById('home-container').innerHTML = homeHTML;

        // Cargar About
        const aboutResponse = await fetch('components/about/about.html');
        const aboutHTML = await aboutResponse.text();
        document.getElementById('about-container').innerHTML = aboutHTML;

        // Cargar Products
        const productsResponse = await fetch('components/products/products.html');
        const productsHTML = await productsResponse.text();
        document.getElementById('products-container').innerHTML = productsHTML;

        // Cargar Contact
        const contactResponse = await fetch('components/contact/contact.html');
        const contactHTML = await contactResponse.text();
        document.getElementById('contact-container').innerHTML = contactHTML;

        // Cargar Footer
        const footerResponse = await fetch('components/footer/footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerHTML;

    } catch (error) {
        console.error('Error cargando componentes:', error);
    }
}

// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadComponents);
