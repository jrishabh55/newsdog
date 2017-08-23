webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api/Contract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contract; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Contract = /** @class */ (function () {
    function Contract(http) {
        this.http = http;
        this.host = '';
        this.protocol = 'http';
        this.port = 80;
    }
    Contract.prototype.get = function (url, options) {
        if (options) {
            if (options.headers) {
                this.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                this.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            this.authHeader(options.headers);
        }
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    Contract.prototype.post = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options) {
            if (options.headers) {
                this.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                this.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            this.authHeader(options.headers);
        }
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    Contract.prototype.authHeader = function (headers) {
        // headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token') || null);
    };
    Contract.prototype.buildUrl = function (url) {
        if (this.host.length <= 1) {
            return "api/admin/" + url;
        }
        return this.protocol + "://" + this.host + ":" + this.port + "/api/admin/" + url;
    };
    Contract = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], Contract);
    return Contract;
    var _a;
}());

//# sourceMappingURL=Contract.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_news_news_component__ = __webpack_require__("../../../../../src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admins_login_login_component__ = __webpack_require__("../../../../../src/app/components/admins/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admins_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/admins/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admins_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/admins/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_news_news_list_news_list_component__ = __webpack_require__("../../../../../src/app/components/news/news-list/news-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'admin/login', component: __WEBPACK_IMPORTED_MODULE_3__components_admins_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    {
        path: 'admin',
        children: [
            { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_admins_registration_registration_component__["a" /* RegistrationComponent */], pathMatch: 'full' },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_admins_profile_profile_component__["a" /* ProfileComponent */], pathMatch: 'full' }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]],
        pathMatch: 'full'
    },
    {
        path: 'news',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_news_news_component__["a" /* NewsComponent */], pathMatch: 'full' },
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_9__components_news_news_list_news_list_component__["a" /* NewsListComponent */], pathMatch: 'full' }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_8__components_users_users_component__["a" /* UsersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<jnex-header></jnex-header>\n<div class=\"app-body\">\n  <jnex-sidebar></jnex-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <jnex-breadcrumbs></jnex-breadcrumbs>\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.conainer-fluid -->\n  </main>\n</div>\n<jnex-footer></jnex-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jnex';
        this.disabled = false;
        this.status = { isopen: false };
    }
    AppComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_topnav_topnav_component__ = __webpack_require__("../../../../../src/app/components/navbar/topnav/topnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_layout_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_layout_header_header_component__ = __webpack_require__("../../../../../src/app/components/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admins_login_login_component__ = __webpack_require__("../../../../../src/app/components/admins/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admins_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/admins/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admins_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/admins/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_sidebar_toggler_directive__ = __webpack_require__("../../../../../src/app/directives/sidebar-toggler.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_navbar_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/navbar/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_news_news_component__ = __webpack_require__("../../../../../src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_aside_menu_toggler_directive__ = __webpack_require__("../../../../../src/app/directives/aside-menu-toggler.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_news_news_list_news_list_component__ = __webpack_require__("../../../../../src/app/components/news/news-list/news-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tinymce_tinymce_component__ = __webpack_require__("../../../../../src/app/components/tinymce/tinymce.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_topnav_topnav_component__["a" /* TopnavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admins_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admins_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admins_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__directives_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_18__directives_sidebar_toggler_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_19__components_navbar_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__directives_aside_menu_toggler_directive__["a" /* AsideMenuTogglerDirective */],
                __WEBPACK_IMPORTED_MODULE_24__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_news_news_list_news_list_component__["a" /* NewsListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tinymce_tinymce_component__["a" /* TinymceComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["a" /* FlashMessagesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__api_Contract__["a" /* Contract */], __WEBPACK_IMPORTED_MODULE_14__services_dashboard_service__["a" /* DashboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admins/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admins/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <i class=\"icon-note\"></i> Login\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <form (submit)=\"loginFormSubmit(form.value)\" [formGroup]=\"form\">\r\n      <fieldset class=\"form-group\">\r\n        <label>Username</label>\r\n        <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n          <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" formControlName=\"username\"/>\r\n        </div>\r\n        <small class=\"text-danger pull-right\" *ngIf=\"loginError.username\">{{ loginError.username}}</small>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"from-group\">\r\n        <label>Password</label>\r\n        <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i></span>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" formControlName=\"password\" />\r\n        </div>\r\n        <small class=\"text-danger pull-right\" *ngIf=\"loginError.password\">{{ loginError.password}}</small>\r\n      </fieldset>\r\n\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary pull-right\" name=\"submit\" [disabled]=\"!form.valid\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admins/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(flash, authService, router) {
        this.flash = flash;
        this.authService = authService;
        this.router = router;
        this.loginError = {
            username: false,
            password: false
        };
    }
    LoginComponent.prototype.loginFormSubmit = function (user) {
        var _this = this;
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.status === 'ok') {
                _this.authService.storeUserData(data.data);
                _this.flash.show('Logged In, Redirecting ', {
                    classes: ['alert', 'alert-success'],
                    timeout: 5000
                });
                _this.router.navigate(['/admin/profile']);
            }
            else {
                _this.flash.show(data.error, {
                    classes: ['alert', 'alert-danger'],
                    timeout: 5000
                });
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']);
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(30)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            ]))
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-login',
            template: __webpack_require__("../../../../../src/app/components/admins/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admins/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admins/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admins/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <div class=\"page-header\"><h2>{{ user.name }}</h2></div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username: {{ user.username}}</li>\r\n    <li class=\"list-group-item\">Email: {{ user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admins/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.user = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loadProfile().subscribe(function (profile) {
            _this.user = profile.data;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-profile',
            template: __webpack_require__("../../../../../src/app/components/admins/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admins/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admins/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admins/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-4\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\"><i class=\"icon-note\"></i>Registration</div>\r\n    <div class=\"card-block\">\r\n      <form [formGroup]=\"form\" (submit)=\"registerFormSubmit(form.value)\">\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Name</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input class=\"form-control\" name=\"name\" placeholder=\"Name\" formControlName=\"name\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Username</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input class=\"form-control\" name=\"username\" placeholder=\"Username\" formControlName=\"username\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Password</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\"\r\n                   formControlName=\"password\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Email</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset>\r\n          <div class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" name=\"submit\" [disabled]=\"!form.valid\">Register</button>\r\n          </div>\r\n        </fieldset>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admins/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(flash, authService, router) {
        this.flash = flash;
        this.authService = authService;
        this.router = router;
        this.loginError = [];
    }
    RegistrationComponent.prototype.registerFormSubmit = function (user) {
        var _this = this;
        this.flash.show('Registering User', {
            classes: ['alert', 'alert-primary'],
            timeout: 5000
        });
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.status === 'ok') {
                _this.flash.show('Registration successful', {
                    classes: ['alert', 'alert-success'],
                    timeout: 999999,
                });
                _this.router.navigate(['/admin/login']);
            }
            else {
                _this.flash.show('Something went wrong. Please try again', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 5000,
                });
            }
        });
    };
    RegistrationComponent.prototype.error = function (error) {
        this.loginError.push(error);
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationFormValidation();
    };
    RegistrationComponent.prototype.registrationFormValidation = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)
            ])),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(30)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email
            ])),
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-registration',
            template: __webpack_require__("../../../../../src/app/components/admins/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admins/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Breadcrumb-->\r\n<ol class=\"breadcrumb\" *ngIf=\"authService.loggedIn()\">\r\n  <li class=\"breadcrumb-item active\">\r\n    <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    <span [routerLink]=\"['/dashboard']\">/ Dashboard -> (UNDER CONSTRUCTION)</span>\r\n  </li>\r\n  <!--<ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last=l ast>-->\r\n  <!--<li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title && breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last\"-->\r\n  <!--[ngClass]=\"{active: last}\">-->\r\n  <!--<a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>-->\r\n  <!--<span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{<br>eadcrumb.label.title}}</span>-->\r\n  <!--</li>-->\r\n  <!--</ng-template>-->\r\n</ol>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/breadcrumbs/breadcrumbs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(authService) {
        this.authService = authService;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        // this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        //   this.breadcrumbs = [];
        //   let currentRoute = this.route.root,
        //     url = '';
        //   do {
        //     const childrenRoutes = currentRoute.children;
        //     currentRoute = null;
        //     childrenRoutes.forEach(route => {
        //       if (route.outlet === 'primary') {
        //         const routeSnapshot = route.snapshot;
        //         url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
        //         this.breadcrumbs.push({
        //           label: route.snapshot.data,
        //           url: url
        //         });
        //         currentRoute = route;
        //       }
        //     });
        //   } while (currentRoute);
        // });
    };
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-breadcrumbs',
            template: __webpack_require__("../../../../../src/app/components/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/breadcrumbs/breadcrumbs.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a;
}());

//# sourceMappingURL=breadcrumbs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-block p-1 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left\"></i>\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Clients</div>\n          <div class=\"h5 text-right\">4.589</div>\n        </div>\n        <div class=\"card-footer px-1 py-h\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-block p-1 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-1 font-2xl mr-1 float-left\"></i>\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Deals</div>\n          <div class=\"h5 text-right\">789</div>\n        </div>\n        <div class=\"card-footer px-1 py-h\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-block p-1 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-1 font-2xl mr-1 float-left\"></i>\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Income</div>\n          <div class=\"h5 text-right\">$1.999</div>\n        </div>\n        <div class=\"card-footer px-1 py-h\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-block p-1 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-1 font-2xl mr-1 float-left\"></i>\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Account</div>\n          <div class=\"h5 text-right\">$100K</div>\n        </div>\n        <div class=\"card-footer px-1 py-h\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Traffic\n      <ul class=\"nav nav-tabs float-right\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a tab=\"\" class=\"nav-link\" data-toggle=\"tab\" href=\"#\" role=\"tab\">24h</a>\n        </li>\n        <li class=\"nav-item\">\n          <a tab=\"\" class=\"nav-link active\" data-toggle=\"tab\" href=\"#\" role=\"tab\">Days</a>\n        </li>\n        <li class=\"nav-item\">\n          <a tab=\"\" class=\"nav-link\" data-toggle=\"tab\" href=\"#\" role=\"tab\">Weeks</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <div class=\"chart-wrapper\" style=\"height:250px;margin-top:20px;\">\n        <div class=\"chart-wrapper\" style=\"height:250px;margin-top:20px;\">\n          <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n          <canvas id=\"main-chart\" height=\"250\" width=\"692\" style=\"display: block; width: 692px; height: 250px;\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer p-0\">\n      <ul>\n        <li class=\"b-r-1 py-2\">\n          <strong>17.781</strong>\n          <br>Pageviews</li>\n        <li class=\"b-r-1 py-2\">\n          <strong>9.879</strong>\n          <br>Unique Users</li>\n        <li class=\"b-r-1 py-2\">\n          <strong>00:02:58</strong>\n          <br>Avg. Visit Duration</li>\n        <li class=\"py-2\">\n          <strong>59,83%</strong>\n          <br>Bounce Rate</li>\n      </ul>\n    </div>\n  </div>\n  <!--/.card-->\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-inverse card-header-info\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n                                              <small>Today 6:43 AM</small>\n                                          </span>\n            <span class=\"float-right\">\n                                              <small>+432,50 (15,78%)</small>\n                                          </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-7 chart chart-line\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-8 chart chart-bar\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-block py-1 px-2\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <strong>+$780,98</strong>\n              <br>\n              <span class=\"text-muted\">\n                                                  <small>Weekly change</small>\n                                              </span>\n            </div>\n            <div class=\"col-7 p-0\">\n              <div class=\"chart-wrapper\">\n                <canvas class=\"chart-9 chart chart-bar float-right\" height=\"44\" width=\"130\" style=\"margin-top: -7px; display: block;\"></canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block py-0 px-2 b-t-1\">\n          <div class=\"row\">\n            <div class=\"col-6 b-r-1 py-1\">\n              <div class=\"font-weight-bold\">9.127</div>\n              <div class=\"text-muted\">\n                <small>Deals</small>\n              </div>\n            </div>\n            <div class=\"col-6 py-1 text-right\">\n              <div class=\"font-weight-bold\">$189.783,87</div>\n              <div class=\"text-muted\">\n                <small>Total Income</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-inverse card-header-success\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n                                              <small>Today 6:43 AM</small>\n                                          </span>\n            <span class=\"float-right\">\n                                              <small>+432,50 (15,78%)</small>\n                                          </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-7-2 chart chart-line\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-8-2 chart chart-bar\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-block py-1 px-2\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <strong>+$780,98</strong>\n              <br>\n              <span class=\"text-muted\">\n                                                  <small>Weekly change</small>\n                                              </span>\n            </div>\n            <div class=\"col-7 p-0\">\n              <div class=\"chart-wrapper\">\n                <canvas class=\"chart-9-2 chart chart-bar float-right\" height=\"44\" width=\"130\" style=\"margin-top: -7px; display: block;\"></canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block py-0 px-2 b-t-1\">\n          <div class=\"row\">\n            <div class=\"col-6 b-r-1 py-1\">\n              <div class=\"font-weight-bold\">9.127</div>\n              <div class=\"text-muted\">\n                <small>Deals</small>\n              </div>\n            </div>\n            <div class=\"col-6 py-1 text-right\">\n              <div class=\"font-weight-bold\">$189.783,87</div>\n              <div class=\"text-muted\">\n                <small>Total Income</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-inverse card-header-warning\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n                                              <small>Today 6:43 AM</small>\n                                          </span>\n            <span class=\"float-right\">\n                                              <small>+432,50 (15,78%)</small>\n                                          </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-7-3 chart chart-line\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-8-3 chart chart-bar\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-block py-1 px-2\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <strong>+$780,98</strong>\n              <br>\n              <span class=\"text-muted\">\n                                                  <small>Weekly change</small>\n                                              </span>\n            </div>\n            <div class=\"col-7 p-0\">\n              <div class=\"chart-wrapper\">\n                <canvas class=\"chart-9-3 chart chart-bar float-right\" height=\"44\" width=\"130\" style=\"margin-top: -7px; display: block;\"></canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block py-0 px-2 b-t-1\">\n          <div class=\"row\">\n            <div class=\"col-6 b-r-1 py-1\">\n              <div class=\"font-weight-bold\">9.127</div>\n              <div class=\"text-muted\">\n                <small>Deals</small>\n              </div>\n            </div>\n            <div class=\"col-6 py-1 text-right\">\n              <div class=\"font-weight-bold\">$189.783,87</div>\n              <div class=\"text-muted\">\n                <small>Total Income</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-inverse card-header-danger\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n                                              <small>Today 6:43 AM</small>\n                                          </span>\n            <span class=\"float-right\">\n                                              <small>+432,50 (15,78%)</small>\n                                          </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-7-4 chart chart-line\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px\">\n            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n            <canvas class=\"chart-8-4 chart chart-bar\" height=\"38\" width=\"121\" style=\"display: block; width: 121px; height: 38px;\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-block py-1 px-2\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <strong>+$780,98</strong>\n              <br>\n              <span class=\"text-muted\">\n                                                  <small>Weekly change</small>\n                                              </span>\n            </div>\n            <div class=\"col-7 p-0\">\n              <div class=\"chart-wrapper\">\n                <canvas class=\"chart-9-4 chart chart-bar float-right\" height=\"44\" width=\"130\" style=\"margin-top: -7px; display: block;\"></canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block py-0 px-2 b-t-1\">\n          <div class=\"row\">\n            <div class=\"col-6 b-r-1 py-1\">\n              <div class=\"font-weight-bold\">9.127</div>\n              <div class=\"text-muted\">\n                <small>Deals</small>\n              </div>\n            </div>\n            <div class=\"col-6 py-1 text-right\">\n              <div class=\"font-weight-bold\">$189.783,87</div>\n              <div class=\"text-muted\">\n                <small>Total Income</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <h3 class=\"card-title clearfix mb-0\">Traffic &amp; Sales</h3>\n            </div>\n            <div class=\"col-sm-7\">\n              <button type=\"button\" class=\"btn btn-outline-primary float-right ml-1\"><i class=\"icon-cloud-download\"></i> &nbsp; Download</button>\n              <fieldset class=\"form-group float-right\">\n                <div class=\"input-group float-right\" style=\"width:240px;\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i>\n                                                      </span>\n                  <input name=\"daterange\" class=\"form-control date-picker\" type=\"text\">\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <hr class=\"m-0\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-info\">\n                    <small class=\"text-muted\">New Clients</small>\n                    <br>\n                    <strong class=\"h4\">9,123</strong>\n                    <div class=\"chart-wrapper\">\n                      <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                      <canvas id=\"sparkline-chart-1\" width=\"100\" height=\"30\" style=\"display: block;\"></canvas>\n                    </div>\n                  </div>\n                </div>\n                <!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-danger\">\n                    <small class=\"text-muted\">Recuring Clients</small>\n                    <br>\n                    <strong class=\"h4\">22,643</strong>\n                    <div class=\"chart-wrapper\">\n                      <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                      <canvas id=\"sparkline-chart-2\" width=\"100\" height=\"30\" style=\"display: block;\"></canvas>\n                    </div>\n                  </div>\n                </div>\n                <!--/.col-->\n              </div>\n              <!--/.row-->\n              <hr class=\"mt-0\">\n              <ul class=\"horizontal-bars\">\n                <li>\n                  <div class=\"title\">\n                    Monday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"title\">\n                    Tuesday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"title\">\n                    Wednesday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"title\">\n                    Thursday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"title\">\n                    Friday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"title\">\n                    Saturday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"title\">\n                    Sunday\n                  </div>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"legend\">\n                  <span class=\"badge badge-pill badge-info\"></span>\n                  <small>New clients</small>&nbsp;\n                  <span class=\"badge badge-pill badge-danger\"></span>\n                  <small>Recurring clients</small>\n                </li>\n              </ul>\n            </div>\n            <!--/.col-->\n            <div class=\"col-sm-6 col-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-warning\">\n                    <small class=\"text-muted\">Pageviews</small>\n                    <br>\n                    <strong class=\"h4\">78,623</strong>\n                    <div class=\"chart-wrapper\">\n                      <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                      <canvas id=\"sparkline-chart-3\" width=\"100\" height=\"30\" style=\"display: block;\"></canvas>\n                    </div>\n                  </div>\n                </div>\n                <!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-success\">\n                    <small class=\"text-muted\">Organic</small>\n                    <br>\n                    <strong class=\"h4\">49,123</strong>\n                    <div class=\"chart-wrapper\">\n                      <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                      <canvas id=\"sparkline-chart-4\" width=\"100\" height=\"30\" style=\"display: block;\"></canvas>\n                    </div>\n                  </div>\n                </div>\n                <!--/.col-->\n              </div>\n              <!--/.row-->\n              <hr class=\"mt-0\">\n              <ul class=\"horizontal-bars type-2\">\n                <li>\n                  <i class=\"icon-user\"></i>\n                  <span class=\"title\">Male</span>\n                  <span class=\"value\">43%</span>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-user-female\"></i>\n                  <span class=\"title\">Female</span>\n                  <span class=\"value\">37%</span>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 37%\" aria-valuenow=\"37\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <i class=\"icon-globe\"></i>\n                  <span class=\"title\">Organic Search</span>\n                  <span class=\"value\">191,235\n                                                          <span class=\"text-muted small\">(56%)</span>\n                  </span>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-social-facebook\"></i>\n                  <span class=\"title\">Facebook</span>\n                  <span class=\"value\">51,223\n                                                          <span class=\"text-muted small\">(15%)</span>\n                  </span>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-social-twitter\"></i>\n                  <span class=\"title\">Twitter</span>\n                  <span class=\"value\">37,564\n                                                          <span class=\"text-muted small\">(11%)</span>\n                  </span>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-social-linkedin\"></i>\n                  <span class=\"title\">LinkedIn</span>\n                  <span class=\"value\">27,319\n                                                          <span class=\"text-muted small\">(8%)</span>\n                  </span>\n                  <div class=\"bars\">\n                    <div class=\"progress progress-xs\">\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"divider text-center\">\n                  <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"show more\"><i class=\"icon-options\"></i>\n                  </button>\n                </li>\n              </ul>\n            </div>\n            <!--/.col-->\n            <div class=\"col-sm-6 col-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout\">\n                    <small class=\"text-muted\">CTR</small>\n                    <br>\n                    <strong class=\"h4\">23%</strong>\n                    <div class=\"chart-wrapper\">\n                      <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                      <canvas id=\"sparkline-chart-5\" width=\"100\" height=\"30\" style=\"display: block;\"></canvas>\n                    </div>\n                  </div>\n                </div>\n                <!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-primary\">\n                    <small class=\"text-muted\">Bounce Rate</small>\n                    <br>\n                    <strong class=\"h4\">5%</strong>\n                    <div class=\"chart-wrapper\">\n                      <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                      <canvas id=\"sparkline-chart-6\" width=\"100\" height=\"30\" style=\"display: block;\"></canvas>\n                    </div>\n                  </div>\n                </div>\n                <!--/.col-->\n              </div>\n              <!--/.row-->\n              <hr class=\"mt-0\">\n              <ul class=\"icons-list\">\n                <li>\n                  <i class=\"icon-screen-desktop bg-primary\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">iMac 4k</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Sold this week</div>\n                    <strong>1.924</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-screen-smartphone bg-info\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">Samsung Galaxy Edge</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Sold this week</div>\n                    <strong>1.224</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-screen-smartphone bg-warning\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">iPhone 6S</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Sold this week</div>\n                    <strong>1.163</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-user bg-danger\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">Premium accounts</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Sold this week</div>\n                    <strong>928</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-social-spotify bg-success\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">Spotify Subscriptions</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Sold this week</div>\n                    <strong>893</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-cloud-download bg-danger\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">Ebook</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Downloads</div>\n                    <strong>121.924</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li>\n                  <i class=\"icon-camera bg-warning\"></i>\n                  <div class=\"desc\">\n                    <div class=\"title\">Photos</div>\n                    <small>Lorem ipsum dolor sit amet</small>\n                  </div>\n                  <div class=\"value\">\n                    <div class=\"small text-muted\">Uploaded</div>\n                    <strong>12.125</strong>\n                  </div>\n                  <div class=\"actions\">\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"divider text-center\">\n                  <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"show more\"><i class=\"icon-options\"></i>\n                  </button>\n                </li>\n              </ul>\n            </div>\n            <!--/.col-->\n          </div>\n          <!--/.row-->\n          <br>\n          <table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\n            <thead class=\"thead-default\">\n            <tr>\n              <th class=\"text-center\"><i class=\"icon-people\"></i>\n              </th>\n              <th>User</th>\n              <th class=\"text-center\">Country</th>\n              <th>Usage</th>\n              <th class=\"text-center\">Payment Method</th>\n              <th>Activity</th>\n              <th class=\"text-center\">Satisfaction</th>\n              <th class=\"text-center\"><i class=\"icon-settings\"></i>\n              </th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td class=\"text-center\">\n                <div class=\"avatar\">\n                  <img src=\"/assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-success\"></span>\n                </div>\n              </td>\n              <td>\n                <div>Yiorgos Avraamu</div>\n                <div class=\"small text-muted\">\n                  <span>New</span>| Registered: Jan 1, 2015\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <img src=\"/assets/img/flags/USA.png\" alt=\"USA\" style=\"height:24px;\">\n              </td>\n              <td>\n                <div class=\"clearfix\">\n                  <div class=\"float-left\">\n                    <strong>50%</strong>\n                  </div>\n                  <div class=\"float-right\">\n                    <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                  </div>\n                </div>\n                <div class=\"progress progress-xs\">\n                  <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\n              </td>\n              <td>\n                <div class=\"small text-muted\">Last login</div>\n                <strong>10 sec ago</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\n                  <canvas id=\"gauge-1\" width=\"34\" height=\"34\"></canvas>\n                  <span class=\"value\">48%</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                </button>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">\n                <div class=\"avatar\">\n                  <img src=\"/assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-danger\"></span>\n                </div>\n              </td>\n              <td>\n                <div>Avram Tarasios</div>\n                <div class=\"small text-muted\">\n\n                  <span>Recurring</span>| Registered: Jan 1, 2015\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <img src=\"/assets/img/flags/Brazil.png\" alt=\"Brazil\" style=\"height:24px;\">\n              </td>\n              <td>\n                <div class=\"clearfix\">\n                  <div class=\"float-left\">\n                    <strong>10%</strong>\n                  </div>\n                  <div class=\"float-right\">\n                    <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                  </div>\n                </div>\n                <div class=\"progress progress-xs\">\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\n              </td>\n              <td>\n                <div class=\"small text-muted\">Last login</div>\n                <strong>5 minutes ago</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\n                  <canvas id=\"gauge-2\" width=\"34\" height=\"34\"></canvas>\n                  <span class=\"value\">61%</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                </button>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">\n                <div class=\"avatar\">\n                  <img src=\"/assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-warning\"></span>\n                </div>\n              </td>\n              <td>\n                <div>Quintin Ed</div>\n                <div class=\"small text-muted\">\n                  <span>New</span>| Registered: Jan 1, 2015\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <img src=\"/assets/img/flags/India.png\" alt=\"India\" style=\"height:24px;\">\n              </td>\n              <td>\n                <div class=\"clearfix\">\n                  <div class=\"float-left\">\n                    <strong>74%</strong>\n                  </div>\n                  <div class=\"float-right\">\n                    <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                  </div>\n                </div>\n                <div class=\"progress progress-xs\">\n                  <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\n              </td>\n              <td>\n                <div class=\"small text-muted\">Last login</div>\n                <strong>1 hour ago</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\n                  <canvas id=\"gauge-3\" width=\"34\" height=\"34\"></canvas>\n                  <span class=\"value\">33%</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                </button>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">\n                <div class=\"avatar\">\n                  <img src=\"/assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-default\"></span>\n                </div>\n              </td>\n              <td>\n                <div>Enéas Kwadwo</div>\n                <div class=\"small text-muted\">\n                  <span>New</span>| Registered: Jan 1, 2015\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <img src=\"/assets/img/flags/France.png\" alt=\"France\" style=\"height:24px;\">\n              </td>\n              <td>\n                <div class=\"clearfix\">\n                  <div class=\"float-left\">\n                    <strong>98%</strong>\n                  </div>\n                  <div class=\"float-right\">\n                    <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                  </div>\n                </div>\n                <div class=\"progress progress-xs\">\n                  <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\n              </td>\n              <td>\n                <div class=\"small text-muted\">Last login</div>\n                <strong>Last month</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\n                  <canvas id=\"gauge-4\" width=\"34\" height=\"34\"></canvas>\n                  <span class=\"value\">23%</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                </button>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">\n                <div class=\"avatar\">\n                  <img src=\"/assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-success\"></span>\n                </div>\n              </td>\n              <td>\n                <div>Agapetus Tadeáš</div>\n                <div class=\"small text-muted\">\n                  <span>New</span>| Registered: Jan 1, 2015\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <img src=\"/assets/img/flags/Spain.png\" alt=\"Spain\" style=\"height:24px;\">\n              </td>\n              <td>\n                <div class=\"clearfix\">\n                  <div class=\"float-left\">\n                    <strong>22%</strong>\n                  </div>\n                  <div class=\"float-right\">\n                    <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                  </div>\n                </div>\n                <div class=\"progress progress-xs\">\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\n              </td>\n              <td>\n                <div class=\"small text-muted\">Last login</div>\n                <strong>Last week</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\n                  <canvas id=\"gauge-5\" width=\"34\" height=\"34\"></canvas>\n                  <span class=\"value\">78%</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                </button>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-center\">\n                <div class=\"avatar\">\n                  <img src=\"/assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-danger\"></span>\n                </div>\n              </td>\n              <td>\n                <div>Friderik Dávid</div>\n                <div class=\"small text-muted\">\n                  <span>New</span>| Registered: Jan 1, 2015\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <img src=\"/assets/img/flags/Poland.png\" alt=\"Poland\" style=\"height:24px;\">\n              </td>\n              <td>\n                <div class=\"clearfix\">\n                  <div class=\"float-left\">\n                    <strong>43%</strong>\n                  </div>\n                  <div class=\"float-right\">\n                    <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                  </div>\n                </div>\n                <div class=\"progress progress-xs\">\n                  <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\n              </td>\n              <td>\n                <div class=\"small text-muted\">Last login</div>\n                <strong>Yesterday</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\n                  <canvas id=\"gauge-6\" width=\"34\" height=\"34\"></canvas>\n                  <span class=\"value\">11%</span>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                </button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api, dashboardService) {
        this.api = api;
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.data = this.dashboardService.getData();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer navbar-fixed-bottom\">\r\n  <a href=\"https://jnexsoft.com\">Jengular</a> &copy; 2017 Jnex Software Solutions.\r\n  <span class=\"float-right\">Powered by <a href=\"https://jnesoft.com\">Jengular</a>\r\n    </span>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-footer',
            template: __webpack_require__("../../../../../src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\" *ngIf=\"authService.loggedIn()\">&#9776;</button>\n  <a class=\"navbar-brand\" routerLink=\"/\"></a>\n  <ul class=\"nav navbar-nav hidden-md-down\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\n    </li>\n  </ul>\n\n<ul class=\"nav navbar-nav ml-auto\">\n  <li class=\"nav-item dropdown\" [ngClass]=\"{show: show}\">\n    <a class=\"nav-link avatar\" data-toggle=\"dropdown\" (click)=\"adminDrop($event)\" href=\"javascript:void(0)\"  role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <img src=\"/assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-right\">\n\n      <div class=\"dropdown-header text-center\">\n        <strong>Account</strong>\n      </div>\n\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comments<span class=\"badge badge-warning\">42</span></a>\n\n      <div class=\"dropdown-header text-center\">\n        <strong>Settings</strong>\n      </div>\n\n      <a class=\"dropdown-item\" routerLink=\"/admin/profile\"><i class=\"fa fa-user\"></i> Profile</a>\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Settings</a>\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n      <div class=\"divider\"></div>\n      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock Account</a>\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"userLogout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </div>\n  </li>\n</ul>\n\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flash, authService, router) {
        this.flash = flash;
        this.authService = authService;
        this.router = router;
        this.show = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.adminDrop = function (e) {
        e.stopPropagation();
        this.show = !this.show;
    };
    HeaderComponent.prototype.userLogout = function () {
        this.authService.logout();
        this.flash.show('Logged Out', {
            classes: ['alert', 'alert-success'],
            timeout: 5000,
        });
        this.router.navigate(['/admin/login']);
        return false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-header',
            template: __webpack_require__("../../../../../src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\" *ngIf=\"authService.loggedIn()\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['']\">\n          <i class=\"icon-speedometer\"></i> Dashboard\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news/list']\">\n          <i class=\"icon-speedometer\"></i> News\n          <span class=\"badge badge-info\">ADD NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news']\">\n          <i class=\"icon-speedometer\"></i> Add News\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/users']\">\n          <i class=\"icon-speedometer\"></i> Users\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/register']\">\n          <i class=\"icon-speedometer\"></i> Register\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-sidebar',
            template: __webpack_require__("../../../../../src/app/components/navbar/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/topnav/topnav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/navbar/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(flash, authService, router) {
        this.flash = flash;
        this.authService = authService;
        this.router = router;
        this.show = false;
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent.prototype.adminDrop = function (e) {
        e.stopPropagation();
        this.show = !this.show;
    };
    TopnavComponent.prototype.userLogout = function () {
        this.authService.logout();
        this.flash.show('Logged Out', {
            classes: ['alert', 'alert-success'],
            timeout: 5000,
        });
        this.router.navigate(['/admin/login']);
        return false;
    };
    TopnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-topnav',
            template: __webpack_require__("../../../../../src/app/components/navbar/topnav/topnav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/topnav/topnav.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], TopnavComponent);
    return TopnavComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=topnav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/news-list/news-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <i class=\"icon-note\"></i>News List\n  </div>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\" *ngIf=\"result === true; else loading\">\n      <thead>\n      <tr>\n        <th>Thumbnail</th>\n        <th>Title</th>\n        <th>Category</th>\n        <th>Author</th>\n        <th>Description</th>\n        <th>Credits</th>\n        <th>Time</th>\n        <th>(Favs, Votes)</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let news of newses\">\n        <td>\n          <img class=\"avatar\" src=\"{{ news.thumbnail.url1 }}\" />\n          <img class=\"avatar\" *ngIf=\"news.thumbnail.url2\" src=\"{{ news.thumbnail.url2 }}\" />\n          <img class=\"avatar\" *ngIf=\"news.thumbnail.url3\" src=\"{{ news.thumbnail.url3 }}\" />\n        </td>\n        <td>{{ news.title }}</td>\n        <td>{{ news.category }}</td>\n        <td>{{ news.author }}</td>\n        <td>{{ news.desc }}</td>\n        <td>{{ news.credits }}</td>\n        <td>{{ news.time }}</td>\n        <td>{{ news.meta.favs }}, {{ news.meta.votes }}</td>\n      </tr>\n      </tbody>\n      <tfoot></tfoot>\n    </table>\n    <ng-template #loading>\n      <p>Loading...</p>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/news/news-list/news-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news-list/news-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(api) {
        this.api = api;
        this.result = false;
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.api.buildUrl('news');
        this.api.get(url).subscribe(function (response) {
            _this.newses = response.data.news;
            _this.result = true;
        });
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.result = false;
    };
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-news-list',
            template: __webpack_require__("../../../../../src/app/components/news/news-list/news-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/news-list/news-list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], NewsListComponent);
    return NewsListComponent;
    var _a;
}());

//# sourceMappingURL=news-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <i class=\"icon-note\"></i>\r\n    Create News\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <form id=\"newsForm\" (submit)=\"createNews(newsForm.value)\" [formGroup]=\"newsForm\">\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Title</span>\r\n          <input class=\"form-control\" name=\"title\" placeholder=\"News Title\" formControlName=\"title\" />\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Author</span>\r\n          <input class=\"form-control\" name=\"author\" placeholder=\"Author\" formControlName=\"author\" />\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Credits</span>\r\n          <input class=\"form-control\" name=\"credits\" placeholder=\"News Title\" formControlName=\"credits\" />\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Category</span>\r\n          <select class=\"form-control\" name=\"category\" multiple>\r\n            <option *ngFor=\"let opt of categories\" value=\"opt\">{{ opt.name }}</option>\r\n          </select>\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">News Data</span>\r\n          <jnex-tinymce [elementId]=\"'desc'\" (onEditorKeyUp)=\"content()\"></jnex-tinymce>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Time</span>\r\n          <input type=\"text\" name=\"time\" class=\"form-control\" formControlName=\"time\" />\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Thumbnail 1</span>\r\n          <input type=\"file\" name=\"thumb1\" class=\"form-control\" formControlName=\"thumb1\" />\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Thumbnail 2</span>\r\n          <input type=\"file\" name=\"thumb2\" class=\"form-control\" formControlName=\"thumb2\" />\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon col-md-3\">Thumbnail 3</span>\r\n          <input type=\"file\" name=\"thumb3\" class=\"form-control\" formControlName=\"thumb3\" />\r\n        </div>\r\n      </fieldset>\r\n\r\n    </form>\r\n    <div class=\"card-footer\">\r\n      <button class=\"btn btn-primary pull-right\" form=\"newsForm\" type=\"submit\" [disabled]=\"!newsForm.valid\">Add News</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.categories = [
            { name: 'test1', id: 1 },
            { name: 'test2', id: 2 },
            { name: 'test3', id: 3 },
            { name: 'test4', id: 4 },
            { name: 'test5', id: 5 },
            { name: 'test6', id: 6 },
            { name: 'test7', id: 7 },
            { name: 'test8', id: 8 },
            { name: 'test9', id: 9 },
        ];
    }
    NewsComponent.prototype.content = function () {
        return '';
    };
    NewsComponent.prototype.createNews = function (news) {
    };
    NewsComponent.prototype.ngOnInit = function () {
        this.newsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(10)
            ])),
            desc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(100),
            ])),
            time: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('5000', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].min(100),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-9+]')
            ])),
            thumb1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            ])),
            thumb2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([])),
            thumb3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([])),
            credits: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('1', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-1+]'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].min(1)
            ])),
            author: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('Admin', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4)
            ])),
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-news',
            template: __webpack_require__("../../../../../src/app/components/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tinymce/tinymce.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea [id]=\"elementId\" class=\"form-component\"></textarea>\n"

/***/ }),

