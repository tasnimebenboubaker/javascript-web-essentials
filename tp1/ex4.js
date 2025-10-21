//Exercice 4 – Spread Operator

//Fusionner deux tableaux avec ...
const tab1 = [1, 2, 3];
const tab2 = [4, 5, 6];

// Fusion
const fusion = [...tab1, ...tab2];

console.log(fusion); // [1, 2, 3, 4, 5, 6]

//Copier un objet et modifier une valeur
const user = { name: "Noor", age: 10, city: "Tunis" };

// Copie avec spread
const newUser = { ...user, age: 11 };

console.log(newUser); // { name: "Noor", age: 11, city: "Tunis" }
console.log(user);    // { name: "Noor", age: 10, city: "Tunis" }

/*
onst updatedUser = { ...user, country: "Tunisie" };

console.log(updatedUser);
// { name: "Noor", age: 10, city: "Tunis", country: "Tunisie" }

*/
