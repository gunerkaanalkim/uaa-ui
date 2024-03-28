import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionEditingComponent } from './permission-editing.component';

describe('PermissionEditingComponent', () => {
  let component: PermissionEditingComponent;
  let fixture: ComponentFixture<PermissionEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionEditingComponent]
    });
    fixture = TestBed.createComponent(PermissionEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
