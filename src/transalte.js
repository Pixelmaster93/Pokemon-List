let translationResult; // Dichiarare la variabile fuori dalla catena della promise

async function getTranslation(text, targetLanguage) {
  try {
    translationResult = await translateAPI(text, targetLanguage); // Aspetta che la promise venga risolta e assegna il risultato alla variabile
    return translationResult;
    // Esempio di ulteriore utilizzo della traduzione
    // Puoi eseguire altre operazioni qui con translationResult
  } catch (error) {
    console.error(error);
  }
}

async function translateAPI(text, targetLanguage) {
  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=it|${targetLanguage}`;
  const reponse = await fetch(apiUrl);
  const jsonData = await reponse.json();
  const result = jsonData.responseData.translatedText;
  return result;
}

// Esempio di utilizzo
// const textToTranslate = "Hello, how are you?";
// const targetLanguage = "it"; // Codice lingua per l'italiano

// translateAPI(textToTranslate, targetLanguage)
//   .then((translatedText) => {
//     console.log(translatedText);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
