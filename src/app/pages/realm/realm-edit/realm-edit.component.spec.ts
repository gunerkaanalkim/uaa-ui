import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmEditComponent } from './realm-edit.component';

describe('RealmEditComponent', () => {
  let component: RealmEditComponent;
  let fixture: ComponentFixture<RealmEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealmEditComponent]
    });
    fixture = TestBed.createComponent(RealmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
