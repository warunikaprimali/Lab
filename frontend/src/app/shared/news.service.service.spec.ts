import { TestBed, inject } from '@angular/core/testing';

import { News.ServiceService } from './news.service.service';

describe('News.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [News.ServiceService]
    });
  });

  it('should be created', inject([News.ServiceService], (service: News.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
