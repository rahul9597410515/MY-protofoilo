// --- Dark Mode Functionality ---
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Check user's preferred theme in local storage
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on initial load
if (savedTheme === 'light') {
    body.classList.replace('dark-mode', 'light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
}

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});


// --- Intersection Observer for Scroll Animations ---
const fadeElements = document.querySelectorAll('.fade-in');

// Observer options: triggers when 15% of the element is visible
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

// Create the observer
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // Add 'appear' class to trigger the CSS transition
            entry.target.classList.add('appear');
            // Stop observing once the element has appeared (only animate once)
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

// Attach observer to every element with the 'fade-in' class
fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});
