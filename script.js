let mainPage = document.querySelector("#main");

let cursorPoint = document.querySelector(".cursor");

mainPage.addEventListener("mousemove", function(dets){
    cursorPoint.style.left = dets.x+"px";
    cursorPoint.style.top = dets.y+"px";

})