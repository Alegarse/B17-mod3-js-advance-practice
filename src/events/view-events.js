import { removeDomElement, setVisibility } from "../util/dom";
import { addMovieListContainer, changeViewMovieElement } from "../movie-list/movie-list";
import { applicationStatus } from "../api/apiConfig";
import { createDetailsMovieContainer } from "../movie-details/movie-details";

export function createViewChangeListener(elementSelected, viewType) {

    const selectedViewButton = document.querySelector(elementSelected)

    selectedViewButton.addEventListener('click', () => {
        changeViewMovieElement(viewType)
        applicationStatus.viewType = viewType
    })
}

export function buttonBackHomeListener(elementSelected) {

    const backMainButton = document.querySelector(elementSelected)

    backMainButton.addEventListener('click', () => {
        const attachedElement = document.querySelector('#movie-list-container')
        removeDomElement(attachedElement)
        addMovieListContainer(applicationStatus.movieDataArray, applicationStatus.viewType)
        // Hide/show inneccesary element in movie toolbar
        const viewGridButton = document.querySelector('.grid-view')
        setVisibility(viewGridButton)

        const viewListButton = document.querySelector('.list-view')
        setVisibility(viewListButton)

        const selectListTypeMovies = document.querySelector('.movies-categories')
        setVisibility(selectListTypeMovies)

        // Show button for back to main
        const backToMainButton = document.querySelector('.back-main')
        setVisibility(backToMainButton, false)
    })

}

export function createMoviePosterListener() {

    const clickContainer = document.querySelector('#movie-list-container')

    clickContainer.addEventListener('click', async (event) => {
        const target = event.target
        if (target.hasAttribute('data-movie-id')) {
            const movieId = target.getAttribute('data-movie-id')
            const attachedElement = document.querySelector('#movie-list-container')
            removeDomElement(attachedElement)
            createDetailsMovieContainer(movieId)
        }
    })
}