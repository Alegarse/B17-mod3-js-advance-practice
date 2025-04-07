import './scss/style.scss'
import { getMovieListData } from './api/api'
import { addMovieListContainer } from './movie-list/movie-list'
import { movieViewTypes, defaultInit, applicationStatus } from './api/apiConfig'
import { createMovieUtilsToolbar } from './list-toolbar/list-toolbar'
import { createViewChangeListener, createViewDetailsListener, createBacktoMainButtonListener } from './events/view-events'
import { createMovieListChangeListener } from './events/movie-type-event'

async function start() {

    // Create movie toolbar utils in header
    createMovieUtilsToolbar()

    // Throw API Petition to get initial movies data
    const {results: movieDataArray} = await getMovieListData(defaultInit.movieListType)

    // Filling global var for the full page
    applicationStatus.movieDataArray = movieDataArray

    // Show initial list view movies with default config
    addMovieListContainer(applicationStatus.movieDataArray,defaultInit.listView)

    // Create pagination toolbar
    //createPaginatorToolbar()

    // Create event listeners for elements in movie toolbar
    createViewChangeListener('.grid-view', movieViewTypes.Grid)
    createViewChangeListener('.list-view', movieViewTypes.List)
    createViewChangeListener('.back-main', movieViewTypes.List)
    createMovieListChangeListener('.movies-categories')
    createBacktoMainButtonListener()

    // Create event listener to view movie details
    createViewDetailsListener()
}

start()