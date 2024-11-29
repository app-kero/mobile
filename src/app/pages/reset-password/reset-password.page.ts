import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/api/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: []
})
export class ResetPasswordPage {
  form: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubimt() {
    if (this.form.valid) {
      this.authService.recover(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['home']);
        },
      });
    }
  }
}
