/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//Carousel Container

const carContainer=document.querySelector(".carousel-container");


//Carousel Maker Function
function carouselMaker(){


  //Carousel 
  const carousel=document.createElement("div");
  carousel.classList.add("carousel");
  carContainer.append(carousel);

  //Left Button DIV
  const leftDiv=document.createElement("div");
  leftDiv.classList.add("left-button");
  leftDiv.textContent="<";
  carousel.append(leftDiv);

  //First Image + carImg CLASS
  const firstImage=document.createElement("img");
  firstImage.classList.add("carImg");
  firstImage.src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
  carousel.append(firstImage);

  //Second Image 
  const secondImage=document.createElement("img");
  secondImage.classList.add("carImg");
  secondImage.src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  carousel.append(secondImage);

  //Third Image
  const thirdImage=document.createElement("img");
  thirdImage.classList.add("carImg");
  thirdImage.src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  carousel.append(thirdImage);

  //Fourth Image
  const fourthImage=document.createElement("img");
  fourthImage.classList.add("carImg");
  fourthImage.src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
  carousel.append(fourthImage);

  //Right Button DIV
  const rightDiv=document.createElement("div");
  rightDiv.classList.add("right-button");
  rightDiv.textContent=">";
  carousel.append(rightDiv);

  //Images Array
  const carImagesArray=Array.from(document.querySelectorAll(".carImg"));

  leftDiv.addEventListener("click", function(event){
    carImagesArray[2].style.display="block";
    carImagesArray[3].style.display="block";
  })

  rightDiv.addEventListener("click", function(event){
    carImagesArray[0].style.display="block";
    carImagesArray[1].style.display="block";
  })

}

//Invocation
carouselMaker();