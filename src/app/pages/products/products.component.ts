import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import { Product } from './../../models/product.model';  

@Component({
  standalone: true,
  imports: [ ProductComponent, CommonModule ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit(){
    this.http.get('https://api.escuelajs.co/api/v1/products')
    .subscribe((data: any)=>{
      this.products = data;
    })
  }
}
