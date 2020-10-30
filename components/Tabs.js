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


axios
.get("https://lambda-times-api.herokuapp.com/topics")
.then (function(res){
    
    const dataHolder=res.data.topics;
    dataHolder.forEach(function(topic){
        //Assigning topics div
        const topicsDiv=document.querySelector(".topics");
    
        //Creating tabDiv
        const tabDiv=document.createElement("div");
        tabDiv.classList.add("tab");
        tabDiv.textContent=topic;
        topicsDiv.append(tabDiv);

        //Console logs when one of the topics/tabs is clicked
        tabDiv.addEventListener("click", function(){
            console.log("a tab has been clicked");
        })

    })

})
.catch (function(err){
    console.log(err);
})

