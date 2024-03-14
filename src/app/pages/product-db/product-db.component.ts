import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Store} from "@ngrx/store";
import {setLoaderVisible} from "../../store/project.action";
import {Product, ProductImage} from "../../store/model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-db',
  templateUrl: './product-db.component.html',
  styleUrls: ['./product-db.component.scss']
})
export class ProductDBComponent implements OnInit{
  products: Product[] = [];
  productImages: ProductImage[] = [];
  pageable: any;
  page: number = 1;

  constructor(
    private readonly productService: ProductService,
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.page = params['page'];

      this.getAllProductsByPage(this.page);
    });

  }

  getAllProductsByPage(pageNo: number) {
    this.store.dispatch(setLoaderVisible({isLoaderVisible: true}))

    this.productService
      .getAll(pageNo)
      .subscribe(pageableProducts => {
        this.store.dispatch(setLoaderVisible({isLoaderVisible: false}))
        this.products = pageableProducts.content;
        this.pageable = {
          currentPage: pageableProducts.pageable.pageNumber,
          lastPage: pageableProducts.totalPages,
          perPage: pageableProducts.pageable.pageSize,
          total: pageableProducts.totalElements
        }
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['product-database', {page: page}])
  }

  onImagesOpen(productId: number) {
    this.productService
      .getProductImages(productId)
      .subscribe(images=>{
        this.productImages = images;
      })
  }
}
