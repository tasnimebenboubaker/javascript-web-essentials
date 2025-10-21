/*1. Crée une interface User avec les propriétés id: number, name: string, email?: string
(optionnelle), et isAdmin: boolean en lecture seule.*/

interface User{
    id:number;
    name:string;
    email?:string;
    readonly isAdmin:boolean; //immeuable : ne peut pas etree modifié une fois saisie
}

//2. Crée un objet user1 conforme à cette interface.
const user1: User={
    id:123,
    name:"tasnime",
    isAdmin: true
}

// 3. Crée une interface Admin qui hérite de User et ajoute une propriété permissions: string[].
interface Admin extends User {
    permissions: string[];
}

// Exemple d'objet admin1 conforme à l'interface Admin
const admin1: Admin = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};
