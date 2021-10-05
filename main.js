const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=";
const nr = "1";
const btn = document.querySelector('.btn')
const quotes = document.querySelector('h1')
const author = document.querySelector('h3')

quotes.style.backgroundColor="white"
author.style.backgroundColor="white"

fetch(url + nr)
    .then(response => response.json()).
    then(response => {
        console.log(response)
        const motivation = Object.assign({}, ...response.quotes);
        quotes.textContent = motivation.text
        author.textContent = motivation.author
    })
    .catch(error => alert("Oops, something went wrong."))

btn.addEventListener("click", () => {
window.location.reload()
})
