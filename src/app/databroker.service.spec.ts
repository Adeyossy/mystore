import { TestBed } from '@angular/core/testing';

import { DatabrokerService } from './databroker.service';

describe('DatabrokerService', () => {
  let service: DatabrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
