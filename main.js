// Mobile sidebar toggle functionality (right side)
document.addEventListener('DOMContentLoaded', function() {
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
  document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', handleFormSubmit);
});

async function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitText = document.getElementById('submitText');
  const loadingText = document.getElementById('loadingText');
  const formMessage = document.getElementById('formMessage');
  
  // Show loading state
  toggleLoadingState(true, submitBtn, submitText, loadingText);
  
  // Get and validate form data
  const formData = getFormData(form);
  const validationError = validateForm(formData);
  
  if (validationError) {
    showMessage(formMessage, validationError, 'error');
    toggleLoadingState(false, submitBtn, submitText, loadingText);
    return;
  }
  
  try {
    const response = await submitForm(formData);
    
    if (response.success) {
      showMessage(formMessage, CONFIG.MESSAGES.SUCCESS, 'success');
      form.reset();
    } else {
      throw new Error(response.error || CONFIG.MESSAGES.ERROR);
    }
  } catch (error) {
    handleSubmissionError(error, formMessage);
  } finally {
    toggleLoadingState(false, submitBtn, submitText, loadingText);
  }
}

function getFormData(form) {
  return {
    name: form.querySelector('#name').value.trim(),
    email: form.querySelector('#email').value.trim(),
    subject: form.querySelector('#subject').value.trim(),
    message: form.querySelector('#message').value.trim()
  };
}

function validateForm(data) {
  if (!data.name || !data.email || !data.message) {
    return CONFIG.MESSAGES.VALIDATION_ERROR;
  }
  
  if (!isValidEmail(data.email)) {
    return 'Please enter a valid email address.';
  }
  
  return null;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function submitForm(data) {
  try {
    const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Submission error:', error);
    throw error;
  }
}

function handleSubmissionError(error, formMessage) {
  console.error('Form submission failed:', error);
  
  let errorMessage = CONFIG.MESSAGES.ERROR;
  
  if (error.message.includes('Failed to fetch')) {
    errorMessage = CONFIG.MESSAGES.NETWORK_ERROR;
  } else if (error.message.includes('HTTP error')) {
    errorMessage += ' (Server error)';
  }
  
  errorMessage += CONFIG.CONTACT_EMAIL ? ` at ${CONFIG.CONTACT_EMAIL}` : '';
  showMessage(formMessage, errorMessage, 'error');
}

function toggleLoadingState(isLoading, submitBtn, submitText, loadingText) {
  submitBtn.disabled = isLoading;
  
  if (isLoading) {
    submitText.classList.add('hidden');
    loadingText.classList.remove('hidden');
  } else {
    submitText.classList.remove('hidden');
    loadingText.classList.add('hidden');
  }
}

function showMessage(element, message, type) {
  if (!element) return;
  
  element.textContent = message;
  element.className = `p-4 rounded-lg ${type === 'success' 
    ? 'bg-green-100 text-green-700' 
    : 'bg-red-100 text-red-700'}`;
  element.classList.remove('hidden');
  
  setTimeout(() => {
    element.classList.add('hidden');
  }, CONFIG.MESSAGE_TIMEOUT);
}
});