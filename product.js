let sidenav = document.getElementById("sidenav")
let svg = document.getElementById("svg")
let x = document.getElementById("x")
let search = document.getElementById("search")
let plantcontainer = document.querySelectorAll(".plant-box")

svg.addEventListener("click", function () {
    sidenav.style.right = 0
})

x.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

search.addEventListener("keyup", function () {

    let enteredValue = search.value.toLowerCase()

    plantcontainer.forEach(function (plant) {

        let plantName = plant.querySelector("p").textContent.toLowerCase()

        if (plantName.includes(enteredValue)) {

            plant.style.display = "block"

        } else {

            plant.style.display = "none"

        }

    })

})

