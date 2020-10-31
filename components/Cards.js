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

axios
.get("https://lambda-times-api.herokuapp.com/articles")
.then(function(res){

    //BOOTSTRAP ARTICLES
    const artHold=res.data.articles.bootstrap;
    artHold.forEach(function(article){

        //Assigning Cards Container Div
        const articleCardsContainer=document.querySelector(".cards-container");

        //Creating Card Div
        const articleCardStorage=document.createElement("div");
        articleCardStorage.classList.add("card");
        articleCardsContainer.append(articleCardStorage);

        //Creating Headline Div
        const headlineDiv=document.createElement("div");
        headlineDiv.classList.add("headline");
        headlineDiv.textContent=article.headline;
        articleCardStorage.append(headlineDiv);

        //Creating Author Div
        const authorDiv=document.createElement("div");
        authorDiv.classList.add("author");
        articleCardStorage.append(authorDiv);

        //Creating Img Div
        const imgDiv=document.createElement("div");
        imgDiv.classList.add("img-container");
        authorDiv.append(imgDiv);

        //Creating Img Div Link
        const imgLink=document.createElement("img");
        imgLink.src=article.authorPhoto;
        imgDiv.append(imgLink);

        //Creating Author Name Span
        const nameSpan=document.createElement("span");
        nameSpan.textContent="By "+article.authorName;
        authorDiv.append(nameSpan);
        
        
    })
    //JAVASCRIPT ARTICLES
    const artHoldTwo=res.data.articles.javascript;
    artHoldTwo.forEach(function(article){

        //Assigning Cards Container Div
        const articleCardsContainer=document.querySelector(".cards-container");

        //Creating Card Div
        const articleCardStorage=document.createElement("div");
        articleCardStorage.classList.add("card");
        articleCardsContainer.append(articleCardStorage);

        //Creating Headline Div
        const headlineDiv=document.createElement("div");
        headlineDiv.classList.add("headline");
        headlineDiv.textContent=article.headline;
        articleCardStorage.append(headlineDiv);

        //Creating Author Div
        const authorDiv=document.createElement("div");
        authorDiv.classList.add("author");
        articleCardStorage.append(authorDiv);

        //Creating Img Div
        const imgDiv=document.createElement("div");
        imgDiv.classList.add("img-container");
        authorDiv.append(imgDiv);

        //Creating Img Div Link
        const imgLink=document.createElement("img");
        imgLink.src=article.authorPhoto;
        imgDiv.append(imgLink);

        //Creating Author Name Span
        const nameSpan=document.createElement("span");
        nameSpan.textContent="By "+article.authorName;
        authorDiv.append(nameSpan);
        
    })
    //JQUERY ARTICLES 
    const artHoldThree=res.data.articles.jquery;
    artHoldThree.forEach(function(article){

        //Assigning Cards Container Div
        const articleCardsContainer=document.querySelector(".cards-container");

        //Creating Card Div
        const articleCardStorage=document.createElement("div");
        articleCardStorage.classList.add("card");
        articleCardsContainer.append(articleCardStorage);

        //Creating Headline Div
        const headlineDiv=document.createElement("div");
        headlineDiv.classList.add("headline");
        headlineDiv.textContent=article.headline;
        articleCardStorage.append(headlineDiv);

        //Creating Author Div
        const authorDiv=document.createElement("div");
        authorDiv.classList.add("author");
        articleCardStorage.append(authorDiv);

        //Creating Img Div
        const imgDiv=document.createElement("div");
        imgDiv.classList.add("img-container");
        authorDiv.append(imgDiv);

        //Creating Img Div Link
        const imgLink=document.createElement("img");
        imgLink.src=article.authorPhoto;
        imgDiv.append(imgLink);

        //Creating Author Name Span
        const nameSpan=document.createElement("span");
        nameSpan.textContent="By "+article.authorName;
        authorDiv.append(nameSpan);
        
    })
    //NODE ARTICLES 
    const artHoldFour=res.data.articles.node;
    artHoldFour.forEach(function(article){

        //Assigning Cards Container Div
        const articleCardsContainer=document.querySelector(".cards-container");

        //Creating Card Div
        const articleCardStorage=document.createElement("div");
        articleCardStorage.classList.add("card");
        articleCardsContainer.append(articleCardStorage);

        //Creating Headline Div
        const headlineDiv=document.createElement("div");
        headlineDiv.classList.add("headline");
        headlineDiv.textContent=article.headline;
        articleCardStorage.append(headlineDiv);

        //Creating Author Div
        const authorDiv=document.createElement("div");
        authorDiv.classList.add("author");
        articleCardStorage.append(authorDiv);

        //Creating Img Div
        const imgDiv=document.createElement("div");
        imgDiv.classList.add("img-container");
        authorDiv.append(imgDiv);

        //Creating Img Div Link
        const imgLink=document.createElement("img");
        imgLink.src=article.authorPhoto;
        imgDiv.append(imgLink);

        //Creating Author Name Span
        const nameSpan=document.createElement("span");
        nameSpan.textContent="By "+article.authorName;
        authorDiv.append(nameSpan);
        
    })
    //TECHNOLOGY ARTICLES 
    const artHoldFive=res.data.articles.technology;
    artHoldFive.forEach(function(article){

        //Assigning Cards Container Div
        const articleCardsContainer=document.querySelector(".cards-container");

        //Creating Card Div
        const articleCardStorage=document.createElement("div");
        articleCardStorage.classList.add("card");
        articleCardsContainer.append(articleCardStorage);

        //Creating Headline Div
        const headlineDiv=document.createElement("div");
        headlineDiv.classList.add("headline");
        headlineDiv.textContent=article.headline;
        articleCardStorage.append(headlineDiv);

        //Creating Author Div
        const authorDiv=document.createElement("div");
        authorDiv.classList.add("author");
        articleCardStorage.append(authorDiv);

        //Creating Img Div
        const imgDiv=document.createElement("div");
        imgDiv.classList.add("img-container");
        authorDiv.append(imgDiv);

        //Creating Img Div Link
        const imgLink=document.createElement("img");
        imgLink.src=article.authorPhoto;
        imgDiv.append(imgLink);

        //Creating Author Name Span
        const nameSpan=document.createElement("span");
        nameSpan.textContent="By "+article.authorName;
        authorDiv.append(nameSpan);
        
        // When JS Tab Is clicked, Only Display JS Articles 

        let tabStorageArea=document.querySelectorAll(".tab");
        tabStorageArea[0].addEventListener("click", function(){
            let cardStorageArea = document.querySelectorAll(".card");
            cardStorageArea[0].style.visibility="hidden";
            cardStorageArea[1].style.visibility="hidden";
            cardStorageArea[2].style.visibility="hidden";
            cardStorageArea[3].style.visibility="visible";
            cardStorageArea[4].style.visibility="visible";
            cardStorageArea[5].style.visibility="visible";
            cardStorageArea[6].style.visibility="visible";
            cardStorageArea[7].style.visibility="hidden";
            cardStorageArea[8].style.visibility="hidden";
            cardStorageArea[9].style.visibility="hidden";
            cardStorageArea[10].style.visibility="hidden";
            cardStorageArea[11].style.visibility="hidden";
            cardStorageArea[12].style.visibility="hidden";
            cardStorageArea[13].style.visibility="hidden";
            cardStorageArea[14].style.visibility="hidden";
        })

        // When Bootstrap Tab Is clicked, Only Display Bootstrap Articles 
  
        tabStorageArea[1].addEventListener("click", function(){
            let cardStorageArea = document.querySelectorAll(".card");
            cardStorageArea[0].style.visibility="visible";
            cardStorageArea[1].style.visibility="visible";
            cardStorageArea[2].style.visibility="visible";
            cardStorageArea[3].style.visibility="hidden";
            cardStorageArea[4].style.visibility="hidden";
            cardStorageArea[5].style.visibility="hidden";
            cardStorageArea[6].style.visibility="hidden";
            cardStorageArea[7].style.visibility="hidden";
            cardStorageArea[8].style.visibility="hidden";
            cardStorageArea[9].style.visibility="hidden";
            cardStorageArea[10].style.visibility="hidden";
            cardStorageArea[11].style.visibility="hidden";
            cardStorageArea[12].style.visibility="hidden";
            cardStorageArea[13].style.visibility="hidden";
            cardStorageArea[14].style.visibility="hidden";
        })

        // When Technology Tab Is clicked, Only Display Technology Articles 

        tabStorageArea[2].addEventListener("click", function(){
            let cardStorageArea = document.querySelectorAll(".card");
            cardStorageArea[0].style.visibility="hidden";
            cardStorageArea[1].style.visibility="hidden";
            cardStorageArea[2].style.visibility="hidden";
            cardStorageArea[3].style.visibility="hidden";
            cardStorageArea[4].style.visibility="hidden";
            cardStorageArea[5].style.visibility="hidden";
            cardStorageArea[6].style.visibility="hidden";
            cardStorageArea[7].style.visibility="hidden";
            cardStorageArea[8].style.visibility="hidden";
            cardStorageArea[9].style.visibility="hidden";
            cardStorageArea[10].style.visibility="hidden";
            cardStorageArea[11].style.visibility="hidden";
            cardStorageArea[12].style.visibility="visible";
            cardStorageArea[13].style.visibility="visible";
            cardStorageArea[14].style.visibility="visible";
        })

        // When JQUERY Tab Is clicked, Only Display JQUERY Articles 

        tabStorageArea[3].addEventListener("click", function(){
            let cardStorageArea = document.querySelectorAll(".card");
            cardStorageArea[0].style.visibility="hidden";
            cardStorageArea[1].style.visibility="hidden";
            cardStorageArea[2].style.visibility="hidden";
            cardStorageArea[3].style.visibility="hidden";
            cardStorageArea[4].style.visibility="hidden";
            cardStorageArea[5].style.visibility="hidden";
            cardStorageArea[6].style.visibility="hidden";
            cardStorageArea[7].style.visibility="visible";
            cardStorageArea[8].style.visibility="visible";
            cardStorageArea[9].style.visibility="visible";
            cardStorageArea[10].style.visibility="hidden";
            cardStorageArea[11].style.visibility="hidden";
            cardStorageArea[12].style.visibility="hidden";
            cardStorageArea[13].style.visibility="hidden";
            cardStorageArea[14].style.visibility="hidden";
        })

        // When NodeJS Tab Is clicked, Only Display NodeJS Articles 

        tabStorageArea[4].addEventListener("click", function(){
            let cardStorageArea = document.querySelectorAll(".card");
            cardStorageArea[0].style.visibility="hidden";
            cardStorageArea[1].style.visibility="hidden";
            cardStorageArea[2].style.visibility="hidden";
            cardStorageArea[3].style.visibility="hidden";
            cardStorageArea[4].style.visibility="hidden";
            cardStorageArea[5].style.visibility="hidden";
            cardStorageArea[6].style.visibility="hidden";
            cardStorageArea[7].style.visibility="hidden";
            cardStorageArea[8].style.visibility="hidden";
            cardStorageArea[9].style.visibility="hidden";
            cardStorageArea[10].style.visibility="visible";
            cardStorageArea[11].style.visibility="visible";
            cardStorageArea[12].style.visibility="hidden";
            cardStorageArea[13].style.visibility="hidden";
            cardStorageArea[14].style.visibility="hidden";
        })

        

    })
})
.catch (function(err){
    console.log(err);
})



