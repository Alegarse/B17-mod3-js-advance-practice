import axios from 'axios';
import { apiConfig } from './apiConfig';

export async function getMovieListData(listType) {
    try {
        let movieListUrl = apiConfig.baseUrl
        movieListUrl += `movie/${listType}`
        movieListUrl += `?api_key=${apiConfig.apiKey}`
        movieListUrl += `&language=${apiConfig.langIso}`
        return (await axios(movieListUrl)).data
    } catch(error) {
        console.error(error.message)
    }
}