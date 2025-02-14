document.getElementById("showButton").addEventListener("click", function () {
  createHearts();
  setTimeout(() => {
    document.getElementById("content").style.display = "block";
    this.style.display = "none";
    playMusic();
  }, 1000); // Delay to show content after hearts animation
});

function createHearts() {
  const heartsContainer = document.getElementById("heartsContainer");
  const button = document.getElementById("showButton");
  const buttonRect = button.getBoundingClientRect();

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
    heart.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}

function playMusic() {
  const music = document.getElementById("backgroundMusic");
  music.play();
}

function createCursorHeart(e) {
  const cursorHeart = document.createElement("div");
  cursorHeart.className = "cursor-heart";
  cursorHeart.textContent = "A<3D";
  cursorHeart.style.left = `${e.pageX || e.touches[0].pageX}px`;
  cursorHeart.style.top = `${e.pageY || e.touches[0].pageY}px`;
  document.body.appendChild(cursorHeart);
  setTimeout(() => cursorHeart.remove(), 1000);
}

document.addEventListener("mousemove", createCursorHeart);
document.addEventListener("touchmove", createCursorHeart);
