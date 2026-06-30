// Function 1
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Function 4
function isPalindrome(word) {
  const lowercaseWord = word.toLowerCase();
  const reversedWord = lowercaseWord.split("").reverse().join("");

  return lowercaseWord === reversedWord;
}

// Function 5
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
