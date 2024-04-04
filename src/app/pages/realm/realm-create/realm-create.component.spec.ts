import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmCreateComponent } from './realm-create.component';

describe('RealmCreateComponent', () => {
  let component: RealmCreateComponent;
  let fixture: ComponentFixture<RealmCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealmCreateComponent]
    });
    fixture = TestBed.createComponent(RealmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
