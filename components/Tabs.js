import axios from "axios";

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//Topics DIV
const topicsDiv=document.querySelector(".topics");

//Tab Maker Function
function tabMaker(data){

    const tabDiv=document.createElement("div");
    tabDiv.textContent=data;
    tabDiv.classList.add("tab");
    topicsDiv.append(tabDiv);
}

//GET Request 
axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(function(res){
    let tabs=res.data.topics;
    tabs.forEach(function(tab){
        tabMaker(tab);
    })
})
.catch(function(err){
    console.log(err);
})