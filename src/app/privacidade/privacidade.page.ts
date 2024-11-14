import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from "src/app/componentes/header/header.component";

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.page.html',
  styleUrls: ['./privacidade.page.scss'],
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule],
})
export class PrivacidadePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Página Privacidade carregada");
  }
}
