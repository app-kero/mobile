import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';

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
  cards: any[] = []; // Armazena os produtos carregados
  isLoading: boolean = true; // Indica se está carregando os dados

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.http.get<any[]>('http://localhost:3000/produtos').subscribe({
      next: (produtos) => {
        this.cards = produtos;
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
