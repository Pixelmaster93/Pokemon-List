const modalInfoWanted = document.querySelector("#pk-wanted");
const modalInfoCatched = document.querySelector("#pk-catched");
//

function pokemonNameClickableWant() {
  const pokemonInfo = document.querySelectorAll(".pokemon-text");

  pokemonInfo.forEach(function (check, index) {
    check.addEventListener("click", function () {
      console.log("qui ci arrivo");
      console.log(pokemonIWant);
      createHTML(pokemonIWant, index, modalInfoWanted);

      // Get the modal
      var modal = document.getElementById("pk-wanted");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      //   btn.onclick = function () {
      //   };
      modal.style.display = "block";
      //When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
        modalInfoWanted.innerHTML = "";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          modalInfoWanted.innerHTML = "";
        }
      };
    });
  });
}

function pokemonNameClickableCaptured() {
  const pokemonInfo = document.querySelectorAll(".pokemon-text-captured");
  console.log(pokemonInfo);

  pokemonInfo.forEach(function (check, index) {
    check.addEventListener("click", function () {
      console.log("qui ci arrivo");
      createHTML(capturedPokemon, index, modalInfoCatched);
      // Get the modal
      var modal = document.getElementById("pk-catched");
      console.log(modal);
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      //   btn.onclick = function () {
      //   };
      modal.style.display = "block";
      //When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
        modalInfoCatched.innerHTML = "";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          modalInfoCatched.innerHTML = "";
        }
      };
    });
  });
}

