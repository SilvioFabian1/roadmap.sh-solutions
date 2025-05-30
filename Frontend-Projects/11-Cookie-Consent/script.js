const div = document.querySelector("div");

if (!localStorage.cookieAccepted) {
  setTimeout(() => {
    div.classList.add("ativo");
  }, 2000);
}

const button = div.querySelector("button");

button.addEventListener("click", () => {
  localStorage.cookieAccepted = true;
  div.remove();
});
