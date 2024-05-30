/*
localStorage.setItem('mia info, Ciao')
const title = document.querySelector('h1')
title.innerText = localStorage.getItem('mia info')
*/

//OPERAZIONI DA FARE AD AVVIO PAGINA

//Recupero gli elementi di interesse dalla pagina
const buttonAdd = document.querySelector(".btn");
const buttonDel = document.querySelector(".delete");
const inputField = document.querySelector("input");
const selectField = document.querySelector("select");
const pokemonIWantList = document.querySelector("#pokemon-i-want");
const pokemonSelectList = document.querySelector(".pokemon-choosing-list");
const capturedPokemonList = document.querySelector("#captured-pokemon");
const emptyWantedListMessage = document.querySelector("#message-task");
const emptyWantedInfo = document.querySelector("#wanted-info");
const emptyCapturedListMessage = document.querySelector("#message-nocaptured");
const emptyCapturedInfo = document.querySelector("#captured-info");
var lang = "it";
console.log(pokemonIWantList);
//Creo una chiave per il local storage
const POKEMON_LIST_KEY = "__bool_pokemon__";
const WANTED_STORAGE_KEY = "__wanted_pokemon__";
const CAPTURED_STORAGE_KEY = "__captured_pokemon__";
const DISABLE_INFO_START = "__disable_info_start";



let disableInfo = [];
const infoStorage = localStorage.getItem(DISABLE_INFO_START);
if (infoStorage) {
  disableInfo = JSON.parse(infoStorage);
}

//List of Pokeomn that i want
let pokemonIWant = [];
//Control if there are captured pokemon in local storage
const WantedStorage = localStorage.getItem(WANTED_STORAGE_KEY);
if (WantedStorage) {
  pokemonIWant = JSON.parse(WantedStorage);
}

//List of captured pokèmon
let capturedPokemon = [];
//Control if there are captured pokemon in local storage
const capturedStorage = localStorage.getItem(CAPTURED_STORAGE_KEY);
if (capturedStorage) {
  capturedPokemon = JSON.parse(capturedStorage);
}

let pokemonList = [];
const pokemonListStorage = localStorage.getItem(POKEMON_LIST_KEY);
if (pokemonListStorage) {
  pokemonList = JSON.parse(pokemonListStorage);
}

if (
  pokemonList.length == 0 &&
  pokemonIWant.length == 0 &&
  capturedPokemon.length == 0
) {
  getAllPokemon();
  // localStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(pokemonList));
  // const pokemonListStorage = localStorage.getItem(POKEMON_LIST_KEY);
  // if (pokemonListStorage) {
  //   pokemonList = JSON.parse(pokemonListStorage);
  // }
}
// task.push("Imparare CSS", "Fare la spesa");  Aggiunge

// task.splice(4, 1);  Toglie

// translateAPI("Charmeleon", "fr")
//   .then((translatedText) => {
//     console.log(translatedText);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Chiedo a JS di decidere cosa mostarre

let newPokemon = [];

async function getAllPokemon() {
  const loader = document.getElementById("loader");
  loader.style.display = "block"; // Mostra il messaggio di caricamento
  let n = 1;
  pokemonList.push("-- Select a Pokèmon --")
  
  while (n != 1026) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${n}`;
    try {
      const reponse = await fetch(apiUrl);

      if (!reponse.ok) {
        console.error(`API non trovata`);
        return;
      }
      console.log(n);
      const jsonData = await reponse.json();
      const pokemonUrl = jsonData.species.name;
      const nameUpper =
        pokemonUrl.charAt(0).toUpperCase() + pokemonUrl.slice(1);

        let numb = "";
        console.log(numb)
         if (n >= 1 && n < 10) {
          numb = `000${n}`;
          console.log(numb)
        } else if (n >= 10 && n < 100) {
          numb = `00${n}`
        } else if (n >= 100 && n < 1000) {
          numb = `0${n}`
        } else if (n >= 1000) {
          numb = `${n}`
        }

        const pokènumb = `#${numb} ${nameUpper}`

      pokemonList.push(pokènumb);

      

      console.log(nameUpper);
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
    }
    n = n + 1;
  }

  localStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(pokemonList));
  const pokemonListStorage = localStorage.getItem(POKEMON_LIST_KEY);
  if (pokemonListStorage) {
    pokemonList = JSON.parse(pokemonListStorage);
  }
  location.reload();
  loader.style.display = "none";
}

