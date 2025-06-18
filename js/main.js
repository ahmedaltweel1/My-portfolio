// add class active on scroll

let header = document.querySelector('header')


window.onscroll = function () {
    if (this.scrollY >= 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}


let nav_links = document.querySelector('#links')

function open_close_menu() {
    nav_links.classList.toggle('active')
}