function descriptionFunc(name) {
  var pokemon = {
    description: "",
    fisionomy: "",
    typeone: "",
    typetwo: "",
    hight: "",
    weight: "",
  };
  var pokemonName = name.replace(/[^a-zA-Z]?/gi, "");

  if (pokemonName == "Bulbasaur") {
    pokemon.description =
      "Bulbasaur è un Pokémon di doppio tipo Erba/Veleno introdotto in prima generazione.Si evolve in Ivysaur a partire dal livello 16 e quindi in Venusaur a partire dal livello 32.Insieme a Charmander e Squirtle, Bulbasaur è uno dei tre Pokémon iniziali di Kanto disponibili in Pokémon Rosso e Verde, Pokémon Blu, Pokémon Rosso Fuoco e Verde Foglia.";
    pokemon.fisionomy =
      "Bulbasaur è una creatura quadrupede dalla pelle color verde acqua con macchie più scure nel corpo, che ricorda vagamente una rana o un piccolo dinosauro; ha tre artigli su ogni zampa, occhi rossi accesi e due piccole zanne visibili quando la bocca è aperta. La sua caratteristica principale è il bulbo sulla schiena che cresce da un seme impiantato dalla madre durante la nascita: il legame è simbiotico visto che di giorno Bulbasaur assorbe energia solare grazie ad esso (fotosintesi) e il bulbo rimane attivo e forte di notte. Inoltre, il bulbo possiede dei semi da cui il Pokémon trae nutrimento. Di solito, Bulbasaur cammina a quattro zampe, ma, raramente, può camminare anche su due zampe.";
    pokemon.typeone = "Erba";
    pokemon.typetwo = "Veleno";
    pokemon.hight = "0,7";
    pokemon.weight = "6,9";
    if (lang != "it") {
      var ciao = getTranslation(pokemon.typeone, lang);
      const promiseResult = ciao.then((result) => {
        console.log(result); // Stampa: "Grass"
      });

      console.log(promiseResult);
      console.log(`Qualcosaaa= ${ciao}`);
      pokemon.typeone = promiseResult;
    }
  }

  if (pokemonName == "Ivysaur") {
    pokemon.description =
      "Ivysaur è un Pokémon di doppio tipo Erba/Veleno introdotto in prima generazione. Si evolve da Bulbasaur a partire dal livello 16 e successivamente in Venusaur a partire dal livello 32.";
    pokemon.fisionomy =
      "Ivysaur assomiglia molto a Bulbasaur, infatti anche lui è una creatura quadrupede dalla pelle verde acqua simile ad una rana o un dinosauro con macchie più scure nel corpo; a differenza della forma base, le zanne sono più lunghe ed esposte, gli occhi hanno pupille nere e iride viola e le zampe sono più robuste. Ciò è dovuto principalmente allo sbocciamento del bulbo, che ora sembra un bocciolo di rosa con quattro grosse foglie a contornarlo, il cui peso gli impedisce di stare eretto. Ivysaur e la sua famiglia evolutiva sono basati su delle rane.";
    pokemon.typeone = "Erba";
    pokemon.typetwo = "Veleno";
    pokemon.hight = "1,0";
    pokemon.weight = "13,0";
  }

  if (pokemonName == "Venosaur") {
    pokemon.description =
      "Venusaur è un Pokémon di doppio tipo Erba/Veleno introdotto in prima generazione. Si evolve da Ivysaur a partire dal livello 32. È l'evoluzione finale di Bulbasaur.";
    pokemon.fisionomy =
      "Venusaur è una creatura quadrupede dalla pelle color verde acqua, il suo corpo è molto più robusto delle sue pre-evoluzioni e ha tre grossi artigli su ogni zampa, inoltre ha quattro zanne abbastanza evidenti nella mascella inferiore, oltre alle due su quella superiore. Sulla schiena vi è un grosso fiore con sei petali rossi a macchie rosa, con un tronco marrone e sulla base quattro grosse foglie, inoltre i pistilli del fiore formano una grande corona. Ha poi l'interno delle orecchie e l'iride di colore rosso.";
    pokemon.typeone = "Erba";
    pokemon.typetwo = "Veleno";
    pokemon.hight = "2,0";
    pokemon.weight = "100,0";
  }
  if (pokemonName == "Charmander") {
    pokemon.description =
      "Charmander è un Pokémon di tipo Fuoco introdotto in prima generazione. Si evolve in Charmeleon a partire dal livello 16 e quindi in Charizard a partire dal livello 36. Insieme a Bulbasaur e Squirtle, Charmander è uno dei tre Pokémon iniziali di Kanto disponibili in Pokémon Rosso e Verde, Pokémon Blu, Pokémon Rosso Fuoco e Verde Foglia.";
    pokemon.fisionomy =
      "Charmander è una creatura rassomigliante una salamandra bipede con alcuni tratti da dinosauro o drago. Ha gli occhi azzurri e una pancia di colore rosa-pelle. La sua caratteristica più evidente è la fiamma posta alla fine della coda, presente sin dalla nascita. Viene detto che se la fiamma si spegnesse, il Pokémon morirebbe (anche se ciò non è mai successo né nell'anime, né nei Manga e nemmeno nei videogiochi). Charmander può essere messo in relazione con alcuni Pokémon di tipo Drago e a Magmar, visto che entrambi posseggono la fiamma sulle loro code. Nonostante i suoi artigli siano piccoli, devono essere trattati con molta prudenza, dato che sono abbastanza forti e affilati da permettere al Pokémon in questione di apprendere la mossa Lacerazione.";
    pokemon.typeone = "Fuoco";
    pokemon.typetwo = "";
    pokemon.hight = "0,6";
    pokemon.weight = "8,5";
  }
  if (pokemonName == "Charmeleon") {
    pokemon.description =
      "Charmeleon è un Pokémon di tipo Fuoco introdotto in prima generazione. Si evolve da Charmander a partire dal livello 16 e successivamente in Charizard a partire dal livello 36.";
    pokemon.fisionomy =
      "Charmeleon è una creatura bipede e rettile simile a Charmander. Ha squame color cremisi che sono molto più scure di quelle arancioni brillante di Charmander. Sulla punta della coda brucia una fiamma, un tratto comune a molti Pokémon di tipo Fuoco, soprattutto la linea evolutiva di Charmander. Sulla parte posteriore del cranio si sviluppa una protuberanza simile a un corno ed è presente un muso allungato. Gli artigli anteriori e posteriori sono molto più affilati e lunghi rispetto a quelli di Charmander e la pancia invece è color crema.";
    pokemon.typeone = "Fuoco";
    pokemon.typetwo = "";
    pokemon.hight = "1,1";
    pokemon.weight = "19,0";
  }
  if (pokemonName == "Charizard") {
    pokemon.description =
      "Charizard è un Pokémon di doppio tipo Fuoco/Volante introdotto in prima generazione. Si evolve da Charmeleon a partire dal livello 36. È l'evoluzione finale di Charmander.";
    pokemon.fisionomy =
      "A differenza delle sue pre-evoluzioni, Charizard ha due grosse ali dalla membrana verde, assomiglia a un drago bipede, inoltre ha le squame arancioni come Charmander e la pancia ha le squame gialle, ha una lunga coda con la punta infuocata, il suo collo è lungo e presenta due corna, ogni arto ha tre artigli bianchi, tuttavia gli arti superiori sono molto piccoli confrontati con il resto del corpo.";
    pokemon.typeone = "Fuoco";
    pokemon.typetwo = "Volante";
    pokemon.hight = "1,7";
    pokemon.weight = "90,5";
  }
  if (pokemonName == "Squirtle") {
    pokemon.description =
      "Squirtle è un Pokémon di tipo Acqua introdotto in prima generazione. Si evolve in Wartortle a partire dal livello 16 e quindi in Blastoise a partire dal livello 36. Insieme a Bulbasaur e Charmander, Squirtle è uno dei tre Pokémon iniziali di Kanto disponibili in Pokémon Rosso e Verde, Pokémon Blu, Pokémon Rosso Fuoco e Verde Foglia.";
    pokemon.fisionomy =
      "Squirtle è un piccolo Pokémon bipede dalle sembianze di una tartaruga dal colore celeste, una sua caratteristica è il resistente guscio marrone sulla schiena, il quale inizia a solidificarsi subito dopo la nascita. Si può notare che Squirtle ha una certa somiglianza con Torkoal e Turtwig, ma resta fedele alle sembianze delle sue evoluzioni Wartortle e Blastoise. Il suo guscio è uno strumento altamente utile per la difesa, infatti è in grado di ritirasi all'interno proteggendosi dagli attacchi dei Pokémon avversari. Inoltre il suo guscio e la testa sono lisci, e ciò gli permette di assumere una posizione aerodinamica così da raggiungere alte velocità mentre nuota, ma è anche in grado di sfruttare questa velocità per usare attacchi come Rapigiro e Capocciata. Squirtle è un bravissimo nuotatore. Però, essendo piuttosto piccolo, gli riesce meglio trasportare sul dorso qualcosa di piccolo, come un Pikachu anziché il suo allenatore. La sua bocca può non sembrare molto robusta, ma può lo stesso imparare l'attacco Morso. La sua coda somiglia a quella di uno scoiattolo e può imparare attacchi come Colpocoda e Idrondata.";
    pokemon.typeone = "Acqua";
    pokemon.typetwo = "";
    pokemon.hight = "0,5";
    pokemon.weight = "9,0";
  }
  if (pokemonName == "Warturtle") {
    pokemon.description =
      "Wartortle è un Pokémon di tipo Acqua introdotto in prima generazione. Si evolve da Squirtle a partire dal livello 16 e successivamente in Blastoise a partire dal livello 36.";
    pokemon.fisionomy =
      "Wartortle è un Pokémon con le sembianze di una tartaruga. Ha braccia e gambe color indaco, mentre il guscio è marrone e le sue lunghe orecchie e la coda sono coperte di pelo bianco. Wartortle ha due piccole zanne che gli spuntano fuori ai lati della bocca, gli occhi di colore marrone e tre piccole dita affilate su entrambi gli arti superiori. Questo Pokémon, per mantenere l'equilibrio e l'alta velocità mentre nuota, sposta le sue orecchie e la coda a piacimento così da ottenere una posizione idrodinamica. La sua coda, coperta da una pelliccia di colore bianco, è così lunga da spuntare fuori dal guscio anche quando Wartortle vi si trova all'interno. Esso usa la suddetta pelliccia anche per immagazzinare ossigeno così da permettere la lunga permanenza del Pokémon sott'acqua. Con l'invecchiamento le alghe possono crescere sul guscio di Wartortle, mentre il pelo della coda tende a scurirsi.";
    pokemon.typeone = "Acqua";
    pokemon.typetwo = "";
    pokemon.hight = "1,0";
    pokemon.weight = "22,5";
  }
  if (pokemonName == "Blastoise") {
    pokemon.description =
      "Blastoise è un Pokémon di tipo Acqua introdotto in prima generazione. Si evolve da Wartortle a partire dal livello 36. È l'evoluzione finale di Squirtle.";
    pokemon.fisionomy =
      "Blastoise, come le sue due pre-evoluzioni, Squirtle e Wartortle, ha le sembianze di una tartaruga bipede dal colore prevalentemente blu ed ha un resistente guscio marrone da cui fuoriescono due potenti cannoni apparentemente metallici da cui spara forti getti d'acqua. I cannoni possono essere ritirati all'interno del guscio ma anche spostati all'indietro così da sfruttarli come propulsori per gli spostamenti. Blastoise in lotta usa anche la sua testa come arma, la quale è molto robusta con piccole orecchie triangolari. Le braccia di Blastoise sono molto grosse e robuste, con delle striature, e come Wartortle ha tre piccole dita affilate su entrambi gli arti superiori. A differenza delle sue pre-evoluzioni in cui solo la parte pettorale del Pokémon è di colore chiaro, in Blastoise anche la mandibola prende quel colore.";
    pokemon.typeone = "Acqua";
    pokemon.typetwo = "";
    pokemon.hight = "1,6";
    pokemon.weight = "85,5";
  }
  return pokemon;
}

