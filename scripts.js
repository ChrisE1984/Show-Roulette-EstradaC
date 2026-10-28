// STEP 1 Grab the page elements we need
const searchInput = document.getElementById("search");
const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");

// all the shows live in the array once they load
//search filters THIS array, so searching costs zero network requests

let allShows = [];

// STEP 2 place your order: fetch our TV shows

// We need the address 
const BASE_URL = "https://api.tvmaze.com";

// Every request goes through this helper function, three steps every time:
//1. Order ---> fetch(url)
//2. Check the plate ---> res.ok
// unwrap ---> res.json()

async function getJSON(path){
    const response = await fetch(BASE_URL + path);
    return await  response.json();
}

// two ways to order from menu:
// "/shows?page=0" ---> LIST of shows ---> an array(shows)
// "/show/1" ---> ONE show ---> {} an object (one show)

// create a function to pull all the shows

async function getShows() {
    const data = await getJSON("/shows?page=0");
    console.log(data);
    console.log(toCard(data[0]));
}

//create a function to pull only one shoe
async function getShow(id){
    return await getJSON("/show/" + id)
}

console.log(getShows())

function toCard(raw) {
    return {
        id: raw.id,
        name: raw.name,
        genres: raw.genres,
        year: raw.premiered,
        image: raw.image.medium

    };

}
async function createHeading (title, imageURL) {
    const card = document.createElement()
} 
