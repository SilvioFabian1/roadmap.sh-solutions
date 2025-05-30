const textarea = document.querySelector("textarea");
const have = document.querySelector(".have");

textarea.addEventListener("input", () => {
  if (textarea.value.length <= 100) {
    textarea.classList.remove("red");
    have.innerText = textarea.value.length;
    have.parentElement.classList.remove("red");
  }

  if (textarea.value.length === 100) {
    textarea.classList.add("red");
    have.parentElement.classList.add("red");
  }
});