function createHTML(pokemon, index, modal) {
  console.log(pokemon[index]);
  var pokemonName = pokemon[index].toString();
  var newName = changeName(pokemonName);
  var namePkPng = namePng(pokemonName);
  var pokemon = descriptionFunc(pokemonName);
  var html = createHTMLFromAll(pokemon, namePkPng, newName);
  modal.innerHTML += `${html}`;
}

function createHTMLFromAll(pokemon, namePkPng, newName) {
  var leftInfo = leftInfoHtmlFun(newName, pokemon);
  var rightInfo = rightInfoHtmlFun(pokemon, namePkPng, newName);
  var html = `${leftInfo} ${rightInfo}`;
  return html;
}

function leftInfoHtmlFun(newName, pokemon) {
  var leftInfoHtml = `<div class="box-data" id="big-box">
  <div class = 'all-info-head'>
    <div class="pk-name">
      <h2 class="pokemon-name">${newName}</h2>
    </div>
    <div>
    <span class="close">&times;</span>
    </div>
  </div>
  <div class="all-info">
    <div class="info-left">
      <div class="basic-info">
        <h3>Descrizione</h3>
        <p class="descrizione">${pokemon.description}</p>
        <br /><br />
        <h4>Biologia</h4>
        <hr />
        <h5><strong>Fisionomia</strong></h5>
        <p class="fisionomia">${pokemon.fisionomy}</p>
      </div>
    </div>`;
  return leftInfoHtml;
}

