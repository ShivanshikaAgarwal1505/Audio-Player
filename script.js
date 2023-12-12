document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("myAudio");
  const toggleBtn = document.getElementById("toggleBtn");
  const stopBtn = document.getElementById("stopBtn");
  const volumeRange = document.getElementById("volumeRange");

  function toggleAudio() {
    if (audio.paused || audio.ended) {
      audio.play();
      toggleBtn.textContent = "Pause";
    } else {
      audio.pause();
      toggleBtn.textContent = "Play";
    }
  }
 
  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    toggleBtn.textContent = "Play";
  }

  toggleBtn.addEventListener("click", toggleAudio);
  stopBtn.addEventListener("click", stopAudio);

  volumeRange.addEventListener("input", function () {
    audio.volume = volumeRange.value;
  });
});
