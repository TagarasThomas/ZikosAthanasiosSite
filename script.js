// Ενεργοποίηση του Bootstrap Carousel με αυτόματη εναλλαγή
document.addEventListener('DOMContentLoaded', () => {
    const carouselEl = document.querySelector('#heroCarousel');
    if (carouselEl) {
      new bootstrap.Carousel(carouselEl, {
        interval: 4000,  // αλλαγή κάθε 4 δευτερόλεπτα
        ride: 'carousel'
      });
    }
  });

  // Ενεργοποίηση Lightbox
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true
    });
  });
  
  