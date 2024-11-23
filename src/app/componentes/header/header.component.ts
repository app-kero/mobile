import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/api/autenticacao.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/componentes/card/card.component';
import { Pensamento } from '../card/cardModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterModule, FormsModule, CommonModule, CardComponent, HttpClientModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  termoBusca: string = '';
  produtos: Pensamento[] = [];
  produtosFiltrados: Pensamento[] = [];
  produtosRecomendados: Pensamento[] = [];
  emPesquisa: boolean = false;

  authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  private http = inject(HttpClient);

  ngOnInit(): void {
    // Verifica estado de login
    this.authService.loggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    // Carrega produtos do backend
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.http.get<Pensamento[]>('http://localhost:3000/produtos').subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }

  buscarProdutos() {
    const termo = this.termoBusca.toLowerCase();

    // Filtrar produtos que correspondem ao termo de busca
    this.produtosFiltrados = this.produtos.filter(
      (produto) =>
        produto?.titulo?.toLowerCase().includes(termo) ||
        produto?.descricao?.toLowerCase().includes(termo)
    );

    // Encontrar produtos que não correspondem ao termo, mas podem ser recomendados
    this.produtosRecomendados = this.produtos.filter(
      (produto) =>
        !produto?.titulo?.toLowerCase().includes(termo) &&
        !produto?.descricao?.toLowerCase().includes(termo)
    );

    this.cdr.detectChanges();
  }

  abrirPesquisa() {
    this.emPesquisa = true;
  }

  fecharPesquisa() {
    this.emPesquisa = false;
    this.termoBusca = '';
    this.produtosFiltrados = [];
    this.produtosRecomendados = [];
  }

  logout() {
    this.authService.logout();
  }
}
