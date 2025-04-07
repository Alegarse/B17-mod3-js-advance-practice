import { containerDomElement } from "../util/dom";
import { addMovieListContainer } from "../movie-list/movie-list";
import { applicationStatus } from "../api/apiConfig";
import { getMovieDetailsData } from "../api/api";
import { createDetailsMovieContainer } from "../movie-details/movie-details";

export function createViewChangeListener(viewSelected, viewType) {

    const selectedViewButton = document.querySelector(viewSelected)

    selectedViewButton.addEventListener('click', () => {
        const attachedElement = document.querySelector('#movie-list-container')
        if (attachedElement.isConnected) {
            containerDomElement.removeChild(attachedElement);
        }
        applicationStatus.viewType = viewType
        addMovieListContainer(applicationStatus.movieDataArray, viewType)
    })
}

export function createViewDetailsListener() {

    const clickContainer = document.querySelector('#movie-list-container')

    clickContainer.addEventListener('click', async (event) => {
        const target = event.target
        if (target.hasAttribute('data-movie-id')) {
            const movieId = target.getAttribute('data-movie-id')
            createDetailsMovieContainer(movieId)
        }
    })
}

export function createBacktoMainButtonListener() {

    const backButton = document.querySelector('.back-main')

    backButton.addEventListener('click', () => {
        /*
        const attachedElement = document.querySelector('#movie-list-container')
        if (attachedElement.isConnected) {
            containerDomElement.removeChild(attachedElement);
        }
        */
        // Hide inneccesary element in movie toolbar
        const viewTypesButtons = document.querySelector('.view-selectors')
        viewTypesButtons.removeAttribute('hidden')

        const selectListTypeMovies = document.querySelector('.movies-categories')
        selectListTypeMovies.removeAttribute('hidden')

        // Show button for back to main
        const backToMainButton = document.querySelector('.back-main')
        backToMainButton.setAttribute('hidden',true)
        addMovieListContainer(applicationStatus.movieDataArray, applicationStatus.viewType)
    })



}