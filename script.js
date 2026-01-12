/**
 * Generates floating heart particles in the background
 */
function createHearts() {
    const container = document.getElementById('heartContainer');
    const heartIcons = ['❤️', '💖', '💕', '🌸', '✨'];
    
    // Create a heart element
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    
    // Randomize appearance
    heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    container.appendChild(heart);
    
    // Clean up memory
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate hearts continuously
setInterval(createHearts, 400);

/**
 * Trigger confetti when "I Love You" is clicked
 */
function handleLoveClick() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff758c', '#ff7eb3', '#ffffff']
    });
}

/**
 * Handle the forgiveness button interaction
 */
function handleForgiveClick() {
    const btn = document.getElementById('forgiveBtn');
    
    // Change button appearance
    btn.innerHTML = "Thank You! ❤️";
    btn.style.background = "#4CAF50";
    btn.style.color = "white";
    btn.style.borderColor = "#4CAF50";
    
    // Big celebratory confetti burst
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff758c', '#4CAF50']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff758c', '#4CAF50']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Show a gentle alert after a delay
    setTimeout(() => {
        alert("Your forgiveness means the world to me. I love you more than words can say.");
    }, 1000);
}
