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

    //FILTERING STRETCH
    const tabStorage=Array.from(document.querySelectorAll(".tab"));
    const cardStorage=document.querySelectorAll(".card");
    
    //JAVASCRIPT FILTERING
    tabStorage[0].addEventListener("click", function(event){
        cardStorage[0].style.visibility="visible";
        cardStorage[1].style.visibility="visible";
        cardStorage[2].style.visibility="visible";
        cardStorage[3].style.visibility="visible";
        cardStorage[4].style.visibility="hidden";
        cardStorage[5].style.visibility="hidden";
        cardStorage[6].style.visibility="hidden";
        cardStorage[7].style.visibility="hidden";
        cardStorage[8].style.visibility="hidden";
        cardStorage[9].style.visibility="hidden";
        cardStorage[10].style.visibility="hidden";
        cardStorage[11].style.visibility="hidden";
        cardStorage[12].style.visibility="hidden";
        cardStorage[13].style.visibility="hidden";
        cardStorage[14].style.visibility="hidden";
    })

//BOOTSTRAP FILTERING
tabStorage[1].addEventListener("click", function(event){
    cardStorage[0].style.visibility="hidden";
    cardStorage[1].style.visibility="hidden";
    cardStorage[2].style.visibility="hidden";
    cardStorage[3].style.visibility="hidden";
    cardStorage[4].style.visibility="visible";
    cardStorage[5].style.visibility="visible";
    cardStorage[6].style.visibility="visible";
    cardStorage[7].style.visibility="hidden";
    cardStorage[8].style.visibility="hidden";
    cardStorage[9].style.visibility="hidden";
    cardStorage[10].style.visibility="hidden";
    cardStorage[11].style.visibility="hidden";
    cardStorage[12].style.visibility="hidden";
    cardStorage[13].style.visibility="hidden";
    cardStorage[14].style.visibility="hidden";
})

//TECHNOLOGY FILTERING
tabStorage[2].addEventListener("click", function(event){
    cardStorage[0].style.visibility="hidden";
    cardStorage[1].style.visibility="hidden";
    cardStorage[2].style.visibility="hidden";
    cardStorage[3].style.visibility="hidden";
    cardStorage[4].style.visibility="hidden";
    cardStorage[5].style.visibility="hidden";
    cardStorage[6].style.visibility="hidden";
    cardStorage[7].style.visibility="visible";
    cardStorage[8].style.visibility="visible";
    cardStorage[9].style.visibility="visible";
    cardStorage[10].style.visibility="hidden";
    cardStorage[11].style.visibility="hidden";
    cardStorage[12].style.visibility="hidden";
    cardStorage[13].style.visibility="hidden";
    cardStorage[14].style.visibility="hidden";
})

//JQUERY FILTERING
tabStorage[3].addEventListener("click", function(event){
    cardStorage[0].style.visibility="hidden";
    cardStorage[1].style.visibility="hidden";
    cardStorage[2].style.visibility="hidden";
    cardStorage[3].style.visibility="hidden";
    cardStorage[4].style.visibility="hidden";
    cardStorage[5].style.visibility="hidden";
    cardStorage[6].style.visibility="hidden";
    cardStorage[7].style.visibility="hidden";
    cardStorage[8].style.visibility="hidden";
    cardStorage[9].style.visibility="hidden";
    cardStorage[10].style.visibility="visible";
    cardStorage[11].style.visibility="visible";
    cardStorage[12].style.visibility="visible";
    cardStorage[13].style.visibility="hidden";
    cardStorage[14].style.visibility="hidden";
})


//NODE FILTERING
tabStorage[4].addEventListener("click", function(event){
    cardStorage[0].style.visibility="hidden";
    cardStorage[1].style.visibility="hidden";
    cardStorage[2].style.visibility="hidden";
    cardStorage[3].style.visibility="hidden";
    cardStorage[4].style.visibility="hidden";
    cardStorage[5].style.visibility="hidden";
    cardStorage[6].style.visibility="hidden";
    cardStorage[7].style.visibility="hidden";
    cardStorage[8].style.visibility="hidden";
    cardStorage[9].style.visibility="hidden";
    cardStorage[10].style.visibility="hidden";
    cardStorage[11].style.visibility="hidden";
    cardStorage[12].style.visibility="hidden";
    cardStorage[13].style.visibility="visible";
    cardStorage[14].style.visibility="visible";
})

//ALL ARTICLE FILTERING 
tabStorage[5].addEventListener("click", function(event){
    cardStorage[0].style.visibility="visible";
    cardStorage[1].style.visibility="visible";
    cardStorage[2].style.visibility="visible";
    cardStorage[3].style.visibility="visible";
    cardStorage[4].style.visibility="visible";
    cardStorage[5].style.visibility="visible";
    cardStorage[6].style.visibility="visible";
    cardStorage[7].style.visibility="visible";
    cardStorage[8].style.visibility="visible";
    cardStorage[9].style.visibility="visible";
    cardStorage[10].style.visibility="visible";
    cardStorage[11].style.visibility="visible";
    cardStorage[12].style.visibility="visible";
    cardStorage[13].style.visibility="visible";
    cardStorage[14].style.visibility="visible";
})


})
.catch(function(err){
    console.log(err);
})

