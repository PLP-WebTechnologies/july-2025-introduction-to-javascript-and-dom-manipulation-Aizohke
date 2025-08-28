// Variables & Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = " You are eligible to vote!";
  } else {
    result.textContent = " You are too young to vote.";
  }
});

// Functions
// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function 2: Format a message
function formatMessage(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Using the functions
document.getElementById("calcSumBtn").addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = calculateSum(num1, num2);

  document.getElementById("sumResult").textContent = `Sum = ${sum}`;
  console.log(formatMessage("Student")); 
});

//  Loops
// Countdown using for loop
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

//  Looping through an array
let fruits = [" Apple", " Banana", " Orange"];
fruits.forEach(fruit => {
  console.log("I like", fruit);
});

// DOM Manipulation

//  Toggle Dark Mode
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = " The text has been changed!";
});

// Create a new element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = " This paragraph was added with JavaScript!";
document.body.appendChild(newParagraph);
