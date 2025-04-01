import { apiConfig } from "../api/apiConfig";

/**
 * 
 * @param {*} imageUrl 
 * @returns Element img movie
 */
function createMoviePoster(imageUrl) {
    const movieImgElement = document.createElement('img')
    const initPosterPath = `${apiConfig.posterBaseUrl}${imageUrl}`
    movieImgElement.setAttribute('src', initPosterPath);
    movieImgElement.classList = 'movie-poster'
    return movieImgElement
}

/**
 * 
 * @param {*} title 
 * @returns Element h3 with title
 */
function createMovieTitle(title) {
    const movieTitleElement = document.createElement('h4')
    movieTitleElement.textContent = title
    movieTitleElement.classList = 'movie-title'
    return movieTitleElement
}

function createMovieInfo(info) {
    const movieInfoElement = document.createElement('p')
    movieInfoElement.classList = 'movie-info'
    movieInfoElement.textContent = `Valoración: ${(info.rating).toFixed(1)} | Año: ${info.date}`
    return movieInfoElement
}

/**
 * 
 * @param {*} description 
 * @returns Element p with description 
 */
export function createMovieOverview(overview, details) {
    const movieOverviewContainer = document.createElement('div')

    const movieOverviewElement = document.createElement('p')
    if (details) {
        const movieTitleOverviewElement = document.createElement('h5')
        movieTitleOverviewElement.textContent = 'Sinopsis:'
        movieOverviewContainer.appendChild(movieTitleOverviewElement)
    }
    movieOverviewElement.textContent = overview
    movieOverviewElement.classList = 'movie-overview'
    movieOverviewContainer.appendChild(movieOverviewElement)

    return movieOverviewContainer
}

/**
 * 
 * @param {*} movie
 * @returns Element card for movie
 */
export function addMovieCardElement(movie) {
    const movieCardElement = document.createElement('col')

    movieCardElement.classList = 'movie-card'

    movieCardElement.appendChild(createMoviePoster(movie.poster_path))
    movieCardElement.appendChild(createMovieTitle(movie.title))

    movieCardElement.appendChild(createMovieOverview(movie.overview,true))

    return movieCardElement
}