document.getElementById("reveal-btn").addEventListener("click", () => {
  const surpriseBox = document.querySelector(".surprise-box");
  const messageBox = document.querySelector(".message-box");

  surpriseBox.style.display = "none";
  messageBox.classList.remove("hidden");
  launchConfetti();
  typeMessage();
});

function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 3 + 1,
    d: Math.random() * 10 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10,
  }));

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
  }

  function updateConfetti() {
    confettiPieces.forEach((p) => {
      p.y += p.d;
      p.tilt += Math.random() * 0.1;
      if (p.y > canvas.height) {
        p.y = -p.r;
      }
    });
  }

  function loop() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(loop);
  }

  loop();
}

function typeMessage() {
  const message = document.getElementById("message");

  message.style.animation =
    "typing 4s steps(40) 1s forwards, fadeIn 2s ease forwards";
}
