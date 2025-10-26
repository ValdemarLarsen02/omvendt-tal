let min = 0;
let max = 100;
let guess = 0;
let tries = 0;

function newGuess() {
    // Tjek om der overhovedet er muligheder tilbage
    if (min > max) {
        document.getElementById("message").textContent = "Noget gik galt – har du snydt? 😅";
        return;
    }

    // Hvis kun ét tal er muligt
    if (min === max) {
        guess = min;
        document.getElementById("guess").textContent = guess;
        document.getElementById("message").textContent = `Det må være ${guess}! Der er ingen andre muligheder. 🎯`;
        document.getElementById("buttons").innerHTML = "<p>Spillet er slut!</p>";
        return;
    }

    // Lav et nyt gæt (midten)
    guess = Math.floor((min + max) / 2);
    tries++;

    document.getElementById("guess").textContent = guess;
    document.getElementById("tries").textContent = "Antal forsøg: " + tries;
    document.getElementById("message").textContent = "Er mit gæt for højt, for lavt, eller korrekt?";

    console.log(`min: ${min}, guess: ${guess}, max: ${max}`);
}

function tooLow() {
    // Justér minimum
    min = guess + 1;
    document.getElementById("message").textContent = "Okay, jeg prøver et højere tal...";
    newGuess();
}

function tooHigh() {
    // Justér maksimum
    max = guess - 1;
    document.getElementById("message").textContent = "Okay, jeg prøver et lavere tal...";
    newGuess();
}

function correct() {
    // Kommentar baseret på antal gæt
    let comment = "";
    if (tries <= 3) comment = "Super";
    else if (tries <= 5) comment = "Godt klaret";
    else comment = "yes der du fandt da ud af det...";

    document.getElementById("message").textContent = `Jeg gættede det! (${guess}) 🎉 ${comment}`;
    document.getElementById("buttons").innerHTML = "<p>Spillet er slut!</p>";
}

function init() {
    document.getElementById("tooLow").addEventListener("click", tooLow);
    document.getElementById("tooHigh").addEventListener("click", tooHigh);
    document.getElementById("correct").addEventListener("click", correct);

    newGuess(); // Første gæt
}

window.addEventListener("DOMContentLoaded", init);
