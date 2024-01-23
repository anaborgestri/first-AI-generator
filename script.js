function tellaPoem(response) {
  console.log(response.data.answer);

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function typemeaPoem(event) {
  event.preventDefault();

  let usersinstructions = document.querySelector("#user-instructions");
  let apiKey = "4c08634eb8b52t7acf769o96f5812f64";
  let prompt = `The user word or theme is this one ${usersinstructions.value}`;
  let context =
    "Hello AI generator. You are a well-known romantic AI that is aware of the most famous and beautiful poems in the world. Please generate a short poem, with maximum of 6 lines, tranlated in english, adding each setence in a separate line using the key word or theme requested by the user. Type the poem in HTML format and in the end sign it off with your name in bold and italic letters 'AI the Poet'.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios(apiUrl).then(tellaPoem);

  let outputBox = document.querySelector(".output");
  outputBox.classList.remove("hidden");
  let generatingElement = document.querySelector(".generating");
  generatingElement.innerHTML = `<div class="blink_me">⌛ Generating a poem for you about ${usersinstructions.value}</div>`;
}

let poemformElement = document.querySelector("#poem-form");
poemformElement.addEventListener("submit", typemeaPoem);
