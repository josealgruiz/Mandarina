import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../../services/product.service";
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-productsform',
  templateUrl: './productsform.component.html',
  styleUrls: ['./productsform.component.css']
})
export class ProductsformComponent implements OnInit {

  product = {} as Product;

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(){
    if(this.product.name !== '' && this.product.price != 0 && this.product.description != '') {
      this.productService.addProduct(this.product);
      this.product = {} as Product;
    }
  }
}
