import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LandingPage } from './pages/landing/landing.page';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { LoginPage } from './pages/login/login.page';
import { YourProductPage } from './pages/your-products/your-products.page';
import { PrivacidadePage } from './privacidade/privacidade.page';
import { SobreNosPage } from './sobre-nos/sobre-nos.page';
import { DetailProductPage } from './pages/detail-product/detail-product.page';

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
  {
    path: 'privacidade',
    component: PrivacidadePage

  },
  {
    path: 'sobre-nos',
    component: SobreNosPage

  },
  {
    path: 'detail-product/:id',
    component: DetailProductPage
  },
];
