import { movieListType } from "../api/apiConfig"

// 0. Entry point
export const containerDomElement = document.querySelector('#app')

/**
 * 
 * @param {*} categories 
 * @returns Select with category options
 */
function createSelectElement() {

    const selectElement = document.createElement('select')
    selectElement.classList = 'movies-categories form-select'

    const arrayCategories = Object.entries(movieListType)

    arrayCategories.forEach(category => {
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value', category[1])
        optionElement.textContent = category[0].replaceAll('_',' ')
        selectElement.appendChild(optionElement)
    })

    return selectElement
}

export function createMovieToolbar() {

    const toolbarElementDOM = document.querySelector('#toolbar')

    const barSelectorElements = document.createElement('div')
    barSelectorElements.classList = 'bar-selectors movie-toolbar-wrapper container'

    const typesViewsContainer = document.createElement('div')
    typesViewsContainer.classList = 'view-selectors'

    const gridViewSelector = document.createElement('button')
    gridViewSelector.classList = 'grid-view'

    const listViewSelector = document.createElement('button')
    listViewSelector.classList = 'list-view'

    

    typesViewsContainer.appendChild(gridViewSelector)
    typesViewsContainer.appendChild(listViewSelector)

    barSelectorElements.appendChild(typesViewsContainer)
    barSelectorElements.appendChild(createSelectElement())

    toolbarElementDOM.appendChild(barSelectorElements)
}