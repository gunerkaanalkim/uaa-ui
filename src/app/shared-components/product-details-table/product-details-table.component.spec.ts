import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductDetailsTableComponent} from './product-details-table.component';

describe('ProductDetailsTableComponent', () => {
  let component: ProductDetailsTableComponent;
  let fixture: ComponentFixture<ProductDetailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsTableComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
