//Exercice 8 – Promesse simple

//1. Définir la fonction wait
const wait = ms => new Promise(res => setTimeout(res, ms));

//2. Créer une fonction asynchrone pour simuler le téléchargement
async function telechargement() {
  console.log("Début");        // affichage immédiat
  await wait(2000);             // attente de 2 secondes
  console.log("Fin");           // affichage après 2 secondes
}

telechargement();

/*
Explication

wait(2000) crée une promesse qui se résout après 2000 ms (2 secondes).

await pause l’exécution de la fonction asynchrone jusqu’à ce que la promesse soit résolue.

async est nécessaire pour pouvoir utiliser await.
*/


