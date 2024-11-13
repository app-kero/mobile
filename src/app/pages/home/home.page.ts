import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent, CommonModule]
})
export class HomePage {

  cards = [
    {
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
    {
      titulo: "Doce bom",
      descricao: "Aqui temos doces bons e são bons"
    },
  ]

}
