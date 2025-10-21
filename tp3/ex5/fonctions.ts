//1. Crée une fonction add(a: number, b: number): number.
// 1. Fonction add
function add(a: number, b: number): number {
    return a + b;
}

// 2. Fonction greet
function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Bonjour ${name}, tu as ${age} ans.`);
    } else {
        console.log(`Bonjour ${name}, ravi de te rencontrer !`);
    }
}

// 3. Fonction power avec exp par défaut = 2
function power(base: number, exp: number = 2): number {
    return base ** exp;
}

// 4. Fonction combine (surcharge)
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

// --- Exemples d'utilisation ---
console.log(add(5, 3));                // 8
greet("Alice");                        // Bonjour Alice, ravi de te rencontrer !
greet("Bob", 25);                      // Bonjour Bob, tu as 25 ans.
console.log(power(4));                 // 16 (car exp par défaut = 2)
console.log(power(2, 3));              // 8
console.log(combine(10, 20));          // 30
console.log(combine("Hello, ", "TS")); // Hello, TS
