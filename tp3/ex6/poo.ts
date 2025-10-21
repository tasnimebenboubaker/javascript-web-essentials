// 1. Classe Person
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
}

// 2. Classe Student qui hérite de Person
class Student extends Person {
    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age); // Appel du constructeur parent
        this.school = school;
    }

    greet(): void {
        console.log(`Bonjour, je suis ${this.name}, j'ai ${this.age} ans et j'étudie à ${this.school}.`);
    }
}

// 3. Classe abstraite Shape
abstract class Shape {
    abstract area(): number; // Méthode abstraite (doit être implémentée par les enfants)
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

// 4. Interface Drivable et classe Car qui l’implémente
interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): void {
        console.log(`La voiture ${this.brand} roule sur la route 🚗`);
    }
}

// --- Exemples d'utilisation ---
const person1 = new Person("Alice", 30);
person1.greet();

const student1 = new Student("Bob", 20, "Université de Paris");
student1.greet();

const circle = new Circle(5);
console.log(`Aire du cercle : ${circle.area()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Aire du rectangle : ${rectangle.area()}`);

const car = new Car("Toyota");
car.drive();
