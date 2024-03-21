import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product, ProductImage, SearchFilter, SearchFilterRequest, SearchOperator} from "../../store/model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {FormControl, Validators} from "@angular/forms";
import {IntegrationService} from "../../services/integration.service";

@Component({
  selector: 'app-product-db',
  templateUrl: './product-db.component.html',
  styleUrls: ['./product-db.component.scss']
})
export class ProductDBComponent implements OnInit{
  products: Product[] = [];
  product: Product | null = null;
  productImages: ProductImage[] = [];
  pageable: any;
  page: number = 1;
  generatedContent: String = "";

  operators: SearchOperator[] = [
    {name: "Equal", value: "equal"},
    {name: "Not Equal", value: "notEqual"},
    {name: "Greater Than", value: "greaterThan"},
    {name: "Greater Than Or Equal", value: "greaterThanOrEqual"},
    {name: "Less Than", value: "lessThan"},
    {name: "Less Than Or Equal", value: "lessThanOrEqual"},
    {name: "Like", value: "like"},
  ]

  title = new FormControl("",
    [Validators.minLength(5),
      Validators.maxLength(1000)]
  );

  details = new FormControl("",
    [Validators.minLength(5),
      Validators.maxLength(1000)]
  );

  shortDescription = new FormControl("",
    [Validators.minLength(5),
      Validators.maxLength(1000)]
  );

  titleSearchFormControl = new FormControl("",
    [Validators.minLength(1),
      Validators.maxLength(1000)]
  );

  titleOperatorSearchFormControl = new FormControl(null);


  priceSearchFormControl = new FormControl("",
    [Validators.minLength(1),
      Validators.maxLength(1000)]
  );

  priceOperatorSearchFormControl = new FormControl(null);

  constructor(
    private readonly productService: ProductService,
    private readonly integrationService: IntegrationService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>  {
      this.page = params['page'];

      this.getAllProductsByPage(this.page);
    });
  }

  getAllProductsByPage(pageNo: number) {
    this.spinner.show()

    this.productService
      .getAll(pageNo)
      .subscribe(pageableProducts => {

        this.products = pageableProducts.content;
        this.pageable = {
          currentPage: pageableProducts.pageable.pageNumber,
          lastPage: pageableProducts.totalPages,
          perPage: pageableProducts.pageable.pageSize,
          total: pageableProducts.totalElements
        }

        this.spinner.hide()
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

  removeFromProductDB(product: Product) {
    this.spinner.show()

    this.productService
      .destroy(product.productId)
      .subscribe(response => {
        this.products = this.products.filter(item => item.id !== product.id)
        this.spinner.hide();
      })
  }

  setSelectedProduct(product: Product) {
    this.product = product;
    this.title.setValue(product.title);
    this.details.setValue(product.details);
    this.shortDescription.setValue(product.shortDescription);
  }

  titleHasError() {
    return this.title.invalid && (this.title.dirty || this.title.touched)
  }

  detailsHasError() {
    return this.details.invalid && (this.details.dirty || this.details.touched)
  }

  shortDescriptionHasError() {
    return this.shortDescription.invalid && (this.shortDescription.dirty || this.shortDescription.touched)
  }

  formHasError() {
    return this.titleHasError() || this.detailsHasError() || this.shortDescriptionHasError();
  }

  publishProduct() {
    if (!this.formHasError()) {
      this.product!.title = this.title.value!;
      this.product!.details = this.details.value!;
      this.product!.shortDescription = this.shortDescription.value!;

      this.spinner.show();
      this.productService
        .edit(this.product!)
        .subscribe(response => {
          this.spinner.hide();
        })
    }
  }

  generateContent() {
    if (!this.formHasError()) {
      this.spinner.show();

      this.integrationService
        .generateContent({
            title: this.title.value!,
            details: this.details.value!,
            shortDescription: this.details.value!
          }
        )
        .subscribe(generateContentResponse => {
          this.spinner.hide();
          this.generatedContent = generateContentResponse.choices[0].message.content;
        })
    }
  }

  onSearch() {
    const filters: SearchFilter[] = [];

    if (this.titleSearchFormControl.value) {
      filters.push({
        by: "title",
        value: this.titleSearchFormControl.value!,
        operator: this.titleOperatorSearchFormControl.value!
      });
    }

    if (this.priceSearchFormControl.value) {
      filters.push({
        by: "price",
        value: this.priceSearchFormControl.value!,
        operator: this.priceOperatorSearchFormControl.value!
      });
    }

    const searchFilterRequest: SearchFilterRequest = {
      pageNo: 1,
      pageSize: 10,
      column: 'id',
      order: 'asc',
      filters: filters
    }

    if (searchFilterRequest.filters.length) {
      this.spinner.show();

      this.productService.filter(searchFilterRequest)
        .subscribe(pageableProducts => {
          this.products = pageableProducts.content;
          this.pageable = {
            currentPage: pageableProducts.pageable.pageNumber,
            lastPage: pageableProducts.totalPages,
            perPage: pageableProducts.pageable.pageSize,
            total: pageableProducts.totalElements
          }

          this.spinner.hide()
        })
    }
  }
}
