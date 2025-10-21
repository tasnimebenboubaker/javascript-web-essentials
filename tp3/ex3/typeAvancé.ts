//1. Crée une variable id qui peut être soit un number, soit un string.
let id:number|string;

//2. Crée deux types A et B, puis fais-en une intersection.
type A = { name: string }; //il faut attribut avce type 
type B = { age: number };

type C = A & B;  // { name: string; age: number }

const person: C = {
  name: "Ali",
  age: 22
};

/*

type A = string;
type B = number;

type C = A & B; // intersection:type qui doit être à la fois une string ET un number en même temps.
 --> C devient automatiquement never

----------------------

alias sur un type primitif
type Age = number;

let age: Age = 22; // équivaut à number
*/


//3. Crée un alias Status qui peut valoir "pending", "done" ou "canceled".

type Status="pending"| "done"  | "canceled"

let myStatus:Status="pending";

/*enum StatusEnum {
  Pending = "pending",
  Done = "done",
  Canceled = "canceled"
}

let myStatus2: StatusEnum = StatusEnum.Pending;
*/

//4. Déclare une variable unknown et utilise une assertion de type pour accéder à sa
//longueur si c’est une chaîne.
let var1: unknown = "salut";

// assertion de type 
let longueur: number = (var1 as string).length;

/*Version avec vérification de type
let var1: unknown = "salut";

let longueur: number;

if (typeof var1 === "string") {
  longueur = var1.length; // 
} else {
  longueur = 0; 
}
*/