/***/ "../../../../../src/app/components/tinymce/tinymce.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tinymce/tinymce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinymceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinymceComponent = /** @class */ (function () {
    function TinymceComponent() {
        this.onEditorKeyUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinymceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table'],
            height: 500,
            width: 750,
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyUp.emit(content);
                });
            },
        });
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "elementId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "onEditorKeyUp", void 0);
    TinymceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-tinymce',
            template: __webpack_require__("../../../../../src/app/components/tinymce/tinymce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tinymce/tinymce.component.scss")]
        })
    ], TinymceComponent);
    return TinymceComponent;
}());

//# sourceMappingURL=tinymce.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <i class=\"icon-note\"></i> List Users\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr>\r\n        <th>Username</th>\r\n        <th>Email</th>\r\n        <th>Registered on</th>\r\n        <th>credits</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{ user.username }}</td>\r\n        <td>{{ user.email }}</td>\r\n        <td>{{ user.created_at }}</td>\r\n        <td>{{ user.credits }}</td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot></tfoot>\r\n    </table>\r\n    <ul class=\"pagination pull-right\">\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\">Prev</a>\r\n      </li>\r\n      <li class=\"page-item active\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">2</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">3</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">4</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">Next</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(api) {
        this.api = api;
        this.result = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.api.buildUrl('users');
        this.api.get(url).subscribe(function (response) {
            if (response.error) {
                console.log(response.error);
            }
            else {
                _this.users = response.data.users;
                _this.result = true;
            }
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.result = false;
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/aside-menu-toggler.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideMenuTogglerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideMenuTogglerDirective = /** @class */ (function () {
    function AsideMenuTogglerDirective() {
    }
    AsideMenuTogglerDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideMenuTogglerDirective.prototype, "toggleOpen", null);
    AsideMenuTogglerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.aside-menu-toggler'
        }),
        __metadata("design:paramtypes", [])
    ], AsideMenuTogglerDirective);
    return AsideMenuTogglerDirective;
}());