console.log(pokemonList);
showAllContent();
initBannerLang();
initBannerInfo();
if (disableInfo.length == 0) {
  autoBannerInfo();
}
addPokemons();

//TRADUZIONE
const langButtons = document.querySelectorAll(".lang-button");
langButtons.forEach(function (langButtons) {
  langButtons.addEventListener("click", function () {
    lang = langButtons.dataset.lang;
    // if (lang != "it") {
    //   pokemonList = translateAPI(pokemonListBase, lang)
    //     .then((translatedText) => {
    //       console.log(translatedText);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   console.log(qualcosa);
    // } else {
    //   pokemonList = pokemonListBase;
    // }
    console.log(lang);
  });
});
console.log(lang);

// # OPERAZIONI DINAMICHE

//Reagisco al click del bottone
buttonAdd.addEventListener("click", function () {
  //Recupero il testo nel campo
  const selectFieldPkm = document.getElementById("pokemon-select");
  const newPokemon = selectFieldPkm.value;
  console.log(newPokemon);

  //Se il campo non è vuoto....
  if (newPokemon != " -- Select a pokèmon --") {
    addPokemon(newPokemon);
  }
});

console.log(selectField.selectedIndex);
//
// # Funzioni
//Funzione che decide cosa mostrare in pagina
function showAllContent() {
  showContentWanted();
  showContentCaptured();
  showPokemonList();
  if (pokemonIWant.length == 0) {
    localStorage.removeItem(WANTED_STORAGE_KEY);
  }
  if (capturedPokemon.length == 0) {
    localStorage.removeItem(CAPTURED_STORAGE_KEY);
  }
}

function showPokemonList() {
  pokemonSelectList.innerText = "";

  if (pokemonList.length > 0) {
    pokemonList.forEach(function (pokemon) {
      pokemonSelectList.innerHTML += `<option value='${pokemon}'>${pokemon}</option>`;
    });
  }
}

function showContentWanted() {
  //pulisco tutto
  pokemonIWantList.innerText = "";
  emptyWantedListMessage.innerText = "";
  emptyWantedInfo.innerText = "";

  var placeholder = "";
  if (pokemonIWant.length == 1) {
    placeholder = "rimane";
  } else {
    placeholder = "rimangono";
  }

  //il ` si fa con ALT 96
  if (pokemonIWant.length > 0) {
    emptyWantedInfo.innerText = `Ti ${placeholder} ${pokemonIWant.length} pokèmon da catturare`;
    //Se c'è almeno una attività...
    //Per ciascuna attività...

    pokemonIWant.forEach(function (pokemon) {
      //Per ogni task la aggiungo nella lista tramite blocco HTML
      //   const template = crateActivityTemplate(task)
      //   toDoList.innerHTML += task
      pokemonIWantList.innerHTML += `
        <li class="pokemon-list-item">
          <div class="pokeball" id='pokeball-gray-check'>
            <img src="Images/Pokemon/pokeball bianco e nero.png" alt="Check Icon" class = 'img-button pkball' /> 
          </div>
          <p class="pokemon-text">${pokemon}</p>
          <div class="delete" id='delete-wanted'>
            <img src="Images/Delete.png" alt="Delete icon" class = 'img-button' />
          </div>
        </li>`;
    });

    //Rendi cliccabili i check
    initBannerLang();
    initBannerInfo();

    pokemonNameClickableWant();
    makePokeballCliccabile();
    deleteWantedClickable();
  } else if (pokemonIWant.length == 0 && capturedPokemon.length == 0) {
    emptyWantedListMessage.innerText =
      "Non hai ancora aggiunto Pokèmon da catturare!";
  } else {
    emptyWantedListMessage.innerText =
      "Hai catturato tutti i Pokèmon che volevi!";
  }
}

