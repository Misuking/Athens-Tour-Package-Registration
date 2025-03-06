document.addEventListener("DOMContentLoaded", function() {
    const faqs = document.querySelectorAll(".faq-question");

    faqs.forEach((faq) => {
        faq.addEventListener("click", function() {
            // Toggle Active State for the Button
            this.classList.toggle("active");

            // Find the corresponding answer div
            let answer = this.nextElementSibling;

            // Check if it's already open
            if (answer.style.display === "block") {
                answer.style.display = "none";
                answer.style.maxHeight = null;
            } else {
                answer.style.display = "block";
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
