webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
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
    Contract_1 = Contract;
    Contract.prototype.get = function (url, options) {
        if (options) {
            if (options.headers) {
                Contract_1.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                Contract_1.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            Contract_1.authHeader(options.headers);
        }
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    Contract.prototype.post = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options) {
            if (options.headers) {
                Contract_1.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                Contract_1.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            Contract_1.authHeader(options.headers);
        }
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    Contract.prototype.patch = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options) {
            if (options.headers) {
                Contract_1.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                Contract_1.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            Contract_1.authHeader(options.headers);
        }
        return this.http.patch(url, body, options).map(function (res) { return res.json(); });
    };
    Contract.prototype.put = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options) {
            if (options.headers) {
                Contract_1.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                Contract_1.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            Contract_1.authHeader(options.headers);
        }
        return this.http.put(url, body, options).map(function (res) { return res.json(); });
    };
    Contract.prototype.del = function (url, options) {
        if (options) {
            if (options.headers) {
                Contract_1.authHeader(options.headers);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
                Contract_1.authHeader(options.headers);
            }
        }
        else {
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]()
            };
            Contract_1.authHeader(options.headers);
        }
        return this.http.delete(url, options).map(function (res) { return res.json(); });
    };
    Contract.authHeader = function (headers) {
        headers.append('Accept', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token') || '');
    };
    Contract.prototype.buildUrl = function (url) {
        if (this.host.length <= 1) {
            return "/api/v1/admin/" + url;
        }
        return this.protocol + "://" + this.host + ":" + this.port + "/api/v1/admin/" + url;
    };
    Contract = Contract_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], Contract);
    return Contract;
    var Contract_1, _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_news_add_category_add_category_component__ = __webpack_require__("../../../../../src/app/components/news/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_news_news_edit_news_edit_component__ = __webpack_require__("../../../../../src/app/components/news/news-edit/news-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_news_tag_tag_component__ = __webpack_require__("../../../../../src/app/components/news/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_news_fetch_news_fetch_component__ = __webpack_require__("../../../../../src/app/components/news/fetch/news-fetch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_withdrawal_request_withdrawal_request_component__ = __webpack_require__("../../../../../src/app/components/withdrawal-request/withdrawal-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
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
    { path: 'notification', component: __WEBPACK_IMPORTED_MODULE_15__components_notification_notification_component__["a" /* NotificationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]], pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_8__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]], pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]], pathMatch: 'full' },
    { path: 'withdraw', component: __WEBPACK_IMPORTED_MODULE_14__components_withdrawal_request_withdrawal_request_component__["a" /* WithdrawalRequestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]], pathMatch: 'full' },
    {
        path: 'news',
        children: [
            { path: '', redirectTo: 'news/add', pathMatch: 'full' },
            { path: 'fetch', component: __WEBPACK_IMPORTED_MODULE_13__components_news_fetch_news_fetch_component__["a" /* NewsFetchComponent */], pathMatch: 'full' },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_2__components_news_news_component__["a" /* NewsComponent */], pathMatch: 'full' },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_11__components_news_news_edit_news_edit_component__["a" /* NewsEditComponent */], pathMatch: 'full' },
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_9__components_news_news_list_news_list_component__["a" /* NewsListComponent */], pathMatch: 'full' },
            { path: 'category', component: __WEBPACK_IMPORTED_MODULE_10__components_news_add_category_add_category_component__["a" /* AddCategoryComponent */], pathMatch: 'full' },
            { path: 'tag', component: __WEBPACK_IMPORTED_MODULE_12__components_news_tag_tag_component__["a" /* TagComponent */], pathMatch: 'full' }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'jnex';
        this.disabled = false;
        this.status = { isopen: false };
    }
    AppComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn()) {
            var OneSignal = window['OneSignal'] || [];
            OneSignal.push(['init', {
                    appId: '22015133-3cd8-4c27-b374-f5b7f6e35c6b',
                    autoRegister: false,
                    httpPermissionRequest: {
                        enable: true
                    },
                    notifyButton: {
                        enable: true /* Set to false to hide */
                    }
                }]);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_file_input_directive__ = __webpack_require__("../../../../../src/app/directives/file-input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_required_file_input_directive__ = __webpack_require__("../../../../../src/app/directives/required-file-input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_news_add_category_add_category_component__ = __webpack_require__("../../../../../src/app/components/news/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_news_news_edit_news_edit_component__ = __webpack_require__("../../../../../src/app/components/news/news-edit/news-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_excerpt_pipe__ = __webpack_require__("../../../../../src/app/pipes/excerpt.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_news_tag_tag_component__ = __webpack_require__("../../../../../src/app/components/news/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_decrypt_pipe__ = __webpack_require__("../../../../../src/app/pipes/decrypt.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_news_fetch_news_fetch_component__ = __webpack_require__("../../../../../src/app/components/news/fetch/news-fetch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_withdrawal_request_withdrawal_request_component__ = __webpack_require__("../../../../../src/app/components/withdrawal-request/withdrawal-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_parse_object_pipe__ = __webpack_require__("../../../../../src/app/pipes/parse-object.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































__WEBPACK_IMPORTED_MODULE_34_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_33__environments_environment__["a" /* environment */].firebaseConfig);
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
                __WEBPACK_IMPORTED_MODULE_27__directives_file_input_directive__["a" /* FileInputDirective */],
                __WEBPACK_IMPORTED_MODULE_28__directives_required_file_input_directive__["a" /* RequiredFileInputDirective */],
                __WEBPACK_IMPORTED_MODULE_29__components_news_add_category_add_category_component__["a" /* AddCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_news_news_edit_news_edit_component__["a" /* NewsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_excerpt_pipe__["a" /* ExcerptPipe */],
                __WEBPACK_IMPORTED_MODULE_32__components_news_tag_tag_component__["a" /* TagComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_decrypt_pipe__["a" /* DecryptPipe */],
                __WEBPACK_IMPORTED_MODULE_36__components_news_fetch_news_fetch_component__["a" /* NewsFetchComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_withdrawal_request_withdrawal_request_component__["a" /* WithdrawalRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pipes_parse_object_pipe__["a" /* ParseObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_39__components_notification_notification_component__["a" /* NotificationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
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

module.exports = "<div class=\"row animated fadeIn\">\r\n  <div class=\"col-md-4 col-sm-11\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"icon-note\"></i> Login\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <form (submit)=\"loginFormSubmit(form.value)\" [formGroup]=\"form\">\r\n          <fieldset class=\"form-group\">\r\n            <label>Username</label>\r\n            <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n              <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" formControlName=\"username\"/>\r\n            </div>\r\n            <small class=\"text-danger pull-right\" *ngIf=\"loginError.username\">{{ loginError.username}}</small>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"from-group\">\r\n            <label>Password</label>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" formControlName=\"password\" />\r\n            </div>\r\n            <small class=\"text-danger pull-right\" *ngIf=\"loginError.password\">{{ loginError.password}}</small>\r\n          </fieldset>\r\n\r\n          <div class=\"form-group\">\r\n            <button class=\"btn btn-primary pull-right\" name=\"submit\" [disabled]=\"!form.valid\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div></div>\r\n\r\n</div>\r\n"

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
                _this.router.navigate(['/dashboard']);
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
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(30)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
            ]))
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-login',
            template: __webpack_require__("../../../../../src/app/components/admins/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admins/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
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

module.exports = "<div class=\"col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-4\">\r\n  <div class=\"card animated fadeIn\">\r\n    <div class=\"card-header\"><i class=\"icon-note\"></i>Registration</div>\r\n    <div class=\"card-block\">\r\n      <form [formGroup]=\"form\" (submit)=\"registerFormSubmit(form.value)\">\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Name</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input class=\"form-control\" name=\"name\" placeholder=\"Name\" formControlName=\"name\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Username</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input class=\"form-control\" name=\"username\" placeholder=\"Username\" formControlName=\"username\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Password</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\"\r\n                   formControlName=\"password\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label>Email</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-male\"></i>\r\n            </span>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\"/>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset>\r\n          <div class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" name=\"submit\" [disabled]=\"!form.valid\">Register</button>\r\n          </div>\r\n        </fieldset>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

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
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3)
            ])),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(30)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email
            ])),
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-registration',
            template: __webpack_require__("../../../../../src/app/components/admins/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admins/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
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

module.exports = "<div class=\"animated fadeIn\" *ngIf=\"data !== null\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block p-1 clearfix\">\r\n          <i class=\"fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left\"></i>\r\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Clients</div>\r\n          <div class=\"h5 text-right\">{{ data.users.count }}</div>\r\n        </div>\r\n        <div class=\"card-footer px-1 py-h\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/users']\" href=\"javascript:void();\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block p-1 clearfix\">\r\n          <i class=\"fa fa-laptop bg-info p-1 font-2xl mr-1 float-left\"></i>\r\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">News</div>\r\n          <div class=\"h5 text-right\">{{ data.news.count }}</div>\r\n        </div>\r\n        <div class=\"card-footer px-1 py-h\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/news/list']\" href=\"javascript:void()\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block p-1 clearfix\">\r\n          <i class=\"fa fa-moon-o bg-warning p-1 font-2xl mr-1 float-left\"></i>\r\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Categories</div>\r\n          <div class=\"h5 text-right\">{{ data.news.categoryCount }}</div>\r\n        </div>\r\n        <div class=\"card-footer px-1 py-h\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/news/category']\" href=\"javascript:void()\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n\r\n    <div class=\"col-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block p-1 clearfix\">\r\n          <i class=\"fa fa-bell bg-danger p-1 font-2xl mr-1 float-left\"></i>\r\n          <div class=\"text-uppercase text-muted font-weight-bold font-xs text-right mb-0 mt-h\">Tags</div>\r\n          <div class=\"h5 text-right\">{{ data.news.tagCount }}</div>\r\n        </div>\r\n        <div class=\"card-footer px-1 py-h\">\r\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/news/tag']\" href=\"javascript:void()\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-inverse card-header-info\">\r\n          <div class=\"font-weight-bold\">\r\n            <span>Withdrawal Requests</span>\r\n            <span class=\"float-right\">10</span>\r\n          </div>\r\n          <div>\r\n            <span>\r\n              <small>{{ date }}</small>\r\n            </span>\r\n            <span class=\"float-right\">\r\n              <small>+432,50 (15,78%)</small>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block py-1 px-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col-5\">\r\n              <strong>+$780,98</strong>\r\n              <br>\r\n              <span class=\"text-muted\">\r\n                <small>Weekly change</small>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-7 p-0\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block py-0 px-2 b-t-1\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 b-r-1 py-1\">\r\n              <div class=\"font-weight-bold\">9.127</div>\r\n              <div class=\"text-muted\">\r\n                <small>Deals</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6 py-1 text-right\">\r\n              <div class=\"font-weight-bold\">$189.783,87</div>\r\n              <div class=\"text-muted\">\r\n                <small>Total Income</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <h3 class=\"card-title clearfix mb-0\">Latest Users</h3>\r\n            </div>\r\n\r\n          </div>\r\n          <hr class=\"m-0\">\r\n          <br>\r\n          <table class=\"table table-hover table-outline mb-0\">\r\n            <thead class=\"thead-default\">\r\n              <tr>\r\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\r\n                <th>User</th>\r\n                <th class=\"text-center\">Credits</th>\r\n                <th>Usage</th>\r\n                <th class=\"text-center\">Withdrwal Requests</th>\r\n                <th>Activity</th>\r\n                <th class=\"text-center\">Satisfaction</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of data.users.list\">\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img [src]=\"'https://www.gravatar.com/avatar/'\" class=\"img-avatar\" [alt]=\"user.email\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"text-capitalize\">{{ user.name }}</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span>| Registered: {{ user.created_at }}\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  {{ user.credits }}\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>{{ user.credits }}</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\"></small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  0\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">News read</div>\r\n                  <strong>10</strong>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <div class=\"gaugejs-wrap sparkline\" style=\"width:34px;height:34px\">\r\n                    <canvas id=\"gauge-1\" width=\"34\" height=\"34\"></canvas>\r\n                    <span class=\"value\">100%</span>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n"

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
        this.data = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date = new Date(Date.now()).toLocaleString();
        this.dashboardService.getData().subscribe(function (response) {
            _this.data = response.data.dashboard;
            console.log(_this.data);
        });
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

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\" *ngIf=\"authService.loggedIn()\">&#9776;</button>\n  <a class=\"navbar-brand\" routerLink=\"/\"></a>\n  <ul class=\"nav navbar-nav hidden-md-down\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\n    </li>\n  </ul>\n\n<ul class=\"nav navbar-nav ml-auto\" *ngIf=\"authService.loggedIn()\">\n  <li class=\"nav-item dropdown\" [ngClass]=\"{show: show}\">\n    <a class=\"nav-link avatar\" data-toggle=\"dropdown\" (click)=\"adminDrop($event)\" href=\"javascript:void(0)\"  role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <img src=\"/assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-right\">\n      <a class=\"dropdown-item\" routerLink=\"/admin/profile\"><i class=\"fa fa-user\"></i> Profile</a>\n      <div class=\"divider\"></div>\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"userLogout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </div>\n  </li>\n</ul>\n\n</header>\n"

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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\" *ngIf=\"authService.loggedIn()\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n          <i class=\"icon-speedometer\"></i> Dashboard\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/notification']\">\n          <i class=\"icon-speedometer\"></i> Notifications\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news/list']\">\n          <i class=\"icon-speedometer\"></i> News\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news/category']\">\n          <i class=\"icon-speedometer\"></i> Add Category\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news/fetch']\">\n          <i class=\"icon-speedometer\"></i> Fetch News\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news/tag']\">\n          <i class=\"icon-speedometer\"></i> Add Tags\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/news/add']\">\n          <i class=\"icon-speedometer\"></i> Add News\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/users']\">\n          <i class=\"icon-speedometer\"></i> Users\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/withdraw']\">\n          <i class=\"icon-speedometer\"></i> Withdrawal Requests\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/register']\">\n          <i class=\"icon-speedometer\"></i> Register\n          <span class=\"badge badge-info\">NEW</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], TopnavComponent);
    return TopnavComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=topnav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/add-category/add-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon-note\"></i> Add Category\n      </div>\n      <div class=\"card-block\">\n        <div class=\"alert alert-success\" *ngIf=\"created === true\">Category Added</div>\n        <div class=\"alert alert-danger\" *ngIf=\"created === false\">Failed</div>\n        <form (submit)=\"create(form.value)\" [formGroup]=\"form\">\n          <fieldset class=\"form-group\">\n            <label>Category Name</label>\n            <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"fa fa-male\"></i>\n            </span>\n              <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Category Name\" formControlName=\"name\"/>\n            </div>\n          </fieldset>\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary pull-right\" name=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon icon-notebook\"></i>Categories\n      </div>\n      <div class=\"card-block\">\n        <table class=\"table table-striped table-bordered\">\n          <thead>\n          <tr>\n            <th>#id</th>\n            <th>name</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let cat of categories\">\n            <td>{{ cat._id }}</td>\n            <td>{{ cat.name }}</td>\n            <td><a href=\"javascript:void(0)\" (click)=\"deleteCategory(cat._id)\"><i class=\"icon fa fa-remove\"></i></a></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/news/add-category/add-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/add-category/add-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(api) {
        this.api = api;
        this.categories = [];
        this.result = null;
        this.created = null;
    }
    AddCategoryComponent_1 = AddCategoryComponent;
    AddCategoryComponent.sort = function (a, b) {
        return b._id - a._id;
    };
    AddCategoryComponent.prototype.create = function (category) {
        var _this = this;
        var url = this.api.buildUrl('/news/category/add');
        this.api.post(url, category).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.created = true;
                _this.categories.unshift(response.data.category);
            }
            else {
                _this.created = false;
            }
        });
    };
    AddCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        var url = this.api.buildUrl('news/category/delete');
        this.api.post(url, { id: id }).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.categories.every(function (val, index) {
                    if (val._id === id) {
                        _this.categories.splice(index, 1);
                        return false;
                    }
                    return true;
                });
            }
            else {
                _this.result = false;
            }
        });
    };
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.validate();
    };
    AddCategoryComponent.prototype.getCategories = function () {
        var _this = this;
        var url = this.api.buildUrl('news/categories');
        this.api.get(url).subscribe(function (response) {
            if (response.status = 'ok') {
                _this.result = true;
                _this.categories = response.data.categories;
                _this.categories.sort(AddCategoryComponent_1.sort);
            }
            else {
                _this.result = false;
            }
        });
    };
    AddCategoryComponent.prototype.validate = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)
            ]))
        });
    };
    AddCategoryComponent = AddCategoryComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-add-category',
            template: __webpack_require__("../../../../../src/app/components/news/add-category/add-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/add-category/add-category.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], AddCategoryComponent);
    return AddCategoryComponent;
    var AddCategoryComponent_1, _a;
}());

//# sourceMappingURL=add-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/fetch/news-fetch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/fetch/news-fetch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\"><i class=\"icon-note\"></i> Fetch</div>\n      <div class=\"card-block\">\n        <div class=\"alert alert-success\" *ngIf=\"created === true\">News Update Successful</div>\n        <div class=\"alert alert-danger\" *ngIf=\"created === false\">{{ error }}</div>\n\n        <form id=\"fetchNewsForm\" (submit)=\"fetchNews(fetchNewsForm.value)\" [formGroup]=\"fetchNewsForm\">\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">URL</span>\n              <input class=\"form-control\" name=\"url\" placeholder=\"News url\" formControlName=\"url\"/>\n              <span class=\"input-group-addon\"><i class=\"fa fa-wordpress\"></i> </span>\n            </div>\n          </fieldset>\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Type</span>\n              <!-- <label class=\"radio-inline\"> ID\n                <input type=\"radio\" name=\"type\" value=\"id\" formControlName=\"type\" />\n              </label> -->\n              <label class=\"radio-inline\"> Slug\n                <input type=\"radio\" name=\"type\" value=\"slug\" formControlName=\"type\" value=\"slug\" />\n              </label>\n            </div>\n          </fieldset>\n        </form>\n        <div class=\"card-footer\">\n          <button class=\"btn btn-primary btn-sm pull-right\" form=\"fetchNewsForm\" type=\"submit\" [disabled]=\"!fetchNewsForm.valid\">Add\n            News\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\" *ngIf=\"res !== null && added === false\">\n      <div class=\"card-header\"><i class=\"icon-note\"></i>News Data</div>\n      <div class=\"card-block\">\n        <table class=\"table table-dashed\">\n          <thead>\n          <tr>\n            <th>Fields</th>\n            <th>Values</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th>Title</th>\n            <th>{{ res.title.rendered}}</th>\n          </tr>\n          <tr>\n            <td>Date</td>\n            <td>{{ res.date }}</td>\n          </tr>\n          <tr>\n            <td>Slug</td>\n            <td>{{ res.slug }}</td>\n          </tr>\n          <tr>\n            <td>Link</td>\n            <td>{{ res.link }}</td>\n          </tr>\n          <tr>\n            <td>Content</td>\n            <td innerHTML=\"{{ res.content.rendered }}\"></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-primary btn-sm pull-right\" (click)=\"addNews()\">Add</button>\n      </div>\n    </div>\n    <jnex-news [news]=\"news\" *ngIf=\"added\"></jnex-news>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon-book\"></i>\n      </div>\n      <div class=\"card-block\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/news/fetch/news-fetch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFetchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsFetchComponent = /** @class */ (function () {
    function NewsFetchComponent(http) {
        this.http = http;
        this.added = false;
        this.res = null;
    }
    NewsFetchComponent.prototype.convertUri = function (url, type) {
        var part;
        var protocol;
        if (url.substr(0, 7) === 'http://') {
            part = url.substr(7);
            protocol = 'http://';
        }
        else if (url.substr(0, 8) === 'https://') {
            part = url.substr(8);
            protocol = 'https://';
        }
        else {
            protocol = 'http://';
            part = url;
        }
        var parts = part.split('/');
        var domain = parts[0];
        var slug = parts[parts.length - 1] === '' ? parts[parts.length - 2] : parts[parts.length - 1];
        var apiUrl = '';
        if (type === 'slug') {
            apiUrl = "" + protocol + domain + "/wp-json/wp/v2/posts?slug=" + slug;
        }
        else {
            apiUrl = '';
        }
        return apiUrl;
    };
    NewsFetchComponent.prototype.fetchNews = function (data) {
        var _this = this;
        if (data.type === null) {
            console.log('Not Selected');
            return;
        }
        var url = this.convertUri(data.url, data.type);
        this.res = null;
        this.added = false;
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.res = res[0];
        });
    };
    NewsFetchComponent.prototype.addNews = function () {
        this.news = { title: this.res.title.rendered, desc: this.res.content.rendered, date: this.res.date };
        this.added = true;
    };
    NewsFetchComponent.prototype.ngOnInit = function () {
        this.fetchNewsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            url: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
            ])),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
        });
    };
    NewsFetchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-fetch',
            template: __webpack_require__("../../../../../src/app/components/news/fetch/news-fetch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/fetch/news-fetch.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
    ], NewsFetchComponent);
    return NewsFetchComponent;
    var _a;
}());

