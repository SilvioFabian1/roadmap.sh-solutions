const dts = document.querySelectorAll("dt");

const removeClasse = () => {
  dts.forEach((dtt) => {
    dtt.nextElementSibling.classList.remove("ativo");
  });
};

dts.forEach((dt) => {
  dt.addEventListener("click", (event) => {
    removeClasse();
    event.target.nextElementSibling.classList.toggle("ativo");
  });
});
