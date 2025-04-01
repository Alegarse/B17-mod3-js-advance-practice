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
    const movieTitleElement = document.createElement('h5')
    movieTitleElement.textContent = title
    movieTitleElement.classList = 'movie-title'
    return movieTitleElement
}

/**
 * 
 * @param {*} description 
 * @returns Element p with description 
 */
export function createMovieOverview(overview) {
    const movieOverviewElement = document.createElement('p')
    movieOverviewElement.textContent = overview
    movieOverviewElement.classList = 'movie-overview'
    return movieOverviewElement
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

    movieCardElement.appendChild(createMovieOverview(movie.overview))

    return movieCardElement
}