let bgImg = document.getElementById("bgImg")

let smlImg = document.getElementsByClassName("smlImg");
smlImg[0].onclick = function() {
    bgImg.src = smlImg[0].src;
}
smlImg[1].onclick = function() {
    bgImg.src = smlImg[1].src;
}
smlImg[2].onclick = function() {
    bgImg.src = smlImg[2].src;
}
let bgImg2 = document.getElementById("bgImg2")
let smlImg1 = document.getElementsByClassName("smlImg1");
smlImg1[0].onclick = function() {
    bgImg2.src = smlImg1[0].src;
}
smlImg1[1].onclick = function() {
    bgImg2.src = smlImg1[1].src;
}
smlImg1[2].onclick = function() {
    bgImg2.src = smlImg1[2].src;
}

////////////////////////////////

$(document).ready(function() {
    $(".sing").click(function() {
        $(".form1").CSS.style.display = "block";
    })
})