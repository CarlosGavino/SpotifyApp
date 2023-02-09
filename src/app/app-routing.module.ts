import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/page/home-page/home-page.component';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() =>import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:() =>import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [SessionGuard]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
