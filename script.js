const ball = document.getElementById('ball');
const message = document.getElementById('message');
const startButton = document.getElementById('startButton');
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
    startButton.style.display = 'none'; // Start-Button ausblenden
    ball.style.display = 'block'; // Ball anzeigen
    moveBall();
    startTime = new Date();
    message.textContent = "Klicke auf den Ball!";
}

// Ball geklickt
ball.addEventListener('click', () => {
    const endTime = new Date();
    const reactionTime = (endTime - startTime) / 1000;
    message.textContent = `Super! Deine Reaktionszeit: ${reactionTime.toFixed(2)} Sekunden.`;
    ball.style.display = 'none'; // Ball ausblenden
    startButton.style.display = 'block'; // Start-Button anzeigen
});

// Start-Button klicken
startButton.addEventListener('click', startGame);
