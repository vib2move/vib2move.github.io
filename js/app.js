// JavaScript for VIB2MOVE project website

$(document).ready(function () {
    // Initialize tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Function to play videos when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });
    
    videos.forEach(video => {
        observer.observe(video);
    });
});
