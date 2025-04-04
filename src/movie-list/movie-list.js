import { movieListType } from '../api/apiConfig.js'
import { createMoviePoster, createMovieTitle, createMovieData, createMovieOverview } from '../components/movieCardElements.js'
import { containerDomElement } from '../dom/dom.js'


export function createMovieViewElement(movie,viewType) {
  console.log(movie)
  const movieElement = document.createElement('div')
  movieElement.classList = viewType
  movieElement.appendChild(createMoviePoster(movie.poster_path, movie.id))
  movieElement.appendChild(createMovieTitle(movie.title))
  movieElement.appendChild(createMovieData(movie.vote_average, movie.release_date))
  movieElement.appendChild(createMovieOverview(movie.overview))
  return movieElement
}

export async function addMovieListContainer(movieDataArray,listView) {
  
    // Element container for list movies
    const moviesContainerElement = document.createElement('div')
    moviesContainerElement.id = 'movie-list-container'
    moviesContainerElement.classList = 'container'
  
    // Element ROW to show movies
    const rowElement = document.createElement('div')
    rowElement.classList = 'row'
  
    //For each movie need to create a movie card element
    movieDataArray.forEach(movieData => {
      const movieCardElement = createMovieViewElement(movieData, listView)
      // Insert movieCardelement into ROW element
      rowElement.appendChild(movieCardElement)
    })
  
    // Insert ROW into container
    moviesContainerElement.appendChild(rowElement)
  
    // Insert container into DOM
    containerDomElement.appendChild(moviesContainerElement)
  }