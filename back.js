window.addEventListener("scroll", function() {handleScroll()}, false);
window.onload = function() {
    document.getElementById("sideNav").addEventListener("click", function() {openSide()});
    for(let sidelink of document.getElementsByClassName("navlink")) {
        sidelink.addEventListener("click",function() {closeSide()});
    }
}
var width = window.screen.width;
var desktop = false;
if(width >= 769) {
    desktop = true;
}
var isOpen = false;

console.log("HELLO");
function handleScroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.opacity = "1";
        document.getElementById("topButton").style.transform = "scale(1)";
    } else {
        document.getElementById("topButton").style.opacity = "0";
        document.getElementById("topButton").style.transform = "scale(0)";
    }
    if(desktop && (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900)) {
        document.getElementById("icons").style.opacity = "1";
        document.getElementById("icons").style.transform = "scale(1)";
    } else {
        document.getElementById("icons").style.opacity = "0";
        document.getElementById("icons").style.transform = "scale(0)";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openSide() {
    document.getElementById("navMenu").style.left = "0rem";
}
function closeSide() {
    document.getElementById("navMenu").style.left = "-80rem";
}

function seeDesc(section) {
    let curSect = document.getElementById(section);
    curSect.getElementsByClassName("desctext")[0].style.display = "block";
    curSect.getElementsByClassName("descExit")[0].style.display = "block";
    curSect.getElementsByClassName("descBut")[0].style.display = "none";
    curSect.getElementsByClassName("githlink")[0].style.display = "none";
    curSect.getElementsByClassName("nextButton")[0].style.display = "none";
    curSect.getElementsByClassName("backButton")[0].style.display = "none";
}

function closeDesc(section) {
    let curSect = document.getElementById(section);
    curSect.getElementsByClassName("desctext")[0].style.display = "none";
    curSect.getElementsByClassName("descExit")[0].style.display = "none";
    curSect.getElementsByClassName("descBut")[0].style.display = "block";
    curSect.getElementsByClassName("githlink")[0].style.display = "block";
    curSect.getElementsByClassName("nextButton")[0].style.display = "block";
    curSect.getElementsByClassName("backButton")[0].style.display = "block";
}