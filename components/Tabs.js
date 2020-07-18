// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const information = axios.get("https://lambda-times-backend.herokuapp.com/topics").then(response => {
    //console.log("success",response);
    //console.log(response.data.topics);

    response.data.topics.forEach(element => {
        const tab1 = document.createElement("div");
        const maintab = document.querySelector(".topics");
        maintab.appendChild(tab1);
        tab1.classList.add("tab");
        tab1.textContent = `${element}`;

        //console.log(element);
    });

}) .catch(err => {
    console.log("error",err);
})

