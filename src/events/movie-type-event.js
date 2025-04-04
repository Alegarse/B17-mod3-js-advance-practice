import { selectedOptions } from "../api/apiConfig";
import { getMovieListData } from "../api/api";
import { addMovieListContainer } from "../movie-list/movie-list";
import { containerDomElement } from "../dom/dom";

export function createMovieListChangeListener(elementSelected) {

    const selectedElement = document.querySelector(elementSelected)

    selectedElement.addEventListener('change', async (event) => {
        const {results: movieDataArray} = await getMovieListData(event.target.value)
        selectedOptions.movieDataArray = movieDataArray
        selectedOptions.movieListing = event.target.value
        const attachedElement = document.querySelector('#movie-list-container')
            if (attachedElement.isConnected) {
                containerDomElement.removeChild(attachedElement);
            }
        addMovieListContainer(movieDataArray,selectedOptions.viewType)
    })
}