//# sourceMappingURL=news-fetch.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/news-edit/news-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\" *ngIf=\"news\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon-note\"></i>\n        Create News\n      </div>\n      <div class=\"card-block\">\n        <div class=\"alert alert-success\" *ngIf=\"created === true\">News Update Successful</div>\n        <div class=\"alert alert-danger\" *ngIf=\"created === false\">{{ error }}</div>\n\n        <form id=\"newsForm\" (submit)=\"updateNews(newsForm.value)\" [formGroup]=\"newsForm\">\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Title</span>\n              <input class=\"form-control\" name=\"title\" placeholder=\"News Title\" formControlName=\"title\"/>\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Author</span>\n              <input class=\"form-control\" name=\"author\" placeholder=\"Author\" formControlName=\"author\"/>\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Credits</span>\n              <input class=\"form-control\" name=\"credits\" placeholder=\"News Title\" formControlName=\"credits\"/>\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Category</span>\n              <select class=\"form-control\" name=\"category\" (change)=\"selectCategory($event.target.value)\">\n                <option *ngFor=\"let opt of categories\" [value]=\"opt._id\" [selected]=\"opt._id === category\">{{ opt.name\n                  }}\n                </option>\n              </select>\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\n            </div>\n          </fieldset>\n\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Tags</span>\n              <select class=\"form-control\" name=\"tags\" (change)=\"selectTags($event.target.options)\" multiple>\n                <option *ngFor=\"let tag of tags\" [value]=\"tag._id\" [selected]=\"checkSelectedTags(tag._id)\">{{ tag.name }}</option>\n              </select>\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i></span>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">News Data</span>\n              <jnex-tinymce [elementId]=\"'desc'\" [data]=\"news === null ? '' : news.desc\"\n                            (onEditorKeyUp)=\"content($event)\"></jnex-tinymce>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Thumbnail 1</span>\n              <input type=\"file\" name=\"thumb1\" class=\"form-control\" formControlName=\"thumb1\"\n                     accept=\"image/png, image/jpg, image/jpeg, image/gif\"/>\n              <span class=\"input-group-addon col-sm-2\">\n                <img [src]=\"news.thumbnail.url1\" *ngIf=\"news && news.thumbnail && news.thumbnail.url1\" width=\"100%\" height=\"100%\"  />\n              </span>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Thumbnail 2</span>\n              <input type=\"file\" name=\"thumb2\" class=\"form-control\" formControlName=\"thumb2\"\n                     accept=\"image/png, image/jpg, image/jpeg, image/gif\"/>\n              <span class=\"input-group-addon col-sm-2\">\n                <img [src]=\"news.thumbnail.url2\" *ngIf=\"news && news.thumbnail && news.thumbnail.url2\" width=\"100%\" height=\"100%\"  />\n              </span>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon col-sm-3\">Thumbnail 3</span>\n              <input type=\"file\" name=\"thumb3\" class=\"form-control\" formControlName=\"thumb3\"\n                     accept=\"image/png, image/jpg, image/jpeg, image/gif\"/>\n              <span class=\"input-group-addon col-sm-2\">\n                <img [src]=\"news.thumbnail.url3\" *ngIf=\"news && news.thumbnail && news.thumbnail.url3\" width=\"100%\" height=\"100%\" />\n              </span>\n            </div>\n          </fieldset>\n\n        </form>\n        <div class=\"card-footer\">\n          <button class=\"btn btn-primary pull-right\" form=\"newsForm\" type=\"submit\" [disabled]=\"!newsForm.valid\">Add\n            News\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/news/news-edit/news-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news-edit/news-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsEditComponent = /** @class */ (function () {
    function NewsEditComponent(api, route) {
        this.api = api;
        this.route = route;
        this.category = 1;
        this.news = null;
        this.result = false;
        this.created = null;
        this.tags = [];
    }
    NewsEditComponent.prototype.checkSelectedTags = function (id) {
        var rt = false;
        this.news.tags.forEach(function (tag) {
            if (+tag === id) {
                rt = true;
            }
        });
        return rt;
    };
    NewsEditComponent.prototype.selectCategory = function (id) {
        this.newsForm.patchValue({ category: id });
    };
    NewsEditComponent.prototype.selectTags = function (options) {
        var tags = Array.apply(null, options).filter(function (option) { return option.selected; });
        tags = tags.map(function (tag) { return tag.value; });
        console.log(tags);
        this.newsForm.patchValue({ tags: tags });
    };
    NewsEditComponent.prototype.content = function (e) {
        this.newsForm.patchValue({ 'desc': e });
    };
    NewsEditComponent.prototype.uploadImage = function (file, callback) {
        var fileRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('/test/' + file.name);
        fileRef.put(file)
            .then(callback)
            .catch(function (error) { return console.log(error); });
    };
    NewsEditComponent.prototype.updateNews = function (news) {
        var _this = this;
        if (news.thumb2 !== '') {
            if (news.thumb3 === '') {
                this.created = false;
                this.error = 'Invalid Style. Please add the third image.';
                window.scrollTo(0, 0);
                return;
            }
        }
        if (news.thumb3 !== '') {
            if (news.thumb2 === '') {
                this.created = false;
                this.error = 'Invalid Style. Please add the third image.';
                window.scrollTo(0, 0);
                return;
            }
        }
        var upload = new Promise(function (resolve, reject) {
            if (news.thumb1 !== '' && typeof news.thumb1 !== 'string') {
                console.log('upload 1');
                _this.uploadImage(news.thumb1[0], function (snap1) {
                    console.log('upload complete');
                    news.thumb1 = snap1.downloadURL;
                    if (news.thumb2 !== '' && typeof news.thumb2 !== 'string') {
                        console.log('upload 2');
                        _this.uploadImage(news.thumb2[0], function (snap2) {
                            console.log('upload complete');
                            news.thumb2 = snap2.downloadURL;
                            console.log('upload 3');
                            if (typeof news.thumb3 !== 'string') {
                                _this.uploadImage(news.thumb3[0], function (snap3) {
                                    console.log('upload complete');
                                    news.thumb3 = snap3.downloadURL;
                                    resolve();
                                });
                            }
                        });
                    }
                    else {
                        resolve();
                    }
                });
            }
            else {
                resolve();
            }
        });
        upload.then(function () {
            var url = _this.api.buildUrl("news/" + _this.news._id + "/view");
            _this.api.post(url, news).subscribe(function (response) {
                if (response.status = 'ok') {
                    _this.created = true;
                }
                else {
                    _this.created = false;
                    _this.error = response.error;
                }
                window.scrollTo(0, 0);
            });
        });
    };
    NewsEditComponent.prototype.validation = function () {
        this.newsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10)
            ])),
            desc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(1),
            ])),
            thumb1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([])),
            thumb2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([])),
            thumb3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([])),
            credits: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('1', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(1)
            ])),
            author: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('Admin', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ])),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('0'),
            tags: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](0)
        });
    };
    NewsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var newsUrl = _this.api.buildUrl("news/" + params.id + "/view");
            _this.api.get(newsUrl).subscribe(function (response) {
                if (response.status = 'ok') {
                    _this.news = response.data.news;
                    _this.category = _this.news.category;
                    if (_this.news.thumbnail !== undefined || _this.news.thumbnail !== null) {
                        _this.news.thumbnail = {
                            url1: ''
                        };
                    }
                    _this.newsForm.setValue({
                        title: _this.news.title,
                        desc: _this.news.desc,
                        author: _this.news.author,
                        category: _this.news.category,
                        tags: _this.news.tags,
                        credits: _this.news.credits,
                        thumb1: _this.news.thumbnail.url1 || '',
                        thumb2: _this.news.thumbnail.url2 || '',
                        thumb3: _this.news.thumbnail.url3 || '',
                    }, { onlySelf: true });
                }
                else {
                    _this.error = response.error;
                }
            });
        });
        var url = this.api.buildUrl('news/categories');
        this.api.get(url).subscribe(function (response) {
            _this.categories = response.data.categories;
        });
        var url2 = this.api.buildUrl('/news/tags');
        this.api.get(url2).subscribe(function (response) {
            _this.tags = response.data.tags;
        });
        this.validation();
    };
    NewsEditComponent.prototype.ngOnDestroy = function () {
        this.result = false;
        this.created = null;
    };
    NewsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-news-edit',
            template: __webpack_require__("../../../../../src/app/components/news/news-edit/news-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/news-edit/news-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], NewsEditComponent);
    return NewsEditComponent;
    var _a, _b;
}());

