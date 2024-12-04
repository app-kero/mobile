import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EditarProdutoPage {

  constructor() { }

}
