
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

// Placeholder for Pinguu
const pinguu = {
    x: 50,
    y: 200,
    width: 50,
    height: 50,
    color: 'blue',
};

// Draw Pinguu
function drawPinguu() {
    ctx.fillStyle = pinguu.color;
    ctx.fillRect(pinguu.x, pinguu.y, pinguu.width, pinguu.height);
}

// Update the game
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPinguu();
}

// Start the game loop
function gameLoop() {
    updateGame();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
