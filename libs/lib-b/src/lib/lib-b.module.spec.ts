import { async, TestBed } from '@angular/core/testing';
import { LibBModule } from './lib-b.module';

describe('LibBModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibBModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibBModule).toBeDefined();
  });
});