//# sourceMappingURL=news-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/news-list/news-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\">\n  <div class=\"col-sm-11\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon-note\"></i>News List\n      </div>\n      <div class=\"card-block\">\n        <table class=\"table table-bordered table-striped\" *ngIf=\"result === true; else loading\">\n          <thead>\n          <tr>\n            <th>Thumbnail</th>\n            <th>Title</th>\n            <th>Category</th>\n            <th>Author</th>\n            <th>Description</th>\n            <th>Credits</th>\n            <th>Time</th>\n            <th>(Favs, Votes)</th>\n            <th>Meta</th>\n          </tr>\n          </thead>\n          <tbody class=\"animated fadeIn\" *ngIf=\"newses && newses.length > 0; else noItems\">\n          <tr *ngFor=\"let news of newses\">\n            <td>\n              <img class=\"avatar\" *ngIf=\"news.thumbnail && news.thumbnail.url1\" src=\"{{ news.thumbnail.url1 }}\" />\n              <img class=\"avatar\" *ngIf=\"news.thumbnail && news.thumbnail.url2\" src=\"{{ news.thumbnail.url2 }}\" />\n              <img class=\"avatar\" *ngIf=\"news.thumbnail && news.thumbnail.url3\" src=\"{{ news.thumbnail.url3 }}\" />\n            </td>\n            <td>{{ news.title }}</td>\n            <td>{{ news.category }}</td>\n            <td>{{ news.author }}</td>\n            <td>{{ news.desc | excerpt }}</td>\n            <td>{{ news.credits }}</td>\n            <td>{{ news.time }}</td>\n            <td>{{ news.meta.favs }}, {{ news.meta.votes }}</td>\n            <td>\n              <a [href]=\"'/news/'+news._id+'/edit'\">\n                <i class=\"fa fa-edit\"></i>\n              </a>\n              <a (click)=\"deleteNews(news._id)\" href=\"javascript:void()\" style=\"color: red;\">\n                <i class=\"fa fa-remove\"></i>\n              </a>\n            </td>\n          </tr>\n          </tbody>\n          <tfoot></tfoot>\n        </table>\n        <ng-template #loading>\n          <p>Loading...</p>\n        </ng-template>\n        <ng-template #noItems>\n          <caption>No News Items</caption>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
            _this.newses = response.data.newses;
            _this.result = true;
        });
    };
    NewsListComponent.prototype.deleteNews = function (id) {
        var _this = this;
        var url = this.api.buildUrl("news/" + id);
        //NOTE Not Tested
        this.api.del(url).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.newses.every(function (val, index) {
                    if (val._id === id) {
                        _this.newses.splice(index, 1);
                        return false;
                    }
                    return true;
                });
            }
            else {
                _this.error = response.error;
            }
        });
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.result = null;
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

