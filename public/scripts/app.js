function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('open');
}
    
// Simple kickoff countdown (demo only)
const kickoffTime = new Date('2025-09-07T13:00:00'); // example kickoff
function updateCountdown() {
    const now = new Date();
    const diff = kickoffTime - now;
    if (diff < 0) return document.getElementById("countdownTimer").textContent = "Game has started!";
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("countdownTimer").textContent = `${hours}h ${minutes}m ${seconds}s`;
}
if (document.getElementById("countdownTimer")) setInterval(updateCountdown, 1000);