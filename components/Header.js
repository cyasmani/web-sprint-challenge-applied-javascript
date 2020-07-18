// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
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
    const divider1 = document.createElement("div");
    const span1 = document.createElement("span");
    const header1 = document.createElement("h1");
    const span2 = document.createElement("span");

    divider1.classList.add("header");
    span1.classList.add("date");
    span2.classList.add("temp");

    const maindiv = document.querySelector(".header-container")
    maindiv.appendChild(divider1);
    divider1.appendChild(span1);
    divider1.appendChild(header1);
    divider1.appendChild(span2);

    span1.textContent = "MARCH 28, 2020";
    header1.textContent = "Lambda Times";
    span2.textContent = "98 degrees";
    console.log(maindiv);

    return maindiv;

}

Header();

