
// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to Anchal's Portfolio!");


// =========================
// PROJECT BUTTON
// =========================

const projectButton = document.getElementById("projectButton");

if (projectButton) {
    projectButton.addEventListener("click", function () {
        console.log("Project button clicked!");
    });
}


// =========================
// NAVBAR LINKS
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigation link clicked:", link.textContent);
    });
});


// =========================
// PAGE LOADED
// =========================

window.addEventListener("load", function () {
    console.log("Portfolio loaded successfully!");
});


// =========================
// DARK MODE
// =========================

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }

    });
}


// =========================
// SHARE BUTTON
// =========================

const shareButton = document.getElementById("shareButton");

if (shareButton) {
    shareButton.addEventListener("click", async function () {

        const shareData = {
            title: "Anchal's Portfolio",
            text: "Check out my portfolio website!",
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                alert("Portfolio link copied!");
            }
        } catch (error) {
            console.log("Sharing cancelled or unavailable.");
        }

    });
}
