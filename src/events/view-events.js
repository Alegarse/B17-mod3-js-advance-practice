import { containerDomElement } from "../dom/dom";
import { addMovieListContainer } from "../movie-list/movie-list";
import { selectedOptions } from "../api/apiConfig";

export function createViewChangeListener(viewSelected, viewType) {

    const selectedViewButton = document.querySelector(viewSelected)

    selectedViewButton.addEventListener('click', () => {
        const attachedElement = document.querySelector('#movie-list-container')
        if (attachedElement.isConnected) {
            containerDomElement.removeChild(attachedElement);
        }
        selectedOptions.viewType = viewType
        addMovieListContainer(selectedOptions.movieDataArray,viewType)
    })
}

export function createBacktoMainButtonListener() {

}

export function createViewDetailsListener(movieSelected) {

    const selectedMovie = document.querySelector(movieSelected)

    selectedMovie.addEventListener('click', (event) => {
        console.log(event)
    })
    

}