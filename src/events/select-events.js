import { applicationStatus } from "../api/apiConfig";
import { getMovieListData } from "../api/api";
import { addMovieListContainer } from "../movie-list/movie-list";

export function createMovieListChangeListener(elementSelected) {

    const selectedElement = document.querySelector(elementSelected)

    selectedElement.addEventListener('change', async (event) => {
        const {results: movieDataArray} = await getMovieListData(event.target.value)
        applicationStatus.movieDataArray = movieDataArray
        applicationStatus.movieListing = event.target.value
        const attachedElement = document.querySelector('#movie-list-container')
        attachedElement.innerHTML = ''
        addMovieListContainer(movieDataArray,applicationStatus.viewType,false)
    })
}