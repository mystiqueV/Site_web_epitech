document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.getElementById("about");

    aboutSection.addEventListener("mouseenter", function() {
        aboutSection.style.backgroundColor = "#ddd";
    });

    aboutSection.addEventListener("mouseleave", function() {
        aboutSection.style.backgroundColor = "#f0f0f0";
    });
});
