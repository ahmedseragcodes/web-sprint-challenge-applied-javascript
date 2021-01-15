

// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    //Header Container 
    const headerContainer=document.querySelector(".header-container");
    
    //Header DIV
    const headerDiv=document.createElement("div");
    headerDiv.classList.add("header");
    headerContainer.append(headerDiv);

    //Date Span
    const dateSpan=document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent="March 28, 2020";
    headerDiv.append(dateSpan);

    //Title Heading
    const titleHeading=document.createElement("h1");
    titleHeading.textContent="Lambda Times";
    headerDiv.append(titleHeading);

    //Temperature Span
    const tempSpan=document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent="98 Degrees";
    headerDiv.append(tempSpan);

}

//Invocation 
Header();