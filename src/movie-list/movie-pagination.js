import { containerDomElement } from "../util/dom"

function createElementButton(role) {
    const element = document.createElement('button')
    switch(role) {
        case 'back':
            element.classList = 'previous-page'
            break
        case 'next':
            element.classList = 'next-page'
            break
        case 'actual':
            element.classList = 'actual-page'
            element.textContent = '1'
            break
    }
    return element
}

export function createPaginationTool() {

    const paginationElement = document.createElement('div')
    paginationElement.classList = 'pagination-tool'

    const backSelectorElement = createElementButton('back')
    const actualPageElement = createElementButton('actual')
    const advanceSelectorElement = createElementButton('next')

    paginationElement.appendChild(backSelectorElement)
    paginationElement.appendChild(actualPageElement)
    paginationElement.appendChild(advanceSelectorElement)

    containerDomElement.appendChild(paginationElement)

}