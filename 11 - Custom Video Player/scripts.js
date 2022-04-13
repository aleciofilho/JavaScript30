const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const playButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const sliders = player.querySelectorAll('.player__slider')

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

function sliderUpdate() {
  video[this.name] = this.value
}

video.addEventListener('click', togglePlay)
playButton.addEventListener('click', togglePlay)
skipButtons.forEach((button) => {
  button.addEventListener('click', skip)
})
sliders.forEach((slider) => {
  slider.addEventListener('change', sliderUpdate)
  slider.addEventListener('mousemove', sliderUpdate)
})
