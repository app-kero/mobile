import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'src/app/componentes/button/button.component';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';


@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.page.html',
  styleUrls: ['./your-products.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, FooterComponent, HeaderComponent, CardComponent, RouterModule]
})
export class YourProductPage {

  cards = [
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

}
