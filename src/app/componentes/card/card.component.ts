import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'src/app/componentes/button/button.component';
import { CommonModule } from '@angular/common';
import { Pensamento } from 'src/app/core/model/common.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent]

})
export class CardComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    titulo: "sem titulo",
    descricao: "Vazia",
    imagemUrl: 'https://via.placeholder.com/150',
  };

  @Input() mode: 'home' | 'produtos' = 'home'; // Define o modo do card

  editarPensamento() {
    console.log('Editar pensamento:', this.pensamento);
  }

  excluirPensamento() {
    console.log('Excluir pensamento:', this.pensamento);
  }

  verDetalhes() {
    console.log('Ver detalhes do pensamento:', this.pensamento);
  }
}
