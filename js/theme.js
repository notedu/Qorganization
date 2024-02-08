const btnTheme = document.getElementById("theme");
let theme = localStorage.getItem("theme") || "light";

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    if (theme == "light") {
        localStorage.setItem("theme", "dark");
        theme = "dark";
        document.getElementById("img-github-logo").setAttribute("src", "./img/github-logo-light.png");
        document.getElementById("img-theme").setAttribute("src", "./img/dark-mode.png");
    } else {
        localStorage.setItem("theme", "light")
        theme = "light";
        document.getElementById("img-github-logo").setAttribute("src", "./img/github-logo.png");
        document.getElementById("img-theme").setAttribute("src", "./img/light-mode.png");
    }
})

if (theme == "dark") {
    document.body.classList.add("dark")
    document.getElementById("img-github-logo").setAttribute("src", "./img/github-logo-light.png")
    document.getElementById("img-theme").setAttribute("src", "./img/dark-mode.png");
}