function typemeaPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Bate leve, levemnte, Como quem chama por mim",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemformElement = document.querySelector("#poem-form");
poemformElement.addEventListener("submit", typemeaPoem);
