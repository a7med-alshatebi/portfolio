// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.querySelector('[data-drawer-toggle="default-sidebar"]');
  const sidebar = document.getElementById('default-sidebar');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      // Toggle sidebar visibility
      sidebar.classList.toggle('-translate-x-full');
    });
    
    // Close sidebar when clicking on a link (mobile only)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Only close on mobile screens
        if (window.innerWidth < 640) {
          sidebar.classList.add('-translate-x-full');
        }
      });
    });
    
    // Close sidebar when clicking outside (mobile only)
    document.addEventListener('click', function(event) {
      if (window.innerWidth < 640) {
        if (!sidebarToggle.contains(event.target) && !sidebar.contains(event.target)) {
          sidebar.classList.add('-translate-x-full');
        }
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 640) {
        // On desktop, sidebar should be visible
        sidebar.classList.remove('-translate-x-full');
      } else {
        // On mobile, sidebar should be hidden by default
        sidebar.classList.add('-translate-x-full');
      }
    });
    
    // Initialize sidebar state based on screen size
    if (window.innerWidth < 640) {
      sidebar.classList.add('-translate-x-full');
    }
  }
});