module.exports = "<div class=\"row animated fadeIn\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"icon-note\"></i>\r\n        Create News\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"alert alert-success\" *ngIf=\"created === true\">News Added</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"created === false\">{{ error }}</div>\r\n\r\n        <form id=\"newsForm\" (submit)=\"createNews(newsForm.value)\" [formGroup]=\"newsForm\">\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Title</span>\r\n              <input class=\"form-control\" name=\"title\" placeholder=\"News Title\" formControlName=\"title\"/>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Author</span>\r\n              <input class=\"form-control\" name=\"author\" placeholder=\"Author\" formControlName=\"author\"/>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Credits</span>\r\n              <input class=\"form-control\" name=\"credits\" placeholder=\"News Title\" formControlName=\"credits\"/>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Category</span>\r\n              <select class=\"form-control\" name=\"category\" (change)=\"selectCategory($event.target.value)\">\r\n                <option *ngFor=\"let opt of categories\" [value]=\"opt._id\">{{ opt.name }}</option>\r\n              </select>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i> </span>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Tags</span>\r\n              <select class=\"form-control\" name=\"category\" (change)=\"selectTags($event.target.options)\" multiple>\r\n                <option *ngFor=\"let tag of tags\" [value]=\"tag._id\">{{ tag.name }}</option>\r\n              </select>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-male\"></i></span>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">News Data</span>\r\n              <jnex-tinymce [elementId]=\"'desc'\" [data]=\"news ? news.desc : ''\" (onEditorKeyUp)=\"content($event)\"></jnex-tinymce>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Thumbnail 3</span>\r\n              <input type=\"file\" name=\"thumb1\" class=\"form-control\" formControlName=\"thumb1\" accept=\"image/png, image/jpg, image/jpeg, image/gif\"/>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Thumbnail 3</span>\r\n              <input type=\"file\" name=\"thumb2\" class=\"form-control\" formControlName=\"thumb2\" accept=\"image/png, image/jpg, image/jpeg, image/gif\"/>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Thumbnail 3</span>\r\n              <input type=\"file\" name=\"thumb3\" class=\"form-control\" formControlName=\"thumb3\" accept=\"image/png, image/jpg, image/jpeg, image/gif\"/>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon col-sm-3\">Send notifications</span>\r\n              <div class=\"form-control\">                \r\n                <label class=\"switch switch-3d switch-primary pull-right\">\r\n                  <input type=\"checkbox\" class=\"switch-input\" [checked]=\"notification\">\r\n                  <span class=\"switch-label\"></span>\r\n                  <span class=\"switch-handle\"></span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n\r\n        </form>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn-primary pull-right\" form=\"newsForm\" type=\"submit\">Add\r\n            News\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_Contract__ = __webpack_require__("../../../../../src/app/api/Contract.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    function NewsComponent(api) {
        this.api = api;
        this.result = false;
        this.tags = [];
        this.created = null;
        this.notification = true;
    }
    NewsComponent.prototype.selectCategory = function (id) {
        this.newsForm.patchValue({ category: id });
    };
    NewsComponent.prototype.selectTags = function (options) {
        var tags = Array.apply(null, options).filter(function (option) { return option.selected; });
        tags = tags.map(function (tag) { return tag.value; });
        this.newsForm.patchValue({ tags: tags });
    };
    NewsComponent.prototype.content = function (e) {
        this.newsForm.patchValue({ 'desc': e });
    };
    NewsComponent.prototype.uploadImage = function (file, callback) {
        var fileRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child('/test/' + file.name);
        fileRef.put(file)
            .then(callback)
            .catch(function (error) { return console.log(error); });
    };
    NewsComponent.prototype.createNews = function (news) {
        var _this = this;
        if (news.thumb2 !== '') {
            if (news.thumb3 === '') {
                this.created = false;
                this.error = 'Invalid Style. Please add the third image.';
                window.scrollTo(0, 0);
                return;
            }
        }
        if (news.thumb3 !== '') {
            if (news.thumb2 === '') {
                this.created = false;
                this.error = 'Invalid Style. Please add the third image.';
                window.scrollTo(0, 0);
                return;
            }
        }
        var upload = new Promise(function (resolve, reject) {
            if (news.thumb1 !== '') {
                console.log('upload 1');
                _this.uploadImage(news.thumb1[0], function (snap1) {
                    console.log('upload complete');
                    news.thumb1 = snap1.downloadURL;
                    if (news.thumb2 !== '') {
                        console.log('upload 2');
                        _this.uploadImage(news.thumb2[0], function (snap2) {
                            console.log('upload complete');
                            news.thumb2 = snap2.downloadURL;
                            console.log('upload 3');
                            _this.uploadImage(news.thumb3[0], function (snap3) {
                                console.log('upload complete');
                                news.thumb3 = snap3.downloadURL;
                                resolve();
                            });
                        });
                    }
                    else {
                        resolve();
                    }
                });
            }
            else {
                resolve();
            }
        });
        upload.then(function () {
            var url = _this.api.buildUrl('news/add');
            news.notification = _this.notification;
            _this.api.post(url, news).subscribe(function (response) {
                if (response.status === 'ok') {
                    _this.created = true;
                }
                else {
                    _this.created = false;
                    _this.error = response.error;
                }
                window.scrollTo(0, 0);
            });
        });
    };
    NewsComponent.prototype.validation = function () {
        this.newsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10)
            ])),
            desc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(1),
            ])),
            thumb1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([])),
            thumb2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([])),
            thumb3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([])),
            credits: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('10', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(1)
            ])),
            author: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('Admin', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ])),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            tags: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
        });
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url1 = this.api.buildUrl('/news/categories');
        this.api.get(url1).subscribe(function (response) {
            _this.categories = response.data.categories;
            _this.newsForm.patchValue({ category: _this.categories[0]._id });
        });
        var url2 = this.api.buildUrl('/news/tags');
        this.api.get(url2).subscribe(function (response) {
            _this.tags = response.data.tags;
        });
        this.validation();
        if (this.news !== null) {
            this.newsForm.patchValue({
                title: this.news.title,
                desc: this.news.desc
            });
        }
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.result = false;
        this.created = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('news'),
        __metadata("design:type", Object)
    ], NewsComponent.prototype, "news", void 0);
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-news',
            template: __webpack_require__("../../../../../src/app/components/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], NewsComponent);
    return NewsComponent;
    var _a;
}());

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/tag/tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon-note\"></i> Add Tags\n      </div>\n      <div class=\"card-block\">\n        <div class=\"alert alert-success\" *ngIf=\"created === true\">Tag Added</div>\n        <div class=\"alert alert-danger\" *ngIf=\"created === false\">Failed</div>\n        <form (submit)=\"create(form.value)\" [formGroup]=\"form\">\n          <fieldset class=\"form-group\">\n            <label>Tag Name</label>\n            <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"fa fa-male\"></i>\n            </span>\n              <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Tag Name\" formControlName=\"name\"/>\n            </div>\n          </fieldset>\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary pull-right\" name=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon icon-notebook\"></i>Tags\n      </div>\n      <div class=\"card-block\">\n        <table class=\"table table-striped table-bordered\">\n          <thead>\n          <tr>\n            <th>#id</th>\n            <th>name</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let tag of tags\">\n            <td>{{ tag._id }}</td>\n            <td>{{ tag.name }}</td>\n            <td><a href=\"javascript:void(0)\" (click)=\"deleteTag(tag._id)\"><i class=\"icon fa fa-remove\"></i></a></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/news/tag/tag.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/tag/tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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



