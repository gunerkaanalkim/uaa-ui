import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDeleteComponent } from './role-delete.component';

describe('RoleDeleteComponent', () => {
  let component: RoleDeleteComponent;
  let fixture: ComponentFixture<RoleDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDeleteComponent]
    });
    fixture = TestBed.createComponent(RoleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
