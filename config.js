const CONFIG = {
  // Your Google Apps Script web app URL
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwfBi8Sj10RQQM9LyEytlt4P5rKpB4RQLn78tsOnOnbT5PkBzlmTdIXrcFgCS0TcWc82w/exec',
  
  // Fallback contact email
  CONTACT_EMAIL: 'ahmedalshatibi22@gmail.com',
  
  // Form submission messages
  MESSAGES: {
    SUCCESS: 'Thank you! Your message has been sent successfully.',
    ERROR: 'Sorry, there was an error sending your message. Please try again or contact me directly at ',
    VALIDATION_ERROR: 'Please fill in all required fields correctly.',
    NETWORK_ERROR: 'Network error occurred. Please check your connection and try again.'
  },
  
  // Timeout for showing messages (in milliseconds)
  MESSAGE_TIMEOUT: 5000
};