// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const info = axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log("successful", response);
    console.log(response.data.articles);
    console.log(response.data.articles.bootstrap)
    console.log(response.data.articles.bootstrap[0].authorName)
    

    response.data.articles.bootstrap.forEach(element => {
        //console.log(element);
        articleMaker(element)
        
    });

    response.data.articles.javascript.forEach(element => {
        //console.log(element);
        articleMaker(element)
        
    });

    response.data.articles.jquery.forEach(element => {
        //console.log(element);
        articleMaker(element)
        
    });

    response.data.articles.technology.forEach(element => {
        //console.log(element);
        articleMaker(element)
        
    });

    response.data.articles.node.forEach(element => {
        //console.log(element);
        articleMaker(element)
        
    });
}).catch(err => {
    const error1 = document.createElement("h1");
    const container1 = document.querySelector(".cards-container")
    container1.appendChild(error1);
    error1.textContent = "Failure fetching articles";
    console.log("error", err)
});

function articleMaker(obj){

    const carddiv = document.createElement("div");
    const headerdiv = document.createElement("div")
    const authordiv = document.createElement("div");
    const imgdiv = document.createElement("div");
    const imagen = document.createElement("img");
    const spanner = document.createElement("span");

    carddiv.classList.add("card");
    headerdiv.classList.add("headline");
    authordiv.classList.add("author");
    imgdiv.classList.add("img-container");

    const cardscontainer = document.querySelector(".cards-container");
    cardscontainer.appendChild(carddiv);
    carddiv.appendChild(headerdiv);
    carddiv.appendChild(authordiv);
    authordiv.appendChild(imgdiv);
    imgdiv.appendChild(imagen);
    authordiv.appendChild(spanner);
    
    headerdiv.textContent = `${obj.headline}`;
    imagen.setAttribute("src", `${obj.authorPhoto}`);
    spanner.textContent = `${obj.authorName}`;

    carddiv.addEventListener("click", event => {
        console.log(headerdiv);

    })

    return carddiv;
}