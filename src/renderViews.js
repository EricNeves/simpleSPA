/**
 * @description Render HTML files
*/

import { ajax } from './ajax/index.js'

export function render() {
    const boxContent = document.querySelector('main')

    return {
        notfound() {
            ajax({
                url: './views/404.html',
                success( data ) {
                    boxContent.innerHTML = data
                }
            })
        },
        home() {
            ajax({
                url: './views/home.html',
                success( data ) {
                    boxContent.innerHTML = data
                }
            })
        },
        gallery() {
            ajax({
                url: './views/gallery.html',
                success( data ) {
                    boxContent.innerHTML = data
                }
            })
        },
        about() {
            ajax({
                url: './views/about.html',
                success( data ) {
                    boxContent.innerHTML = data
                }
            })
        }
    }
}