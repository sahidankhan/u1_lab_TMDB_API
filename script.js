const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

let button = document.querySelector(`#search`)

let section = document.querySelector(`.movie-list`)

const renderList = (movies) =>{
    movies.map((currentMovie) =>{
    let movieName = currentMovie.title
    let moviePic = currentMovie.poster_path
    let movieDescription = currentMovie.overview
    console.log(movieDescription)


let movieTitle = document.createElement(`h2`)
let moviePicture = document.createElement(`img`)
let movieDesc = document.createElement(`p`)

movieTitle.innerText = `${movieName}`

moviePicture.setAttribute(`src`,`${IMAGE_BASE_PATH}${moviePic}`)

movieDesc.innerText = `${movieDescription}`



section.appendChild(movieTitle)
section.appendChild(moviePicture)
section.appendChild(movieDesc)


    }
)}


button.addEventListener('click', async () => {
let input = document.querySelector(`#search-input`)
let movieChoice = input.value
console.log(movieChoice)
let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieChoice}&api_key=f7a0be1f5265470ecc64a2f69739f484`)

let movieOption = response.data.results

renderList(movieOption)
})
