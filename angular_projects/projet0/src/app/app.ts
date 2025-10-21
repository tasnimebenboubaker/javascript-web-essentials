import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Product } from './product/product';
import { User } from './user/user';
import { Basket } from './basket/basket';

@Component({
  selector: 'app-root',
  imports: [Welcome,Product,User,Basket],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projet1');

   message = '';

  //  Méthode appelée quand l’enfant émet l’événement
  onProduitAjoute(nomProduit: string) {
    this.message = `${nomProduit} ajouté au panier !`;
  }
}
