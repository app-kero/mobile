import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'Button';                // Texto do botão
  @Input() color: string = 'bg-blue-500 hover:bg-blue-600';  // Classes de cor
  @Input() route: string | undefined;              // Opcional: rota para redirecionamento
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClick = new EventEmitter<void>();     // Evento de clique

  handleClick() {
    // Emite o evento de clique apenas se não houver um routerLink definido
    if (!this.route) {
      this.onClick.emit();
    }
  }
}
