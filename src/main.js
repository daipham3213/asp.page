
// CONSTS
// =========================================================
// BUTTON HEIGHT 600px
// BG HEIGHT 1350px

// Aspect ratio of button height to background height
const RATIO = 600 / 1350 * 0.8;

// =========================================================

// ELEMENTS
// =========================================================
const button = document.getElementById("play-button");
const background = document.getElementById("background");

// UTILS
// =========================================================

function setButtonHeight(ratio = 1) {
  const windowHeight = background.clientHeight;
  const buttonHeight = windowHeight * RATIO * ratio; // Cap the button height at 600px
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

// shrink button on click
button.addEventListener("mousedown", () => {
    setButtonHeight(0.8);
});
button.addEventListener("mouseup", () => {
    setButtonHeight();
});
// INITIALIZE
// =========================================================
setButtonHeight();
// =========================================================
