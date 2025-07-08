// pick submission
document.getElementById("pickForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const player = document.getElementById("player").value;
    const team = document.getElementById("team").value;
    document.getElementById("confirmationMessage").textContent =
    `✅ Your pick for ${player} (${team}) is locked in!`;
    this.reset();
});