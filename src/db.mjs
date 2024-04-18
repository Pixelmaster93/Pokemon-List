import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const url = "";

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();

    const database = client.db("NationalPokedexDb");
    // Esegui le operazioni sul database qui

    // Ricorda di chiudere la connessione quando hai finito
    await client.close();
  } catch (err) {
    console.error(err);
  }
}
