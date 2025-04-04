import { containerDomElement } from "../dom/dom";

// Hide inneccesary element in movie toolbar
const viewTypesButtons = document.querySelector('.view-selectors')
viewTypesButtons.setAttribute('hidden', true)

const selectListTypeMovies = document.querySelector('.movies-categories')
selectListTypeMovies.setAttribute('hidden', true)

// Show button for back to main
const backToMainButton = document.querySelector('.back-main')
backToMainButton.removeAttribute('hidden')

export function createDetailsMovieContainer(movieId) {

    const detailsMovieContainer = document.createElement('div')
    detailsMovieContainer.textContent = `Id Película: ${movieId}`

    const attachedElement = document.querySelector('#movie-list-container')
        if (attachedElement.isConnected) {
            containerDomElement.removeChild(attachedElement);
        }

    containerDomElement.appendChild(detailsMovieContainer)
}