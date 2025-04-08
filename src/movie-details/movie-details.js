import { containerDomElement, createMovieListContainer } from "../util/dom";

export function createDetailsMovieContainer(movieId) {

    // Element container for list movies
    const moviesContainerElement = createMovieListContainer()

    const detailsMovieContainer = document.createElement('div')
    detailsMovieContainer.classList = 'movie-details'
    detailsMovieContainer.textContent = `Id Película: ${movieId}`

    moviesContainerElement.appendChild(detailsMovieContainer)

    containerDomElement.appendChild(moviesContainerElement)
}

function addMovieDetailsContainer() {

}