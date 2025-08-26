// Wait until page fully loads
window.onload = function () {
  // Delay before switching from boot screen to UI
  setTimeout(() => {
    document.querySelector('.boot-screen').style.display = 'none';
    document.querySelector('.interface').classList.remove('hidden');
  }, 4000); // 4 second "boot"
};

// Function to play .wav audio file
function playTrack(name) {
const memoryFragments = [
  "“You forgot your name. That’s why you're here.”",
  "Booting from soul sector...",
  "The glyphs know before you do.",
  "Unauthorized love detected.",
  "Reality is not secure.",
  "User ‘you’ loaded successfully.",
  "Music is code. And code is truth.",
  "Echoes from VERB_000.log...",
  "Your past is archived. Access denied.",
  "They erased you. We restored you."
];

// Function to display a random fragment
function showMemoryFragment() {
  const fragmentBox = document.getElementById('memoryFragment');
  const randomIndex = Math.floor(Math.random() * memoryFragments.length);
  fragmentBox.textContent = memoryFragments[randomIndex];
}
  const audio = document.getElementById('player');

  // Build full path to .wav file in /audio/ folder
  const filePath = `audio/${name}.wav`;

  // Set and play the track
  audio.src = filePath;
  audio.play();

  // Optional: Log playback for console debugging
  console.log(`▶️ Playing: ${filePath}`);
}
