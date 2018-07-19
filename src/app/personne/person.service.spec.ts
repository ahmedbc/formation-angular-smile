import { TestBed, inject } from '@angular/core/testing';

import { PersonService } from './person.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PersonneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonService],
        schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([PersonService], (service: PersonService) => {
    expect(service).toBeTruthy();
  }));
});
