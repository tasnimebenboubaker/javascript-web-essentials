// 2. Importer fonction add dans main.ts et teste-la.
import { add } from "./math";

console.log(add(5, 3)); // 8

// importation des  fonctions (add, subtract) exporté à partie de index.ts
import { add2, subtract } from "./index";

console.log(add2(10, 5));      // 15
console.log(subtract(10, 5)); // 5


// 4.Utilise import type pour importer uniquement des types depuis un fichier types.ts.
import type { User } from "./types";

const user: User = { id: 1, name: "Alice" };
console.log(user);
