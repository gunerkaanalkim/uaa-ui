import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmDeleteComponent } from './realm-delete.component';

describe('RealmDeleteComponent', () => {
  let component: RealmDeleteComponent;
  let fixture: ComponentFixture<RealmDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealmDeleteComponent]
    });
    fixture = TestBed.createComponent(RealmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
