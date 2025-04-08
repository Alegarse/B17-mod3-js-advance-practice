import { containerDomElement, createMovieListContainer } from "../util/dom";
import { createMoviePoster, createMovieTitle, createMovieData, createMovieOverview } from "../components/movieCardElements";
import { getMovieDetailsData } from "../api/api";
import { movieViewTypes } from "../api/apiConfig";

function createMovieViewElement(movie, viewType, details = false) {

  const movieElement = document.createElement('div')

  movieElement.classList += `movie-card-details ${viewType}`
  movieElement.appendChild(createMoviePoster(movie.poster_path, movie.id))

  const containerInfoElement = document.createElement('div')
  containerInfoElement.classList = 'movie-info'

  containerInfoElement.appendChild(createMovieTitle(movie.title))
  containerInfoElement.appendChild(createMovieData(movie.vote_average, movie.release_date))
  containerInfoElement.appendChild(createMovieOverview(movie.overview, details))

  movieElement.appendChild(containerInfoElement)

  return movieElement
}

function createDetailsMovieContainer(movieData) {

    // Element container for show movie details
    const moviesContainerElement = createMovieListContainer()

    const movieDetailsElement = createMovieViewElement(movieData, movieViewTypes.List, true)

    moviesContainerElement.appendChild(movieDetailsElement)

    containerDomElement.appendChild(moviesContainerElement)
}

export async function addMovieDetailsContainer(movieId) {

    

    const movieData = await getMovieDetailsData(movieId)

    createDetailsMovieContainer(movieData)

}