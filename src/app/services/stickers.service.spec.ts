import { TestBed, inject } from '@angular/core/testing';

import { StickersService } from './stickers.service';

describe('Stickers.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickersService]
    });
  });

  it('should be created', inject([StickersService], (service: StickersService) => {
    expect(service).toBeTruthy();
  }));
});
