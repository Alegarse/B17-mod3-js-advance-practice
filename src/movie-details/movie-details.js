import { containerDomElement } from "../util/dom";

export function createDetailsMovieContainer(movieId) {

    const detailsMovieContainer = document.createElement('div')
    detailsMovieContainer.classList = 'movie-details'
    detailsMovieContainer.textContent = `Id Película: ${movieId}`

    // Hide inneccesary element in movie toolbar
    const viewGridButton = document.querySelector('.grid-view')
    viewGridButton.setAttribute('hidden', true)

    const viewListButton = document.querySelector('.list-view')
    viewListButton.setAttribute('hidden', true)

    const selectListTypeMovies = document.querySelector('.movies-categories')
    selectListTypeMovies.setAttribute('hidden', true)

    // Show button for back to main
    const backToMainButton = document.querySelector('.back-main')
    backToMainButton.removeAttribute('hidden')

    const attachedElement = document.querySelector('#movie-list-container')
    if (attachedElement.isConnected) {
        containerDomElement.removeChild(attachedElement);
    }

    containerDomElement.appendChild(detailsMovieContainer)
}