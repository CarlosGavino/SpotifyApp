import { TestBed } from '@angular/core/testing';

import { MultimediService } from './multimedia.service';

describe('MultimediaServiceService', () => {
  let service: MultimediService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultimediService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
