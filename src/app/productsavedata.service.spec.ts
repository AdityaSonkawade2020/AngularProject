import { TestBed } from '@angular/core/testing';

import { ProductsavedataService } from './productsavedata.service';

describe('ProductsavedataService', () => {
  let service: ProductsavedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsavedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
