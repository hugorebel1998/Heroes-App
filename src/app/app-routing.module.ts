import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageErrorComponent } from './shared/page-error/page-error.component';
// import { AuthModule } from './auth/auth.module';
// import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'pagina-404', component: PageErrorComponent
  },
  {
    path: '**', redirectTo: 'pagina-404'
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
