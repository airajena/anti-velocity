document.addEventListener("DOMContentLoaded", function() {
  // Carousel using Bootstrap 5
  // Bootstrap's carousel runs automatically on data attributes

  // Lazy load images
  const lazyImages = document.querySelectorAll('img[data-src]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        io.unobserve(img);
      }
    });
  }, { threshold: 0.1 });
  lazyImages.forEach(img => io.observe(img));

  // Mobile hamburger menu toggle
  document.querySelectorAll('.navbar-toggler').forEach(btn => {
    btn.addEventListener('click', function(){
      let navMenu = document.getElementById('navbarNav');
      if (navMenu) navMenu.classList.toggle('show');
    });
  });

  // Simple floating chatbot demo
  const chatBtn = document.getElementById('chatbot-btn');
  const chatWidget = document.getElementById('chat-widget');
  if (chatBtn && chatWidget) {
    chatBtn.addEventListener('click', ()=> {
      chatWidget.classList.add('open');
      chatBtn.classList.add('hidden');
    });
    document.getElementById('close-chat').onclick = () => {
      chatWidget.classList.remove('open');
      chatBtn.classList.remove('hidden');
    };
  }
});