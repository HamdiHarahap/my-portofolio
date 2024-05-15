AOS.init({
    duration: 800,
    offset: 300,
    disable: function() {
        return window.innerWidth <= 768;
    }
})