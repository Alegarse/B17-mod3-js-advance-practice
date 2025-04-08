import { applicationStatus } from "../api/apiConfig";

// 0. Entry point
export const containerDomElement = document.querySelector('#app')

export function setVisibility(domElement,visible = true) {
    visible ? domElement.removeAttribute('hidden') :domElement.setAttribute('hidden', true)
}

export function removeDomElement(domElement) {
    if (domElement.isConnected) {
        containerDomElement.removeChild(domElement);
    }
}

export function createMovieListContainer() {
    // Element container for list movies
    const moviesContainerElement = document.createElement('div')
    moviesContainerElement.id = 'movie-list-container'
    moviesContainerElement.classList = 'container'
    return moviesContainerElement
}

export function setDefaultSelectedListMovie(elementDom) {

  const selectElement = document.querySelector(elementDom);

  // Buscar la opción y marcarla como seleccionada
  const optionToSelect = Array.from(selectElement.options).find(
    (option) => option.value === applicationStatus.movieListing
  )

  if (optionToSelect) optionToSelect.setAttribute('selected', 'selected')
}