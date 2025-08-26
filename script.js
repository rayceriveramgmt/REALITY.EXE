// Show the interface after a fake boot sequence
window.onload = function () {
  setTimeout(() => {
    document.querySelector('.boot-screen').style.display = 'none';
    document.querySelector('.interface').classList.remove('hidden');
  }, 4000); // 4 seconds of "boot"
};

// Play the selected track
function playTrack(name) {
  const audio = document.getElementById('player');
  audio.src = `audio/${name}.mp3`;
  audio.play();
}
