AOS.init({
    duration: 800,
    offset: 300,
    disable: function() {
        return window.innerWidth <= 768
    }
})

var typed = new Typed('#element', {
    strings: ['Front End Developer', 'UI/UX Designer'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 20,
})