let winStreak = 0;

function play(userChoice) {
    const coin = Math.random() < 0.5 ? "heads" : "tails";
    const resultDiv = document.getElementById("result");
    const img = document.getElementById("coin-image");

    img.src = `assets/${coin}.png`;
    img.style.display = "block";

    if (userChoice === coin) {
        winStreak++;
        resultDiv.textContent =
            `Streak: ${winStreak}`;
    } else {
        winStreak = 0;
        resultDiv.textContent =
            `Streak: 0`;
    }
}
