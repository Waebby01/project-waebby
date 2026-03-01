const openBtn = document.getElementById("openContact");
const closeBtn = document.getElementById("closeContact");
const panel = document.getElementById("contactPanel");

openBtn.addEventListener("click", function(e){
    e.preventDefault();
    panel.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    panel.classList.remove("active");
});

function openContact(){
    document.getElementById("contactPanel").classList.add("active");
}

function closeContact(){
    document.getElementById("contactPanel").classList.remove("active");
}