import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class CadastroPage implements OnInit {

  ngOnInit(): void {
    console.log('Página de cadastro inicializada.');
  }


}
