let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");

let imgDiv = document.getElementById('img-div');
let pDiv = document.getElementById('p-div');

function addP(){
    let newP = document.createElement('p');
    let TheText = document.createTextNode("Pikachu is the GOAT!");
    newP.appendChild(TheText);
    newP.style.color = "white";
    newP.style.backgroundColor = "black";
    newP.style.fontSize = "16px";
    newP.style.fontWeight = "750";
    pDiv.appendChild(newP);
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

}

function addImage() {
    let newImage = document.createElement('img');
    newImage.src = "images/pikachu.png";
    newImage.style.width = "100px";
    imgDiv.style.display = "block";
    pDiv.style.display = "none";
    imgDiv.appendChild(newImage);
}

pButton.addEventListener("click", addP)
imgButton.addEventListener("click", addImage);