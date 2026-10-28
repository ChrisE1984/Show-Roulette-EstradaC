// grab the page elements
const spinBtn = document.getElementById("spin");
const statusEL = document.getElementById("status");
const resultEL = document.getElementById("result");

spinBtn.addEventListener("click", async function () {
    //pick a random show number from 1-240
    const id = Math.floor(Math.random() * 240) + 1;

    resultEL.textContent = ("")
    statusEL.textContent = "Spinning... channel #" + id;

    //ask the api for the show
    const res = await fetch("https://api.tvmaze.com/shows/" + id)

    //3. fetch does not return a 404, so we check ourselves
    if (!res.ok){
        statusEL.textContent = "Error finding show, please spin again."
        return
    }

    //4. turn JSON into JavaScript object
    const show = await res.json()
    statusEL.textContent = "";
    //5. Draw it on our page
    if(show.image){
        const img = document.createElement("img");
        img.src= show.image.medium;
        img.alt= show.summary;
        resultEL.appendChild(img);
    }
    const title = document.createElement("h2");
    title.textContent= show.name;
    resultEL.appendChild(title);

    const rating = document.createElement("p");
    if(show.rating.average){
        rating.textContent = show.rating.average;
        }
        else{
            rating.textContent = "No rating found"
        }
    resultEL.appendChild(rating);
})

