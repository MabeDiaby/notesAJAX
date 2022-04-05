console.log("attached")

const searchInput = document.querySelector("#inputBar")
const searchButton = document.querySelector("#searchButton")
const nameDisplay = document.querySelector("#nameDisplay")


// TODO - 
// [x] event listener on searchButton
// [x] get the user's input from the searchBar into JS
// [x] incorporate user term into api request
// [x] add poke's name to page in nameDiaplay



async function getData(event) {
    
    event.preventDefault()
    
    const searchTerm = searchInput.value
    console.log(searchTerm)
    
    const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.name);
            nameDisplay.innerText = data.name
    })

}

searchButton.addEventListener("click", getData)