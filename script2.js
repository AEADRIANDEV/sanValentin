"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");



const MAX_IMAGES=10;

let play=true;
let noCount=0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
      noCount++;
      const imageIndex = Math.min(noCount, MAX_IMAGES);
      changeImage(imageIndex);
      resizeYesButton();
      updateNoButtonText();
      if (noCount === MAX_IMAGES) {
        noButton.classList.add("hidden");
        play = false;
      }
    }
  });

function handleYesClick() {
    titleElement.innerHTML = "¡¡Siiuuuu!! :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
    crearboton();
}
 
function crearboton(){
    var container = document.getElementById("container");
    var boton = document.createElement("button");
    boton.classList.add("boton-carta")
    boton.innerHTML = "Click aqui Mamo";
    container.appendChild(boton);
    boton.addEventListener("click", ()=>{
      var limpieza='carta.html';
      window.location.href=limpieza;
    })
}


function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.2;
  
    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
      "No",
      "Estas Segura?",
      "...",
      "Esto no es Chestoso",
      "¡Ya! modo serio SI o Si",
      "Veraaaaaaas",
      "Cuidao",
      "Deberitas no?",
      "Grosera",
      "Toma por mala",
      "Ya no puedes decir que no jejex"
    ];
  
    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `img2/cat--${image}.jpg`;
}

function updateNoButtonText() {
    titleElement.innerHTML = generateMessage(noCount);
}