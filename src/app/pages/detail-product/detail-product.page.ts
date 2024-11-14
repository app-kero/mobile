import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent, CardComponent]
})
export class DetailProductPage implements OnInit {
  produtoId: string | null = null;
  imagens = [
    'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'
  ];
  imagemAtual = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obter o ID do produto da URL
    this.produtoId = this.route.snapshot.paramMap.get('id');
    if (this.produtoId) {
      this.carregarDetalhesProduto(this.produtoId);
    }
  }

  carregarDetalhesProduto(id: string) {
    // Lógica pra carregar os detalhes do produto usando o ID
    console.log('Carregar detalhes do produto com ID:', id);

  }

  avancarImagem() {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }

  voltarImagem() {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }
}
