import axios from 'axios';
import { apiConfig, defaultInit } from './apiConfig';

export async function getMovieListData(listType = defaultInit.movieListType, pageSelected = defaultInit.actualPage) {
    try {
        let movieListUrl = apiConfig.baseUrl
        movieListUrl += `movie/${listType}`
        movieListUrl += `?api_key=${apiConfig.apiKey}`
        movieListUrl += `&language=${apiConfig.langIso}`
        movieListUrl += `&page=${pageSelected}`
        return (await axios(movieListUrl))?.data
    } catch(error) {
        console.error(error.message)
    }
}

export async function getMovieDetailsData(movieId) {
    try {
        let movieDetailUrl = apiConfig.baseUrl
        movieDetailUrl += `movie/${movieId}`
        movieDetailUrl += `?api_key=${apiConfig.apiKey}`
        movieDetailUrl += `&language=${apiConfig.langIso}`
        movieDetailUrl += `&append_to_response=credits`
        return (await axios(movieDetailUrl))?.data
    } catch (error) {
        console.error(error.message)
    }
}


//https://api.themoviedb.org/3/search/movie?query=minecraf&include_adult=false&language=es-ES&page=1'
//https://api.themoviedb.org/3/search/movie/query=minecraft?api_key=ed813799d99e41da8be2cea874ed7740&include_adult=false&language=es-ES&page=1
export async function searchMovieId(movieTitle) {
    try {
        let movieSearchUrl = apiConfig.baseUrl
        movieSearchUrl += `search/movie?query=${movieTitle}`
        movieSearchUrl += `&api_key=${apiConfig.apiKey}`
        movieSearchUrl += `&include_adult=false`
        movieSearchUrl += `&language=${apiConfig.langIso}`
        return (await axios(movieSearchUrl))?.data
    } catch (error) {
        console.error(error.message)
    }
}