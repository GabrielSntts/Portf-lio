document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle")
  const body = document.body
  const icon = toggleButton.querySelector("i")

  toggleButton.addEventListener("click", () => {
    // Alterna a classe dark-mode no body
    body.classList.toggle("dark-mode")

    // Troca ícone de Lua para Sol e vice-versa
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
    }
  })
})
