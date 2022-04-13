const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const playButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')

const togglePlay = () => {
  if (video.paused) {
    video.play()
    playButton.innerText = '❚ ❚'
  } else {
    video.pause()
    playButton.innerText = '►'
  }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

video.addEventListener('click', togglePlay)
playButton.addEventListener('click', togglePlay)
skipButtons.forEach((button) => {
  button.addEventListener('click', skip)
})
