document.getElementById("messbtn").addEventListener("click",function(){
    const input1 = document.getElementById("name").value.trim()
    const input2 = document.getElementById("email").value.trim()
    const input3 = document.getElementById("numberss").value.trim()
    const input4 = document.getElementById("message").value.trim()


    if(!input1 || !input2 || !input3 || !input4) return

    document.getElementsByClassName("pop-up")[0].classList.add("active");
});

document.getElementById("pop-up-button").addEventListener("click",function(){
    document.getElementsByClassName("pop-up")[0].classList.remove("active");
});