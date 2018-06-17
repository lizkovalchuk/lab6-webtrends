import { TestBed, inject } from '@angular/core/testing';

import { Lab6Service } from './lab6.service';

describe('Lab6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lab6Service]
    });
  });

  it('should be created', inject([Lab6Service], (service: Lab6Service) => {
    expect(service).toBeTruthy();
  }));
});
