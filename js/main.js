feather.replace()

const themes = document.querySelectorAll('.theme')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const ui = document.querySelector('.ui')
const web = document.querySelector('.web')
const lines = document.querySelectorAll('.line')
const body = document.body

themes.forEach((theme) => {
    theme.addEventListener('click', function () {
        body.classList.toggle('dark-mode')
        moon.classList.toggle('hidden')
        sun.classList.toggle('flex')
        ui.classList.toggle('bg-dark')
        web.classList.toggle('bg-dark')
        Swal.fire("you change the theme!")

        lines.forEach((line) => {
            line.classList.toggle('line-light')
        })
    })
})