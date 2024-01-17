import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getDataProduct(){
    return [
      {
        name: 'Kompor',
        category: 'Dapur',
        value: 3000000,
      },
      {
        name: 'Laptop',
        category: 'ATK',
        value: 5000000,
      },
      {
        name: 'Panci',
        category: 'Dapur',
        value: 1200000,
      },
      {
        name: 'Piring',
        category: 'Dapur',
        value: 45000,
      },
      {
        name: 'Monitor',
        category: 'ATK',
        value: 1400000,
      },
      {
        name: 'Keyboard',
        category: 'ATK',
        value: 130000,
      },
      {
        name: 'Charger',
        category: 'ATK',
        value: 600000,
      },
    ];
  }
}
