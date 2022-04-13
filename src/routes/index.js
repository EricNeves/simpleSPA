/**
 * @description All routes of the application
*/

import { render } from '../renderViews.js'

export const routes = [
    {
        path: '/404',
        view() {
            render().notfound()
        }
    },
    {
        path: '/',
        view() {
            render().home()
        }
    },
    {
        path: '/gallery',
        view() {
            render().gallery()
        }
    },
    {
        path: '/about',
        view() {
            render().about()
        }
    }
]

