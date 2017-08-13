import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './components/news/news.component';
import {LoginComponent} from './components/users/login/login.component';
import {RegistrationComponent} from './components/users/registration/registration.component';
import {ProfileComponent} from './components/users/profile/profile.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {
    path: 'news',
    component: NewsComponent,
    children: [],
    canActivate: [AuthGuard]
  },

  {path: 'users/login', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'users',
    children: [
      {path: '', redirectTo: 'users/login', pathMatch: 'full'},
      {path: 'register', component: RegistrationComponent, pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, pathMatch: 'full'}
    ],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
