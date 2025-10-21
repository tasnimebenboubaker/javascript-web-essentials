//Exercice 5 – Objet simple

const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee: 1943,
  
  // Méthode
  getInfo() {
    return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}.`;
  }
};

//Utilisation de la méthode
console.log(livre.getInfo());
//  "Le Petit Prince a été écrit par Antoine de Saint-Exupéry en 1943."
