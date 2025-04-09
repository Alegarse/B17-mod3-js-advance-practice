import { containerDomElement, createMovieDetailsContainer } from "../util/dom"
import { createMoviePoster, createMovieTitle, createMovieData, createMovieOverview } from "../components/movieCardElements"
import { createCastCard } from "../components/castCardElements"
import { getMovieDetailsData } from "../api/api"
import { movieViewTypes, apiConfig } from "../api/apiConfig"

export async function addMovieDetailsContainer(movieId) {

  const movieData = await getMovieDetailsData(movieId)

  createDetailsMovieContainer(movieData)

}

function createMovieViewElement(movieData, viewType, details = false) {

  const movieElementContainer = document.createElement('div')

  movieElementContainer.classList = 'movie-details-container container'
  movieElementContainer.setAttribute('style', `background-image: url(${apiConfig.backdropBaseUrl}${movieData.backdrop_path})`)

  const movieElementOverlay = document.createElement('div')
  movieElementOverlay.classList = 'movie-backdrop-overlay'

  const movieElement = document.createElement('div')

  movieElement.classList = `${viewType} container`
  movieElement.appendChild(createMoviePoster(movieData.poster_path, movieData.id, true))

  const containerInfoElement = document.createElement('div')
  containerInfoElement.classList = 'movie-info'

  containerInfoElement.appendChild(createMovieTitle(movieData.title))
  containerInfoElement.appendChild(createMovieData(movieData.vote_average, movieData.release_date))
  containerInfoElement.appendChild(createMovieOverview(movieData.overview, details))

  movieElement.appendChild(containerInfoElement)

  movieElementContainer.appendChild(movieElementOverlay)
  movieElementContainer.appendChild(movieElement)

  return movieElementContainer
}

function createCastMovieElement(castsMovie) {

  const castsElement = document.createElement('div')
  castsElement.classList = 'cast-container container'

  const titleCastsContainer = document.createElement('p')
  titleCastsContainer.classList = 'cast-container-title'
  titleCastsContainer.textContent = 'Reparto'

  const castsContainer = document.createElement('div')
  castsContainer.classList = 'casts-elements'

  castsMovie.cast.forEach(cast => {
      const castElement = createCastCard(cast)
      castsContainer.appendChild(castElement)
  })

  castsElement.appendChild(titleCastsContainer)
  castsElement.appendChild(castsContainer)

  return castsElement

}

function createDetailsMovieContainer(movieData) {

  // Element container for show movie details
  const moviesContainerElement = createMovieDetailsContainer()

  const movieDetailsElement = createMovieViewElement(movieData, movieViewTypes.Details, true)
  const movieCastElements = createCastMovieElement(movieData.credits)

  moviesContainerElement.appendChild(movieDetailsElement)
  moviesContainerElement.appendChild(movieCastElements)

  containerDomElement.appendChild(moviesContainerElement)
}