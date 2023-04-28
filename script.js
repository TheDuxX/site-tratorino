function scrollToTop(){
    window.scrollTo(0,0);
}

var scrollToButton = document.getElementById("btntop");
var docElement = document.documentElement;

function handleScroll(){
    var scrollTotal = docElement.scrollHeight - docElement.clientHeight;
    var count = docElement.scrollTop / scrollTotal
    if (count > 0.5){
        scrollToButton.style.bottom = '20px';
    } else {
        scrollToButton.style.bottom = '-50px';
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

const bntMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

const pesqBnt = document.querySelector('.pesq');

function btnPesq() {
    const textPesq = document.getElementById('pesq-text');
    textPesq.classList.toggle('ativo');
}
