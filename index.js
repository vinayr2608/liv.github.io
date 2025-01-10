// Toggle Sidebar Menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.right === '0px') {
    menu.style.right = '-250px'; // Hides the sidebar
  } else {
    menu.style.right = '0px'; // Shows the sidebar
  }
}

// Function to open payment selection page
function openPaymentSelection() {
  window.location.href = "payment-selection.html"; // Ensure this file exists or correct path
}

// Function to select payment amount
function selectPayment(amount) {
  // You can display the selected amount and move to the next page
  alert(`You have selected ₹${amount}`);
  window.location.href = "payment-form.html"; // Ensure this file exists or correct path
}

// Function to submit payment form
function submitPayment(event) {
  event.preventDefault();
  
  const phoneNumber = document.getElementById('phoneNumber').value;
  const bankName = document.getElementById('bankName').value;
  const upiPin = document.getElementById('upiPin').value;

  // Show a success alert with payment details
  alert(`Payment submitted!\nPhone: ${phoneNumber}\nBank: ${bankName}\nUPI PIN: ${upiPin}`);

  // Redirect to a thank you page after submission
  window.location.href = "thank-you.html"; // Ensure this file exists or correct path
}

// Function to initialize the sidebar when the page loads
window.onload = function () {
  const menu = document.getElementById('menu');
  if (!menu) return;
  // Ensure menu is hidden initially
  menu.style.right = '-250px';
}
