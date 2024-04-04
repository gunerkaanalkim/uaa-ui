import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmListingComponent } from './realm-listing.component';

describe('RealmListingComponent', () => {
  let component: RealmListingComponent;
  let fixture: ComponentFixture<RealmListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealmListingComponent]
    });
    fixture = TestBed.createComponent(RealmListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
