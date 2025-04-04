import { apiConfig } from "../api/apiConfig";

const typeList = {
    Grid: 'movie-grid',
    List: 'movie-list',
    Details: 'movie-details',
}

/**
 * 
 * @param {*} imageUrl 
 * @returns Element img movie
 */
export function createMoviePoster(imageUrl, movieId) {
    const movieImgElement = document.createElement('img')
    const initPosterPath = `${apiConfig.posterBaseUrl}${imageUrl}`
    movieImgElement.setAttribute('src', initPosterPath);
    movieImgElement.setAttribute('data-movie-id', movieId)
    movieImgElement.classList = 'movie-poster'
    return movieImgElement
}

/**
 * 
 * @param {*} title 
 * @returns Element h3 with title
 */
export function createMovieTitle(title) {
    const movieTitleElement = document.createElement('h4')
    movieTitleElement.textContent = title
    movieTitleElement.classList = 'movie-title'
    return movieTitleElement
}

export function createMovieData(rating, date) {
    const movieInfoElement = document.createElement('p')
    movieInfoElement.classList = 'movie-data'
    movieInfoElement.textContent = `Valoración: ${(rating).toFixed(1)} | Año: ${new Date(date).getFullYear()}`
    return movieInfoElement
}

/**
 * 
 * @param {*} description 
 * @returns Element p with description 
 */
export function createMovieOverview(overview, details = false) {

    const movieOverviewElement = document.createElement('p')
    if (details) {
        const movieTitleOverviewElement = document.createElement('h5')
        movieTitleOverviewElement.textContent = 'Sinopsis:'
        movieOverviewContainer.appendChild(movieTitleOverviewElement)
    }
    movieOverviewElement.textContent = overview !== '' ? overview : 'No hay información disponible'
    movieOverviewElement.classList = 'movie-overview'

    return movieOverviewElement
}