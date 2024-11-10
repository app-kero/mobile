import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class LoginPage implements OnInit {

  ngOnInit(): void {
    console.log('Página de login inicializada.');
  }


}
