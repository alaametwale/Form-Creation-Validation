// Function to check user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the checked radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    // Get user answer
    const userAnswer = selectedOption.value;

    // Compare answers
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
