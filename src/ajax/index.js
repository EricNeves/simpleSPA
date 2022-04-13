/**
 * @description Requests HTML files
*/

export async function ajax( config ) {
    try {
        const request = await fetch(config.url)
        const response = await request.text()
        config.success(response)
    }catch( error ) {
        config.error(error)
    }
} 

