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
import {LoginComponent} from './components/users/login/login.component';
import {RegistrationComponent} from './components/users/registration/registration.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {AuthService} from './services/auth.service';
import {DashboardService} from './services/dashboard.service';
import {ProfileComponent} from './components/users/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NAV_DROPDOWN_DIRECTIVES} from './directives/nav-dropdown.directive';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './directives/sidebar-toggler.directive';
import {SidebarComponent} from './components/navbar/sidebar/sidebar.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {NewsComponent} from './components/news/news.component';
import {AsideMenuTogglerDirective} from './directives/aside-menu-toggler.directive';
import {Contract} from './api/Contract';

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
