import { TestBed, inject } from '@angular/core/testing';

import { PersonneService } from './person.service';

describe('PersonneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonneService]
    });
  });

  it('should be created', inject([PersonneService], (service: PersonneService) => {
    expect(service).toBeTruthy();
  }));
});