function showContentCaptured() {
  capturedPokemonList.innerText = "";
  emptyCapturedListMessage.innerText = "";
  emptyCapturedInfo.innerText = "";

  var placeholder = "";
  if (capturedPokemon.length > 0) {
    if (
      capturedPokemon.length ==
      capturedPokemon.length + pokemonIWant.length
    ) {
      placeholder = `Hai catturato ${capturedPokemon.length} pokèmon. COMPLIMENTI!`;
    } else {
      placeholder = `Hai catturato ${capturedPokemon.length} pokèmon su ${
        pokemonIWant.length + capturedPokemon.length
      }`;
    }

    emptyCapturedInfo.innerText = `${placeholder}`;

    //Se c'è almeno una attività...
    //Per ciascuna attività...
    capturedPokemon.forEach(function (pokemon) {
      //Per ogni task la aggiungo nella lista tramite blocco HTML
      //   const template = crateActivityTemplate(task)
      //   toDoList.innerHTML += task
      capturedPokemonList.innerHTML += `
        <li class="pokemon-list-item">
          <div class="pokeball" id='pokeball-check'>
              <img src="Images/Pokemon/pokeball.png" alt="Check Icon" class = 'img-button pkball' />
          </div>
          <p class="pokemon-text-captured">${pokemon}</p>
          <div class="delete" id ='delete'>
              <img src="Images/Delete.png" alt="Delete icon" class = 'img-button' />
          </div>
        </li>`;
    });

    initBannerLang();
    initBannerInfo();
    pokemonNameClickableCaptured();
    makeRelaseCliccabile();
    deleteCapturedClickable();
  } else {
    emptyCapturedListMessage.innerText = "Non hai ancora catturato Pokèmon!";
  }
}

//Funzione per rendere i chech cliccabili
function makePokeballCliccabile() {
  //Cerca tutti i check e fa' si che siano cliccabili
  const checks = document.querySelectorAll("#pokeball-gray-check");
  // Per ognuno dei check
  checks.forEach(function (check, index) {
    //Aggiungi una reazione al click
    check.addEventListener("click", function () {
      // Rimuovi l'elemento dalla lista
      var pokemonCaptured = pokemonIWant[index].toString();
      pokemonIWant.splice(index, 1);
      addCatchedPokemon(pokemonCaptured);

      capturedPokemonList.innerHTML += `
        <li class="pokemon-list-item">
          <div class="pokeball" id='pokeball-check'>
            <img src="Images/Pokemon/pokeball.png" alt="Check Icon" class = 'img-button pkball' />
          </div>
          <p class="pokemon-text-captured">${pokemonCaptured}</p>
          <div class="delete" id ='delete'>
            <img src="Images/Delete.png" alt="Delete icon" class = 'img-button' />
          </div>
        </li>`;
      //aGGIORNA IL LOCAL STORAGE
      localStorage.setItem(WANTED_STORAGE_KEY, JSON.stringify(pokemonIWant));

      //Aggiorno la lista in pagina

      showAllContent();
    });
  });
}

function makeRelaseCliccabile() {
  const relaser = document.querySelectorAll("#pokeball-check");

  relaser.forEach(function (check, index) {
    check.addEventListener("click", function () {
      var pokemonRelised = capturedPokemon[index].toString();
      capturedPokemon.splice(index, 1);
      addPokemon(pokemonRelised);
      pokemonIWantList.innerHTML += `
        <li class="pokemon-list-item">
          <div class="pokeball" id='pokeball-gray-check'>
            <img src="Images/Pokemon/pokeball bianco e nero.png" alt="Check Icon" class = 'img-button pkball' />
          </div>
          <p class="pokemon-text">${pokemonRelised}</p>
          <div class="delete" id='delete-wanted'>
            <img src="Images/Delete.png" alt="Delete icon" class = 'img-button' />
          </div>
        </li>`;
      localStorage.setItem(
        CAPTURED_STORAGE_KEY,
        JSON.stringify(capturedPokemon)
      );

      //deleteClickable(capturedPokemon);

      showAllContent();
    });
  });
}

