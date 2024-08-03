
const alla = Array.from(document.querySelectorAll("a"));


navbar-nav.addEventListener("click", () => {
    alla.classList.add("active");
    alla.classList.remove("disabled");

  });