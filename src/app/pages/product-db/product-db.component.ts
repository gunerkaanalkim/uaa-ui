import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-db',
  templateUrl: './product-db.component.html',
  styleUrls: ['./product-db.component.scss']
})
export class ProductDBComponent implements OnInit{
  constructor(
    private readonly productService: ProductService
  ) {
  }

  ngOnInit(): void {
      this.productService
        .getAll()
        .subscribe(response=>{
          console.log(response)
        })
  }



}
