import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
