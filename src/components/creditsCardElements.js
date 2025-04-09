import { apiConfig } from "../api/apiConfig";

/**
 * 
 * @param {*} photoUrl 
 * @returns Element img actor
 */
function createCreditImg(photoUrl) {
    const actorImgElement = document.createElement('img');
    const InitPosterPath = `${apiConfig.photoBaseUrl}${photoUrl}`
    actorImgElement.setAttribute('src', InitPosterPath);
    actorImgElement.classList = 'credit-img'
    return actorImgElement
}

/**
 * 
 * @param {*} name 
 * @returns Element h3 with actor name
 */
function createCreditName(name) {
    const actorNameElement = document.createElement('p')
    actorNameElement.textContent = name
    actorNameElement.classList = 'credit-name'
    return actorNameElement
}

/**
 * 
 * @param {*} actor 
 * @returns Element card for actor
 */
export function createCreditCard(actor) {
    const actorCardElement = document.createElement('div')
    actorCardElement.classList = 'credit-card'

    actorCardElement.appendChild(createCreditImg(actor.profile_path))
    actorCardElement.appendChild(createCreditName(actor.original_name))

    return actorCardElement
}