const checkbox = document.querySelector("#checkbox");
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function (event) {
  if (this.checked) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  } else {
    document.body.classList.remove("darkmode");
    document.body.classList.add("lightmode");
  }
});
