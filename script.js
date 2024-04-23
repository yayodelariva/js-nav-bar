const dropdownBox = document.querySelector(".dropdown")
const dropdownContents = document.querySelectorAll(".menuOption")

dropdownBox.addEventListener("click", function(){
    for (let i = 0; i<dropdownContents.length; i++){
        dropdownContents[i].classList.toggle("showOptions")
    }
})