function scrollToTop(){
    window.scrollTo(0,0);
}

/*window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.topo');
    scroll.classList.toggle("active" , window.scrollY > )

})*/
var scrollToButton = document.getElementById("topo-botao");
var docElement = document.documentElement;

function handleScroll(){
    var scrollTotal = docElement.scrollHeight - docElement.clientHeight;
    var count = docElement.scrollTop / scrollTotal
    if (count > 0.5){
        console.log(scrollToButton)
    } else {
    }
}

document.addEventListener("scroll", handleScroll)