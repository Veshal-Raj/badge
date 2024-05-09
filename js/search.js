// create a list of counties and implement search on it;

let countries = ["India", "USA", "UK", "Japan", "China"]

function search(query) {
    query = query.toLowerCase()
    return countries.filter((country) => country.toLowerCase().includes(query))
}

let text = 'j'

console.log(search(text))