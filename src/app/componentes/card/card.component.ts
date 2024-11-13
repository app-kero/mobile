import { Component, Input } from '@angular/core';
import { Pensamento } from './cardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent  {

  @Input() pensamento: Pensamento = {
    titulo: "sem titulo",
    descricao: "Vazia"
  }

}
