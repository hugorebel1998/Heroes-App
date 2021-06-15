import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageErrorComponent } from './shared/page-error/page-error.component';

const routes:Routes = [
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
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
