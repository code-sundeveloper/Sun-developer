// Card Flip
const creditCard = document.querySelector('.credit-card');
const cvvInput = document.getElementById('cvv');

cvvInput.addEventListener('focus', () => {
  creditCard.classList.add('flipped');
});

cvvInput.addEventListener('blur', () => {
  creditCard.classList.remove('flipped');
});

// Real-Time Card Details Update
const cardNumberInput = document.getElementById('card-number');
const cardholderNameInput = document.getElementById('cardholder-name');
const expirationDateInput = document.getElementById('expiration-date');
const cvvDisplay = document.getElementById('display-cvv');

const displayCardNumber = document.getElementById('display-card-number');
const displayCardholderName = document.getElementById('display-cardholder-name');
const displayExpirationDate = document.getElementById('display-expiration-date');

// Allow only numbers in Card Number and CVV
cardNumberInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
  value = value.replace(/(\d{4})/g, '$1 ').trim(); // Add space every 4 digits
  e.target.value = value.substring(0, 19); // Limit to 16 digits + 3 spaces
  displayCardNumber.textContent = value || '**** **** **** ****';
});

cvvInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, ''); // Remove non-digits
  cvvDisplay.textContent = e.target.value || '***';
});

// Allow only letters and spaces in Cardholder Name
cardholderNameInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''); // Allow only letters and spaces
  displayCardholderName.textContent = e.target.value || 'FULL NAME';
});

// Auto-format Expiration Date (MM/YY)
expirationDateInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
  if (value.length > 2) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4); // Add slash after MM
  }
  e.target.value = value.substring(0, 5); // Limit to MM/YY
  displayExpirationDate.textContent = value || 'MM/YY';
});