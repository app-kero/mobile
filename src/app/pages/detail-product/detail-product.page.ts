import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiEndpoint } from 'src/app/core/constants/constants';
import { Produto } from 'src/app/core/model/common.model';
import { IonSpinner } from "@ionic/angular/standalone";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: true,
  imports: [IonSpinner, 
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    HttpClientModule,
  ]
})
export class DetailProductPage implements OnInit {
  isLoading: boolean = true;
  produtoId: string | null = null;
  produto!: Produto; // Armazena o produto carregado
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
    this.http.get<any>(`${ApiEndpoint.Produtos.BuscarPorId}/${id}`).subscribe({
      next: (produto) => {
        this.produto = produto;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do produto:', err);
        this.isLoading = false;
      },
    });
  }

  avancarImagem() {
    if (this.produto.fotos) {
      this.imagemAtual = (this.imagemAtual + 1) % this.produto.fotos.length;
    }
  }

  voltarImagem() {
    if (this.produto.fotos) {
      this.imagemAtual = (this.imagemAtual - 1 + this.produto.fotos.length) % this.produto.fotos.length;
    }
  }
}
