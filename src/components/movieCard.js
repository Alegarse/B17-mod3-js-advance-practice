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
    movieImgElement.classList = 'card-img-top'
    return movieImgElement
}

function createContentTextMovieCard() {
    const movieContainerElement = document.createElement('div')
    movieContainerElement.classList = 'card-body'
    return movieContainerElement
}

/**
 * 
 * @param {*} title 
 * @returns Element h3 with title
 */
function createMovieTitle(title) {
    const movieTitleElement = document.createElement('h5')
    movieTitleElement.textContent = title
    movieTitleElement.classList = 'card-title'
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
    movieOverviewElement.classList = 'card-text'
    return movieOverviewElement
}

/**
 * 
 * @param {*} movie
 * @returns Element card for movie
 */
export function addMovieCardElement(movie) {
    const movieCardElement = document.createElement('div')

    movieCardElement.classList = 'card'
    movieCardElement.appendChild(createMoviePoster(movie.poster_path))

    const movieContainerElement = createContentTextMovieCard()
    movieContainerElement.appendChild(createMovieTitle(movie.title))

    movieCardElement.appendChild(movieContainerElement)

    return movieCardElement
}