var TagComponent = /** @class */ (function () {
    function TagComponent(api) {
        this.api = api;
        this.tags = [];
        this.result = null;
        this.created = null;
    }
    TagComponent.prototype.create = function (tag) {
        var _this = this;
        var url = this.api.buildUrl('/news/tag/add');
        this.api.post(url, tag).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.created = true;
                _this.tags.unshift(response.data.tag);
            }
            else {
                _this.created = false;
            }
        });
    };
    TagComponent.prototype.deleteTag = function (id) {
        var _this = this;
        var url = this.api.buildUrl('news/tag/delete');
        this.api.post(url, { id: id }).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.tags.every(function (val, index) {
                    if (val._id === id) {
                        _this.tags.splice(index, 1);
                        return false;
                    }
                    return true;
                });
            }
            else {
            }
        });
    };
    TagComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.validate();
    };
    TagComponent.prototype.getCategories = function () {
        var _this = this;
        var url = this.api.buildUrl('news/tags');
        this.api.get(url).subscribe(function (response) {
            if (response.status = 'ok') {
                _this.result = true;
                _this.tags = response.data.tags;
                _this.tags.sort(_this.sort);
            }
            else {
                _this.result = false;
            }
        });
    };
    TagComponent.prototype.sort = function (a, b) {
        return b._id - a._id;
    };
    TagComponent.prototype.validate = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3)
            ]))
        });
    };
    TagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-tag',
            template: __webpack_require__("../../../../../src/app/components/news/tag/tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/tag/tag.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], TagComponent);
    return TagComponent;
    var _a;
}());

