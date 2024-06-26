document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamic content loading
    fetchTestimonials();
});

function fetchTestimonials() {
    // Example of loading dynamic content
    const testimonialsSection = document.getElementById('testimonials');
    testimonialsSection.innerHTML = `
        <h2>Testimonials</h2>
        <p>"Lily Tours Israeli provided an amazing experience! Highly recommend." - John Doe</p>
        <p>"The best travel agency in Koh Phi Phi. We loved every moment!" - Jane Smith</p>
    `;
}
