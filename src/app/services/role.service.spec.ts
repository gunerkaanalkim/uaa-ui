import { TestBed } from '@angular/core/testing';

import { RealmService } from './role.service';

describe('RoleService', () => {
  let service: RealmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
