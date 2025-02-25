
/* search close button */
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search__input");
    const closeButton = document.createElement("i");
  
    closeButton.classList.add("search__close", "ri-close-line"); 
    document.querySelector(".search").appendChild(closeButton);
  
    searchInput.addEventListener("input", function () {
      closeButton.style.display = this.value ? "block" : "none";
    });
  
    closeButton.addEventListener("click", function () {
      searchInput.value = "";
      searchInput.focus();
      closeButton.style.display = "none";
    });
  });
  
  /* lang menu toggle */
  document.addEventListener("DOMContentLoaded", function () {
    const selectedLang = document.querySelector(".selected-lang");
    const dropdown = document.querySelector(".lang-menu ul");
  
    selectedLang.addEventListener("click", function (event) {
      event.stopPropagation(); 
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", function (event) {
      if (!selectedLang.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
      }
    });
  });
  