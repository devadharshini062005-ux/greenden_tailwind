let sidenav = document.getElementById("sidenav")
let svg = document.getElementById("svg")
let x = document.getElementById("x")

svg.addEventListener("click", function () {
    sidenav.style.right=0
})

x.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})