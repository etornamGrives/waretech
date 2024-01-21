document.getElementById("messbtn").addEventListener("click",function(){
    document.getElementsByClassName("pop-up")[0].classList.add("active");
});

document.getElementById("pop-up-button").addEventListener("click",function(){
    document.getElementsByClassName("pop-up")[0].classList.remove("active");
});