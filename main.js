// Mobile sidebar toggle functionality (right side)
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode functionality
  function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleDesktop = document.getElementById('darkModeToggleDesktop');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const sunIconDesktop = document.getElementById('sunIconDesktop');
    const moonIconDesktop = document.getElementById('moonIconDesktop');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
      if (sunIconDesktop && moonIconDesktop) {
        sunIconDesktop.classList.add('hidden');
        moonIconDesktop.classList.remove('hidden');
      }
    }
    
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      
      // Toggle mobile icons
      if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
      }
      
      // Toggle desktop icons
      if (sunIconDesktop && moonIconDesktop) {
        sunIconDesktop.classList.toggle('hidden');
        moonIconDesktop.classList.toggle('hidden');
      }
      
      // Save theme preference
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }
    
    // Add event listeners for both mobile and desktop toggles
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    if (darkModeToggleDesktop) {
      darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
    }
  }
  
  // Initialize dark mode
  initDarkMode();

  const sidebarButton = document.querySelector('[data-drawer-toggle="default-sidebar"]');
  const sidebar = document.getElementById('default-sidebar');
  
  if (sidebarButton && sidebar) {
    sidebarButton.addEventListener('click', function() {
      // Toggle sidebar visibility (slide from right)
      sidebar.classList.toggle('translate-x-full');
      
      // Toggle button icon
      const icon = sidebarButton.querySelector('svg path');
      if (sidebar.classList.contains('translate-x-full')) {
        // Closed state - show hamburger menu
        icon.setAttribute('d', 'M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z');
      } else {
        // Open state - show X
        icon.setAttribute('d', 'M6.225 4.811a.75.75 0 011.06-.04L10 7.168l2.715-2.397a.75.75 0 111 1.228L11.168 8l2.547 2.001a.75.75 0 11-.98 1.226L10 9.832 7.265 11.227a.75.75 0 11-.98-1.226L8.832 8l-2.547-2.001a.75.75 0 01-.06-1.188z');
      }
    });
    
    // Close sidebar when clicking on a link
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function() {
        sidebar.classList.add('translate-x-full');
        const icon = sidebarButton.querySelector('svg path');
        icon.setAttribute('d', 'M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z');
      });
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
      if (!sidebarButton.contains(event.target) && !sidebar.contains(event.target)) {
        sidebar.classList.add('translate-x-full');
        const icon = sidebarButton.querySelector('svg path');
        icon.setAttribute('d', 'M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z');
      }
    });
  }

  // Contact form handler for Google Sheets
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Check if CONFIG is loaded
      if (typeof CONFIG === 'undefined' || !CONFIG.GOOGLE_SCRIPT_URL) {
        showMessage('Configuration error: Please contact me directly at ahmedalshatibi22@gmail.com', 'error');
        return;
      }
      
      const GOOGLE_SCRIPT_URL = CONFIG.GOOGLE_SCRIPT_URL;
      
      const submitBtn = document.getElementById('submitBtn');
      const submitText = document.getElementById('submitText');
      const loadingText = document.getElementById('loadingText');
      const formMessage = document.getElementById('formMessage');
      
      // Show loading state
      submitBtn.disabled = true;
      submitText.classList.add('hidden');
      loadingText.classList.remove('hidden');
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      try {
        console.log('Sending data to:', GOOGLE_SCRIPT_URL);
        console.log('Form data:', formData);
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          mode: 'no-cors' // Add this back for Google Apps Script
        });
        
        // Since we're using no-cors, we can't read the response
        // We'll assume success if no error is thrown
        console.log('Request sent successfully');
        showMessage('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
        
      } catch (error) {
        console.error('Error sending form:', error);
        
        // Provide helpful error message with fallback
        let errorMessage = 'Sorry, there was an error sending your message. ';
        errorMessage += 'Please contact me directly at ' + (CONFIG.CONTACT_EMAIL || 'ahmedalshatibi22@gmail.com');
        
        showMessage(errorMessage, 'error');
      }
      
      // Reset button state
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      loadingText.classList.add('hidden');
    });
  }

  function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
    formMessage.classList.remove('hidden');
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }
});