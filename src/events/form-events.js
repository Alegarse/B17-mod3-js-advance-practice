import { searchMovieId } from "../api/api";
import { applicationStatus } from "../api/apiConfig";
import { containerDomElement } from "../util/dom";
import { addMovieListContainer } from "../movie-list/movie-list";
import { addMovieEmptyListContainer } from "../movie-list/movie-list";

export function createFormMovieListener(formId, inputId) {

    const formElement = document.querySelector(formId)
    const inputElement = document.querySelector(inputId)

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const movieToSearch = inputElement.value
        searchMovieBytitle(movieToSearch)
    })

}

async function searchMovieBytitle(movieTitle) {

    const { results: dataMovieSearched } = await searchMovieId(movieTitle)

    const resultsNumber = dataMovieSearched.length
    console.log(resultsNumber)
    let attachedElement = document.querySelector('#movie-list-container')
        if (attachedElement === null) attachedElement = document.querySelector('#movie-details-container')
        if (attachedElement.isConnected)  containerDomElement.removeChild(attachedElement);

    if (resultsNumber === 0) {
        // Dont clear -> applicationStatus.movieDataArray = undefined
        // Maybe at details Page and need a data to return to Main Page
        addMovieEmptyListContainer()
    } else {
        applicationStatus.movieDataArray = dataMovieSearched
        addMovieListContainer(dataMovieSearched, applicationStatus.viewType)
    }
}