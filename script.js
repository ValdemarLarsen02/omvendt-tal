let guess = 0;
let tries = 0;

function newGuess() {
    guess = Math.floor(Math.random() * 101); // Tilfældigt tal 0-100
    tries++;
    document.getElementById("guess").textContent = guess;
    document.getElementById("tries").textContent = "Antal forsøg: " + tries;
    document.getElementById("message").textContent = "Er mit gæt for højt, for lavt, eller korrekt?";
}

// Funktioner til hver knap:
function tooLow() {
    document.getElementById("message").textContent = "Okay, jeg prøver et højere tal...";
    newGuess();
}

function tooHigh() {
    document.getElementById("message").textContent = "Okay, jeg prøver et lavere tal...";
    newGuess();
}

function correct() {
    document.getElementById("message").textContent = `Jeg gættede det! (${guess}) 🎉`;
    document.getElementById("buttons").innerHTML = "<p>Spillet er slut!</p>";
}

function init() {
    document.getElementById("tooLow").addEventListener("click", tooLow);
    document.getElementById("tooHigh").addEventListener("click", tooHigh);
    document.getElementById("correct").addEventListener("click", correct);

    newGuess(); // Første gæt når siden loader
}

window.addEventListener("DOMContentLoaded", init);
