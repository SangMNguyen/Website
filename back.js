window.addEventListener("scroll", function() {handleScroll()}, false);

console.log("HELLO");
function handleScroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.opacity = "1";
        document.getElementById("topButton").style.transform = "scale(1)";
    } else {
        document.getElementById("topButton").style.opacity = "0";
        document.getElementById("topButton").style.transform = "scale(0)";
    }
    if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
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