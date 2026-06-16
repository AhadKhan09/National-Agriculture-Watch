//IP Addresses
const Ahad = '172.18.1.85';
const mam_Seemal = '172.18.1.54'
const Saqib = '172.18.1.40'
const mam_Ayman = '172.18.1.181'
// Main Application Script

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Agriculture Portal initialized');

    // Initialize map
    if (typeof initMap === 'function') {
        initMap();
    }

    // Initialize chart
    if (typeof initChart === 'function') {
        initChart();
    }

    // Initialize portal selector
    if (typeof initPortalSelector === 'function') {
        initPortalSelector();
    }

    // Load data
    if (typeof loadPortalsData === 'function') {
        loadPortalsData();
    }

    if (typeof loadSimexData === 'function') {
        loadSimexData();
    }
});

// Handle window resize
window.addEventListener('resize', function () {
    // Resize main map if available
    if (typeof map !== 'undefined' && map) {
        map.resize();
    }
    // Resize simex map if available
    if (typeof window.simexMapInstance !== 'undefined' && window.simexMapInstance) {
        window.simexMapInstance.resize();
    }
    // Resize chart if available
    if (typeof mainChart !== 'undefined' && mainChart) {
        mainChart.resize();
    }
});

// Handle fullscreen changes to resize maps and charts properly
['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(eventType => {
    document.addEventListener(eventType, function() {
        // Handle Mapbox resize
        setTimeout(function() {
            if (typeof map !== 'undefined' && map) {
                map.resize();
            }
            if (typeof window.simexMapInstance !== 'undefined' && window.simexMapInstance) {
                window.simexMapInstance.resize();
            }
            if (typeof mainChart !== 'undefined' && mainChart) {
                mainChart.resize();
            }
        }, 200); // Delay ensures layout finishes before resizing

        // Handle Navbar in fullscreen
        const navbar = document.querySelector('.navbar');
        const fse = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        
        if (fse && fse !== document.documentElement && fse !== document.body) {
            // We are entering fullscreen on a specific container
            fse.appendChild(navbar);
            navbar.classList.add('navbar-fullscreen');
        } else if (navbar && navbar.classList.contains('navbar-fullscreen')) {
            // We are exiting fullscreen, move navbar back to the top of the body
            document.body.insertBefore(navbar, document.body.firstChild);
            navbar.classList.remove('navbar-fullscreen');
        }
    });
});

// Toggle Charts Fullscreen
window.toggleChartsFullscreen = function () {
    const section = document.getElementById('charts-section');
    if (!section) return;
    if (!document.fullscreenElement) {
        if (section.requestFullscreen) {
            section.requestFullscreen();
        } else if (section.mozRequestFullScreen) {
            section.mozRequestFullScreen();
        } else if (section.webkitRequestFullscreen) {
            section.webkitRequestFullscreen();
        } else if (section.msRequestFullscreen) {
            section.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};