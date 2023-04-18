function scrollToTop(){
    window.scrollTo(0,0);
}

var scrollToButton = document.getElementById("btntop");
var docElement = document.documentElement;

function handleScroll(){
    var scrollTotal = docElement.scrollHeight - docElement.clientHeight;
    var count = docElement.scrollTop / scrollTotal
    if (count > 0.5){
        scrollToButton.style.right = '20px';
    } else {
        scrollToButton.style.right = '-50px';
    }
}

document.addEventListener("scroll", handleScroll);

var btn = document.querySelector('.pesq');
var box = document.querySelector('.pesq-box');

btn.addEventListener('click', function(){
    if (box.style.display == "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
})