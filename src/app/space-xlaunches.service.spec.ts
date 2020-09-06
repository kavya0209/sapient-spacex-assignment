import { TestBed } from '@angular/core/testing';

import { SpaceXlaunchesService } from './space-xlaunches.service';

describe('SpaceXlaunchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceXlaunchesService = TestBed.get(SpaceXlaunchesService);
    expect(service).toBeTruthy();
  });
});
