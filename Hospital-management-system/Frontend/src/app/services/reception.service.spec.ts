import { TestBed } from '@angular/core/testing';

import { ReceptionService } from './reception.service';

describe('ReceptionService', () => {
  let service: ReceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