//# sourceMappingURL=aside-menu-toggler.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective() {
        this._open = false;
    }
    /**
     * Checks if the dropdown menu is open or not.
     */
    NavDropdownDirective.prototype.isOpen = function () {
        return this._open;
    };
    /**
     * Opens the dropdown menu.
     */
    NavDropdownDirective.prototype.open = function () {
        this._open = true;
    };
    /**
     * Closes the dropdown menu .
     */
    NavDropdownDirective.prototype.close = function () {
        this._open = false;
    };
    /**
     * Toggles the dropdown menu.
     */
    NavDropdownDirective.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NavDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.nav-dropdown'
        })
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.nav-dropdown-toggle',
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
//# sourceMappingURL=nav-dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sidebar-toggler.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SidebarTogglerDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SideBarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarTogglerDirective = /** @class */ (function () {
    function SidebarTogglerDirective() {
    }
    SidebarTogglerDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarTogglerDirective.prototype, "toggleOpen", null);
    SidebarTogglerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.sidebar-toggler'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarTogglerDirective);
    return SidebarTogglerDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.mobile-sidebar-toggler',
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

var SideBarOffCanvasCloseDirective = /** @class */ (function () {
    function SideBarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SideBarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SideBarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SideBarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SideBarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SideBarOffCanvasCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '.sidebar-close' }),
        __metadata("design:paramtypes", [])
    ], SideBarOffCanvasCloseDirective);
    return SideBarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [SideBarOffCanvasCloseDirective, MobileSidebarToggleDirective, SidebarTogglerDirective];
//# sourceMappingURL=sidebar-toggler.directive.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/admin/login']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(api) {
        this.api = api;
    }
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.api.post(this.buildAdminUrl('register'), user, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (data) {
        this.authToken = data.token;
        this.user = data.user;
        localStorage.setItem('id_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.api.post(this.buildAdminUrl('login'), user, { headers: headers });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loadProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.api.get(this.buildAdminUrl('profile'), { headers: headers });
    };
    AuthService.prototype.buildAdminUrl = function (type) {
        return this.api.buildUrl(type);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.getData = function () {
        return {};
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map