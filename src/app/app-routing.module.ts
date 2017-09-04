import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './components/news/news.component';
import {LoginComponent} from './components/admins/login/login.component';
import {RegistrationComponent} from './components/admins/registration/registration.component';
import {ProfileComponent} from './components/admins/profile/profile.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UsersComponent} from './components/users/users.component';
import {NewsListComponent} from './components/news/news-list/news-list.component';
import {AddCategoryComponent} from './components/news/add-category/add-category.component';
import {NewsEditComponent} from './components/news/news-edit/news-edit.component';
import {TagComponent} from './components/news/tag/tag.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'admin/login', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'admin',
    children: [
      {path: '', redirectTo: 'admin/login', pathMatch: 'full'},
      {path: 'register', component: RegistrationComponent, pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, pathMatch: 'full'}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'news',
    children: [
      {path: '', redirectTo: 'news/add', pathMatch: 'full' },
      { path: 'add', component: NewsComponent, pathMatch: 'full' },
      { path: ':id/edit', component: NewsEditComponent, pathMatch: 'full' },
      { path: 'list', component: NewsListComponent, pathMatch: 'full' },
      { path: 'category', component: AddCategoryComponent, pathMatch: 'full' },
      { path: 'tag', component: TagComponent, pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
