/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  const maindiv = document.createElement("div");
  const leftdiv = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightdiv = document.createElement("div");
  const maincontainer = document.querySelector(".carousel-container");

  maindiv.classList.add("carousel");
  leftdiv.classList.add("left-button");
  rightdiv.classList.add("right-button");

  img1.setAttribute("src", "./assets/carousel/mountains.jpeg");
  img2.setAttribute("src", "./assets/carousel/computer.jpeg");
  img3.setAttribute("src", "./assets/carousel/trees.jpeg");
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg");
  leftdiv.textContent = "<";
  rightdiv.textContent = ">";

  let myArray = [img1, img2, img3, img4];
  console.log(myArray);

  maincontainer.appendChild(maindiv);
  maindiv.appendChild(leftdiv);
  maindiv.appendChild(img1);
  maindiv.appendChild(img2);
  maindiv.appendChild(img3);
  maindiv.appendChild(img4);
  maindiv.appendChild(rightdiv);

  let counter = 0;



  leftdiv.addEventListener("click", event =>{
    
    myArray.shift();
    

    //event.document.querySelector(".carousel img").style.display = "inline";
    // myArray.forEach(item => {
    //   document.item.style.display = "inline-block";
    // })
  })


  return maincontainer;


}

carouselMaker();

