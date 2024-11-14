import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourProductPage } from './your-products.page';

describe('YourProductPage', () => {
  let component: YourProductPage;
  let fixture: ComponentFixture<YourProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
