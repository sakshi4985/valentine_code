function moveRandomE1(elm) {
    elm.style.position ="absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5)+ "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5)+ "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moveRandomE1(e.target);
})