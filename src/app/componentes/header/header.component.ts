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
  isLoggedIn = false;
  authService = inject(AuthService);

  ngOnInit(): void {
    // Subscreve para mudanças no estado de login
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout();
  }
}
