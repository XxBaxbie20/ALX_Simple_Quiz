// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    const userSelection = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option was selected
    if (!userSelection) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = userSelection.value;

    // Step 4: Compare user's answer with the correct one
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
