let circle = document.getElementById("breathing-circle");
let instructions = document.getElementById("instructions");
let startBtn = document.getElementById("start-btn");
let feedback = document.getElementById("feedback");
let breathingInterval;
let isBreathingIn = true;

function startBreathing() {
    feedback.textContent = "";
    instructions.textContent = "Breathe in... and out... follow the circle!";
    startBtn.style.display = "none";

    let cycleCount = 0;
    breathingInterval = setInterval(() => {
        if (isBreathingIn) {
            circle.style.transform = "scale(1.5)";
            circle.style.backgroundColor = "rgba(123, 179, 255, 0.8)";
            instructions.textContent = "Breathe in...";
        } else {
            circle.style.transform = "scale(1)";
            circle.style.backgroundColor = "rgba(72, 201, 176, 0.8)";
            instructions.textContent = "Breathe out...";
        }

        isBreathingIn = !isBreathingIn;
        cycleCount++;

        if (cycleCount >= 8) {
            endBreathing();
        }
    }, 4000);
}

function endBreathing() {
    clearInterval(breathingInterval);
    instructions.textContent = "Well done! Feel the calmness.";
    feedback.textContent = "You've completed the exercise. Take a moment to appreciate yourself.";
    startBtn.style.display = "inline-block";
}

startBtn.addEventListener("click", startBreathing);
