
// Select some elements...
// Select page header and style it.
let header = document.querySelector("#page-header") // 53-55
header.style.textAlign = 'left' // CSS text-align

//curving text image radius
let dogImages = document.querySelectorAll(".dog-image")
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = "50px"
}

//selecting html classes and changing fonts with js
let dogDescription = document.querySelectorAll(".dog-description")
for (let i = 0; i < dogDescription.length; i++) {
    dogDescription[i].style.fontFamily = "Serif"
}

