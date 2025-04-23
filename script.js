let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // Clear any existing intervals

  const targetInput = document.getElementById('target-date').value;
  const targetDate = new Date(targetInput);

  if (isNaN(targetDate.getTime())) {
    alert('Please select a valid date and time!');
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = '<p>Countdown Complete!</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);
}

function calculateIterative() {
    const num = parseInt(document.getElementById("number").value);
    if (!isValid(num)) return;
  
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  
    displayFactorialResult(result, "Iterative");
  }
  
  function calculateRecursive() {
    const num = parseInt(document.getElementById("number").value);
    if (!isValid(num)) return;
  
    const result = recursiveFactorial(num);
    displayFactorialResult(result, "Recursive");
  }
  
  function recursiveFactorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * recursiveFactorial(n - 1);
  }
  
  function displayFactorialResult(result, method) {
    document.getElementById("factorial-output").innerHTML =
      `Factorial Result (${method}): <strong>${result}</strong>`;
  }
  
  function isValid(num) {
    if (isNaN(num) || num < 0) {
      alert("Please enter a valid non-negative integer.");
      return false;
    }
    if (num > 170) { // Prevent overflow in JavaScript
      alert("Number too large! Please enter a number less than or equal to 170.");
      return false;
    }
    return true;
  }