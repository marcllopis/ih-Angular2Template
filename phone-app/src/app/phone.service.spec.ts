/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhoneService } from './phone.service';

describe('PhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneService]
    });
  });

  it('should ...', inject([PhoneService], (service: PhoneService) => {
    expect(service).toBeTruthy();
  }));
});
