import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) },
    { path: 'not-found', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
    { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
