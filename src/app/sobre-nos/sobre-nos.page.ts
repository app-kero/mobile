import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "src/app/componentes/header/header.component";


@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.page.html',
  styleUrls: ['./sobre-nos.page.scss'],
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule]
})
export class SobreNosPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Página Sobre Nós carregada");
  }
}
