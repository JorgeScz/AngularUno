import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Proyecto Uno Angular';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle(){
    this.title = 'Ejemplo: Uso de API'
  }

}
