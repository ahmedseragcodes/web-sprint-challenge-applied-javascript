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
    
    //Creating Header Div, which will be appeneded to Header Container
    const headerDiv=document.createElement("div");
    headerDiv.classList.add("header");

    //Creating Date Span
    const dateSpan=document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent="March 28, 2020";
    headerDiv.append(dateSpan);

    //Creating Times Heading
    const timesHeading=document.createElement("h1");
    timesHeading.textContent="Lambda Times";
    headerDiv.append(timesHeading);

    //Creating Temp Span
    const tempSpan=document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent="98°";
    headerDiv.append(tempSpan);

    //Appending Header Div to Header Container
    const headerContainer=document.querySelector(".header-container");
    headerContainer.append(headerDiv);


    return headerDiv;
}
Header();
