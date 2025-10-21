// 1. Déclarer des variables
let name1: string;
let age: number;
let isAdmin: boolean;

// 2. Créer un tableau contenant uniquement des nombres
let scores: number[] = [1, 2, 3, 4];

// 3. Créer un tuple [string, number] pour représenter un étudiant
const etudiant: [string, number] = ["Ali", 22];

// 4. Créer un enum et lui affecter une valeur
enum Role {
  User,
  Admin,
  SuperAdmin
}

let myRole: Role = Role.Admin; 
