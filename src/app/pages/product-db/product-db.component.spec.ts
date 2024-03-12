import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDBComponent } from './product-db.component';

describe('ProductDBComponent', () => {
  let component: ProductDBComponent;
  let fixture: ComponentFixture<ProductDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDBComponent]
    });
    fixture = TestBed.createComponent(ProductDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
