document.getElementById('donate-btn').addEventListener('click', () => {
    alert("Thank you for donating $1! Your $1 helped feed 1 kid today.");
    
    // Move the character to a random position on the game board
    const pinguu = document.getElementById('pinguu');
    const gameContainer = document.querySelector('.game-container');
    const maxX = gameContainer.offsetWidth - pinguu.offsetWidth;
    const maxY = gameContainer.offsetHeight - pinguu.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    pinguu.style.left = `${randomX}px`;
    pinguu.style.top = `${randomY}px`;
});
