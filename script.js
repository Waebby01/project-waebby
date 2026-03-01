
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openContact");
    const closeBtn = document.getElementById("closeContact");
    const panel = document.getElementById("contactPanel");
    
    if (openBtn) {
        openBtn.addEventListener("click", function(e) {
            e.preventDefault();
            panel.classList.add("active");
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            panel.classList.remove("active");
        });
    }
    
    window.addEventListener("click", function(e) {
        if (e.target === panel) {
            panel.classList.remove("active");
        }
    });
});