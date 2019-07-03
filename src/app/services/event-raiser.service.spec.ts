import { TestBed } from '@angular/core/testing';

import { EventRaiserService } from './event-raiser.service';

describe('EventRaiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventRaiserService = TestBed.get(EventRaiserService);
    expect(service).toBeTruthy();
  });
});
