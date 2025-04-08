import { containerDomElement, createMovieListContainer } from "../util/dom";
import { getMovieDetailsData } from "../api/api";

function createDetailsMovieContainer() {



    // Element container for list movies
    const moviesContainerElement = createMovieListContainer()

    containerDomElement.appendChild(moviesContainerElement)
}

export async function addMovieDetailsContainer(movieId) {

    createDetailsMovieContainer()

    const movieData = await getMovieDetailsData(movieId)

}