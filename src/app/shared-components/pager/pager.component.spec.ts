import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PagerComponent} from './pager.component';

describe('PagerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagerComponent]
    });
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
