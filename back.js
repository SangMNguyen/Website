window.addEventListener("scroll", function() {handleScroll()}, false);

console.log("HELLO");
function handleScroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function goTo(section) {
    if(section == "discord") {
        document.body.scrollTop = 1000;
        document.documentElement.scrollTop = 1000;
    }
    if(section == "pong") {
        document.body.scrollTop = 2000;
        document.documentElement.scrollTop = 2000;
    }
}