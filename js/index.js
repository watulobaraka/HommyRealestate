const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

 function openPopup() {
        document.getElementById("overlay").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("overlay").style.display = "none";
    }

    // Optional: You can add form validation and submission logic here.
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        // Add your form submission logic here.
        event.preventDefault();
        closePopup();
    });

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}
