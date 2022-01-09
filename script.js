"use strict"
const colors = ["Green", "Red", "Blue", "Yellow", "Orange"]
const btn = document.getElementById("btn")
const text = document.querySelector(".color")


btn.addEventListener("click", () => {
    const Change = ChangeColors()

    document.body.style.backgroundColor = colors[Change]

    text.textContent = colors[Change]
})



function ChangeColors() {
    return Math.floor(Math.random() * colors.length)
}