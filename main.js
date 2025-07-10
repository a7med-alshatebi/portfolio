// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuButton.querySelector('i');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      // Toggle mobile menu visibility
      mobileMenu.classList.toggle('hidden');
      
      // Toggle hamburger/close icon
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.className = 'fas fa-bars text-xl';
      } else {
        menuIcon.className = 'fas fa-times text-xl';
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'fas fa-bars text-xl';
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'fas fa-bars text-xl';
      }
    });
  }
});