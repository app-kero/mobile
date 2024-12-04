import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from 'src/app/componentes/footer/footer.component';
import {HeaderComponent} from "../../componentes/header/header.component";
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoint} from 'src/app/core/constants/constants';
import {Produto} from 'src/app/core/model/common.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class DetailProductPage implements OnInit {
  produtoId: string | null = null;
  produto: Produto | undefined; // Armazena o produto carregado
  imagemAtual = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do produto:', err);
      },
    });
  }

  avancarImagem() {
    if (this.produto && this.produto.fotos) {
      this.imagemAtual = (this.imagemAtual + 1) % this.produto.fotos.length;
    }
  }

  voltarImagem() {
    if (this.produto && this.produto.fotos) {
      this.imagemAtual = (this.imagemAtual - 1 + this.produto.fotos.length) % this.produto.fotos.length;
    }
  }
}
