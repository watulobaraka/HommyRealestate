const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

// Function to open the popup after 30 seconds
    function openPopupWithDelay() {
        setTimeout(function () {
            document.getElementById("overlay").style.display = "flex";
        }, 30000); // 30 seconds in milliseconds
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById("overlay").style.display = "none";
    }

    // Optional: You can add form validation and submission logic here.
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        // Add your form submission logic here.
        event.preventDefault();
        closePopup();
    });

    // Call the function to open the popup after 30 seconds
    openPopupWithDelay();

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}
