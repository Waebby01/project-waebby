document.addEventListener("DOMContentLoaded", function() {

    /* ================= CONTACT PANEL ================= */
    const openBtn = document.getElementById("openContact");
    const closeBtn = document.getElementById("closeContact");
    const panel = document.getElementById("contactPanel");

    if (openBtn && panel) {
        openBtn.addEventListener("click", function(e) {
            e.preventDefault();
            panel.classList.add("active");
        });
    }

    if (closeBtn && panel) {
        closeBtn.addEventListener("click", function() {
            panel.classList.remove("active");
        });
    }

    window.addEventListener("click", function(e) {
        if (e.target === panel) {
            panel.classList.remove("active");
        }
    });


    /* ================= LIGHTBOX ================= */
    const cards = document.querySelectorAll(".gallery-card img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox .close");

    if (cards.length > 0 && lightbox && lightboxImg) {
        cards.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.classList.add("active");
                lightboxImg.src = img.src;
            });
        });
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });
    }

});