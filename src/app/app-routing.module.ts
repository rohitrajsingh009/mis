import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./before-login/before-login.module').then(m => m.BeforeLoginModule) },
  { path: 'dashboard', loadChildren: () => import('./after-login/after-login.module').then(m => m.AfterLoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
