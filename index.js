
// Assuming we have a div with id 'dodger' and a div with id 'game' as the game area
const dodger = document.getElementById('dodger');
const game = document.getElementById('game');

// Function to move the dodger to the left
function moveDodgerLeft() {
  // Get the current position of the dodger (style.left is a string like "200px")
  const left = parseInt(dodger.style.left.replace('px', ''), 10);

  // Check if the dodger is not already at the left edge (we don't want to move it off-screen)
  if (left > 0) {
    // Move the dodger 1px to the left
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  // Get the current position of the dodger (style.left is a string like "200px")
  const left = parseInt(dodger.style.left.replace('px', ''), 10);

  // Check if the dodger is not at the far right (we don't want to move it off-screen)
  if (left < game.offsetWidth - 40) {
    // Move the dodger 1px to the right
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener to detect keydown events
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();  // Call moveDodgerLeft() when left arrow is pressed
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();  // Call moveDodgerRight() when right arrow is pressed
  }
});
