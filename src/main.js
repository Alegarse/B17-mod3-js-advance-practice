import './scss/style.scss'
import { getMovieListData } from './api/api'
import { addMovieListContainer } from './movie-list/movie-list'
import { movieViewTypes, defaultInit, selectedOptions } from './api/apiConfig'
import { createMovieUtilsToolbar, createPaginatorToolbar } from './dom/dom'
import { createViewChangeListener, createViewDetailsListener, createBacktoMainButtonListener } from './events/view-events'
import { createMovieListChangeListener } from './events/movie-type-event'

async function start() {

    // Create movie toolbar utils in header
    createMovieUtilsToolbar()

    // Throw API Petition to get initial movies data
    const {results: movieDataArray} = await getMovieListData(defaultInit.movieListType)

    // Filling global var for the full page
    selectedOptions.movieDataArray = movieDataArray

    // Show initial list view movies with default config
    addMovieListContainer(selectedOptions.movieDataArray,defaultInit.listView)

    // Create event listeners for elements in movie toolbar
    createViewChangeListener('.grid-view', movieViewTypes.Grid, movieDataArray)
    createViewChangeListener('.list-view', movieViewTypes.List, movieDataArray)
    createMovieListChangeListener('.movies-categories')
    createBacktoMainButtonListener()

    createViewDetailsListener()
}

start()