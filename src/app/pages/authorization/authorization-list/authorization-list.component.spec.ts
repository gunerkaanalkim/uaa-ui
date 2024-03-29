import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationListComponent } from './authorization-list.component';

describe('AuthorizationListComponent', () => {
  let component: AuthorizationListComponent;
  let fixture: ComponentFixture<AuthorizationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizationListComponent]
    });
    fixture = TestBed.createComponent(AuthorizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
