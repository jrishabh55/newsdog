import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'ngx-flash-messages';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopnavComponent} from './components/navbar/topnav/topnav.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {LoginComponent} from './components/admins/login/login.component';
import {RegistrationComponent} from './components/admins/registration/registration.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {AuthService} from './services/auth.service';
import {DashboardService} from './services/dashboard.service';
import {ProfileComponent} from './components/admins/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NAV_DROPDOWN_DIRECTIVES} from './directives/nav-dropdown.directive';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './directives/sidebar-toggler.directive';
import {SidebarComponent} from './components/navbar/sidebar/sidebar.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {NewsComponent} from './components/news/news.component';
import {AsideMenuTogglerDirective} from './directives/aside-menu-toggler.directive';
import {Contract} from './api/Contract';
import {UsersComponent} from './components/users/users.component';
import {NewsListComponent} from './components/news/news-list/news-list.component';
import {TinymceComponent} from './components/tinymce/tinymce.component';
import {FileInputDirective} from './directives/file-input.directive';
import {RequiredFileInputDirective} from './directives/required-file-input.directive';
import {AddCategoryComponent} from './components/news/add-category/add-category.component';
import {NewsEditComponent} from './components/news/news-edit/news-edit.component';
import {ExcerptPipe} from './pipes/excerpt.pipe';
import {TagComponent} from './components/news/tag/tag.component';
import {environment} from '../environments/environment';
import * as firebase from 'firebase';
import { DecryptPipe } from './pipes/decrypt.pipe';
import { NewsFetchComponent } from './components/news/fetch/news-fetch.component';
import { WithdrawalRequestComponent } from './components/withdrawal-request/withdrawal-request.component';
import { ParseObjectPipe } from './pipes/parse-object.pipe';
import { NotificationComponent } from './components/notification/notification.component';
import { AddDomainsComponent } from './components/add-domains/add-domains.component';

firebase.initializeApp(environment.firebaseConfig);

  @NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TopnavComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    NewsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    SidebarComponent,
    AsideMenuTogglerDirective,
    UsersComponent,
    NewsListComponent,
    TinymceComponent,
    FileInputDirective,
    RequiredFileInputDirective,
    AddCategoryComponent,
    NewsEditComponent,
    ExcerptPipe,
    TagComponent,
    DecryptPipe,
    NewsFetchComponent,
    WithdrawalRequestComponent,
    ParseObjectPipe,
    NotificationComponent,
    AddDomainsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [AuthGuard, AuthService, Contract, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
