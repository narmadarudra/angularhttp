import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productsInfo: any;
  constructor(private pdtService: ProductsService) {
    this.productsInfo = {} as ProductsModel;
  }

  ngOnInit() {
    this.pdtService.getProducts().subscribe((res: ProductsModel) => {
      debugger;
      console.log('res' + res);
      this.productsInfo = res;
    });
  }
}
