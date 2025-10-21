//Exercice 3 – Destructuring
const user0 = { name: "Noor", age: 10, city: "Tunis" };

// Déstructuration
const { name: userName, age: userAge } = user0;
console.log(userName); // "Noor"
console.log(userAge);  // 10
