const logoSrc = '../files/logo.png'

const navOptions = [
    ['Menu', 'Menú de peliculas ordenadas'],
    ['Lista', 'Lista de peliculas '],
    ['Novedades', 'Lista de Novedades']
]

function createHeaderLogo(logoSrc) {
    const imgHeaderElement = document.createElement('img')
    imgHeaderElement.classList = 'logo-header'
    imgHeaderElement.setAttribute('src', logoSrc)
    return imgHeaderElement
}

function createHeaderNavBar(options) {
    const navBarHeaderElement = document.createElement('nav')
    navBarHeaderElement.classList = 'menu-header'
    options.forEach((option) => {
        const aNavBarElement = document.createElement('a')
        aNavBarElement.setAttribute('href', `#${option[0].toLowerCase()}`)
        aNavBarElement.setAttribute('title', option[1])
        aNavBarElement.textContent = option[0]
        navBarHeaderElement.appendChild(aNavBarElement)
    })
    return navBarHeaderElement
}

function createSearchElement() {
    const searchContainerElement = document.createElement('div')
    searchContainerElement.classList = 'search-header'

    const inputSearchElement = document.createElement('input')
    inputSearchElement.classList = 'input-search-header'

    const buttonSearchElement = document.createElement('button')
    buttonSearchElement.classList = 'button-search-header'
    buttonSearchElement.textContent = 'Buscar'

    searchContainerElement.appendChild(inputSearchElement)
    searchContainerElement.appendChild(buttonSearchElement)

    return searchContainerElement
}

export function addHeader() {
    const headerElement = document.createElement('header')

    headerElement.classList = 'header-menu'

    headerElement.appendChild(createHeaderLogo(logoSrc))
    headerElement.appendChild(createHeaderNavBar(navOptions))
    headerElement.appendChild(createSearchElement())

    return headerElement
}