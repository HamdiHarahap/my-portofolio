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

        lines.forEach((line) => {
            line.classList.toggle('line-light')
        })
    })
})

const menus = document.querySelectorAll('.menu')
const list = document.querySelector('.navigation') 
const open = document.querySelector('.open')
const close = document.querySelector('.close')

menus.forEach((menu) => {
    menu.addEventListener('click', function () {
        list.classList.toggle('list-alive')
        open.classList.toggle('off')
        close.classList.toggle('on')
    })
})

const items = document.querySelectorAll('.item')

items.forEach((item) => {
    item.addEventListener('click', function () {
        list.classList.toggle('list-alive')
    })
})