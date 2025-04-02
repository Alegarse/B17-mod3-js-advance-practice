import { apiConfig } from "../api/apiConfig";

/**
 * 
 * @param {*} photoUrl 
 * @returns Element img actor
 */
function createActorImg(photoUrl) {
    const actorImgElement = document.createElement('img');
    const InitPosterPath = `${apiConfig.photoBaseUrl}${photoUrl}`
    actorImgElement.setAttribute('src', InitPosterPath);
    actorImgElement.classList = 'actor-img'
    return actorImgElement
}

/**
 * 
 * @param {*} name 
 * @returns Element h3 with actor name
 */
function createActorName(name) {
    const actorNameElement = document.createElement('h4')
    actorNameElement.textContent = name
    actorNameElement.classList = 'actor-name'
    return actorNameElement
}

/**
 * 
 * @param {*} actor 
 * @returns Element card for actor
 */
export function createActorCard(actor) {
    const actorCardElement = document.createElement('div')
    actorCardElement.classList = 'actor-card'

    actorCardElement.appendChild(createActorImg(actor.profile_path))
    actorCardElement.appendChild(createActorName(actor.original_name))

    return actorCardElement
}