function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}



// Scroll to top functionality
document.getElementById("back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});