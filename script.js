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
  const audio = document.getElementById('player');

  // Build full path to .wav file in /audio/ folder
  const filePath = `audio/${name}.wav`;

  // Set and play the track
  audio.src = filePath;
  audio.play();

  // Optional: Log playback for console debugging
  console.log(`▶️ Playing: ${filePath}`);
}