//# sourceMappingURL=tag.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-11\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"icon-note\"></i>Send Notifications\n      </div>\n      <div class=\"card-block\">\n        <p class=\"alert alert-danger\" *ngIf=\"error\">{{ error }}</p>\n        <p class=\"alert alert-success\" *ngIf=\"result === true\">Notification send sucessfully.</p>\n        <p class=\"alert alert-success\" *ngIf=\"result && result !== true\">{{ result }}</p>\n        <form (submit)=\"sendNotification(form.value)\" [formGroup]=\"form\">\n          <fieldset class=\"form-group\">\n            <label>Title: </label>\n            <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"fa fa-male\"></i>\n            </span>\n            <input class=\"form-control\" type=\"text\" name=\"title\" placeholder=\"Title\" formControlName=\"title\"/>\n            </div>\n          </fieldset>\n          <fieldset class=\"form-group\">\n            <label>URL: </label>\n            <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"fa fa-male\"></i>\n            </span>\n            <input class=\"form-control\" type=\"text\" name=\"url\" placeholder=\"URL to open on click\" formControlName=\"url\"/>\n            </div>\n          </fieldset>\n          <fieldset class=\"form-group\">\n            <label>Content: </label>\n            <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"fa fa-male\"></i>\n            </span>\n              <textarea class=\"form-control\" name=\"content\" placeholder=\"Content\" formControlName=\"content\">\n              </textarea>\n            </div>\n          </fieldset>\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary pull-right\" name=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(api) {
        this.api = api;
    }
    NotificationComponent.prototype.sendNotification = function (form) {
        var _this = this;
        var url = this.api.buildUrl('notification');
        this.api.put(url, form).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.result = "Notification sucessful. No. of recipents " + response.data.notification.recipients;
            }
            else {
                _this.result = false;
                _this.error = response.error;
            }
        });
    };
    NotificationComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10)
            ])),
            'url': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'),
            ])),
            'content': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(20)
            ]))
        });
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-notification',
            template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], NotificationComponent);
    return NotificationComponent;
    var _a;
}());

