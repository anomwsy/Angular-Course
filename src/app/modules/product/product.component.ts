import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products : any[] = []; 
  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.products = this.productService.getDataProduct();
  }
}
