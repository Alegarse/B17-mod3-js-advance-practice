import './scss/style.scss'
import { getMovieListData } from './api/api'
import { addMovieListContainer } from './movie-list/movie-list'
import { movieViewTypes, defaultInit, selectedOptions } from './api/apiConfig'
import { createMovieToolbar } from './dom/dom'
import { createViewChangeListener } from './events/view-events'
import { createMovieListChangeListener } from './events/movie-type-event'

async function start() {

    // 0. Movie toolbar in header
    createMovieToolbar()

    // 0. API Petition with initial movies data
    const {results: movieDataArray} = await getMovieListData(defaultInit.movieListType)
    selectedOptions.movieDataArray = movieDataArray
    // 0 .Show initial list view movies
    addMovieListContainer(selectedOptions.movieDataArray,defaultInit.listView)

    // 1. Create event listeners
    createViewChangeListener('.grid-view', movieViewTypes.Grid, movieDataArray)
    createViewChangeListener('.list-view', movieViewTypes.List, movieDataArray)
    createMovieListChangeListener('.movies-categories')
}

start()