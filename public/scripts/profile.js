// Simplified static loader
const survivorList = [
    { name: "Daniel", status: "alive", streak: 3 },
    { name: "Ellen", status: "eliminated", streak: 2 },
    { name: "Marco", status: "alive", streak: 4 },
];
    
const ul = document.querySelector(".leaderboard");
survivorList.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${user.name}</strong> — ${user.status === "alive" ? "✅ Alive" : "❌ Eliminated"} — Streak: ${user.streak}`;
    ul.appendChild(li);
});