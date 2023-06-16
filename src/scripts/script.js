let chooseCharacters = document.querySelectorAll(".back-character");

let onMouseOver = (event) => {
    console.log(event.target);
} 

for (let i = 0; i < chooseCharacters.length; i++) {
    chooseCharacters[i].addEventListener("mouseover", onMouseOver);
}