function deleteWantedClickable() {
  const deletePokemon = document.querySelectorAll("#delete-wanted");

  deletePokemon.forEach(function (check, index) {
    check.addEventListener("click", function () {
      let cnf = confirm("Vuoi davvero cancellarlo?");
      if (cnf) {
        var pokemonDeleted = pokemonIWant[index].toString();
        pokemonIWant.splice(index, 1);
        addPokemonToList(pokemonDeleted);
        //pokemonSelectList.innerHTML += `<option>${pokemonDeleted}</option>`;
        localStorage.setItem(WANTED_STORAGE_KEY, JSON.stringify(pokemonIWant));
        //localStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(pokemonIWant));
      }
      showAllContent();
    });
  });
}

function deleteCapturedClickable() {
  const deletePokemon = document.querySelectorAll("#delete");

  deletePokemon.forEach(function (check, index) {
    check.addEventListener("click", function () {
      let cnf = confirm("Vuoi davvero cancellarlo?");
      if (cnf) {
        var pokemonDeleted = capturedPokemon[index].toString();
        capturedPokemon.splice(index, 1);
        addPokemonToList(pokemonDeleted);
        //pokemonSelectList.innerHTML += `<option>${pokemonDeleted}</option>`;
        localStorage.setItem(
          CAPTURED_STORAGE_KEY,
          JSON.stringify(capturedPokemon)
        );
      }

      showAllContent();
    });
  });
}

/*
//Funzione per rendere il pokemon liberabile
function makePokemonFree() {
  //Cerca tutti i check e fa' si che siano cliccabili
  const checksFree = document.querySelectorAll(".pokeball-check");
  // Per ognuno dei check
  checksFree.forEach(function (check, index) {
    //Aggiungi una reazione al click
    check.addEventListener("click", function () {
      capturedPokemonList.innerHTML += `
        <li class="pokeom-wanted-item">
          <div class="pokeball-check">
            <img src="Images/Pokemon/pokeball.png" alt="Check Icon" width="20px" />
          </div>
          <p class="pokemon-text">${index}</p>
        </li>`;
      // Rimuovi l'elemento dalla lista
      pokemonIWant.splice(index, 1);
      //aGGIORNA IL LOCAL STORAGE
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonIWant));
      //Aggiorno la lista in pagina
      showContent();
    });
  });
}
*/

//Funzioner per aggiungere un pokèmon

/*
function addPokemon(newTask) {
  //Aggiungo la task alla lista
  pokemonIWant.push(newTask);
  //Aggiungo lo storage
  localStorage.setItem(WANTED_STORAGE_KEY, JSON.stringify(pokemonIWant));
  //Ora, ridecidi cosa mostrare
  showAllContent();
  //scuoto il campo
  inputField.value = "";
}
*/

function disableInfoTask(stop) {
  disableInfo.push(stop);
  localStorage.setItem(DISABLE_INFO_START, JSON.stringify(disableInfo));
  showAllContent();
}

function addPokemon(newTask) {
  //Aggiungo la task alla lista
  pokemonIWant.push(newTask);
  //Riordino l'array
  pokemonIWant.sort();
  //Aggiungo lo storage
  localStorage.setItem(WANTED_STORAGE_KEY, JSON.stringify(pokemonIWant));
  //Ora, ridecidi cosa mostrare
  showAllContent();
  //scuoto il campo
  selectField.value = "";
}

//Funzione per spostare un pokemon nell'altra lista
function addCatchedPokemon(catchedPokemon) {
  capturedPokemon.push(catchedPokemon);
  capturedPokemon.sort();
  localStorage.setItem(CAPTURED_STORAGE_KEY, JSON.stringify(capturedPokemon));
  showAllContent();
}

function addPokemonToList(deletedPokemon) {
  pokemonList.push(deletedPokemon);
  pokemonList.sort();
  localStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(pokemonList));
  showAllContent;
}

// function deletePokemonFromList(pokemon) {
//   var list = pokemonList.forEach(pokemonArray);
//   function pokemonArray(item, index) {
//     if (item == pokemon) {
//       pokemonList.splice(index, 1);
//       localStorage.setItem(POKEMON_LIST_KEY, JSON.stringify(pokemonList));
//     }
//   }

//   showAllContent();
// }
