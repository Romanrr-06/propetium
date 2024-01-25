import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule),

  },
  {
    path: 'crypto',
    loadChildren: () => import('./crypto/crypto.module').then((m) => m.CryptoPageModule),

  },
  {
    path: 'quizz',
    loadChildren: () => import('./quizz/quizz.module').then( m => m.QuizzPageModule),

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'ruleta',
    loadChildren: () => import('./ruleta/ruleta.module').then( m => m.RuletaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'crypto-game',
    loadChildren: () => import('./crypto-game/crypto-game.module').then( m => m.CryptoGamePageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}