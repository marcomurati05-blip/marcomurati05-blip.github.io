/*
  script.js: the small bits of behaviour on the page.
  JavaScript runs in the visitor's browser and can change the page after it loads.
*/

// ===== 1. CHANGING GREETING =====
// A list (array) of greetings in the languages you speak.
// Each item is an object with two properties: the word and the language name.
const greetings = [
  { word: "Ciao", lang: "Italian" },
  { word: "Hello", lang: "English" },
  { word: "Përshëndetje", lang: "Albanian" },
  { word: "Bonjour", lang: "French" }
];

// Find the two elements in index.html that we want to change (by their id)
const wordEl = document.getElementById("greeting-word");
const langEl = document.getElementById("greeting-lang");

// Check whether the visitor has asked their device to reduce animations
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let current = 0; // which greeting is showing right now (0 = the first one)

function showNextGreeting() {
  // Move to the next greeting; % (remainder) wraps back to 0 after the last one
  current = (current + 1) % greetings.length;

  if (reduceMotion) {
    // No animation: just swap the text
    wordEl.textContent = greetings[current].word;
    langEl.textContent = greetings[current].lang;
    return;
  }

  // Fade out (the CSS class does the animation)...
  wordEl.classList.add("is-changing");

  // ...wait 350 milliseconds, swap the text, then fade back in
  setTimeout(function () {
    wordEl.textContent = greetings[current].word;
    langEl.textContent = greetings[current].lang;
    wordEl.classList.remove("is-changing");
  }, 350);
}

// Run showNextGreeting every 2.5 seconds
setInterval(showNextGreeting, 2500);


// ===== 2. FOOTER YEAR =====
// Puts the current year in the footer so you never have to update it by hand
document.getElementById("year").textContent = new Date().getFullYear();