//# sourceMappingURL=notification.component.js.map

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
        this.data = '';
        this.onEditorKeyUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinymceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: [
                'link',
                'paste',
                'table',
                'advlist',
                'colorpicker',
                'emoticons',
                'hr',
                'image',
                'imagetools',
                'insertdatetime',
                'media',
                'autosave',
                'autoresize',
                'bbcode',
                'wordcount',
                'textcolor',
                'textpattern',
            ],
            width: 750,
            skin_url: '/assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function () {
                    editor.setContent(_this.data);
                });
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyUp.emit(content);
                });
            },
        });
    };
    TinymceComponent.prototype.ngAfterViewChecked = function () {
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "elementId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TinymceComponent.prototype, "data", void 0);
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

module.exports = "<div class=\"card animated fadeIn\" *ngIf=\"users !== undefined\">\r\n  <div class=\"card-header\">\r\n    <i class=\"icon-note\"></i> List Users\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr>\r\n        <th>Username</th>\r\n        <th>Email</th>\r\n        <th>Registered on</th>\r\n        <th>credits</th>\r\n        <th>Extra Info</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{ user.username }}</td>\r\n        <td>{{ user.email }}</td>\r\n        <td>{{ user.created_at }}</td>\r\n        <td>{{ user.credits }}</td>\r\n        <td [innerHTML]=\"user.ref | decrypt:user.key | parseObject\"></td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot></tfoot>\r\n    </table>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <!-- <ul class=\"pagination pull-right\">\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\">Prev</a>\r\n      </li>\r\n      <li class=\"page-item active\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">2</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">3</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">4</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"javascript:void(0)\">Next</a>\r\n      </li>\r\n    </ul> -->\r\n\r\n  </div>\r\n</div>\r\n"

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
            if (response.status !== 'ok') {
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

/***/ "../../../../../src/app/components/withdrawal-request/withdrawal-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/withdrawal-request/withdrawal-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-11\">\n    <div class=\"card animated fadeIn\" *ngIf=\"withdrawRequests !== undefined\">\n      <div class=\"card-header\"><i class=\"icon-note\"></i>Withdrawal Requests</div>\n      <div class=\"card-block\">\n        <table class=\"table table-dashed table-bordered\">\n          <thead>\n            <tr>\n              <td>User</td>\n              <td>Amount</td>\n              <td>Type</td>\n              <td>Requested at</td>\n              <td>Data</td>\n              <td></td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let req of withdrawRequests\">\n              <td>{{ req.user_id }}</td>\n              <td>{{ req.amount }}</td>\n              <td>{{ req.type }}</td>\n              <td>{{ req.created_at }}</td>\n              <td [innerHTML]=\"req.data | parseObject\"></td>\n              <td>\n                <a (click)=\"pay(req._id)\" style=\"color: green;\" href=\"javascript:void()\">\n                  <i class=\"fa fa-exchange\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/withdrawal-request/withdrawal-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalRequestComponent; });
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


var WithdrawalRequestComponent = /** @class */ (function () {
    function WithdrawalRequestComponent(api) {
        this.api = api;
    }
    WithdrawalRequestComponent.prototype.pay = function (id) {
        var _this = this;
        var url = this.api.buildUrl("withdraw/" + id);
        this.api.post(url).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.withdrawRequests.every(function (val, index) {
                    if (val._id === id) {
                        _this.withdrawRequests.splice(index, 1);
                        return false;
                    }
                    return true;
                });
                _this.result = true;
            }
            else {
                _this.result = false;
            }
        });
    };
    WithdrawalRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.api.buildUrl('withdraw');
        this.api.get(url).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.withdrawRequests = response.data.withdrawRequests;
            }
            else {
                _this.withdrawRequests = null;
                _this.error = response.error;
            }
        });
    };
    WithdrawalRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jnex-withdrawal-request',
            template: __webpack_require__("../../../../../src/app/components/withdrawal-request/withdrawal-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/withdrawal-request/withdrawal-request.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], WithdrawalRequestComponent);
    return WithdrawalRequestComponent;
    var _a;
}());

