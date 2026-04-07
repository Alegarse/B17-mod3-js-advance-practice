export interface ApiConfig {
  apiKey: string,
  langIso: string,
  baseUrl: string,
  posterBaseUrl: string,
  backdropBaseUrl: string,
  photoBaseUrl: string,
}

export const apiConfig: ApiConfig = {
  apiKey: '798c4e985f1601de1b9c61af5c37edcf',
  langIso: 'es-ES',
  baseUrl: 'https://api.themoviedb.org/3/',
  posterBaseUrl: 'http://image.tmdb.org/t/p/w500/',
  backdropBaseUrl: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces',
  photoBaseUrl: 'https://www.themoviedb.org/t/p/w138_and_h175_face/',
};
