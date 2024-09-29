document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu a");
    const currentPath = window.location.pathname;  // Full path of current page (e.g. /pages/home.html)

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        // Compare the currentPath and linkPath (both include folder structure)
        if (currentPath.includes(linkPath)) {
            link.classList.add("active");
        }
    });
});