//# sourceMappingURL=withdrawal-request.component.js.map

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

/***/ "../../../../../src/app/directives/file-input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileInputDirective = /** @class */ (function () {
    function FileInputDirective() {
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    FileInputDirective_1 = FileInputDirective;
    FileInputDirective.prototype.writeValue = function (value) { };
    FileInputDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileInputDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    FileInputDirective = FileInputDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'input[type=file]',
            host: {
                '(change)': 'onChange($event.target.files)',
                '(blur)': 'onTouched()'
            },
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */], useExisting: FileInputDirective_1, multi: true }
            ]
        })
    ], FileInputDirective);
    return FileInputDirective;
    var FileInputDirective_1;
}());

//# sourceMappingURL=file-input.directive.js.map

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

/***/ "../../../../../src/app/directives/required-file-input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredFileInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RequiredFileInputDirective = /** @class */ (function () {
    function RequiredFileInputDirective() {
    }
    RequiredFileInputDirective_1 = RequiredFileInputDirective;
    RequiredFileInputDirective.validate = function (c) {
        return c.value == null || c.value.length === 0 ? { 'required': true } : null;
    };
    RequiredFileInputDirective.prototype.validate = function (c) {
        return RequiredFileInputDirective_1.validate(c);
    };
    RequiredFileInputDirective = RequiredFileInputDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[requiredFile]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: RequiredFileInputDirective_1, multi: true },
            ]
        })
    ], RequiredFileInputDirective);
    return RequiredFileInputDirective;
    var RequiredFileInputDirective_1;
}());

//# sourceMappingURL=required-file-input.directive.js.map

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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/decrypt.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecryptPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DecryptPipe = /** @class */ (function () {
    function DecryptPipe() {
    }
    DecryptPipe_1 = DecryptPipe;
    DecryptPipe.prototype.transform = function (value, key) {
        return DecryptPipe_1.decrypt(key, value);
    };
    DecryptPipe.decrypt = function (key, text) {
        var decipher = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].decrypt(text, key);
        return decipher.toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8);
    };
    DecryptPipe = DecryptPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'decrypt'
        })
    ], DecryptPipe);
    return DecryptPipe;
    var DecryptPipe_1;
}());

//# sourceMappingURL=decrypt.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/excerpt.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcerptPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (value, length) {
        if (length === void 0) { length = 50; }
        if (!value || !length) {
            return value;
        }
        if (value.length > length) {
            return value.substr(0, length) + '...';
        }
        return value;
    };
    ExcerptPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'excerpt'
        })
    ], ExcerptPipe);
    return ExcerptPipe;
}());

//# sourceMappingURL=excerpt.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/parse-object.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseObjectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParseObjectPipe = /** @class */ (function () {
    function ParseObjectPipe() {
    }
    ParseObjectPipe.prototype.transform = function (value, args) {
        try {
            if (typeof value === 'string') {
                value = JSON.parse(value);
                return this.parse(value);
            }
            else if (typeof value === 'object') {
                return this.parse(value);
            }
            else {
                return value;
            }
        }
        catch (e) {
            return value;
        }
    };
    ParseObjectPipe.prototype.parse = function (ret) {
        var data = '';
        for (var val in ret) {
            if (ret.hasOwnProperty(val)) {
                val = val.replace('_', ' ');
                data += "<strong class=\"text-capitalize\">" + val + ":</strong> " + ret[val] + "<br />";
            }
        }
        return data;
    };
    ParseObjectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'parseObject'
        })
    ], ParseObjectPipe);
    return ParseObjectPipe;
}());

//# sourceMappingURL=parse-object.pipe.js.map

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
    AuthService.prototype.getUser = function () {
        return this.user || JSON.parse(localStorage.getItem('user')) || null;
    };
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


var DashboardService = /** @class */ (function () {
    function DashboardService(api) {
        this.api = api;
    }
    DashboardService.prototype.getData = function () {
        var url = this.api.buildUrl('');
        return this.api.get(url);
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_Contract__["a" /* Contract */]) === "function" && _a || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBKmdWxSDc9YHs_DIp44bZOJ4AzpXT_T0w',
        authDomain: 'newsdog-1f22d.firebaseapp.com',
        databaseURL: 'https://newsdog-1f22d.firebaseio.com',
        projectId: 'newsdog-1f22d',
        storageBucket: 'gs://newsdog-1f22d.appspot.com',
        messagingSenderId: '243452281650'
    }
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