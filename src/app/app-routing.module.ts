import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
// import { LoginComponent } from './login/login.component';
import { GeneralHomeComponent } from './general-home/general-home/general-home.component';


const routes: Routes = [
  {
    path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule), canActivate: [AuthGuard]
  },

  {
    path: '', component: GeneralHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
