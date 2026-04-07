import axios from 'axios';
import { apiConfig, ApiConfig } from './apiConfig';

export function getMovieListData(listType: string, pageSelected: string) : string {
        let movieListUrl = apiConfig.baseUrl
        movieListUrl += `movie/${listType}`
        movieListUrl += `?api_key=${apiConfig.apiKey}`
        movieListUrl += `&language=${apiConfig.langIso}`
        movieListUrl += `&page=${pageSelected}`
        return movieListUrl
}

export function getMovieDetailsData(movieId: number): string {
    try {
        let movieDetailUrl: string = apiConfig.baseUrl
        movieDetailUrl += `movie/${movieId}`
        movieDetailUrl += `?api_key=${apiConfig.apiKey}`
        movieDetailUrl += `&language=${apiConfig.langIso}`
        movieDetailUrl += `&append_to_response=credits`
        return movieDetailUrl
    } catch (error: any) {
        console.error(error.message)
        return error.message
    }
}


export async function searchMovieId(movieTitle: string, pageSelected: number = 1) {
    try {
        let movieSearchUrl = apiConfig.baseUrl
        movieSearchUrl += `search/movie?query=${movieTitle}`
        movieSearchUrl += `&api_key=${apiConfig.apiKey}`
        movieSearchUrl += `&language=${apiConfig.langIso}`
        movieSearchUrl += `&page=${pageSelected}`
        return (await axios(movieSearchUrl))?.data
    } catch (error) {
        console.error(error.message)
    }
}