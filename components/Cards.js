import axios from "axios";

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
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

//Cards Container

const cardsContainer=document.querySelector(".cards-container");

//Article Maker Function 

function articleMaker(data){


    //Card DIV
    const cardDiv=document.createElement("div");
    cardDiv.classList.add("card");
    cardsContainer.append(cardDiv);

    //Headline DIV
    const headlineDiv=document.createElement("div");
    headlineDiv.classList.add("headline");
    headlineDiv.textContent=data.headline;
    cardDiv.append(headlineDiv);

    //Author DIV
    const authorDiv=document.createElement("div");
    authorDiv.classList.add("author");
    authorDiv.textContent=data.authorName;
    cardDiv.append(authorDiv);

    //Author Img Container DIV
    const imgContainer=document.createElement("div");
    imgContainer.classList.add("img-container");
    authorDiv.append(imgContainer);
    
    //Author Img 
    const authorImg=document.createElement("img");
    authorImg.src=data.authorPhoto;
    imgContainer.append(authorImg);

    //Author Name Span
    const nameSpan=document.createElement("span");
    nameSpan.textContent="By "+ data.authorName;
    authorDiv.append(nameSpan);

    cardDiv.addEventListener("click", function(event){
        console.log(event.target.headlineDiv);
    })

    return cardDiv;

}

//AXIOS GET REQUEST 

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(function(res){
    console.log(res);
    let articleSections=res.data.articles;
    console.log(articleSections);
    articleSections.javascript.forEach(function(article){
        articleMaker(article);
    })
    articleSections.bootstrap.forEach(function(article){
        articleMaker(article);
    })
    articleSections.technology.forEach(function(article){
        articleMaker(article);
    })
    articleSections.jquery.forEach(function(article){
        articleMaker(article);
    })
    articleSections.node.forEach(function(article){
        articleMaker(article);
    })
})
.catch(function(err){
    console.log(err);
})