const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const playButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const sliders = player.querySelectorAll('.player__slider')
const progress = player.querySelector('.progress__filled')
const progressBar = player.querySelector('.progress')

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

const updateProgressBar = () => {
  const percent = (video.currentTime / video.duration) * 100
  progress.style.flexBasis = `${percent}%`
}

function setProgress(event) {
  const videoTime = (event.offsetX / progressBar.offsetWidth) * video.duration
  video.currentTime = videoTime
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
progressBar.addEventListener('click', setProgress)

let mouseDown = false
progressBar.addEventListener('mousedown', () => mouseDown = true)
progressBar.addEventListener('mouseup', () => mouseDown = false)
progressBar.addEventListener('mousemove', (event) => {
  if (mouseDown) {
    setProgress(event)
  }
})
