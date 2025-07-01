function toggleMenu() {
  const menu = document.getElementById("mobilemenu")
  menu.classList.toggle("active")
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})

document.querySelectorAll(".tecnologias-grid, .projetos-grid").forEach((el) => {
  el.classList.add("hidden")
  observer.observe(el)
})
