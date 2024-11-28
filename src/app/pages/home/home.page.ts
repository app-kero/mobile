import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { CardComponent } from 'src/app/componentes/card/card.component';
import { CommonModule } from '@angular/common';
import { IonSpinner } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pensamento } from 'src/app/componentes/card/cardModel';
import { Produto } from 'src/app/core/model/common.model';
import { compileNgModule } from '@angular/compiler';
import { ApiEndpoint } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CommonModule,
    HttpClientModule,
  ],
})
export class HomePage implements OnInit {
  isLoading: boolean = true;
  imagemAtual: number = 0; // Controle do carrossel
  imagensCarrossel: string[] = []; // Imagens do carrossel dinâmico
  produtosAgrupados: { [key: string]: Produto[] } = {}; // Produtos agrupados por tags

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.http.get<Produto[]>(ApiEndpoint.Produtos.All).subscribe({
      next: (produtos) => {
        this.agruparProdutosPorTag(produtos);
        this.carregarCarrossel(produtos);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.isLoading = false;
      },
    });
  }

  agruparProdutosPorTag(produtos: Produto[]): void {
    this.produtosAgrupados = produtos.reduce((grupos, produto) => {
      produto.tags.forEach((tag) => {
        if (!grupos[tag.nome]) grupos[tag.nome] = [];
        grupos[tag.nome].push(produto);
      });
      return grupos;
    }, {} as { [key: string]: Produto[] });
  }

  carregarCarrossel(produtos: Produto[]): void {
    console.log(produtos);
    this.imagensCarrossel = produtos.map((produto) => produto.fotos[0].url);
  }

  get getTags(): string[] {
    return Object.keys(this.produtosAgrupados);
  }

  voltarCarrossel(): void {
    this.imagemAtual =
      (this.imagemAtual - 1 + this.imagensCarrossel.length) %
      this.imagensCarrossel.length;
  }

  avancarCarrossel(): void {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagensCarrossel.length;
  }
}
