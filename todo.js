const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");


//console.log(input, button, ul);

button.addEventListener("click", () => {
  if (input.value.trim () === "") {
    alert ("Veuillez remplir ce champ.");
    return;
  }
  else {
  }
  
  //console.log(input.value);
  
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  ul.appendChild(newLi);

  const boutonSupp = document.createElement("button");
  boutonSupp.innerText = "Supprimer";
  newLi.appendChild(boutonSupp);

  boutonSupp.addEventListener("click", () => {
  newLi.remove();
  });

  newLi.addEventListener("click", () => {
  newLi.classList.toggle("completed");
  });

  input.value = "";
  input.focus ();
});


