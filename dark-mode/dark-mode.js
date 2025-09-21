document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle")
  const body = document.body
  const icon = toggleButton.querySelector("i")
  const heroVideo = document.querySelector(".hero video")

  // URLs dos vídeos
  const videoLight = "../img/mp4/programando-js.mp4" 
  const videoDark = "../img/mp4/video-darkmode.mp4" 

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
      heroVideo.src = videoDark // muda vídeo para modo escuro
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
      heroVideo.src = videoLight
    }

    heroVideo.play()
  })
})
