import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarProdutoPage } from './cadastrar-produto.page';

describe('CadastrarProdutoPage', () => {
  let component: CadastrarProdutoPage;
  let fixture: ComponentFixture<CadastrarProdutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
