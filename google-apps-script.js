// Google Apps Script Code for Contact Form
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request');
    console.log('Request data:', e.postData.contents);
    
    // Get the active spreadsheet (make sure you're running this from the sheet)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({success: false, error: 'Invalid JSON data'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    console.log('Parsed data:', data);
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({success: false, error: 'Missing required fields'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add new row with form data
    const newRow = [
      new Date(),
      data.name,
      data.email,
      data.subject,
      data.message
    ];
    
    console.log('Adding row:', newRow);
    sheet.appendRow(newRow);
    
    console.log('Row added successfully');
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Script Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  console.log('Received GET request');
  return ContentService
    .createTextOutput("Contact form handler is working! This endpoint accepts POST requests.")
    .setMimeType(ContentService.MimeType.TEXT);
}

// Test function to verify the script works
function testScript() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message"
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
