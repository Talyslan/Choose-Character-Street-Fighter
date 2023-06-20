let chooseChar = document.querySelectorAll(".back-character");
let gifChar = document.querySelectorAll(".back-gif");

function removeAllEffects() {
    for (const div of chooseChar) {
        div.classList.remove("select");
    }

    for (const gifName of gifChar) {
        gifName.classList.add("disappear");
    }
}

const clickActive = (event) => {
    removeAllEffects();
    const divOnEvent = event.target;

    if (divOnEvent.classList.contains("back-character")) {
        removeAllEffects();

        for (const gifName of gifChar) {
            let nameGifVerification = gifName.children[1].innerHTML;
            let nameCharVerification = divOnEvent.children[1].innerHTML;
    
            console.log(gifName)
            
            if (nameGifVerification == nameCharVerification) {
                gifName.classList.remove("disappear");
            }
        }

        divOnEvent.classList.add("select");
    }
}

for (const div of chooseChar) {
    div.addEventListener('click', clickActive, true);
}