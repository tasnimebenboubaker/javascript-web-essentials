// exercices-typescript.ts

// 1. Déclaration de variables avec différents types primitifs
let nom: string = "Dupont";
let age: number = 25;
let estEtudiant: boolean = true;
let moyenne: number = 15.5;
let notes: number[] = [12, 14, 18];
let adresse: { rue: string, ville: string } = { rue: "123 rue Principale", ville: "Paris" };

// 2. Fonction typée qui calcule la somme de deux nombres
function addition(a: number, b: number): number {
    return a + b;
}

// Test de la fonction
console.log("Somme de 5 et 10 :", addition(5, 10));

// 3. Définition de l'interface Etudiant
interface EtudiantInterface {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

// 4. Classe Etudiant qui implémente l'interface
class Etudiant implements EtudiantInterface {
    id: number;
    nom: string;
    prenom: string;
    age: number;

    constructor(id: number, nom: string, prenom: string, age: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    afficherInfos(): void {
        console.log(`Etudiant [ID: ${this.id}] - Nom: ${this.nom} ${this.prenom}, Age: ${this.age}`);
    }
}

// Création et test d'un étudiant
const etudiant1 = new Etudiant(1, "Dupont", "Jean", 22);
etudiant1.afficherInfos();

// 4a. Fonction générique
// Cette fonction accepte n'importe quel type T et retourne un tableau rempli de cette valeur répétée 'count' fois
function creerTableau<T>(valeur: T, count: number): T[] {
    return Array(count).fill(valeur);
}

// Exemple d'utilisation
const nombres = creerTableau<number>(5, 3); // [5, 5, 5]
const chaines = creerTableau<string>("TS", 4); // ["TS", "TS", "TS", "TS"]
console.log("Tableau de nombres :", nombres);
console.log("Tableau de chaînes :", chaines);

// 4b. Union de types et types optionnels
// Cette fonction peut accepter un string ou un number, et un suffixe optionnel
function afficherValeur(valeur: string | number, suffixe?: string): void {
    if (suffixe) {
        console.log(`Valeur : ${valeur}${suffixe}`);
    } else {
        console.log(`Valeur : ${valeur}`);
    }
}

afficherValeur(100);
afficherValeur("Bonjour", "!");

// 4c. Enumérations (enum) pour représenter des valeurs constantes
enum Couleur {
    Rouge = "Rouge",
    Vert = "Vert",
    Bleu = "Bleu"
}

let maCouleurPreferee: Couleur = Couleur.Vert;
console.log("Ma couleur préférée est :", maCouleurPreferee);

// Utilisation dans une fonction
function peindre(couleur: Couleur) {
    console.log(`Peindre en ${couleur}`);
}
peindre(Couleur.Rouge);