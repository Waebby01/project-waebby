
document.addEventListener("DOMContentLoaded", function(){

    const openBtn = document.getElementById("openContact");
    const closeBtn = document.getElementById("closeContact");
    const panel = document.getElementById("contactPanel");

    if(openBtn){
        openBtn.addEventListener("click", function(e){
            e.preventDefault();
            panel.classList.add("active");
        });
    }

    if(closeBtn){
        closeBtn.addEventListener("click", function(){
            panel.classList.remove("active");
        });
    }

});
const revealElements = document.querySelectorAll(".about-section, .stat-box, .skill");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});