import { removeDomElement, setViewElementsToolbar } from "../util/dom";
import { addMovieListContainer, changeViewMovieElement } from "../movie-list/movie-list";
import { applicationStatus } from "../api/apiConfig";
import { addMovieDetailsContainer } from "../movie-details/movie-details";

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
        setViewElementsToolbar('main')
    })

}

export function createMoviePosterListener() {

    const clickContainer = document.querySelector('#app')
    clickContainer.addEventListener('click', async (event) => {
        const target = event.target
        if (target.hasAttribute('data-movie-id')) {
            const movieId = target.getAttribute('data-movie-id')
            setViewElementsToolbar('details')
            const attachedElement = document.querySelector('#movie-list-container')
            removeDomElement(attachedElement)
            addMovieDetailsContainer(movieId)
        }
    })
}