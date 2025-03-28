import './scss/style.scss'
import { movieType, getMovieListData } from './api/api'
import { addMovieCardElement } from './components/movieCard'

async function addMovieListGrid() {

  // API Petition with movies data
  const {results: movieDataArray} = await getMovieListData(movieType.popular)

  // Element ROW to show movies
  const rowElement = document.createElement('div')
  rowElement.classList = 'row'

  //For each movie need to create a movie card element
  movieDataArray.forEach(movieData => {
    const movieCardElement = addMovieCardElement(movieData)
    movieCardElement.classList += ' col-lg-3 col-md-4 col-sm-6'
    // Insert movieCardelement into ROW element
    rowElement.appendChild(movieCardElement)
  })

  // Insert ROW into DOM
  const containerElement = document.querySelector('#app')
  containerElement.appendChild(rowElement)
  
}

addMovieListGrid().then()