import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule]
})
export class CadastrarProdutoPage {

  constructor() { }


}
