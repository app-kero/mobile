import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LandingPage } from './pages/landing/landing.page';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { LoginPage } from './pages/login/login.page';
import { YourProductPage } from './pages/your-products/your-products.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage
  },
  {
    path: 'landing',
    component: LandingPage
  },
  {
    path: 'cadastro',
    component: CadastroPage
  },
  {
    path: 'home',
    component: HomePage

  },
  {
    path: 'product',
    component: YourProductPage

  },

];
