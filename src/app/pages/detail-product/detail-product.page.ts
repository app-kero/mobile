import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    HttpClientModule,
  ]
})
export class DetailProductPage implements OnInit {
  produtoId: string | null = null;
  produto: any = null; // Armazena o produto carregado
  imagemAtual = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Obter o ID do produto da URL
    this.produtoId = this.route.snapshot.paramMap.get('id');
    if (this.produtoId) {
      this.carregarDetalhesProduto(this.produtoId);
    }
  }

  carregarDetalhesProduto(id: string) {
    // Busca o produto pelo ID na API
    this.http.get<any>(`http://localhost:3000/produtos/${id}`).subscribe({
      next: (produto) => {
        this.produto = produto;
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do produto:', err);
      },
    });
  }

  avancarImagem() {
    if (this.produto?.imagens) {
      this.imagemAtual = (this.imagemAtual + 1) % this.produto.imagens.length;
    }
  }

  voltarImagem() {
    if (this.produto?.imagens) {
      this.imagemAtual = (this.imagemAtual - 1 + this.produto.imagens.length) % this.produto.imagens.length;
    }
  }
}
