import { containerDomElement, setVisibility, createMovieListContainer } from "../util/dom";

export function createDetailsMovieContainer(movieId) {

    // Element container for list movies
    const moviesContainerElement = createMovieListContainer()

    const detailsMovieContainer = document.createElement('div')
    detailsMovieContainer.classList = 'movie-details'
    detailsMovieContainer.textContent = `Id Película: ${movieId}`

    // Hide inneccesary element in movie toolbar
    const viewGridButton = document.querySelector('.grid-view')
    setVisibility(viewGridButton, false)

    const viewListButton = document.querySelector('.list-view')
    setVisibility(viewListButton, false)

    const selectListTypeMovies = document.querySelector('.movies-categories')
    setVisibility(selectListTypeMovies, false)

    // Show button for back to main
    const backToMainButton = document.querySelector('.back-main')
    setVisibility(backToMainButton)

    moviesContainerElement.appendChild(detailsMovieContainer)

    containerDomElement.appendChild(moviesContainerElement)
}