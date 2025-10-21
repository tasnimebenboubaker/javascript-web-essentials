// 1. Fonction générique identity
function identity<T>(value: T): T {
    return value;
}

// 2. Fonction générique getFirst
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// 3. Classe générique Repository
class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// 4. Interface générique ApiResponse
interface ApiResponse<T> {
    data: T;
    error?: string;
}

// --- Exemples d'utilisation ---
// identity
console.log(identity<string>("Hello")); // "Hello"
console.log(identity<number>(123));     // 123

// getFirst
console.log(getFirst<number>([10, 20, 30])); // 10
console.log(getFirst<string>(["a", "b", "c"])); // "a"

// Repository
const userRepo = new Repository<string>();
userRepo.add("Alice");
userRepo.add("Bob");
console.log(userRepo.getAll()); // ["Alice", "Bob"]
userRepo.remove("Alice");
console.log(userRepo.getAll()); // ["Bob"]

// ApiResponse
const successResponse: ApiResponse<number> = {
    data: 200
};

const errorResponse: ApiResponse<null> = {
    data: null,
    error: "Not Found"
};

console.log(successResponse); // { data: 200 }
console.log(errorResponse);   // { data: null, error: "Not Found" }
