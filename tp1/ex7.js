//Exercice 7 – Tableaux avancés
const notes = [12, 5, 17, 9, 20];

//1. Calculer la moyenne avec reduce
const somme = notes.reduce((acc, note) => acc + note, 0);
const moyenne = somme / notes.length;

console.log("Moyenne :", moyenne); // Moyenne : 12.6

//2. Trier le tableau en ordre décroissant
const triDecroissant = [...notes].sort((a, b) => b - a);

console.log("Tri décroissant :", triDecroissant);
// [20, 17, 12, 9, 5]

//3. Filtrer les notes ≥ 10
const notesValides = notes.filter(note => note >= 10);

console.log("Notes ≥ 10 :", notesValides);
// [12, 17, 20]

