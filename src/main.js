
// CONSTS
// =========================================================
// BUTTON HEIGHT 600px
// BG HEIGHT 1350px

// Aspect ratio of button height to background height
const RATIO = 600 / 1350;

// =========================================================

// ELEMENTS
// =========================================================
const button = document.getElementById("play-button");
const background = document.getElementById("background");

// UTILS
// =========================================================

function setButtonHeight() {
  const windowHeight = background.clientHeight;
  const buttonHeight = windowHeight * RATIO * 0.7; // Cap the button height at 600px
  button.style.height = `${buttonHeight}px`;
}


// EVENT LISTENERS
// =========================================================
window.addEventListener("resize", () => {
    setButtonHeight();
    console.log(background.clientHeight, button.clientHeight);
});
document.addEventListener("DOMContentLoaded", () => {
    setButtonHeight();
});

// INITIALIZE
// =========================================================
setButtonHeight();
// =========================================================
