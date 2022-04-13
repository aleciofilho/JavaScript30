const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const playButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const sliders = player.querySelectorAll('.player__slider')
const progress = player.querySelector('.progress__filled')

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

function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100
  progress.style.flexBasis = `${percent}%`
}

video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', updateProgressBar)
playButton.addEventListener('click', togglePlay)
skipButtons.forEach((button) => {
  button.addEventListener('click', skip)
})
sliders.forEach((slider) => {
  slider.addEventListener('change', sliderUpdate)
  slider.addEventListener('mousemove', sliderUpdate)
})
