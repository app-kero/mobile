import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/api/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterModule],
  standalone: true
})
export class HeaderComponent implements OnInit{
  autenticaoService = inject(AuthService);
  changeDetector = inject(ChangeDetectorRef);  // Injeta o ChangeDetectorRef
  isLoggedIn = false;

  ngOnInit(): void {
    const token = localStorage.getItem('USER_TOKEN');
    this.isLoggedIn = !!token;
  }

  logout() {
    // this.autenticaoService.logout();
    this.isLoggedIn = false;  // Atualiza a variável isLoggedIn
    this.changeDetector.detectChanges();  // Força a detecção de mudanças para atualizar a view
  }
}
