import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {FooterComponent} from 'src/app/componentes/footer/footer.component';
import {HeaderComponent} from "../../componentes/header/header.component";
import {CardComponent} from 'src/app/componentes/card/card.component';
import {ProdutoService} from "../../core/api/produto.service";
import {Produto} from "../../core/model/common.model";

@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.page.html',
  styleUrls: ['./your-products.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    RouterModule,
    IonicModule,
  ],
})
export class YourProductPage implements OnInit {
  cards: Produto[] = []; // Armazena os produtos carregados
  isLoading: boolean = true; // Indica se está carregando os dados

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    console.log("carregando...")
    this.produtoService.findAllProdutos().subscribe({
      next: (response) => {
        this.cards = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.isLoading = false;
      },
    });
  }

  trackById(index: number, card: any): number {
    return card.id;
  }
}
