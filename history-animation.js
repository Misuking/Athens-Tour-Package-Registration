document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".bkgrd");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 } // Activates when 20% of the section is visible
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});