function rightInfoHtmlFun(pokemon, namePkPng, newName) {
  var backgroundColour = colourRightInfo(pokemon);
  var typeStyleColourHtml = typeStyleColour(pokemon);
  var completeHtml = "";

  var rightHtmlColour = `<div class="info-right" style = 'background-image: -moz-linear-gradient(left, ${backgroundColour});
  background-image: -webkit-linear-gradient(left, ${backgroundColour});
  background-image: linear-gradient(to right, ${backgroundColour});'>`;

  var imageRightHtml = `<!-- Immagine -->
  <div class="display-img" style="padding: 0.2em">
    <div class="box-data-white imgpad">
      <img
        src="Images/Pokemon/${namePkPng}.gif" alt="${newName}"
        decoding="async"
        class="img-fluid"
        data-file-width="1280"
        data-file-height="1280"
      />
    </div>
  </div>`;

  var typeHtml = `  <div class="center-text">
  <b><a title="Tipo">Tipo</a></b>
</div>
<div class="width-xl-100">
  <div class="box-data-white " style="padding: 0.2em">
    <div
      class="roundy white-bg flex flex-row flex-wrap flex-main-stretch flex-items-center"
      style="padding: 0.2em"
    >
      <div
        class="width-xl-50 text-center"
        style="box-sizing: border-box; padding: 0.2em"
      > ${typeStyleColourHtml} 
      </div>
      </div>
    </div>
  </div>`;

  var hightHtml = `  <div class="center-text">
    <b><a>Altezza</a></b>

    <div class="box-data-white info">
    <div class="width-xl-100">${pokemon.hight} m</div>
    </div>
    </div>`;

  var wheightHtml = `<div class="center-text">
    <b><a>Peso</a></b>
  
    <div class="box-data-white info">
      <div class="width-xl-100">${pokemon.hight} Kg</div>
    </div>
    <br>
    </div>

    </div>
    </div>
    </div>`;

  completeHtml = `${rightHtmlColour}${imageRightHtml}${typeHtml}${hightHtml}${wheightHtml}`;
  return completeHtml;
}

