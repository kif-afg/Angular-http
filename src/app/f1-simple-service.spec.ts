/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { F1SimpleServiceService } from './f1-simple-service.service';

describe('F1SimpleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [F1SimpleServiceService]
    });
  });

  it('should ...', inject([F1SimpleServiceService], (service: F1SimpleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
