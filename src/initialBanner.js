function initBannerLang() {
  // Get the modal
  var modal = document.getElementById("language");

  // Get the button that opens the modal
  var btn = document.getElementById("lang-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-language")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
function initBannerInfo() {
  // Get the modal
  var modal = document.getElementById("informa");

  // Get the button that opens the modal
  var btn = document.getElementById("info-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-info")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
function autoBannerInfo() {
  document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("informa");
    var closeBtn = document.getElementsByClassName("close-info")[0];

    // Mostra il modal quando la pagina è completamente caricata
    modal.style.display = "block";

    // Chiudi il modal quando si fa clic sul pulsante di chiusura
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Chiudi il modal quando si fa clic al di fuori del modal
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
}

function addPokemons() {
  var modal = document.getElementById("add-pokemon");

  // Get the button that opens the modal
  var btn = document.getElementById("add-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-add")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
