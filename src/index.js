let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  loadToys()
});

function loadToys() {
  fetch("http://localhost:3000/toys").then(object => object.json()).then(object => renderToys(object)); 
}

function renderToys(collection) {
  const toyCollection = document.getElementById("toy-collection")
  collection.forEach( obj => {
    let newDiv = document.createElement("div")
    toyCollection.appendChild(newDiv)
    newDiv.setAttribute("class", "card");
    newDiv.innerHTML = obj['name']
    let img = document.createElement("img")
    img.src = obj['image']
    img.style = 'height:220px;'
    newDiv.appendChild(img)
  })
}