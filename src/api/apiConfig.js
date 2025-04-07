export const movieListType = {
    Populares: 'popular',
    Mas_valoradas: 'top_rated',
    Proximamente: 'upcoming',
    En_cartelera: 'now_playing',
}

export const movieViewTypes = {
    Grid: 'movie-grid',
    List: 'movie-list',
    Details: 'movie-details',
}

export const defaultInit = {
    movieListType: 'popular',
    listView: 'movie-grid',
    actualPage: 1,
}

export let applicationStatus = {
    viewType: defaultInit.listView,
    actualPage: defaultInit.actualPage,
    movieListing: defaultInit.movieListType,
    movieDataArray: undefined,
}

export const apiConfig = {
    apiKey: 'ed813799d99e41da8be2cea874ed7740',
    langIso: 'es-ES',
    baseUrl:'https://api.themoviedb.org/3/',
    posterBaseUrl:'http://image.tmdb.org/t/p/w500/',
    backdropBaseUrl: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces',
    photoBaseUrl: 'https://www.themoviedb.org/t/p/w138_and_h175_face/',
}