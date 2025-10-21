import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
image='assets/fleur-de-lys-rose.jpg';
enStock=true;
 toggleStock() {
    this.enStock = !this.enStock;
  }
onClick() {
  alert("Produit ajouté au panier");
}

 //  Déclaration d’un événement personnalisé
  @Output() ajoutPanier = new EventEmitter<string>();

  onAddToCart() {
    // Émission de l’événement avec une donnée (ex : nom du produit)
    this.ajoutPanier.emit('Fleur de lys rose');
  }

}

