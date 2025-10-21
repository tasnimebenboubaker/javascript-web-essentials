// 1. Crée un fichier math.ts avec une fonction add.
export function add(a: number, b: number): number {
    return a + b;
}


//3.Crée un fichier index.ts qui ré-exporte plusieurs fonctions (add, subtract)
export function add2(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}