function typeStyleColour(pokemon) {
  var styleColourType = "";
  var colourOne = selectColourAuto(pokemon.typeone);
  console.log(colourOne.type);

  var colourTwo = "";
  var typeStyleHtml = "";
  if (pokemon.typetwo != "") {
    colourTwo = selectColourAuto(pokemon.typetwo);
    typeStyleHtml = `<span
    style="
      padding: 0.1ex 0.3em 0.2ex 0.3em;
      background: ${colourOne.type};
      border-radius: 10px 0 0 10px;
    "
    ><span style="color: #fff">${pokemon.typeone}</span></span
  ><span
    style="
      padding: 0.1ex 0.3em 0.2ex 0.3em;
      background: ${colourTwo.type};
      border-radius: 0 10px 10px 0;
    "
    ><span style="color: #fff">${pokemon.typetwo}</span></span
  >`;
  } else {
    typeStyleHtml = `<span style="
    padding: 0.1ex 0.3em 0.2ex 0.3em;
    background: ${colourOne.type};
    border-radius: 10px;
  "
  ><span style="color: #fff">${pokemon.typeone}</span></span
>`;
  }

  return typeStyleHtml;
}

function colourRightInfo(pokemon) {
  var colourOne = selectColourAuto(pokemon.typeone);
  var colourTwo = "";
  var colourBackground = "";
  if (pokemon.typetwo != "") {
    colourTwo = selectColourAuto(pokemon.typetwo);
    colourBackground = `${colourOne.background}, ${colourTwo.background}`;
  } else {
    colourBackground = `${colourOne.background}`;
  }

  return colourBackground;
}

function selectColourAuto(type) {
  var colour = {
    background: "",
    type: "",
  };
  console.log(type);
  if (type == "Erba") {
    colour.background = "#7dd069, #42a32c";
    colour.type = "#42a32c";
  }
  if (type == "Veleno") {
    colour.background = "#bd74f1, #9343cd";
    colour.type = "#9343cd";
  }
  if (type == "Acqua") {
    colour.background = "#76b1fc, #2c82ef";
    colour.type = "#2c82ef";
  }
  if (type == "Fuoco") {
    colour.background = "#fb6566, #e62a2b";
    colour.type = "#e62a2b";
  }
  if (type == "Volante") {
    colour.background = "#bcdfff, #83baf0";
    colour.type = "#83baf0";
  }
  console.log(colour);
  return colour;
}

function selectColourType(type) {
  var colour = "";
  console.log(type);
  if (type == "Erba") {
    colour = "#42a32c";
  }
  if (type == "Veleno") {
    colour = "#9343cd";
  }
  if (type == "Acqua") {
    colour = "#2c82ef";
  }
  if (type == "Fuoco") {
    colour = "#e62a2b";
  }
  console.log(colour);
  return colour;
}

function changeName(name) {
  var pokemon = name.replace(/[^a-zA-Z]?/gi, "");
  var sex = "";
  var shiny = "";
  if (name.includes("♂️")) {
    sex = "♂️";
  } else {
    sex = "♀️";
  }

  if (name.includes("✨")) {
    shiny = "✨";
  }

  name = `${pokemon} ${sex} ${shiny}`;
  return name;
}

function namePng(name) {
  var pokemonPng = name.replace(/[^a-zA-Z]?/gi, "");
  var sex = "";
  var shiny = "";
  if (name.includes("♂️")) {
    sex = "M";
  } else {
    sex = "M";
  }

  if (name.includes("✨")) {
    shiny = "S";
  }

  name = `${pokemonPng}${sex}${shiny}`;
  return name;
}

/* <h2 class="pokemon-name">${newName}</h2>
  <div class="info-all-pokemon">
    <div class="basic-info">
      <h3>Descrizione</h3>
      <p class= 'descrizione'>${pokemon.description}</p>
      <br /><br />
      <h4>Biologia</h4>
      <hr />
      <h5><strong>Fisionomia</strong></h5>
      <p class= 'fisionomia'>${pokemon.fisionomy}</p>
    </div>
    <div class="modal-header">
    
      <span class="close">&times;</span>
      <img src="Images/Pokemon/${namePkPng}.gif" alt="${newName}" />
      <div class="pokemon-info">
        <h3>Tipo: ${pokemon.type}</h3>
        <h3>Altezza: ${pokemon.hight}</h3>
        <h3>Peso: ${pokemon.weight}</h3>
      </div>
      <div class="modal-body">
        <p class="pokemon-description"></p>
      </div>
    </div>
  </div> */
