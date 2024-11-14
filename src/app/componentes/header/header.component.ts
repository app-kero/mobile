import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/api/autenticacao.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/componentes/card/card.component';
import { Pensamento } from '../card/cardModel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterModule, FormsModule, CommonModule, CardComponent],
  standalone: true
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  termoBusca: string = '';
  produtos = [
    {
      id: 1,
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      id: 2,
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      id: 3,
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      id: 4,
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      id: 5,
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      id: 6,
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
  ]

  produtosFiltrados: Pensamento[] = [];
  emPesquisa: boolean = false;

  authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);



  ngOnInit(): void {
    // Subscreve para mudanças no estado de login
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  buscarProdutos() {
    const termo = this.termoBusca.toLowerCase();
    this.produtosFiltrados = this.produtos.filter(produto =>
      produto.titulo.toLowerCase().includes(termo) ||
      produto.descricao.toLowerCase().includes(termo)
    );
    this.cdr.detectChanges(); // Força a atualização da tela para mostrar os resultados
  }

  logout() {
    this.authService.logout();
  }

  abrirPesquisa() {
    this.emPesquisa = true;
  }

  // Fecha o overlay de pesquisa e limpa o termo de busca
  fecharPesquisa() {
    this.emPesquisa = false;
    this.termoBusca = '';
    this.produtosFiltrados = [];
  }

}
