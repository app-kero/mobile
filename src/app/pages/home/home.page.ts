import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "../../componentes/header/header.component";
import { CardComponent } from 'src/app/componentes/card/card.component';
import { CommonModule } from '@angular/common';
import { IonSpinner } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSpinner, HeaderComponent, FooterComponent, CardComponent, CommonModule]
})


export class HomePage {

  isLoading: boolean = false;

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
