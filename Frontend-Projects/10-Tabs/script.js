const lis = document.querySelectorAll("li");
const divs = document.querySelectorAll("div");

const removerClasse = () => {
  lis.forEach((li) => {
    li.classList.remove("ativo");
  });
};

const adicionaClasseDiv = (classe) => {
  divs.forEach((div) => {
    div.classList.remove("ativo");
    if (div.classList.contains(classe)) {
      div.classList.add("ativo");
    }
  });
};

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    removerClasse();
    event.target.classList.add("ativo");
    adicionaClasseDiv(event.target.classList[0]);
  });
});
