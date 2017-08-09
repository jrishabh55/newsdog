import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AsideMenuTogglerDirective } from './directives/aside-menu-toggler.directive';
import {NAV_DROPDOWN_DIRECTIVES} from './directives/nav-dropdown.directive';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './directives/sidebar-toggler.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { SidebarComponent } from './components/navbar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    AsideMenuTogglerDirective,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
