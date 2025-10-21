//exercice1: Variables et portée

//1. Déclaration de 3 variables
var x = 10;    
let y = 20;     
const z = 30;   

//2. Différence de portée dans un bloc
{
  var a = "var";
  let b = "let";
  const c = "const";
}

console.log(a); // "var" (var a une portée fonctionnelle(globale), donc reste accessible)
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

//3. Question piège : que se passe-t-il si on réaffecte une const ?
const pi = 3.14;
pi = 3.14159; // TypeError: Assignment to constant variable.
