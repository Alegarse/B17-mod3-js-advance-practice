import { createViewChangeListener, createMoviePosterListener, buttonBackHomeListener } from "./view-events";
import { createMovieListChangeListener } from "./select-events";
import { movieViewTypes } from "../api/apiConfig";

export function addEventListeners() {

    // Buttons
    createViewChangeListener('.grid-view', movieViewTypes.Grid)
    createViewChangeListener('.list-view', movieViewTypes.List)
    buttonBackHomeListener('.back-main')

    // Select
    createMovieListChangeListener('.movies-categories')

    // Movie poster
    createMoviePosterListener()

}