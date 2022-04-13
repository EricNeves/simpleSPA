/**
 * @author Eric Neves
 * @description Initial part of the SPA
*/

import { routes } from './routes/index.js'

function router() {

    const matches = routes.map( route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = matches.find(matches => matches.isMatch)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    match.route.view()
}

/**
 * @description Routes history
 * @param url
*/
function paginate( url ) {
    history.pushState(null, '', url)
    router()
}

document.addEventListener('DOMContentLoaded', () => {
    
    const bar = document.querySelector('.bar')
    const responsiveMenu = document.querySelector('nav')

    const navLinks = document.querySelectorAll('[data-link]')

    navLinks.forEach( link => {
        link.onclick = e => {
            e.preventDefault()
            paginate(e.target.href)
            responsiveMenu.classList.remove('active')
        }
    })

    bar.onclick = () => {
        responsiveMenu.classList.toggle('active')
    }

    router()
})