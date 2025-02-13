document.getElementById('proposalButton').addEventListener('click', function() {
    const proposalDiv = document.getElementById('proposal');
    proposalDiv.classList.toggle('hidden');
    proposalDiv.classList.toggle('show');
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! I’m so happy to be your Valentine! ❤️');
    createConfetti();
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('That’s okay! You’re still my favorite person! 😊');
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confettiPiece);
        setTimeout(() => {
            confettiPiece.remove();
        }, 3000);
    }
}