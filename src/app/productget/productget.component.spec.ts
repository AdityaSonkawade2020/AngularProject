import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgetComponent } from './productget.component';

describe('ProductgetComponent', () => {
  let component: ProductgetComponent;
  let fixture: ComponentFixture<ProductgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
