const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");


if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

setTimeout(function() {
    openForm();
  }, 10000); // 30 seconds in milliseconds

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
