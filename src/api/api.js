import axios from 'axios';
import { apiConfig, defaultInit } from './apiConfig';

export async function getMovieListData(listType = defaultInit.movieListType, pageSelected = defaultInit.actualPage) {
    try {
        let movieListUrl = apiConfig.baseUrl
        movieListUrl += `movie/${listType}`
        movieListUrl += `?api_key=${apiConfig.apiKey}`
        movieListUrl += `&language=${apiConfig.langIso}`
        movieListUrl += `&page=${pageSelected}`
        return (await axios(movieListUrl)).data
    } catch(error) {
        console.error(error.message)
    }
}