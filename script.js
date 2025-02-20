const ball = document.getElementById('ball');
const message = document.getElementById('message');
let startTime;

// Ball an eine zufällige Position bewegen
function moveBall() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}

// Spiel starten
function startGame() {
    moveBall();
    startTime = new Date();
    message.textContent = "Klicke auf den Ball!";
}

// Ball geklickt
ball.addEventListener('click', () => {
    const endTime = new Date();
    const reactionTime = (endTime - startTime) / 1000;
    message.textContent = `Super! Deine Reaktionszeit: ${reactionTime.toFixed(2)} Sekunden.`;
    setTimeout(startGame, 1000); // Neustart nach 1 Sekunde
});

// Spiel initial starten
startGame();
