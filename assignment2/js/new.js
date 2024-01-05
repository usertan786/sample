document.addEventListener("DOMContentLoaded", function () {
    // Logo image rotation effect
    const logoImg = document.querySelector(".logo-img img");
    logoImg.addEventListener("mouseover", function () {
        this.style.transition = "transform 0.5s ease-in-out";
        this.style.transform = "rotate(360deg)";
    });
    logoImg.addEventListener("mouseout", function () {
        this.style.transition = "transform 0.5s ease-in-out";
        this.style.transform = "rotate(0deg)";
    });

    // Serve image zoom effect
    const serveImg = document.querySelectorAll(".serve-img img");

    serveImg.forEach(function (img) {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
            this.style.transition = " transform 0.5s ease-in-out";
            this.parentElement.style.overflow = "hidden";  // Add overflow class on mouseover
        });

        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.transition = " transform 0.5s ease-in-out";
            
        });
    });

    // Button scale effect
    const btns = document.querySelectorAll(".btn");
    btns.forEach(function (btn) {
        btn.addEventListener("mouseover", function () {
            this.style.transition = "transform 0.5s ease-in-out";
            this.style.transform = "scale(1.1)";
        });
        btn.addEventListener("mouseout", function () {
            this.style.transition = "transform 0.5s ease-in-out";
            this.style.transform = "scale(1)";
        });
    });

    // Footer background color change effect
    const footer = document.querySelector("footer");
    footer.addEventListener("mouseover", function () {
        this.style.transition = "background-color 0.5s ease-in-out";
        this.style.backgroundColor = "rgb(78, 165, 165)";
    });
    footer.addEventListener("mouseout", function () {
        this.style.transition = "background-color 0.5s ease-in-out";
        this.style.backgroundColor = "var(--aqua)";
    });
});
