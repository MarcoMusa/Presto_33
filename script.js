/* EFFETTO TOGGLER */
const navbarToggler = document.querySelector('#navbar-toggler')
const navbarTogglerIcon = document.querySelector('#navbarToggler .fa-solid .fa-ellipsis-vertical')

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('fa-rotate-90')
})


/* SCROLL NAVBAR */
const navbar = document.querySelector('.up-navbar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        navbar.classList.add('bg-white', 'shadow')
    } else {
        navbar.classList.remove('bg-white', 'shadow')
    }
})

