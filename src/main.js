import './scss/style.scss'
import { getMovieListData } from './api/api'
import { addMovieListContainer } from './movie-list/movie-list'
import { defaultInit } from './api/apiConfig'
import { createSelectorElementsBar } from './dom/dom'

// 0. Auxuliar bar in header
createSelectorElementsBar()

async function start() {

    // API Petition with initial movies data
    const {results: movieDataArray} = await getMovieListData(defaultInit.movieListType)
    // Show initial list view movies
    addMovieListContainer(movieDataArray,defaultInit.listView)
    
}

start()