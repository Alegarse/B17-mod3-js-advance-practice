import { apiConfig } from "../api/apiConfig";

/**
 * 
 * @param {*} photoUrl 
 * @returns Element img actor
 */
function createCastImg(photoUrl) {
    const castImgElement = document.createElement('img');
    if (photoUrl !== null) {
        castImgElement.setAttribute('src', `${apiConfig.photoBaseUrl}${photoUrl}`);
    } else {
        castImgElement.setAttribute('src', '../../public/empty_char.png');
    }
    
    castImgElement.classList = 'cast-img'
    return castImgElement
}

/**
 * 
 * @param {*} name 
 * @returns Element  with actor name
 */
function createCastName(name) {
    const castNameElement = document.createElement('p')
    castNameElement.textContent = name
    castNameElement.classList = 'cast-name'
    return castNameElement
}

/**
 * 
 * @param {*} name 
 * @returns Element  with actor character
 */
function createCastCharName(characterName) {
    const castNameElement = document.createElement('p')
    castNameElement.textContent = characterName
    castNameElement.classList = 'cast-charname'
    return castNameElement
}

/**
 * 
 * @param {*} actor 
 * @returns Element card for actor
 */
export function createCastCard(cast) {
    const castCardElement = document.createElement('div')
    castCardElement.classList = 'cast-card'

    castCardElement.appendChild(createCastImg(cast.profile_path))
    castCardElement.appendChild(createCastName(cast.original_name))
    castCardElement.appendChild(createCastCharName(cast.character))

    return castCardElement
}