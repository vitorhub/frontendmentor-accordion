let div = document.querySelectorAll(".linha-pergunta");

div.forEach(
    (entrada) => {
      entrada.addEventListener("click", 
        () =>{
          entrada.nextElementSibling.classList.toggle("mostrar");
          entrada.children[0].classList.toggle("negrito");
          entrada.children[1].classList.toggle("gira-seta");
        }
      );
    }
);
