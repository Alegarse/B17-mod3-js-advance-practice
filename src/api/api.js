import axios from 'axios';
import { apiConfig } from './apiConfig';

export const movieType = {
    popular: 'popular',
    topRated: 'top_rated'
}

export async function getMovieListData(type) {
    try {
        let movieListUrl = apiConfig.baseUrl
        movieListUrl += `movie/${type}`
        movieListUrl += `?api_key=${apiConfig.apiKey}`
        movieListUrl += `&language=${apiConfig.langIso}`
        return (await axios(movieListUrl)).data
    } catch(error) {
        console.error(error.message)
    }
}