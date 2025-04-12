import { setViewElementsToolbar } from "../util/dom";
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
        let attachedElement = document.querySelector('#movie-list-container')
        attachedElement.innerHTML = ''
        addMovieListContainer(applicationStatus.movieDataArray, applicationStatus.viewType, false)
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
            attachedElement.innerHTML = ''
            addMovieDetailsContainer(movieId)
        }
    })
}

export function createPageClickListener() {

    const clickContainer = document.querySelector('.pagination-tool')

    clickContainer.addEventListener('click',(event) => {
        const classSelected = event.target.classList.value
        console.log(classSelected)
        //const {results: movieDataArray} = await getMovieListData(event.target.value)
        
    })

}