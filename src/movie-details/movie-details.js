import { containerDomElement, createMovieListContainer } from "../util/dom";
import { createMoviePoster, createMovieTitle, createMovieData, createMovieOverview } from "../components/movieCardElements";
import { getMovieDetailsData } from "../api/api";
import { movieViewTypes,apiConfig } from "../api/apiConfig";

export async function addMovieDetailsContainer(movieId) {

  const movieData = await getMovieDetailsData(movieId)

  createDetailsMovieContainer(movieData)

}

function createMovieViewElement(movie, viewType, details = false) {

  const movieElementContainer = document.createElement('div')

  movieElementContainer.classList = 'movie-details-container'
  movieElementContainer.setAttribute('style',`background-image: url(${apiConfig.backdropBaseUrl}${movie.backdrop_path})`)

  const movieElementOverlay = document.createElement('div')
  movieElementOverlay.classList = 'movie-backdrop-overlay'

  const movieElement = document.createElement('div')

  movieElement.classList = viewType
  movieElement.appendChild(createMoviePoster(movie.poster_path, movie.id))

  const containerInfoElement = document.createElement('div')
  containerInfoElement.classList = 'movie-info'

  containerInfoElement.appendChild(createMovieTitle(movie.title))
  containerInfoElement.appendChild(createMovieData(movie.vote_average, movie.release_date))
  containerInfoElement.appendChild(createMovieOverview(movie.overview, details))

  movieElement.appendChild(containerInfoElement)

  movieElementContainer.appendChild(movieElementOverlay)
  movieElementContainer.appendChild(movieElement)

  return movieElementContainer
}

function createDetailsMovieContainer(movieData) {

    // Element container for show movie details
    const moviesContainerElement = createMovieListContainer()

    const movieDetailsElement = createMovieViewElement(movieData, movieViewTypes.Details, true)

    moviesContainerElement.appendChild(movieDetailsElement)

    containerDomElement.appendChild(moviesContainerElement)
}