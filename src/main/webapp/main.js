(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OBS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaurds/auth.guard */ "./src/app/gaurds/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _index_index_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.module */ "./src/app/index/index.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./no-page/no-page.component */ "./src/app/no-page/no-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_13__["NoPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _index_index_module__WEBPACK_IMPORTED_MODULE_3__["IndexModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_15__["routes"], { useHash: true }),
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"] }, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _index_index_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.router */ "./src/app/index/index.router.ts");
/* harmony import */ var _home_home_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.router */ "./src/app/home/home.router.ts");
/* harmony import */ var _no_page_no_page_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-page/no-page.router */ "./src/app/no-page/no-page.router.ts");



var routes = _home_home_router__WEBPACK_IMPORTED_MODULE_1__["HomeRoutes"].concat(_index_index_router__WEBPACK_IMPORTED_MODULE_0__["Indexroutes"], _no_page_no_page_router__WEBPACK_IMPORTED_MODULE_2__["NoPageRoute"]);


/***/ }),

/***/ "./src/app/gaurds/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/gaurds/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, routerNavigate) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isAuthenticate()) {
            this.routerNavigate.navigate(["login"]);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/gaurds/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/gaurds/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, routerNavigate) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticate()) {
            this.routerNavigate.navigate(['dashboard']);
            return false;
        }
        return true;
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/home/administrativeuser/administrativeuser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/administrativeuser/administrativeuser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Administrative Users</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n    <!-- <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> -->\r\n\r\n\r\n  </ul>\r\n</div>\r\n\r\n\r\n\r\n<!-- Button trigger modal -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\"  class=\"form-control\" [(ngModel)]=\"term1\" placeholder=\"Search Here...\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n        data-backdrop=\"static\" data-target=\"#myModal\" (click)=\"addModel(myform)\">Add</button>\r\n    </div>\r\n  </div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> Administrative Users</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n\r\n        <form form [formGroup] = \"myform\" (ngSubmit)=\"onSubmit(myform)\" autocomplete=\"on\">\r\n <div class=\"form-group\">\r\n<label for=\"email\">Email:</label>\r\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Enter Email\" name=\"email\">\r\n          <span style=\"color:red\" *ngIf = \"myform.get('email').touched && myform.get('email').invalid\">\r\n            <span *ngIf = \"myform.get('email').errors.required\">\r\n              Email is required\r\n            </span>\r\n            <span *ngIf = \"myform.get('email').errors.minlength\">\r\n                Min length  6 is required\r\n              </span>\r\n              <span *ngIf = \"myform.get('email').errors.maxlength\">\r\n                  Max length 25 is required\r\n                </span>\r\n                <span *ngIf = \"myform.get('email').errors.pattern\">\r\n                  Please provide @\r\n                </span>\r\n        \r\n        \r\n          </span>\r\n          </div>\r\n          \r\n\r\n\r\n <div class=\"form-group\">\r\n<label for=\"pwd\">Password:</label>\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" placeholder=\"Enter Password\" name=\"pswd\">\r\n          <span style=\"color:red\" *ngIf = \"myform.get('password').touched && myform.get('password').invalid\">\r\n            <span *ngIf = \"myform.get('password').errors.required\">\r\n              Password is required\r\n            </span>\r\n            <span *ngIf = \"myform.get('password').errors.minlength\">\r\n                Min length  6 is required\r\n              </span>\r\n              <span *ngIf = \"myform.get('password').errors.maxlength\">\r\n                  Max length 25 is required\r\n                </span>\r\n               \r\n        \r\n        \r\n          </span>\r\n </div>\r\n\r\n \r\n</form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createUser(myform.value)\"  data-dismiss=\"modal\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Table -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\"> \r\n    <div class=\"tile\">\r\n\r\n      <!-- <h3 class=\"tile-title\"> Administrative Users</h3> -->\r\n      <div>\r\n        <table class=\"table \">\r\n          <thead>\r\n            <tr>\r\n              <th>Email</th>\r\n              <th>Role</th>\r\n              <th>Status</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let x of adminUser | filter:term1 |paginate: { itemsPerPage: 5, currentPage: p }\">\r\n              <td>{{x.username}}</td>\r\n              <td>Admin</td>\r\n              <td *ngIf=\"x.status == 'Active'\"><span [ngClass]=\"{'status1': x.status=='Inactive', 'status2':x.status=='Active' }\" (click)=\"statusAdministrative(x)\">Disable</span></td>\r\n              <td *ngIf=\"x.status == 'Inactive'\"><span [ngClass]=\"{'status1': x.status=='Inactive', 'status2':x.status=='Active' }\" (click)=\"statusAdministrative(x)\">Enable</span></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/administrativeuser/administrativeuser.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/administrativeuser/administrativeuser.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW5pc3RyYXRpdmV1c2VyL2FkbWluaXN0cmF0aXZldXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/administrativeuser/administrativeuser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/administrativeuser/administrativeuser.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdministrativeuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrativeuserComponent", function() { return AdministrativeuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");






var AdministrativeuserComponent = /** @class */ (function () {
    function AdministrativeuserComponent(http, fb, auth, dataservice) {
        this.http = http;
        this.fb = fb;
        this.auth = auth;
        this.dataservice = dataservice;
    }
    Object.defineProperty(AdministrativeuserComponent.prototype, "f", {
        get: function () {
            return this.myform.controls;
        },
        enumerable: true,
        configurable: true
    });
    AdministrativeuserComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9]*$")]],
        });
        this.getAdminUsers();
    };
    //---------------------For Model pop-up-------------------------
    AdministrativeuserComponent.prototype.addModel = function (myform) {
        myform.reset();
    };
    AdministrativeuserComponent.prototype.getAdminUsers = function () {
        var _this = this;
        this.dataservice.getAdminUsers().subscribe(function (res) {
            _this.adminUser = res.responseDataList;
            console.log(_this.adminUser);
            //  this.admininfo= this.adminUser.responseDataList;
            //   console.log(this.admininfo);
        });
    };
    //---------------------createUser------------------------------------
    AdministrativeuserComponent.prototype.createUser = function (addForm) {
        var _this = this;
        debugger;
        addForm['role'] = "admin";
        this.dataservice.createUser(addForm).subscribe(function (data) {
            _this.createuser = data;
            _this.getAdminUsers();
        });
    };
    AdministrativeuserComponent.prototype.statusAdministrative = function (data) {
        var _this = this;
        debugger;
        var positionobj = {};
        positionobj['id'] = data.id;
        positionobj['updatedBy'] = sessionStorage.getItem('userId');
        if (data.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        positionobj['status'] = status;
        this.dataservice.registerStatus(positionobj).subscribe(function (data) {
            _this.statusData = data;
            console.log(_this.statusData);
            _this.getAdminUsers();
        });
    };
    AdministrativeuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administrativeuser',
            template: __webpack_require__(/*! ./administrativeuser.component.html */ "./src/app/home/administrativeuser/administrativeuser.component.html"),
            styles: [__webpack_require__(/*! ./administrativeuser.component.scss */ "./src/app/home/administrativeuser/administrativeuser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], AdministrativeuserComponent);
    return AdministrativeuserComponent;
}());



/***/ }),

/***/ "./src/app/home/application/application.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/application/application.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  application works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/application/application.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/application/application.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/application/application.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/application/application.component.ts ***!
  \***********************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent.prototype.ngOnInit = function () {
    };
    ApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/home/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.scss */ "./src/app/home/application/application.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/home/applicationlist/applicationlist.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/applicationlist/applicationlist.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i>Application List</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<!-- <form [formGroup]=\"empform\" class=\"form-inline\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n    <select class=\"form-control\" name=\"Cat\" required formControlName=\"positions\">\r\n        <option value=\"\" disabled selected>Position</option>\r\n        <option *ngFor=\"let emp of positionlist \" [value]=\"emp.id\">{{emp.positionName}}</option>\r\n      </select>\r\n      <!-- <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div> -\r\n\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n    <input placeholder=\"Enter Registered Date\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\" id=\"date\"\r\n        class=\"form-control\" formControlName=\"registerdate\">\r\n      <option *ngFor=\"let emp of applicationlist\"></option>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-success\" (click)=\"showData(empform.value)\">Search</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</form> -->\r\n\r\n<form class=\"form-inline\"  [formGroup]=\"empform\">\r\n\r\n    \r\n    <div class=\"form-group\" style=\"margin-left: 20px;text-align: center\">\r\n        <label ><b>Position Name:</b></label>\r\n        <select class=\"form-control\" name=\"positions\" required formControlName=\"positions\">\r\n            <option value=\"\" disabled selected>Position</option>\r\n            <option *ngFor=\"let emp of positionlist \" [value]=\"emp.id\">{{emp.positionName}}</option>\r\n          </select>\r\n          <!-- <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n        </div> -->\r\n    \r\n        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n  <div class=\"form-group\"  style=\"margin-left: 20px;text-align: center\">\r\n    <label ><b>Registration Date:</b></label>\r\n    <input placeholder=\"Enter Registered Date\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\" id=\"date\"\r\n        class=\"form-control\" formControlName=\"registerdate\">\r\n      <option *ngFor=\"let emp of applicationlist\"></option>\r\n  </div>&nbsp;&nbsp;&nbsp;\r\n  \r\n  <div class=\"form-group\"  style=\"margin-left: 20px;text-align: center\">\r\n      <button class=\"btn btn-primary\" (click)=\"showData(empform.value)\">Search</button>\r\n    </div>\r\n    \r\n</form>\r\n<br>\r\n<!-- <div class=\"col-md-3\">\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n  </div>\r\n\r\n</div> \r\n@media (min-width: 576px)\r\n.form-inline .form-control {\r\n    display: inline-block;\r\n    width: 200px;\r\n    vertical-align: middle;\r\n}-->\r\n<div class=\"tile\">\r\n  <div style=\"float:right\">\r\n    <a class=\"btn btn-info btn-sm my-0 waves-effect waves-light\"\r\n      href='http://192.168.1.137:8088/report/applications-list.xlsx' role=\"button\">\r\n      <span class=\"d-none d-lg-inline-block mr-1\" target=\"_blank\">Download As Excel</span>\r\n      <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </div>\r\n  <br><br>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <th>Application No</th>\r\n        <th>Position Code</th>\r\n        <th> Position Applied For</th>\r\n        <th>Candidate Name</th>\r\n        <th>Category</th>\r\n        <th>Date Of Birth</th>\r\n        <th>Registration Date</th>\r\n           </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let emp of applicationlist | filter:term | paginate: { itemsPerPage: 6, currentPage: p }\">\r\n        <td>{{emp.applicationNo}}</td>\r\n        <td>{{emp.possitionCode}}</td>\r\n        <td>{{emp.possitionAppliedFor}}</td>\r\n        <td>{{emp.fullName}}</td>\r\n        <td>{{emp.categoryName}}</td>\r\n        <td>{{emp.dob}}</td>\r\n        <td>{{emp.updatedDate}}</td>\r\n        <td>\r\n          <!-- <span>\r\n            <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\r\n              <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n            </span>\r\n          </span> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div>\r\n\r\n</div>\r\n<br><br>\r\n\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>"

/***/ }),

/***/ "./src/app/home/applicationlist/applicationlist.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/applicationlist/applicationlist.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 576px) {\n  .form-inline .form-control {\n    display: inline-block;\n    width: 200px;\n    vertical-align: middle; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBsaWNhdGlvbmxpc3QvRDpcXGltdGFjLXJlY3J1aXRtZW50LWdpdFxcaW10YWMtcmVjcnVpdG1lbnRcXHJlY3J1aXRtZW50LXVpL3NyY1xcYXBwXFxob21lXFxhcHBsaWNhdGlvbmxpc3RcXGFwcGxpY2F0aW9ubGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixzQkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwbGljYXRpb25saXN0L2FwcGxpY2F0aW9ubGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAuZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/applicationlist/applicationlist.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/applicationlist/applicationlist.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApplicationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationlistComponent", function() { return ApplicationlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





var ApplicationlistComponent = /** @class */ (function () {
    function ApplicationlistComponent(fb, router, dataservice) {
        this.fb = fb;
        this.router = router;
        this.dataservice = dataservice;
        this.applicationlist = [];
    }
    ApplicationlistComponent.prototype.ngOnInit = function () {
        this.getapplicationdata();
        this.getposition();
        this.empform = this.fb.group({
            'positions': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'registerdate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ApplicationlistComponent.prototype.getapplicationdata = function () {
        var _this = this;
        this.dataservice.getapplication().subscribe(function (data) {
            _this.applicationlist = data.resultData.demographicInfo;
            console.log('hello', _this.applicationlist);
        });
    };
    ApplicationlistComponent.prototype.getposition = function () {
        var _this = this;
        this.dataservice.getpositions().subscribe(function (data) {
            _this.positionlist = data.resultData;
            console.log(_this.positionlist);
        });
    };
    ApplicationlistComponent.prototype.showData = function (requestobj) {
        var _this = this;
        console.log(requestobj);
        this.dataservice.searchapplication(requestobj.registerdate, requestobj.positions).subscribe(function (data) {
            _this.applicationlist = data.resultData.demographicInfo;
            console.log(_this.applicationlist);
        });
    };
    ApplicationlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applicationlist',
            template: __webpack_require__(/*! ./applicationlist.component.html */ "./src/app/home/applicationlist/applicationlist.component.html"),
            styles: [__webpack_require__(/*! ./applicationlist.component.scss */ "./src/app/home/applicationlist/applicationlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ApplicationlistComponent);
    return ApplicationlistComponent;
}());



/***/ }),

/***/ "./src/app/home/category/category.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/category/category.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i>Category</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n      data-backdrop=\"static\" data-target=\"#myModal1\"  (click)=\"addEmployeementType(createcategory)\">Add</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <!-- <th>Id</th> -->\r\n        <th>Category Name</th>\r\n        <!-- <th>Last UpdatedBy</th> -->\r\n        <th>Updated Date</th>\r\n        <th>Updated By</th>\r\n        <th>Status</th>\r\n       \r\n        <th>Edit</th>\r\n     \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let emp of categoryList | filter:term | paginate: { itemsPerPage: 5, currentPage: p };\">\r\n        <!-- <td>{{emp.id}}</td> -->\r\n        <td>{{emp.categoryName}}</td>\r\n        <!-- <td>{{emp.lastUpdatedBy}}</td> -->\r\n        <td>{{emp.updatedDate}}</td>\r\n        <td>{{emp.email}}</td>\r\n        <td *ngIf=\"emp.status == 'Active'\"><span [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\" (click)=\"deleteSpecialEvent(emp)\">Disable</span></td>\r\n        <td *ngIf=\"emp.status == 'Inactive'\"><span [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\" (click)=\"deleteSpecialEvent(emp)\">Enable</span></td>\r\n      \r\n        <td>\r\n              <span>\r\n                  <span (click)=\"getcategeory(emp)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                    class=\"glyphicon glyphicon-pencil\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n                  </span>\r\n              </span>\r\n          <td>\r\n          <!-- <span>\r\n            <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\r\n              <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n            </span>\r\n          </span> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n\r\n<div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n      <form [formGroup]=\"createcategory\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add Category</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"createcategory.reset()\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"col-md-12\">\r\n                <input type=\"text\" placeholder=\"Enter Category Name\" formControlName=\"categoryname\" name=\"categoryname\"\r\n                  class=\"form-control\">\r\n                <span class=\"text text-danger\"\r\n                  *ngIf=\"createcategory.controls['categoryname'].invalid && createcategory.controls['categoryname'].touched\">Category\r\n                  Name Required</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\"   class=\"btn btn-primary float-right \" \r\n               id=\"register\"  [disabled]=\"createcategory.invalid\" (click)=\"saveEvent(createcategory.value)\" data-dismiss=\"modal\">Submit</button>\r\n             \r\n            </div>\r\n          </div>\r\n        </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <form [formGroup]=\"specialEventForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\"> Update Category </h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"col-md-12\">\r\n                  <input type=\"text\" placeholder=\"Enter Category Name\" formControlName=\"eventName\" name=\"eventName\"\r\n                    class=\"form-control\">\r\n                  <span class=\"text text-danger\"\r\n                    *ngIf=\"specialEventForm.controls['eventName'].invalid && specialEventForm.controls['eventName'].touched\">Category Is Required</span>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"id\" name=\"id\" hidden>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\"\r\n                  class=\"btn btn-primary float-right\" id=\"register\" (click)=\"saveEvent(specialEventForm)\"\r\n                  *ngIf=\"addfrm\">Submit</button>\r\n                <button type=\"button\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\"\r\n                  class=\"btn btn-primary float-right\" id=\"register\" (click)=\"updateEvent(specialEventForm.value)\"\r\n                  >Update</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/category/category.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/category/category.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/category/category.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/category/category.component.ts ***!
  \*****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(http, dataservice, fb) {
        this.http = http;
        this.dataservice = dataservice;
        this.fb = fb;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.categoryget();
        this.specialEventForm = this.fb.group({
            'eventName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.createcategory = this.fb.group({
            'categoryname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CategoryComponent.prototype.categoryget = function () {
        var _this = this;
        this.dataservice.getcategeorydata().subscribe(function (data) {
            _this.categoryList = data.resultData;
            console.log(_this.categoryList);
        });
    };
    CategoryComponent.prototype.getcategeory = function (emp) {
        var requestobj = {};
        requestobj['id'] = emp.id;
        requestobj['categoryName'] = emp.categoryName;
        this.specialEventForm.setValue({
            'eventName': emp.categoryName,
            'id': emp.id
        });
    };
    CategoryComponent.prototype.updateEvent = function (updatedata) {
        var _this = this;
        var anotherobj = {};
        anotherobj['id'] = updatedata.id;
        anotherobj['categoryName'] = updatedata.eventName;
        anotherobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.categoryupdate(anotherobj).subscribe(function (res) {
            _this.categoryget();
        });
    };
    CategoryComponent.prototype.deleteSpecialEvent = function (formdata) {
        var _this = this;
        var deleteobj = {};
        deleteobj['id'] = formdata.id;
        deleteobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        deleteobj['status'] = "Inactive";
        if (formdata.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        deleteobj['status'] = status;
        this.dataservice.deletcategory(deleteobj).subscribe(function (data) {
            _this.categoryget();
        });
    };
    CategoryComponent.prototype.saveEvent = function (formdata) {
        var _this = this;
        var senddata = {};
        senddata['categoryName'] = formdata.categoryname;
        senddata['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.createcategory(senddata).subscribe(function (res) {
            // this.categoryname="";
            _this.categoryget();
        });
    };
    CategoryComponent.prototype.addEmployeementType = function (createcategory) {
        createcategory.reset();
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/home/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/home/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"container\" *ngIf=\"true\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n     <div class=\"table-responsive table_style\">\r\n       <h3>Dear {{localuserdata?.candidateName}}</h3>\r\n       <div>\r\n        <h6>This are your applied positions</h6>\r\n       </div>\r\n      <table class=\"table table-bordered table2\">\r\n        <thead>\r\n          <tr>\r\n            <th>Application Id</th>\r\n            <th>Position Applied For</th>\r\n            <th>Position Code</th>\r\n            <th>Aadhar</th>\r\n            <th>Mobile Number</th>\r\n            <th>Registration End data</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let testvalue of getUserListId;let i=index;\">\r\n            <td>{{testvalue.applicationNo}}</td>\r\n            <td>{{testvalue.possitionAppliedFor}}</td>\r\n            <td>{{testvalue.possitionCode}}</td>\r\n            <td>{{testvalue.aadharNumber}}</td>\r\n            <td>{{testvalue.mobileNumber}}</td>\r\n            <td>{{testvalue.regEndDate}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  </div>\r\n </div> -->\r\n \r\n   \r\n <!-- <div class=\"container\" style=\"margin-top:10px;\" *ngIf=\"applicationid?.errorCode == 'OK' \"> -->\r\n  \r\n   <div class=\"container\" style=\"margin-top:10px;\">\r\n    <div class=\"row\">\r\n   \r\n    <!-- ------------------------------------------------------------- -->\r\n    <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n    <div class=\"card-body\">\r\n    <!-- ----------------------------------------- -->\r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n    <h5>Demographic Information:</h5><br>\r\n    <p class=\"text-left\"> Application no: {{appid}}</p>\r\n    </div>\r\n    </div>\r\n    <hr>\r\n  \r\n   \r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-4 pb-4\">\r\n          <label>Name of the Candidate<span style=\"color:red;\">*</span></label>\r\n\r\n          <p>{{ localuserdata?.candidateName}}</p>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-4 pb-4\">\r\n          <label>Mobile<span style=\"color:red;\">*</span></label>\r\n          <p>{{localuserdata?.mobileNumber}}</p>\r\n        </div>\r\n        <div class=\"col-md-4 pb-4\">\r\n          <label>Email-Id<span style=\"color:red;\">*</span></label>\r\n          <p>{{localuserdata?.username}}</p>\r\n        </div>\r\n        <div class=\"col-md-4 pb-4\">\r\n          <label>Date Of Birth<span style=\"color:red;\">*</span></label>\r\n          <p>{{localuserdata?.dob}}</p>\r\n        </div>\r\n        <div class=\"col-md-4 pb-4\">\r\n          <label>Aadhar no<span style=\"color:red;\">*</span></label>\r\n          <p>{{localuserdata?.aadharNumber}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 pb-4\">\r\n          <label>Post Applied For<span style=\"color:red;\">*</span></label>\r\n          <p>{{applicationNo?.positionName}}</p>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    <hr>\r\n   \r\n    \r\n   \r\n    <form [formGroup]=\"myform\" >\r\n   \r\n   \r\n    <br>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <!-- <label> Do you belong to SC/ST/BC/EBPG <span style=\"color:red;\">*</span></label> -->\r\n    <label> Applied Category as Per Haryana ?</label>\r\n   \r\n    <select class=\"form-control\" formControlName=\"categoryAsperHaryana\">\r\n    <option *ngFor=\"let c of Category\" [ngValue]=\"c.id\">{{c.categoryName}}</option>\r\n    </select>\r\n    <span style=\"color:red\" *ngIf=\"myform.get('category').touched && myform.get('category').invalid\">\r\n    <span *ngIf=\"myform.get('category').errors.required\">\r\n    Applied Category is required\r\n    </span>\r\n    </span>\r\n   \r\n    </div>\r\n   \r\n   \r\n    <div class=\"col-md-6\">\r\n    <label for=\"name\">Name of the candidate in Full<span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"fullName\" name=\"candidate name\"\r\n    placeholder=\"Enter your Name\">\r\n   \r\n    <span style=\"color:red\" *ngIf=\"myform.get('fullName').touched && myform.get('fullName').invalid\">\r\n    <span *ngIf=\"myform.get('fullName').errors.required\">\r\n    Name of the candidate is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n    </div>\r\n    <br>\r\n   \r\n   \r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label for=\"fatherName\">Father’s Name<span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"fatherName\" name=\"fatherName\"\r\n    placeholder=\"Enter Father’s Name\">\r\n    <span style=\"color:red\" *ngIf=\"myform.get('fatherName').touched && myform.get('fatherName').invalid\">\r\n    <span *ngIf=\"myform.get('fatherName').errors.required\">\r\n    fatherName is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    <div class=\"col-md-6 \">\r\n    <label for=\"motherName\">Mother’s Name<span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"motherName\" name=\"motherName\"\r\n    placeholder=\"Enter Mother’s Name\">\r\n    <span style=\"color:red\" *ngIf=\"myform.get('motherName').touched && myform.get('motherName').invalid\">\r\n    <span *ngIf=\"myform.get('motherName').errors.required\">\r\n    motherName is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    </div>\r\n   \r\n    <br>\r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label for=\"Domicile\">Domicile </label>\r\n    <select class=\"form-control\" formControlName=\"domicile\" name=\"domicile\" (change)=\"setStates($event)\">\r\n    <option *ngFor=\"let s of selectState\" [value]=\"s.state\">\r\n    {{s.state}}\r\n    </option>\r\n   \r\n    </select>\r\n    <span style=\"color:red\" *ngIf=\"myform.get('domicile').touched && myform.get('domicile').invalid\">\r\n    <span *ngIf=\"myform.get('domicile').errors.required\">\r\n    Domicile is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    <div class=\"col-md-6\" *ngIf=\"stateValue\">\r\n    <label>Others<span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"otherDomicileDetails\"\r\n    name=\"otherDomicileDetails\" placeholder=\"Enter State\">\r\n   \r\n    </div>\r\n   \r\n    </div>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <div class=\"col-md-6\">\r\n          <input type=\"checkbox\" (change)=\"updateAddr($event)\">&nbsp; Save as beside <br>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      \r\n    <div class=\"col-md-6\">\r\n    <strong>Present Postal Address<span style=\"color:red;\">*</span></strong><br><br>\r\n     <label>Street Address:</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"street\">\r\n    <label>Address Line 2:</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"addressline\">\r\n    <label>city:</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"city\">\r\n    <label>State:</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"state\">\r\n    <label> Postal/Zip Code:</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"postal\"><br>\r\n   \r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <strong>Permanent Address<span style=\"color:red;\">*</span></strong><br><br>\r\n        <label>Street Address:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"streetper\">\r\n        <label>Address Line 2:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"addressper\">\r\n        <label>city:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"cityper\">\r\n        <label>State:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"stateper\">\r\n        <label> Postal/Zip Code:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"postalper\">\r\n    </div>\r\n\r\n\r\n    </div>\r\n   \r\n\r\n   \r\n    <!-- ----------------------------------------- -->\r\n    <hr>\r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label> Mobile Number <span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"mobileNumber\" placeholder=\"Enter Mobile no\">\r\n    <span style=\"color:red\"\r\n    *ngIf=\"myform.get('mobileNumber').touched && myform.get('mobileNumber').invalid\">\r\n    <span *ngIf=\"myform.get('mobileNumber').errors.required\">\r\n    mobileNumber is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    <div class=\"col-md-6\">\r\n    <label>Email Address <span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email Address\" formControlName=\"email\">\r\n    <span style=\"color:red\" *ngIf=\"myform.get('email').touched && myform.get('email').invalid\">\r\n    <span *ngIf=\"myform.get('email').errors.required\">\r\n    Email Address is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n    </div>\r\n    <br>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label>Date Of Birth <span style=\"color:red;\">*</span></label>\r\n    <input type=\"date\" class=\"form-control\" placeholder=\"Date Of Birth\" formControlName=\"dob\">\r\n    <span style=\"color:red\" *ngIf=\"myform.get('dob').touched && myform.get('dob').invalid\">\r\n    <span *ngIf=\"myform.get('dob').errors.required\">\r\n    Date Of Birth is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    <div class=\"col-md-6\">\r\n    <label>Gender <span style=\"color:red;\">*</span></label>\r\n    <select class=\"form-control\" formControlName=\"gender\">\r\n    <option *ngFor=\"let g of gender\" [value]=\"g\">{{g}}</option>\r\n    </select>\r\n    <span style=\"color:red\" *ngIf=\"myform.get('gender').touched && myform.get('gender').invalid\">\r\n    <span *ngIf=\"myform.get('gender').errors.required\">\r\n    gender is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n    </div>\r\n    <br>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label> Age as on last date of applying <span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"age\" name=\"age\">\r\n    <span style=\"color:red\" *ngIf=\"myform.get('age').touched && myform.get('age').invalid\">\r\n    <span *ngIf=\"myform.get('age').errors.required\">\r\n    age is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    <div class=\"col-md-6\">\r\n    <label> Place of Birth <span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Place of Birth\" formControlName=\"PlaceofBirth\">\r\n    <span style=\"color:red\"\r\n    *ngIf=\"myform.get('PlaceofBirth').touched && myform.get('PlaceofBirth').invalid\">\r\n    <span *ngIf=\"myform.get('PlaceofBirth').errors.required\">\r\n    PlaceofBirth is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n    </div>\r\n    <br />\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label> Aadhar Number <span style=\"color:red;\">*</span></label>\r\n    <input type=\"number\" class=\"form-control\" placeholder=\"Aadhar Number\" maxlength=\"12\"\r\n    formControlName=\"AadharNumber\">\r\n    <span style=\"color:red\"\r\n    *ngIf=\"myform.get('AadharNumber').touched && myform.get('AadharNumber').invalid\">\r\n    <span *ngIf=\"myform.get('AadharNumber').errors.required\">\r\n    Aadhar Number is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n    <label>Upload Aadhar</label><br>\r\n    <input type=\"file\" class=\"form-control adharFile\" name=\"uploadaadhar\" class=\"clicked\"\r\n    formControlName=\"uploadaadhar\" (change)=\"handleFileSelect($event)\">\r\n    <img [src]=\"transform()\" style=\"width: 5%\">\r\n    <!-- <span style=\"color:red\"\r\n    *ngIf=\"myform.get('uploadAadhar').touched && myform.get('uploadAadhar').invalid\">\r\n    <span *ngIf=\"myform.get('uploadAadhar').errors.required\">\r\n    Upload Aadhar is required\r\n    </span>\r\n    </span> -->\r\n    </div>\r\n   \r\n    </div>\r\n    <br />\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n    <div class=\"row\">\r\n   \r\n    <div class=\"col-md-6\">\r\n    <label> Matrial Status <span style=\"color:red;\">*</span></label>\r\n    <select class=\"form-control\" formControlName=\"MartialStatus\" (change)=\"setNav($event)\">\r\n    <option *ngFor=\"let m of martial\" value=\"m.send\" [value]=\"m.matrial\">{{m.matrial}}</option>\r\n    </select>\r\n    <span style=\"color:red\"\r\n    *ngIf=\"myform.get('MartialStatus').touched && myform.get('MartialStatus').invalid\">\r\n    <span *ngIf=\"myform.get('MartialStatus').errors.required\">\r\n    MartialStatus is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n   \r\n    <br><br>\r\n    <div class=\"col-md-6\">\r\n    <label> Nationality <span style=\"color:red;\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Nationality\" formControlName=\"Nationality\">\r\n    <span style=\"color:red\" *ngIf=\"myform.get('Nationality').touched && myform.get('Nationality').invalid\">\r\n    <span *ngIf=\"myform.get('Nationality').errors.required\">\r\n    Nationality is required\r\n    </span>\r\n    </span>\r\n    </div>\r\n    <div class=\"col-md-4\" *ngIf=\"maritialValue\">\r\n    <br/>\r\n    <label>whether you have more than one living spouse ?</label>\r\n    <label class=\"radio-inline1 mart8\">\r\n    <input type=\"radio\" formControlName=\"moreLivingSpouses\" name=\"moreLivingSpouses\" [value]=\"true\" checked>Yes\r\n    </label>\r\n   \r\n    <label class=\"radio-inline1\">\r\n    <input type=\"radio\" formControlName=\"moreLivingSpouses\" name=\"moreLivingSpouses\" [value]=\"false\">No\r\n    </label>\r\n    <br />\r\n    </div>\r\n   \r\n    </div>\r\n    <br>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n   \r\n   \r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    <label>Under Which Category you are applying for ?</label>\r\n    <!-- <label> Do you belong to SC/ST/BC/EBPG <span style=\"color:red;\">*</span></label> -->\r\n    <select class=\"form-control\" formControlName=\"category\">\r\n    <option *ngFor=\"let c of Category\" [ngValue]=\"c.id\">{{c.categoryName}}</option>\r\n    </select>\r\n    <span style=\"color:red\" *ngIf=\"myform.get('category').touched && myform.get('category').invalid\">\r\n    <span *ngIf=\"myform.get('category').errors.required\">\r\n    category is required\r\n    </span>\r\n    </span>\r\n   \r\n    </div>\r\n    </div>\r\n   \r\n   \r\n    <br />\r\n   \r\n    <!-- ----------------------------------------- -->\r\n    <p>Ex-Servicemen of Haryana</p>\r\n\r\n    <div class=\"row hariyana1\">\r\n    <div class=\"col-md-4\">\r\n    <label class=\"radio-inline1 mart8\">\r\n    <input type=\"radio\" formControlName=\"Exservices\" name=\"Exservices\" [value]=\"true\"\r\n    (click)=\"setradio('true')\" [checked]=\"options\">Yes\r\n    </label>\r\n   \r\n    <label class=\"radio-inline1\">\r\n    <input type=\"radio\" formControlName=\"Exservices\" name=\"Exservices\" [value]=\"false\"\r\n    (click)=\"setradio('false')\" [checked]=\"!options\">No\r\n    </label>\r\n    <br/>\r\n    </div>\r\n   \r\n   \r\n   \r\n    <div class=\"col-md-8\">\r\n        <div *ngIf=\"isSelected('true')\">\r\n    <label>Upload Exservice</label><br>\r\n    <input type=\"file\" class=\"form-control adharFile\" name=\"exService\" class=\"clicked\"\r\n    formControlName=\"exService\" (change)=\"exservice($event)\">\r\n    <img [src]=\"exserviceimg()\" style=\"width:5%\">\r\n    </div>\r\n    </div>\r\n   \r\n   \r\n    <!-- <div *ngIf=\"options\">\r\n    <div class=\"col-md-8\">\r\n    <label>Upload Exservice</label><br>\r\n    <input type=\"file\" class=\"form-control adharFile\" name=\"upload Exservice\" class=\"clicked\"\r\n    formControlName=\"exService\" (change)=\"exservice($event)\">\r\n    <img [src]=\"exserviceimg()\" style=\"width: 18%\">\r\n    </div>\r\n    </div> -->\r\n   \r\n    <div *ngIf=\"!options\">\r\n   \r\n    </div>\r\n    </div>\r\n\r\n    <br/>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n    &nbsp;&nbsp;&nbsp;<button type=\"submit\" *ngIf=\"save\" class=\"btn btn-primary roundedbutton\" (click)=\"saveDemographic()\" ><strong>Save &\r\n    Continue</strong></button>\r\n    &nbsp;&nbsp;&nbsp;<button type=\"submit\"  *ngIf=\"update\"  class=\"btn btn-primary roundedbutton\" (click)=\"updateDemographic()\" ><strong>Update & Continue</strong></button>\r\n    </div>\r\n  \r\n    </div>\r\n   \r\n    <!-- ----------------------------------------- -->\r\n   \r\n    </form>\r\n   \r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n   </div>\r\n   \r\n   <!-- <h1 class=\"samplefooter\"></h1> -->"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #8e8c8c;\n  font-size: 14px; }\n\n.container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto; }\n\nli.details_blk {\n  font-size: 14px;\n  padding: 0px; }\n\na {\n  color: black; }\n\n/* body {\r\n    background: #efefef\r\n} */\n\n.badge-light {\n  font-size: 20px;\n  border: 1px solid #32BB50;\n  border-radius: 50%;\n  padding: 6px;\n  width: 35px;\n  text-align: center;\n  height: 35px; }\n\n.list_anchor {\n  padding: 12px 8px;\n  display: block;\n  border-bottom: 1px solid #e3e3e3;\n  background: #f5efef;\n  transition-duration: 0.6s; }\n\n.list_anchor:hover {\n  text-decoration: none;\n  background: #ffffff; }\n\n.list_anchor:hover .badge-light {\n  background: green;\n  color: #fff; }\n\ninput[type=text] {\n  background-color: #FAFAFA; }\n\n/* .form-control {\r\n\r\n    background-color: #FAFAFA;\r\n    border: 1px solid #ecebeb;\r\n} */\n\nbt {\n  background-color: #62CDBE; }\n\n.samplefooter {\n  height: 20px;\n  background-image: linear-gradient(to left, #B10403, #EE2509); }\n\n.attachment {\n  color: white;\n  background-color: grey;\n  padding: 1px;\n  border-radius: 1px;\n  vertical-align: center; }\n\n.navbar > .container {\n  margin-top: -15px; }\n\ninput[type=radio] {\n  border: 10px;\n  width: 35%;\n  height: 18px;\n  position: relative;\n  color: #7b29ff;\n  top: 4px; }\n\nh4 {\n  font-size: 16px; }\n\n.line3 .col-md-6 {\n  padding-bottom: 10px; }\n\n/*Radio box*/\n\n/* input[type=\"radio\"] + .label-text:before{\r\ncontent: \"\\f111\";\r\nfont-family: \"Font Awesome 5 Free\";\r\nspeak: none;\r\nfont-style: normal;\r\nfont-variant: normal;\r\ntext-transform: none;\r\nline-height: 1;\r\n-webkit-font-smoothing:antialiased;\r\nwidth: 1em;\r\ndisplay: inline-block;\r\nmargin-right: 5px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + .label-text:before{\r\ncontent: \"\\f192\";\r\ncolor: #8e44ad;\r\nanimation: effect 250ms ease-in;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled + .label-text{\r\ncolor: #aaa;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled + .label-text:before{\r\ncontent: \"\\f111\";\r\ncolor: #ccc;\r\n} \r\n\r\n/*Radio Toggle*/\n\n/* .toggle input[type=\"radio\"] + .label-text:before{\r\ncontent: \"\\f204\";\r\nfont-family: \"Font Awesome 5 Free\";\r\nspeak: none;\r\nfont-style: normal;\r\nfont-weight: 900;\r\nfont-variant: normal;\r\ntext-transform: none;\r\nline-height: 1;\r\n-webkit-font-smoothing:antialiased;\r\nwidth: 1em;\r\ndisplay: inline-block;\r\nmargin-right: 10px;\r\n}\r\n\r\n.toggle input[type=\"radio\"]:checked + .label-text:before{\r\ncontent: \"\\f205\";\r\ncolor: #16a085;\r\nanimation: effect 250ms ease-in;\r\n}\r\n\r\n.toggle input[type=\"radio\"]:disabled + .label-text{\r\ncolor: #aaa;\r\n}\r\n*/\n\n.toggle input[type=\"radio\"]:disabled + .label-text:before {\n  content: \"\\f204\";\n  color: #ec1414; }\n\n/* @keyframes effect{\r\n0%{transform: scale(0);}\r\n25%{transform: scale(1.3);}\r\n75%{transform: scale(1.4);}\r\n100%{transform: scale(1);}\r\n} */\n\n.adharFile {\n  padding-top: 5px; }\n\n.radio-inline {\n  width: 18%; }\n\n.mart8 {\n  margin-top: 8px; }\n\n.radio-inline1 {\n  width: 21%; }\n\n.radio-inline1 input {\n  position: relative;\n  top: 4px;\n  left: -5px; }\n\n.hariyana1 {\n  padding-left: 10px; }\n\n.table2 {\n  background-color: white; }\n\n.table2 thead {\n  background-color: #007080;\n  color: white;\n  box-shadow: inset 0 0 2px 0 rgba(255, 255, 255, 0.4), inset 0 0 3px 0 rgba(0, 0, 0, 0.4), inset 0 0 3px 5px rgba(0, 0, 0, 0.05), 2px 2px 4px 0 rgba(0, 0, 0, 0.25); }\n\n.table_style {\n  background-color: white;\n  padding: 10px; }\n\n.table_style h3 {\n  padding-top: 10px; }\n\n.table_style p {\n  padding-bottom: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQvRDpcXGltdGFjLXJlY3J1aXRtZW50LWdpdFxcaW10YWMtcmVjcnVpdG1lbnRcXHJlY3J1aXRtZW50LXVpL3NyY1xcYXBwXFxob21lXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCOztHQ0ZHOztBRE1IO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QixFQUFBOztBQUc3Qjs7OztHQ05HOztBRFlIO0VBQ0kseUJBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQVk7RUFDWiw0REFBNEQsRUFBQTs7QUFHaEU7RUFDSSxZQUFZO0VBQ1osc0JBQXFCO0VBRXJCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRLEVBQUE7O0FBRVo7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBRUksb0JBQW1CLEVBQUE7O0FBR3ZCLFlBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDU2U7O0FEc0JmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NHQzs7QUR1QkQ7RUFDQSxnQkFBZ0I7RUFDaEIsY0FBdUIsRUFBQTs7QUFJdkI7Ozs7O0dDbkJHOztBRDBCSDtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUVPLFVBQVUsRUFBQTs7QUFHakI7RUFFRSxlQUFjLEVBQUE7O0FBR2hCO0VBRUksVUFBVSxFQUFBOztBQUdkO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVLEVBQUE7O0FBR2Q7RUFFSSxrQkFBaUIsRUFBQTs7QUFFckI7RUFFSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFFSSx5QkFBeUI7RUFDekIsWUFBVztFQUNYLGtLQUk2QixFQUFBOztBQUdqQztFQUVJLHVCQUF1QjtFQUN2QixhQUFZLEVBQUE7O0FBRWhCO0VBRUksaUJBQWdCLEVBQUE7O0FBRXBCO0VBRUksb0JBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBjb2xvcjogIzhlOGM4YztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxufVxyXG5cclxubGkuZGV0YWlsc19ibGsge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmXHJcbn0gKi9cclxuXHJcbi5iYWRnZS1saWdodCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzJCQjUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5saXN0X2FuY2hvciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVlZmVmO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0X2FuY2hvcjpob3ZlciAuYmFkZ2UtbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4vKiAuZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWJlYjtcclxufSAqL1xyXG5cclxuYnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRVxyXG59XHJcblxyXG4uc2FtcGxlZm9vdGVyIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjEwNDAzLCAjRUUyNTA5KTtcclxufVxyXG5cclxuLmF0dGFjaG1lbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG4gICAgLy8gIzYyQ0RCRVxyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhcj4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICBib3JkZXI6IDEwcHg7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICM3YjI5ZmY7XHJcbiAgICB0b3A6IDRweDtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxpbmUzIC5jb2wtbWQtNlxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG4vKlJhZGlvIGJveCovXHJcblxyXG4vKiBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbmZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuc3BlYWs6IG5vbmU7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC12YXJpYW50OiBub3JtYWw7XHJcbnRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5saW5lLWhlaWdodDogMTtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxud2lkdGg6IDFlbTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTkyXCI7XHJcbmNvbG9yOiAjOGU0NGFkO1xyXG5hbmltYXRpb246IGVmZmVjdCAyNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYxMTFcIjtcclxuY29sb3I6ICNjY2M7XHJcbn0gXHJcblxyXG4vKlJhZGlvIFRvZ2dsZSovXHJcblxyXG4vKiAudG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYyMDRcIjtcclxuZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG5zcGVhazogbm9uZTtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5mb250LXZhcmlhbnQ6IG5vcm1hbDtcclxudGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbmxpbmUtaGVpZ2h0OiAxO1xyXG4td2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO1xyXG53aWR0aDogMWVtO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYyMDVcIjtcclxuY29sb3I6ICMxNmEwODU7XHJcbmFuaW1hdGlvbjogZWZmZWN0IDI1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHR7XHJcbmNvbG9yOiAjYWFhO1xyXG59XHJcbiovXHJcblxyXG4udG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYyMDRcIjtcclxuY29sb3I6IHJnYigyMzYsIDIwLCAyMCk7XHJcbn0gXHJcblxyXG5cclxuLyogQGtleWZyYW1lcyBlZmZlY3R7XHJcbjAle3RyYW5zZm9ybTogc2NhbGUoMCk7fVxyXG4yNSV7dHJhbnNmb3JtOiBzY2FsZSgxLjMpO31cclxuNzUle3RyYW5zZm9ybTogc2NhbGUoMS40KTt9XHJcbjEwMCV7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbn0gKi9cclxuXHJcbi5hZGhhckZpbGV7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIFxyXG59XHJcblxyXG4ucmFkaW8taW5saW5lXHJcbntcclxuICAgICAgIHdpZHRoOiAxOCU7XHJcbn1cclxuXHJcbi5tYXJ0OFxyXG57XHJcbiAgbWFyZ2luLXRvcDo4cHg7XHJcbn1cclxuXHJcbi5yYWRpby1pbmxpbmUxXHJcbntcclxuICAgIHdpZHRoOiAyMSU7XHJcbn1cclxuXHJcbi5yYWRpby1pbmxpbmUxIGlucHV0XHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgbGVmdDogLTVweDtcclxufVxyXG5cclxuLmhhcml5YW5hMVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4udGFibGUyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi50YWJsZTIgdGhlYWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzA4MDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgIGluc2V0IDAgMCAycHggMCByZ2JhKDI1NSwyNTUsMjU1LC40KSxcclxuICAgIGluc2V0IDAgMCAzcHggMCByZ2JhKDAsMCwwLC40KSxcclxuICAgIGluc2V0IDAgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjA1KSxcclxuICAgIDJweCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMjUpO1xyXG5cclxufVxyXG4udGFibGVfc3R5bGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjEwcHg7ICAgXHJcbn1cclxuLnRhYmxlX3N0eWxlICBoM1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi50YWJsZV9zdHlsZSAgcFxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG59IiwibGFiZWwge1xuICBjb2xvcjogIzhlOGM4YztcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxubGkuZGV0YWlsc19ibGsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi8qIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZlxyXG59ICovXG4uYmFkZ2UtbGlnaHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMkJCNTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM1cHg7IH1cblxuLmxpc3RfYW5jaG9yIHtcbiAgcGFkZGluZzogMTJweCA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgYmFja2dyb3VuZDogI2Y1ZWZlZjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4ubGlzdF9hbmNob3I6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IH1cblxuLmxpc3RfYW5jaG9yOmhvdmVyIC5iYWRnZS1saWdodCB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjsgfVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsgfVxuXG4vKiAuZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWJlYjtcclxufSAqL1xuYnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJDREJFOyB9XG5cbi5zYW1wbGVmb290ZXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjEwNDAzLCAjRUUyNTA5KTsgfVxuXG4uYXR0YWNobWVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cblxuLm5hdmJhciA+IC5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtMTVweDsgfVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJvcmRlcjogMTBweDtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjN2IyOWZmO1xuICB0b3A6IDRweDsgfVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4ubGluZTMgLmNvbC1tZC02IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cblxuLypSYWRpbyBib3gqL1xuLyogaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjExMVwiO1xyXG5mb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbnNwZWFrOiBub25lO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG50ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxubGluZS1oZWlnaHQ6IDE7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbndpZHRoOiAxZW07XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjE5MlwiO1xyXG5jb2xvcjogIzhlNDRhZDtcclxuYW5pbWF0aW9uOiBlZmZlY3QgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHR7XHJcbmNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbmNvbG9yOiAjY2NjO1xyXG59IFxyXG5cclxuLypSYWRpbyBUb2dnbGUqL1xuLyogLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMjA0XCI7XHJcbmZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuc3BlYWs6IG5vbmU7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDkwMDtcclxuZm9udC12YXJpYW50OiBub3JtYWw7XHJcbnRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5saW5lLWhlaWdodDogMTtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxud2lkdGg6IDFlbTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMjA1XCI7XHJcbmNvbG9yOiAjMTZhMDg1O1xyXG5hbmltYXRpb246IGVmZmVjdCAyNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4udG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5sYWJlbC10ZXh0e1xyXG5jb2xvcjogI2FhYTtcclxufVxyXG4qL1xuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwNFwiO1xuICBjb2xvcjogI2VjMTQxNDsgfVxuXG4vKiBAa2V5ZnJhbWVzIGVmZmVjdHtcclxuMCV7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XHJcbjI1JXt0cmFuc2Zvcm06IHNjYWxlKDEuMyk7fVxyXG43NSV7dHJhbnNmb3JtOiBzY2FsZSgxLjQpO31cclxuMTAwJXt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxufSAqL1xuLmFkaGFyRmlsZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7IH1cblxuLnJhZGlvLWlubGluZSB7XG4gIHdpZHRoOiAxOCU7IH1cblxuLm1hcnQ4IHtcbiAgbWFyZ2luLXRvcDogOHB4OyB9XG5cbi5yYWRpby1pbmxpbmUxIHtcbiAgd2lkdGg6IDIxJTsgfVxuXG4ucmFkaW8taW5saW5lMSBpbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IC01cHg7IH1cblxuLmhhcml5YW5hMSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxuXG4udGFibGUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLnRhYmxlMiB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwODA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgaW5zZXQgMCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KSwgaW5zZXQgMCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMnB4IDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XG5cbi50YWJsZV9zdHlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi50YWJsZV9zdHlsZSBoMyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cbi50YWJsZV9zdHlsZSBwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(DataService, fb, dataservice, sanitizer, router, route) {
        this.DataService = DataService;
        this.fb = fb;
        this.dataservice = dataservice;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.gender = ['male', 'female', 'transgender'];
        this.martial = [
            { matrial: 'married', send: 'true' },
            { matrial: 'unmarried', send: 'false' }
        ];
        this.fileName = '';
        this.valuecheck = false;
        this.services = false;
        this.address = [];
        this.present = "present addresss";
        this.permenent = "permenent addresss";
        this.base64textString = "";
        this.base64textStrings = "";
        this.save = true;
        this.update = false;
        ///////////////////////////////////////////////
        this.selectState = [
            { state: 'Haryana', send: false },
            { state: 'Others', send: true }
        ];
        this.role = sessionStorage.getItem('userRole');
        this.getcategorydetails();
        this.get_id = localStorage.getItem('applyid');
        this.getposition = localStorage.getItem('applno');
        this.getuserName = localStorage.getItem('userName');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.transform();
        this.exserviceimg();
        this.myform = this.fb.group({
            categoryAsperHaryana: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            fatherName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            motherName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            domicile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            otherDomicileDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            street: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            addressline: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            postal: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            streetper: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            addressper: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            cityper: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            stateper: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            postalper: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            age: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            PlaceofBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            AadharNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            uploadaadhar: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            Nationality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            MartialStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            moreLivingSpouses: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            category: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            Exservices: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            exService: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]]
        });
        //this.firstcodelength = this.DataService.testcodes.resultData['testCodes'];
        this.localuserdata = JSON.parse(localStorage.getItem('userinformation'));
        console.log(this.localuserdata);
        this.idBasedApiCall();
        this.idDashboard = this.route.snapshot.queryParamMap.get("idApp");
        console.log(this.idDashboard);
    };
    DashboardComponent.prototype.idBasedApiCall = function () {
        debugger;
        // requestobj['positionId'] = localStorage.getItem('applyid');
        // requestobj['userId'] = sessionStorage.getItem('userId');
        if (localStorage.getItem('positionId') != null && sessionStorage.getItem('userId') != null) {
            this.appicationid();
        }
        if (localStorage.getItem('positionId') == null && sessionStorage.getItem('userId') != null) {
            this.UserListById();
        }
    };
    DashboardComponent.prototype.getcategorydetails = function () {
        var _this = this;
        this.dataservice.getcategeorydata().subscribe(function (data) {
            _this.Category = data.resultData;
            console.log(_this.Category);
        });
    };
    DashboardComponent.prototype.setNav = function (args) {
        this.maritial = args.target.value;
        if (this.maritial == "married") {
            this.maritialValue = true;
        }
        if (this.maritial == "unmarried") {
            this.maritialValue = false;
        }
    };
    DashboardComponent.prototype.setStates = function (args) {
        this.states = args.target.value;
        if (this.states == "Others") {
            this.stateValue = true;
        }
        if (this.states == "Haryana") {
            this.stateValue = false;
        }
    };
    DashboardComponent.prototype.updateAddr = function (e) {
        if (e.target.checked) {
            this.myform.patchValue({
                'streetper': this.myform.get('street').value,
                'addressper': this.myform.get('addressline').value,
                'cityper': this.myform.get('city').value,
                'stateper': this.myform.get('state').value,
                'postalper': this.myform.get('postal').value
            });
        }
        if (e.target.checked == false) {
            this.myform.patchValue({
                'streetper': [''],
                'addressper': [''],
                'cityper': [''],
                'stateper': [''],
                'postalper': ['']
            });
        }
    };
    DashboardComponent.prototype.getDemographicDetails = function () {
        var _this = this;
        console.log();
        this.dataservice.getDemographic(this.appid).subscribe(function (data) {
            _this.resobj = data['resultData'];
            _this.b = 'data:image/jpeg;base64,' + _this.resobj.aadharImage;
            _this.d = 'data:image/jpeg;base64,' + _this.resobj.exServiceImage;
            _this.myform.patchValue({
                'categoryAsperHaryana': _this.resobj.categoryAsperHaryana,
                'fullName': _this.resobj.fullName,
                'fatherName': _this.resobj.fatherName,
                'motherName': _this.resobj.motherName,
                'domicile': _this.resobj.domicile,
                'otherDomicileDetails': _this.resobj.otherDomicileDetails,
                'street': _this.resobj.addresses[0].streetAddress,
                'addressline': _this.resobj.addresses[0].addressLine2,
                'city': _this.resobj.addresses[0].city,
                'state': _this.resobj.addresses[0].state,
                'postal': _this.resobj.addresses[0].zipCode,
                'streetper': _this.resobj.addresses[1].streetAddress,
                'addressper': _this.resobj.addresses[1].addressLine2,
                'cityper': _this.resobj.addresses[1].city,
                'stateper': _this.resobj.addresses[1].state,
                'postalper': _this.resobj.addresses[1].zipCode,
                'mobileNumber': _this.resobj.mobileNumber,
                'email': _this.resobj.emailId,
                'dob': _this.resobj.dob,
                'gender': _this.resobj.gender,
                'age': _this.resobj.currentAge,
                'PlaceofBirth': _this.resobj.placeOfBirth,
                'AadharNumber': _this.resobj.aadharNumber,
                'uploadaadhar': _this.resobj.b,
                'MartialStatus': _this.resobj.maritalStatus,
                'moreLivingSpouses': _this.resobj.moreLivingSpouses,
                'Nationality': _this.resobj.nationality,
                'category': _this.resobj.categoryId,
                'Exservices': _this.resobj.exServiceMan,
                'exService': _this.resobj.d,
            });
            console.log('resObj :', _this.resobj);
        });
    };
    ////////////////save Demographic/////////////
    DashboardComponent.prototype.saveDemographic = function () {
        var _this = this;
        this.address.push({
            streetAddress: this.myform.get('street').value,
            addressLine2: this.myform.get('addressline').value,
            city: this.myform.get('city').value,
            state: this.myform.get('state').value,
            zipCode: this.myform.get('postal').value,
            addressType: this.present
        }, {
            streetAddress: this.myform.get('streetper').value,
            addressLine2: this.myform.get('addressper').value,
            city: this.myform.get('cityper').value,
            state: this.myform.get('stateper').value,
            zipCode: this.myform.get('postalper').value,
            addressType: this.permenent
        });
        var requestobj = {};
        requestobj['categoryAsperHaryana'] = this.myform.get('categoryAsperHaryana').value,
            requestobj['fullName'] = this.myform.get('fullName').value,
            requestobj['fatherName'] = this.myform.get('fatherName').value,
            requestobj['motherName'] = this.myform.get('motherName').value,
            requestobj['domicile'] = this.myform.get('domicile').value,
            requestobj['otherDomicileDetails'] = this.myform.get('otherDomicileDetails').value,
            requestobj['addresses'] = this.address,
            requestobj['mobileNumber'] = this.myform.get('mobileNumber').value,
            requestobj['emailId'] = this.myform.get('email').value,
            requestobj['dob'] = this.myform.get('dob').value,
            requestobj['gender'] = this.myform.get('gender').value,
            requestobj['currentAge'] = this.myform.get('age').value,
            requestobj['placeOfBirth'] = this.myform.get('PlaceofBirth').value,
            requestobj['aadharNumber'] = this.myform.get('AadharNumber').value,
            requestobj['aadharImage'] = this.base64textString;
        requestobj['maritalStatus'] = this.myform.get('MartialStatus').value,
            requestobj['moreLivingSpouses'] = this.myform.get('moreLivingSpouses').value,
            requestobj['nationality'] = this.myform.get('Nationality').value,
            requestobj['categoryId'] = this.myform.get('category').value,
            requestobj['exServiceMan'] = this.myform.get('Exservices').value,
            requestobj['exServiceImage'] = this.base64textStrings;
        requestobj['applicationNo'] = this.appid;
        requestobj['userId'] = sessionStorage.getItem('userId');
        requestobj['possitionId'] = localStorage.getItem('applyid');
        console.log('save demographic req obj:', requestobj);
        this.dataservice.demographicApp(requestobj).subscribe(function (res) {
            _this.router.navigate(['/empinfo'], { queryParams: { applicationid: _this.appid } });
            _this.demographicid = res.resultData;
            console.log(_this.demographicid);
            _this.save = false;
            _this.update = true;
        });
    };
    // update demographic start
    DashboardComponent.prototype.updateDemographic = function () {
        debugger;
        this.address.push({
            streetAddress: this.myform.get('street').value,
            addressLine2: this.myform.get('addressline').value,
            city: this.myform.get('city').value,
            state: this.myform.get('state').value,
            zipCode: this.myform.get('postal').value,
            addressType: this.present
        }, {
            streetAddress: this.myform.get('streetper').value,
            addressLine2: this.myform.get('addressper').value,
            city: this.myform.get('cityper').value,
            state: this.myform.get('stateper').value,
            zipCode: this.myform.get('postalper').value,
            addressType: this.permenent
        });
        var requestobj = {};
        requestobj['categoryAsperHaryana'] = this.myform.get('categoryAsperHaryana').value,
            requestobj['fullName'] = this.myform.get('fullName').value,
            requestobj['fatherName'] = this.myform.get('fatherName').value,
            requestobj['motherName'] = this.myform.get('motherName').value,
            requestobj['domicile'] = this.myform.get('domicile').value,
            requestobj['otherDomicileDetails'] = this.myform.get('otherDomicileDetails').value,
            requestobj['addresses'] = this.address,
            requestobj['mobileNumber'] = this.myform.get('mobileNumber').value,
            requestobj['emailId'] = this.myform.get('email').value,
            requestobj['dob'] = this.myform.get('dob').value,
            requestobj['gender'] = this.myform.get('gender').value,
            requestobj['currentAge'] = this.myform.get('age').value,
            requestobj['placeOfBirth'] = this.myform.get('PlaceofBirth').value,
            requestobj['aadharNumber'] = this.myform.get('AadharNumber').value,
            requestobj['aadharImage'] = this.base64textString;
        requestobj['maritalStatus'] = this.myform.get('MartialStatus').value,
            requestobj['moreLivingSpouses'] = this.myform.get('moreLivingSpouses').value,
            requestobj['nationality'] = this.myform.get('Nationality').value,
            requestobj['categoryId'] = this.myform.get('category').value,
            requestobj['exServiceMan'] = this.myform.get('Exservices').value,
            requestobj['exServiceImage'] = this.base64textStrings;
        requestobj['applicationNo'] = this.appid;
        requestobj['userId'] = sessionStorage.getItem('userId');
        requestobj['possitionId'] = localStorage.getItem('applyid');
        requestobj['id'] = this.demographicid;
        console.log('save demographic req obj:====>>>>>>', requestobj);
        this.dataservice.updatedemographicApp(requestobj).subscribe(function (res) {
            //this.router.navigate(['/empinfo'],{queryParams:{applicationid:this.appid}});
            alert("updated");
        });
    };
    // update demographic end
    DashboardComponent.prototype.valuechecked = function (valid) {
        this.valuecheck = valid;
    };
    // exservices(valid)
    // { 
    // this.services=!valid;
    // }
    DashboardComponent.prototype.onFileChanges = function (event) {
        var exservice = event.target.files[0]; // <--- File Object for future use.
    };
    DashboardComponent.prototype.onFileChange = function (event) {
        var uploadaadhar = event.target.files[0]; // <--- File Object for future use. 
    };
    DashboardComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        console.log("this is files" + files);
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    DashboardComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    };
    DashboardComponent.prototype.appicationid = function () {
        var _this = this;
        debugger;
        var requestobj = {};
        requestobj['positionId'] = localStorage.getItem('positionId');
        requestobj['userId'] = sessionStorage.getItem('userId');
        this.dataservice.getuserlistByIds(requestobj).subscribe(function (res) {
            _this.applicationid = res.result;
            _this.applicationNo = res.resultData;
            console.log(res);
            _this.appid = _this.applicationNo.applicationNumber;
        });
    };
    DashboardComponent.prototype.exservice = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoadeds.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    DashboardComponent.prototype._handleReaderLoadeds = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textStrings = btoa(binaryString);
        console.log(this.base64textStrings);
    };
    DashboardComponent.prototype.transform = function () {
        var c = this.sanitizer.bypassSecurityTrustResourceUrl(this.b);
        return c;
    };
    DashboardComponent.prototype.exserviceimg = function () {
        var e = this.sanitizer.bypassSecurityTrustResourceUrl(this.d);
        return e;
    };
    /////////////////ex serviceman radio/////////////////////////////////
    DashboardComponent.prototype.setradio = function (e) {
        this.selectedLink = e;
    };
    DashboardComponent.prototype.isSelected = function (name) {
        if (!this.selectedLink) {
            return false;
        }
        return (this.selectedLink === name);
    };
    DashboardComponent.prototype.UserListById = function () {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        this.dataservice.getUserListById(id).subscribe(function (res) {
            _this.getUserListId = res.resultData;
            // this.appid = res.resultData[0].applicationNo;
            // localStorage.setItem('applicationid',this.appid)
            // if(this.applicationid != 'null' && this.getUserListId >0 ){
            //   this.userStatus = true;
            //  }
            // // if(this.getUserListId.length > 1){
            // //   this.userStatus = true;
            // // }else{
            // //   this.userStatus = false;
            // // }
            console.log(_this.getUserListId);
            _this.getDemographicDetails();
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/home/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/designation/designation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/designation/designation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i>Designation</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n      data-backdrop=\"static\" data-target=\"#myModal1\" (click)=\"addEmployeementType(createdesignation)\">Add</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <!-- <th>Id</th> -->\r\n        <th>Designation Name</th>\r\n        <!-- <th>Last UpdatedBy</th> -->\r\n        <th>Updated Date</th>\r\n        <th>Updated By</th>\r\n        <th>Status</th>\r\n\r\n        <th>Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let emp of designationList | filter:term | paginate: { itemsPerPage: 6, currentPage: p }\">\r\n        <!-- <td>{{emp.id}}</td> -->\r\n        <td>{{emp.designationName}}</td>\r\n        <!-- <td>{{emp.lastUpdatedBy}}</td> -->\r\n        <td>{{emp.updatedDate}}</td>\r\n        <td>{{emp.email}}</td>\r\n        <td *ngIf=\"emp.status == 'Active'\"><span\r\n            [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\"\r\n            (click)=\"deletedesignation(emp)\">Disable</span></td>\r\n        <td *ngIf=\"emp.status == 'Inactive'\"><span\r\n            [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\"\r\n            (click)=\"deletedesignation(emp)\">Enable</span></td>\r\n        <td>\r\n          <span>\r\n            <span (click)=\"editSpecialevent(emp)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n              class=\"glyphicon glyphicon-pencil\">\r\n              <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n            </span>\r\n          </span>\r\n        </td>\r\n        <td>\r\n          <!-- <span>\r\n              <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\r\n                <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n              </span>\r\n            </span> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <form [formGroup]=\"specialEventForm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update Designation</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"col-md-12\">\r\n            <input type=\"text\" placeholder=\" Enter Designation\" formControlName=\"designationname\" name=\"designationname\"\r\n              class=\"form-control\">\r\n            <span class=\"text text-danger\"\r\n              *ngIf=\"specialEventForm.controls['designationname'].invalid && specialEventForm.controls['designationname'].touched\">Designation\r\n              Is Required</span>\r\n          </div>\r\n          <input type=\"text\" formControlName=\"id\" name=\"id\" hidden>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <!-- <button type=\"submit\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\"\r\n                  class=\"btn btn-primary float-right\" id=\"register\" (click)=\"saveEvent(specialEventForm)\"\r\n                  *ngIf=\"addfrm\">Submit</button> -->\r\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\r\n            [disabled]=\"specialEventForm.invalid\" (click)=\"updateEvent(specialEventForm.value)\">Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <form [formGroup]=\"createdesignation\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Designation</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"createdesignation.reset()\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"col-md-12\">\r\n            <input type=\"text\" placeholder=\"Enter Designation\" formControlName=\"designationnames\" name=\"designationnames\"\r\n              class=\"form-control\">\r\n            <span class=\"text text-danger\"\r\n              *ngIf=\"createdesignation.controls['designationnames'].invalid && createdesignation.controls['designationnames'].touched\">Designation\r\n              Is Required</span>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <!-- <button type=\"submit\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\"\r\n                    class=\"btn btn-primary float-right\" id=\"register\" (click)=\"saveEvent(specialEventForm)\"\r\n                    *ngIf=\"addfrm\">Submit</button> -->\r\n          <button type=\"button\" class=\"btn btn-primary float-right\" id=\"register\" [disabled]=\"createdesignation.invalid\"\r\n            (click)=\"create(createdesignation.value)\" data-dismiss=\"modal\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/designation/designation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/designation/designation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVzaWduYXRpb24vZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/designation/designation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/designation/designation.component.ts ***!
  \***********************************************************/
/*! exports provided: DesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationComponent", function() { return DesignationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





var DesignationComponent = /** @class */ (function () {
    function DesignationComponent(http, dataservice, fb) {
        this.http = http;
        this.dataservice = dataservice;
        this.fb = fb;
    }
    DesignationComponent.prototype.ngOnInit = function () {
        this.designationget();
        this.specialEventForm = this.fb.group({
            'designationname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.createdesignation = this.fb.group({
            'designationnames': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    DesignationComponent.prototype.designationget = function () {
        var _this = this;
        this.dataservice.getdesignationdata().subscribe(function (data) {
            _this.designationList = data.resultData;
            console.log(_this.designationList);
        });
    };
    DesignationComponent.prototype.editSpecialevent = function (emp) {
        console.log(emp);
        this.specialEventForm.setValue({
            'designationname': emp.designationName,
            'id': emp.id
        });
    };
    DesignationComponent.prototype.updateEvent = function (emp) {
        var _this = this;
        var updateobj = {};
        updateobj['id'] = emp.id;
        updateobj['designationName'] = emp.designationname;
        updateobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        console.log(updateobj);
        this.dataservice.upddatedesignation(updateobj).subscribe(function (data) {
            _this.designationget();
        });
    };
    DesignationComponent.prototype.create = function (formdata) {
        var _this = this;
        var createdby = {};
        createdby['designationName'] = formdata.designationnames;
        createdby['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.createdesignationdata(createdby).subscribe(function (data) {
            _this.designationget();
        });
    };
    DesignationComponent.prototype.deletedesignation = function (formdata) {
        var _this = this;
        var deleteobj = {};
        deleteobj['id'] = formdata.id;
        deleteobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        if (formdata.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        deleteobj['status'] = status;
        this.dataservice.deletedesignation(deleteobj).subscribe(function (data) {
            _this.designationget();
        });
    };
    DesignationComponent.prototype.addEmployeementType = function (createdesignation) {
        createdesignation.reset();
    };
    DesignationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-designation',
            template: __webpack_require__(/*! ./designation.component.html */ "./src/app/home/designation/designation.component.html"),
            styles: [__webpack_require__(/*! ./designation.component.scss */ "./src/app/home/designation/designation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DesignationComponent);
    return DesignationComponent;
}());



/***/ }),

/***/ "./src/app/home/employeementinfo/employeementinfo.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/employeementinfo/employeementinfo.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px;\">\r\n  <div class=\"row\">\r\n  \r\n    <!-- ------------------------------------------------------------- -->\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n          <form [formGroup]=\"myform\" autocomplete=\"on\" enctype=\"multipart/form-data\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <h5>Employment Information:</h5><br>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <label>Present Employment</label>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 \">\r\n                <div class=\"radio-inline\">\r\n                  <input type=\"radio\" value=\"true\" class=\"form-check-input\"\r\n                    (click)=\"changevalue(true)\" formControlName=\"presentEmployment\" [value]=\"true\" name=\"presentEmployment\">Yes\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"radio-inline\">\r\n                  <input type=\"radio\" value=\"false\" class=\"form-check-input\"\r\n                    (click)=\"changevalue(false)\" formControlName=\"presentEmployment\" [value]=\"false\" name=\"presentEmployment\">No\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <br>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n\r\n            <div *ngIf=\"isvalid\">\r\n\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-md-8\">\r\n                  <label>If Yes, then all the below are mandatory<span style=\"color:red;\">*</span></label><br><br>\r\n\r\n                  <label>Name of Employer</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"Name of Employer\" placeholder=\"Enter Name\"\r\n                    formControlName=\"NameofEmp\">\r\n                  <span style=\"color:red\" *ngIf=\"myform.get('NameofEmp').touched && myform.get('NameofEmp').invalid\">\r\n                    <span *ngIf=\"myform.get('NameofEmp').errors.required\">\r\n                      Name of Employer is required\r\n                    </span>\r\n                  </span>\r\n                  <br>\r\n\r\n\r\n                  <label>Current Designation</label>\r\n                  <select class=\"form-control\" formControlName=\"designation\">\r\n                    <option value=\"\" disabled selected>Please Select Current Designation</option>\r\n                    <option *ngFor=\"let designation of designationList\" [value]=\"designation.id\">\r\n                      {{designation.designationName}}</option>\r\n                  </select>\r\n                  <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('designation').touched && myform.get('designation').invalid\">\r\n                    <span *ngIf=\"myform.get('designation').errors.required\">\r\n                      Current designation is required\r\n                    </span>\r\n                  </span>\r\n\r\n                  <br>\r\n\r\n                  <label>Employment Type </label>\r\n                  <select class=\"form-control\" formControlName=\"Employment\">\r\n                    <option value=\"\" disabled selected>Please select Employment Type</option>\r\n                    <option *ngFor=\"let e of employeementlist\" [value]=\"e.id\">{{e.employmentName}}</option>\r\n                  </select>\r\n                  <span style=\"color:red\" *ngIf=\"myform.get('Employment').touched && myform.get('Employment').invalid\">\r\n                    <span *ngIf=\"myform.get('Employment').errors.required\">\r\n                      Employment Type is required\r\n                    </span>\r\n                  </span>\r\n\r\n                  <br>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <label>Pay and Grade<span style=\"color:red;\">*</span></label>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Pay and Grade\"\r\n                    formControlName=\"PayandGrade\" name=\"Grade\">\r\n                  <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('PayandGrade').touched && myform.get('PayandGrade').invalid\">\r\n                    <span *ngIf=\"myform.get('PayandGrade').errors.required\">\r\n                      Pay and Grade is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-6\">\r\n                  <label>Date of Next Increment<span style=\"color:red;\">*</span></label>\r\n                  <input type=\"date\" class=\"form-control\" placeholder=\"Date of Next Increment\"\r\n                    formControlName=\"DateOfIncrement\" name=\"DateOfIncrement\">\r\n                  <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('DateOfIncrement').touched && myform.get('DateOfIncrement').invalid\">\r\n                    <span *ngIf=\"myform.get('DateOfIncrement').errors.required\">\r\n                      Date of Next Increment is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <br>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <label> Have you obtained prior permission of your present employer for submitting\r\n                    this application? <span style=\"color:red;\">*</span></label>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"radio-inline\">\r\n                        <input type=\"radio\" formControlName=\"presentEmployer\" name=\"presentEmployer\"\r\n                          class=\"form-check-input\" [value]=\"true\">Yes\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"radio-inline\">\r\n                        <input type=\"radio\" formControlName=\"presentEmployer\" name=\"presentEmployer\"\r\n                          class=\"form-check-input\" [value]=\"false\">No\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <label> Basic pay acceptable, if selected (in numbers)<span style=\"color:red;\">*</span></label>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Basic pay\" formControlName=\"BasicPay\"\r\n                    name=\"BasicPay\">\r\n                  <span style=\"color:red\" *ngIf=\"myform.get('BasicPay').touched && myform.get('BasicPay').invalid\">\r\n                    <span *ngIf=\"myform.get('BasicPay').errors.required\">\r\n                      Basic pay acceptable is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <br>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <label> Period required for joining the post, if appointed (Notice Period in days) <span\r\n                      style=\"color:red;\">*</span></label>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Notice Period\" formControlName=\"NoticePeriod\"\r\n                    name=\"Notice Period\">\r\n                  <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('NoticePeriod').touched && myform.get('NoticePeriod').invalid\">\r\n                    <span *ngIf=\"myform.get('NoticePeriod').errors.required\">\r\n                      Notice Period is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!isvalid\">\r\n\r\n            </div>\r\n            <hr>\r\n\r\n\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label> Have you ever been disqualified from Appearing in any University Examination/\r\n                  Undertaking University work <span style=\"color:red;\">*</span></label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" class=\"form-check-input\" name=\"disqualified\" formControlName=\"disqualified\"\r\n                        [value]=\"true\" checked>Yes\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" class=\"form-check-input\" name=\"disqualified\" formControlName=\"disqualified\"\r\n                        [value]=\"false\">No\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label> Are you a dismissed employee? <span style=\"color:red;\">*</span></label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" class=\"form-check-input\" id=\"open\" name=\"dismissed\"\r\n                        formControlName=\"dismissed\" [value]=\"true\">Yes\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" class=\"form-check-input\" id=\"reserved\" name=\"dismissed\"\r\n                        formControlName=\"dismissed\" [value]=\"false\">No\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label> Whether any criminal case has been registered against applicant <span\r\n                    style=\"color:red;\">*</span></label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" class=\"form-check-input\" id=\"open\" name=\"Criminalcase\"\r\n                        formControlName=\"Criminalcase\" [value]=\"true\">Yes\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" class=\"form-check-input\" id=\"reserved\" name=\"Criminalcase\"\r\n                        formControlName=\"Criminalcase\" [value]=\"false\">No\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <hr>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label> Whether you have been charge-sheeted for any criminal offence?<span\r\n                    style=\"color:red;\">*</span></label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" value=\"Male\" (click)=\"setradio(true)\" class=\"form-check-input\"\r\n                        name=\"chargesheet\" formControlName=\"chargesheet\" [value]=\"true\"> Yes\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" value=\"Male\" (click)=\"setradio(false)\" class=\"form-check-input\"\r\n                        name=\"chargesheet\" formControlName=\"chargesheet\" [value]=\"false\">No\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n\r\n\r\n            <div class=\"row\" *ngIf=\"set\">\r\n              <div class=\"col-md-12\">\r\n                <label> If yes, Enter the details<span style=\"color:red;\">*</span></label>\r\n                <input type=\"text\" class=\"form-control\" [disabled]=\"status\" formControlName=\"chargesheeted\"\r\n                  name=\"chargesheeted\">\r\n                <span style=\"color:red\"\r\n                  *ngIf=\"myform.get('chargesheeted').touched && myform.get('chargesheeted').invalid\">\r\n                  <span *ngIf=\"myform.get('chargesheeted').errors.required\">\r\n                    Charge sheet is required\r\n                  </span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"!set\">\r\n            </div>\r\n            <br>\r\n            <hr>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label> Whether you have been convicted by any competent court for any criminal offence?\r\n                  <span style=\"color:red;\">*</span></label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" name=\"convicted\" class=\"form-check-input\" (click)=\"setvalue(true)\"\r\n                        formControlName=\"convicted\" [value]=\"true\">Yes\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"radio-inline\">\r\n                      <input type=\"radio\" name=\"convicted\" class=\"form-check-input\" (click)=\"setvalue(false)\"\r\n                        formControlName=\"convicted\" [value]=\"false\">No\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\" *ngIf=\"value\">\r\n              <div class=\"col-md-12\">\r\n                <label> If yes, Enter the details<span style=\"color:red;\">*</span></label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"convicteddetails\" name=\"convicteddetails\">\r\n                <span style=\"color:red\"\r\n                  *ngIf=\"myform.get('convicteddetails').touched && myform.get('convicteddetails').invalid\">\r\n                  <span *ngIf=\"myform.get('convicteddetails').errors.required\">\r\n                    Criminal offence details are required\r\n                  </span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"!value\">\r\n            </div>\r\n            <br>\r\n            <hr>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <strong>Reference:</strong>\r\n            <i> (These persons should be professionally competent,\r\n              who are well acquainted with some aspect of the applicant’s training accomplishment,\r\n              capabilities and character but must not be in blood relation to the candidate. Two\r\n              references should be listed)\r\n            </i>\r\n\r\n\r\n            <br>\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n\r\n                <div formArrayName=\"reference\" *ngFor=\"let data of myform.controls.reference.controls;let i=index;\">\r\n\r\n                  <div [formGroupName]=\"i\">\r\n                    <br />\r\n                    <strong>Reference </strong>\r\n                    <br />\r\n                    <button class=\"btn btn-danger pull-right btn2\" (click)=\"remove(i)\"\r\n                      *ngIf=\"myform.get('reference').length>1\"><i class=\"fa fa-times\"></i></button>\r\n                    <br />\r\n                    <div class=\"col-md-12\">\r\n                      <label> Name <span style=\"color:red;\">*</span></label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" required>\r\n                        <span *ngIf=\"myform.referenceName?.errors.required\">\r\n                          Reference name is required\r\n                        </span>\r\n                      \r\n                    </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                      <label> Occupation or Position <span style=\"color:red;\">*</span></label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"position\" name=\"position\" required>\r\n                      <span *ngIf=\"myform.occupation?.errors.required\">\r\n                          Reference name is required\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <label> Address <span style=\"color:red;\">*</span></label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"address\" name=\"address\" required>\r\n                      <span *ngIf=\"myform.Address?.errors.required\">\r\n                          Reference name is required\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <label> Email <span style=\"color:red;\">*</span></label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\" required>\r\n                      <span *ngIf=\"myform.Email?.errors.required\">\r\n                          Reference name is required\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!--  \r\n               </div> -->\r\n            <br>\r\n\r\n            <div class=\"row\" *ngIf=\"showSelected\">\r\n              <div class=\"col-md-6\">\r\n\r\n                <strong>Reference 2:</strong><br>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <label> Name <span style=\"color:red;\">*</span></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"referenceName2\" name=\"reference Name\">\r\n\r\n                  <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('referenceName2').touched && myform.get('referenceName2').invalid\">\r\n                    <span *ngIf=\"myform.get('referenceName2').errors.required\">\r\n                      Reference name is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <label> Occupation or Position <span style=\"color:red;\">*</span></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"occupation2\" name=\"occupation\">\r\n                  <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('occupation2').touched && myform.get('occupation2').invalid\">\r\n                    <span *ngIf=\"myform.get('occupation2').errors.required\">\r\n                      Reference Occupation or Positionname is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <label> Address <span style=\"color:red;\">*</span></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"Address2\" name=\"Address\">\r\n                  <span style=\"color:red\" *ngIf=\"myform.get('Address2').touched && myform.get('Address2').invalid\">\r\n                    <span *ngIf=\"myform.get('Address2').errors.required\">\r\n                      Reference Address is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <label> Email <span style=\"color:red;\">*</span></label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"Email2\" name=\"Email\">\r\n                  <span style=\"color:red\" *ngIf=\"myform.get('Email2').touched && myform.get('Email2').invalid\">\r\n                    <span *ngIf=\"myform.get('Email2').errors.required\">\r\n                      Reference Email is required\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <br>\r\n\r\n\r\n\r\n            <button class=\"btn btn-primary ml-3\" (click)=\"addmore()\">Add More Reference</button>\r\n            <!-- <button (click)=\"addReference()\"></button>  -->\r\n            <br>\r\n            <br>\r\n            <hr>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <strong>Educational qualifications (Exact marks and % should be filled, no rounding should be\r\n              there)</strong>\r\n            <br>\r\n\r\n            <hr>\r\n            <br>\r\n\r\n            <div class=\"qualification\" formArrayName=\"qualification\"\r\n              *ngFor=\"let data of myform.get('qualification')['controls'];let i=index;\">\r\n\r\n              <div class=\"row\" [formGroupName]=\"i\">\r\n\r\n                <button class=\"btn btn-danger pull-right btn2 btn3\" (click)=\"removequalification(i)\"><i\r\n                    class=\"fa fa-times\"></i></button>\r\n\r\n                  <div class=\"col-md-6\">\r\n                  <label>Qualification </label>\r\n                  <select class=\"form-control\" formControlName=\"qualification\" name=\"qualification\">\r\n                    <option value=\"\" disabled selected>Please Select Qualification</option>\r\n                    <option>10th(SSC)</option>\r\n                    <option>12th(HSC)</option>\r\n                    <option>Under Graduate (UG)</option>\r\n                    <option>Post Graduate (PG)</option>\r\n                  </select>\r\n                  <!-- <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('qualifications').touched && myform.get('qualifications').invalid\">\r\n                    <span *ngIf=\"myform.get('qualifications').errors.required\">\r\n                      Qualification is required\r\n                    </span>\r\n                  </span> -->\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label>Group</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"subjects\" name=\"subjects\"\r\n                    placeholder=\"Please enter the Group\">\r\n                  <!-- <span style=\"color:red\" *ngIf=\"myform.get('group').touched && myform.get('group').invalid\">\r\n                    <span *ngIf=\"myform.get('group').errors.required\">\r\n                      Please enter the field\r\n                    </span>\r\n                  </span> -->\r\n                </div>\r\n             \r\n              \r\n\r\n                <div class=\"col-md-6\">\r\n                  <label>University/Board/Dept.from which passed</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"board\" name=\"board\"\r\n                    placeholder=\"University/Board/Dept.from which passed\" />\r\n                  <!-- <span style=\"color:red\" *ngIf=\"myform.get('University').touched && myform.get('University').invalid\">\r\n                    <span *ngIf=\"myform.get('University').errors.required\">\r\n                      University is required\r\n                    </span>\r\n                  </span> -->\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <label>Year of Passing </label>\r\n                  <select class=\"form-control\" formControlName=\"yearPassing\" name=\"yearPassing\">\r\n                    <option>2012</option>\r\n                    <option>2013</option>\r\n                    <option>2014</option>\r\n                    <option>2015</option>\r\n                    <option>2016</option>\r\n                    <option>2017</option>\r\n                  </select>\r\n                  <!-- <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('YearofPassing').touched && myform.get('YearofPassing').invalid\">\r\n                    <span *ngIf=\"myform.get('YearofPassing').errors.required\">\r\n                      Year of Passing is required\r\n                    </span>\r\n                  </span> -->\r\n                </div>\r\n           \r\n            <br/>\r\n\r\n                         \r\n               <div class=\"col-md-6\">\r\n                 <label>Division <span style=\"color:red;\">*</span></label>\r\n                 <select class=\"form-control\" formControlName=\"classOfDivision\" name=\"classOfDivision\">\r\n                   <option>Ist</option>\r\n                   <option>2nd</option>\r\n                   <option>3rd</option>\r\n                 </select>\r\n               </div>\r\n                \r\n                <div class=\"col-md-6\">\r\n                  <label>CGPA/Scale/Max Marks</label>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Number\" formControlName=\"maxMarks\" name=\"maxMarks\">\r\n                  <!-- <span style=\"color:red\" *ngIf=\"myform.get('cgpa').touched && myform.get('cgpa').invalid\">\r\n                    <span *ngIf=\"myform.get('cgpa').errors.required\">\r\n                      cgpa is required\r\n                    </span>\r\n                  </span> -->\r\n\r\n                </div>\r\n                <div class=\"col-md-6 \">\r\n                  <label>Obtained CGPA/Obtained Marks </label>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Number\" formControlName=\"obtinedMarks\" name=\"obtinedMarks\">\r\n                  <!-- <span style=\"color:red\"\r\n                    *ngIf=\"myform.get('cgpaobtained').touched && myform.get('cgpaobtained').invalid\">\r\n                    <span *ngIf=\"myform.get('cgpaobtained').errors.required\">\r\n                      please enter the field\r\n                    </span>\r\n                  </span> -->\r\n                </div>\r\n              <br>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <label>Percentage of marks Obtained<span style=\"color:red;\">*</span></label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\" formControlName=\"percentage\" name=\"percentage\">\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label>distinction<span style=\"color:red;\">*</span></label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter destinction\" formControlName=\"distinction\"\r\n                    name=\"distinction\">\r\n                </div>\r\n              \r\n              <br>\r\n\r\n                 <div class=\"col-md-6\">\r\n                  <label>Certificate<span style=\"color:red;\">*</span></label>\r\n                  <input type=\"file\" class=\"form-control\"   [id]=\"'file'+i\" (change)=\"handleFileSelect(file,$event,i)\" name=\"file\">\r\n                  <img [src]=\"'data:image/jpg;base64,'\" alt=\"path not correct\"/>\r\n                 </div> \r\n\r\n              <br>\r\n\r\n            </div>\r\n            </div>\r\n\r\n            <br/>\r\n            <button class=\"btn btn-primary\" (click)=\"addqualification()\">Add More Exam</button>\r\n            <hr>\r\n          \r\n            <!-- ----------------------------------------- -->\r\n            <br>\r\n            <hr>\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <p><b>Total Experience:</b> To be mentioned from the date of meeting the eligibility requirement of the post applied.</p>\r\n\r\n            <hr>\r\n            <br>\r\n\r\n\r\n            \r\n            <!----Total Experience start-->\r\n\r\n            <div class=\"qualification\" formArrayName=\"experiencedetails\"\r\n               *ngFor=\"let data of myform.get('experiencedetails')['controls'];let i=index;\">\r\n\r\n             <div class=\"row\" [formGroupName]=\"i\">\r\n\r\n              <button class=\"btn btn-danger pull-right btn2 btn3\" (click)=\"removetotalexperience(i)\"><i\r\n                  class=\"fa fa-times\"></i></button>\r\n\r\n                <div class=\"col-md-6\">\r\n                <label>Name of employer / Institution</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"nameOfEmployer\" name=\"nameOfEmployer\" placeholder=\"Please enter the Group\">\r\n                <!-- <span style=\"color:red\"\r\n                  *ngIf=\"myform.get('qualifications').touched && myform.get('qualifications').invalid\">\r\n                  <span *ngIf=\"myform.get('qualifications').errors.required\">\r\n                    Qualification is required\r\n                  </span>\r\n                </span> -->\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Designation</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"designation\" name=\"designation\"\r\n                  placeholder=\"Designation\">\r\n                <!-- <span style=\"color:red\" *ngIf=\"myform.get('group').touched && myform.get('group').invalid\">\r\n                  <span *ngIf=\"myform.get('group').errors.required\">\r\n                    Please enter the field\r\n                  </span>\r\n                </span> -->\r\n              </div>\r\n           \r\n            \r\n\r\n              <div class=\"col-md-6\">\r\n                  <label>employmentType</label>\r\n                  <select class=\"form-control\" formControlName=\"employmentType\" name=\"employmentType\">\r\n                  <option value=\"\" disabled selected>employmentType</option>\r\n                    <option>Present</option>\r\n                    <option>permenent</option>\r\n                  </select>\r\n                <!-- <span style=\"color:red\"\r\n                  *ngIf=\"myform.get('YearofPassing').touched && myform.get('YearofPassing').invalid\">\r\n                  <span *ngIf=\"myform.get('YearofPassing').errors.required\">\r\n                    Year of Passing is required\r\n                  </span>\r\n                </span> -->\r\n              </div>\r\n         \r\n          <br/>\r\n           \r\n              <div class=\"col-md-6\">\r\n                <label>Pay scale/total salary</label>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"pay\" formControlName=\"pay\" name=\"pay\">\r\n                <!-- <span style=\"color:red\" *ngIf=\"myform.get('cgpa').touched && myform.get('cgpa').invalid\">\r\n                  <span *ngIf=\"myform.get('cgpa').errors.required\">\r\n                    cgpa is required\r\n                  </span>\r\n                </span> -->\r\n\r\n              </div>\r\n              <div class=\"col-md-6 \">\r\n                <label>Number of years </label>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"Enter Number of years\" formControlName=\"numberOfYears\" name=\"numberOfYears\">\r\n                <!-- <span style=\"color:red\"\r\n                  *ngIf=\"myform.get('cgpaobtained').touched && myform.get('cgpaobtained').invalid\">\r\n                  <span *ngIf=\"myform.get('cgpaobtained').errors.required\">\r\n                    please enter the field\r\n                  </span>\r\n                </span> -->\r\n              </div>\r\n            <br>\r\n\r\n          </div>\r\n          </div>\r\n\r\n          <br/>\r\n          <button class=\"btn btn-primary\" (click)=\"addmoretotal()\">Add More Experience</button>\r\n      \r\n\r\n            <!----Total Experience end-->\r\n\r\n           <!-----prize start--->\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <hr>\r\n\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <p>Give Particulars of Prize, Medal and Merit won, distinctions, if any</p>\r\n\r\n            <hr>\r\n            \r\n\r\n           <div class=\"qualification\" formArrayName=\"achievements\"\r\n           *ngFor=\"let data of myform.get('achievements')['controls'];let i=index;\">\r\n\r\n            <div [formGroupName]=\"i\">\r\n            \r\n              <button class=\"btn btn-danger pull-right btn2 btn3 prize\" (click)=\"removeprize(i)\"><i\r\n                class=\"fa fa-times\"></i></button>\r\n\r\n              <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <label>Give Particulars of Prize, Medal and Merit won, distinctions, if any <span\r\n                    style=\"color:red;\">*</span></label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Prize, Medal and Merit\"\r\n                  formControlName=\"achievementDetails\" name=\"achievementDetails\" required>\r\n\r\n                            <!-- <span *ngIf=\"myform.MedalandMerit?.errors.required\">\r\n                    Prize, Medal and Merit won is required\r\n                  </span> -->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n        \r\n          <br/>\r\n          <button class=\"btn btn-primary\" (click)=\"addmoreprizes()\">Add More prizes</button>\r\n          <hr>\r\n\r\n            <!-----prize end--->\r\n\r\n          <hr>\r\n          <!-- ----------------------------------------- -->\r\n        \r\n          <p>List of the certificates (attested copies) attached</p>\r\n        \r\n          <hr>\r\n            \r\n           <!-----certificates start--->\r\n\r\n           <div formArrayName=\"certificates\"\r\n           *ngFor=\"let data of myform.get('certificates')['controls'];let i=index;\">\r\n\r\n           <div class=\"row\" [formGroupName]=\"i\">\r\n\r\n               <div class=\"col-md-6\">\r\n                  <label>Desctiption</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"certificateName\" name=\"certificateName\">\r\n              </div>\r\n              \r\n\r\n              <div class=\"col-md-6\">\r\n                  <label>file upload</label>\r\n                  <input type=\"file\" class=\"form-control\"  [id]=\"'file'+i\" (change)=\"handleFileSelect(file,$event,i)\" name=\"file\">\r\n              </div>\r\n\r\n          </div>\r\n          </div>\r\n          \r\n          <br/>\r\n      \r\n          <button class=\"btn btn-primary\" (click)=\"addmorecertificate()\">Add More certifcate </button>\r\n      \r\n\r\n            <!-----certificates end--->\r\n\r\n              <hr>\r\n\r\n            <!--addition information start-->\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label> Additional Information <span style=\"color:red;\">*</span></label>\r\n                <textarea type=\"textarea\" class=\"form-control\" rows=\"5\" formControlName=\"AdditionalInformation\"\r\n                  name=\"AdditionalInformation\"> </textarea>\r\n                <!-- <span style=\"color:red\"\r\n                  *ngIf=\"myform.get('AdditionalInformation').touched && myform.get('AdditionalInformation').invalid\">\r\n                  <span *ngIf=\"myform.get('AdditionalInformation').errors.required\">\r\n                    Additional Information is required\r\n                  </span>\r\n                </span> -->\r\n              </div>\r\n            </div>\r\n            <br />\r\n\r\n            \r\n            <!--addition information end-->\r\n\r\n\r\n              <p> &nbsp; &nbsp; &nbsp; I certify that the information given above & in the enclosed document are true to the best of my knowledge \r\n               and belief and nothing has been concealed therein. I am aware of the fact that if the information given by me is \r\n               proved false/not true, I will have to face the criminal proceedings as per provision of Section 177, 197, 198, 199 a\r\n               nd 200 of IPC & any other suitable provision of the Law. Also all the benefit availed by me shall be summarily \r\n               withdrawn and my application shall liable for disqualification.\r\n              </p>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"row\">\r\n\r\n                  <div class=\"col-md-4\">\r\n                  <label>place:</label><br />\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"place\"/>\r\n                  <label>date:</label><br />\r\n                  <input type=\"date\" class=\"form-control\" formControlName=\"date\"/>\r\n\r\n        \r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n\r\n                  <label class=\"signature\">Image Upload :</label><br />\r\n      \r\n                  <!-- for upload button -->\r\n                  <div class=\"input-group\" style=\"margin-top:10px \">\r\n                    <!-- <input  type=\"file\" accept='image/*' (change)=\"image_method($event)\" /> -->\r\n                    <input name=\"file\" type=\"file\" (change)=\"image_method($event)\">\r\n                    <img [src]=\"'data:image/jpg;base64,'+ImageData?.changingThisBreaksApplicationSecurity\" alt=\"path not correct\" />\r\n                     <!-- <input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\"/> -->\r\n                  </div>\r\n                \r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                  <label class=\"signature\">Sign Upload :</label><br />\r\n                 \r\n                  <!-- for upload button -->\r\n                  <div class=\"input-group\" style=\"margin-top:10px \">\r\n                    <input name=\"file\"  type=\"file\" (change)=\"sign_method($event)\"/>\r\n                    <img [src]=\"'data:image/jpg;base64,'+signImg?.changingThisBreaksApplicationSecurity\" alt=\"path not correct\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          \r\n            </div>\r\n            <br>\r\n            <br>\r\n            <!-- ----------------------------------------- -->\r\n\r\n            <div>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\">Save and\r\n                Continue</button>&nbsp;\r\n              <button type=\"button\" class=\"btn btn-primary\">Save As Draft</button>&nbsp;\r\n              <!-- <button type=\"button\" class=\"btn btn-primary\">Edit</button>&nbsp; -->\r\n              <!-- <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!fixedForm.valid\" (click)=\"pageRouting();\">\r\n                Preview \r\n                   </button>&nbsp; -->\r\n              <!-- <button type=\"button\" class=\"btn btn-primary\">Finish and Make Payment</button>&nbsp; -->\r\n            </div>\r\n\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/employeementinfo/employeementinfo.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/employeementinfo/employeementinfo.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #8e8c8c;\n  font-size: 14px; }\n\n.container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto; }\n\nli.details_blk {\n  font-size: 14px;\n  padding: 0px; }\n\na {\n  color: black; }\n\n/* body {\r\n    background: #efefef\r\n} */\n\n.badge-light {\n  font-size: 20px;\n  border: 1px solid #32BB50;\n  border-radius: 50%;\n  padding: 6px;\n  width: 35px;\n  text-align: center;\n  height: 35px; }\n\n.list_anchor {\n  padding: 12px 20px;\n  display: block;\n  border-bottom: 1px solid #e3e3e3;\n  background: #f5efef;\n  transition-duration: 0.6s; }\n\n.list_anchor:hover {\n  text-decoration: none;\n  background: #ffffff; }\n\n.list_anchor:hover .badge-light {\n  background: green;\n  color: #fff; }\n\ninput[type=text] {\n  background-color: #FAFAFA; }\n\n/* .form-control {\r\n\r\n    background-color: #FAFAFA;\r\n    border: 1px solid #ecebeb;\r\n} */\n\nbt {\n  background-color: #62CDBE; }\n\n.qualification {\n  position: relative;\n  margin-top: 20px; }\n\n.btn3 {\n  position: absolute;\n  right: 10px;\n  top: -12px; }\n\n.btn2 {\n  font-size: 0.875rem;\n  line-height: 0.5;\n  margin-right: 20px; }\n\n.btn2 i {\n  font-size: 15px; }\n\n.attachment {\n  color: white;\n  background-color: #62CDBE;\n  padding: 2px;\n  border-radius: 6px;\n  vertical-align: center; }\n\n.navbar > .container {\n  margin-top: -15px; }\n\ninput[type=radio] {\n  border: 10px;\n  width: 50%;\n  height: 20px;\n  color: #7b29ff; }\n\nh4 {\n  font-size: 16px; }\n\n.prize {\n  position: relative;\n  top: 25px; }\n\n.btn4 {\n  position: relative;\n  top: 46px; }\n\n.signature {\n  padding-top: 60px; }\n\n/*Radio box*/\n\n/* input[type=\"radio\"] + .label-text:before{\r\ncontent: \"\\f111\";\r\nfont-family: \"Font Awesome 5 Free\";\r\nspeak: none;\r\nfont-style: normal;\r\nfont-variant: normal;\r\ntext-transform: none;\r\nline-height: 1;\r\n-webkit-font-smoothing:antialiased;\r\nwidth: 1em;\r\ndisplay: inline-block;\r\nmargin-right: 5px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + .label-text:before{\r\ncontent: \"\\f192\";\r\ncolor: #8e44ad;\r\nanimation: effect 250ms ease-in;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled + .label-text{\r\ncolor: #aaa;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled + .label-text:before{\r\ncontent: \"\\f111\";\r\ncolor: #ccc;\r\n} */\n\n/*Radio Toggle*/\n\n/* .toggle input[type=\"radio\"] + .label-text:before{\r\ncontent: \"\\f204\";\r\nfont-family: \"Font Awesome 5 Free\";\r\nspeak: none;\r\nfont-style: normal;\r\nfont-weight: 900;\r\nfont-variant: normal;\r\ntext-transform: none;\r\nline-height: 1;\r\n-webkit-font-smoothing:antialiased;\r\nwidth: 1em;\r\ndisplay: inline-block;\r\nmargin-right: 10px;\r\n}\r\n\r\n.toggle input[type=\"radio\"]:checked + .label-text:before{\r\ncontent: \"\\f205\";\r\ncolor: #16a085;\r\nanimation: effect 250ms ease-in;\r\n}\r\n\r\n.toggle input[type=\"radio\"]:disabled + .label-text{\r\ncolor: #aaa;\r\n}\r\n*/\n\n.toggle input[type=\"radio\"]:disabled + .label-text:before {\n  content: \"\\f204\";\n  color: #ec1414; }\n\n/* @keyframes effect{\r\n0%{transform: scale(0);}\r\n25%{transform: scale(1.3);}\r\n75%{transform: scale(1.4);}\r\n100%{transform: scale(1);}\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lbXBsb3llZW1lbnRpbmZvL0Q6XFxpbXRhYy1yZWNydWl0bWVudC1naXRcXGltdGFjLXJlY3J1aXRtZW50XFxyZWNydWl0bWVudC11aS9zcmNcXGFwcFxcaG9tZVxcZW1wbG95ZWVtZW50aW5mb1xcZW1wbG95ZWVtZW50aW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9lbXBsb3llZW1lbnRpbmZvL2VtcGxveWVlbWVudGluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7O0dDRkc7O0FETUg7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCOzs7O0dDTkc7O0FEWUg7RUFDSSx5QkFDSixFQUFBOztBQUdBO0VBRUksa0JBQWtCO0VBQ2xCLGdCQUFlLEVBQUE7O0FBR25CO0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBSWQ7RUFFSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFpQixFQUFBOztBQUdyQjtFQUVJLGVBQWMsRUFBQTs7QUFTbEI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBd0IsRUFBQTs7QUFFNUI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBRUksa0JBQWlCO0VBQ2pCLFNBQVEsRUFBQTs7QUFFWjtFQUVJLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBRWI7RUFFSSxpQkFBZ0IsRUFBQTs7QUFHcEIsWUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dDVEc7O0FEc0NILGVBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2RDOztBRHVDRDtFQUNBLGdCQUFnQjtFQUNoQixjQUF1QixFQUFBOztBQUl2Qjs7Ozs7R0NuQ0ciLCJmaWxlIjoic3JjL2FwcC9ob21lL2VtcGxveWVlbWVudGluZm8vZW1wbG95ZWVtZW50aW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGNvbG9yOiAjOGU4YzhjO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcblxyXG5saS5kZXRhaWxzX2JsayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWZcclxufSAqL1xyXG5cclxuLmJhZGdlLWxpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMkJCNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVlZmVmO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0X2FuY2hvcjpob3ZlciAuYmFkZ2UtbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4vKiAuZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWJlYjtcclxufSAqL1xyXG5cclxuYnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRVxyXG59XHJcblxyXG5cclxuLnF1YWxpZmljYXRpb25cclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcblxyXG4uYnRuM1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogLTEycHg7XHJcbn1cclxuXHJcblxyXG4uYnRuMiBcclxue1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxufVxyXG5cclxuLmJ0bjIgaVxyXG57XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIFxyXG59XHJcblxyXG4vLyAuc2FtcGxlZm9vdGVyIHtcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjEwNDAzLCAjRUUyNTA5KTtcclxuLy8gfVxyXG5cclxuLmF0dGFjaG1lbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXI+LmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMTIzLCA0MSwgMjU1KTtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnByaXplXHJcbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjI1cHg7XHJcbn1cclxuLmJ0bjRcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0NnB4O1xyXG59XHJcbi5zaWduYXR1cmVcclxue1xyXG4gICAgcGFkZGluZy10b3A6NjBweDtcclxufVxyXG5cclxuLypSYWRpbyBib3gqL1xyXG5cclxuLyogaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjExMVwiO1xyXG5mb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbnNwZWFrOiBub25lO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG50ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxubGluZS1oZWlnaHQ6IDE7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbndpZHRoOiAxZW07XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjE5MlwiO1xyXG5jb2xvcjogIzhlNDRhZDtcclxuYW5pbWF0aW9uOiBlZmZlY3QgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHR7XHJcbmNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbmNvbG9yOiAjY2NjO1xyXG59ICovXHJcblxyXG4vKlJhZGlvIFRvZ2dsZSovXHJcblxyXG4vKiAudG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYyMDRcIjtcclxuZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG5zcGVhazogbm9uZTtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5mb250LXZhcmlhbnQ6IG5vcm1hbDtcclxudGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbmxpbmUtaGVpZ2h0OiAxO1xyXG4td2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO1xyXG53aWR0aDogMWVtO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYyMDVcIjtcclxuY29sb3I6ICMxNmEwODU7XHJcbmFuaW1hdGlvbjogZWZmZWN0IDI1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHR7XHJcbmNvbG9yOiAjYWFhO1xyXG59XHJcbiovXHJcbi50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNFwiO1xyXG5jb2xvcjogcmdiKDIzNiwgMjAsIDIwKTtcclxufSBcclxuXHJcblxyXG4vKiBAa2V5ZnJhbWVzIGVmZmVjdHtcclxuMCV7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XHJcbjI1JXt0cmFuc2Zvcm06IHNjYWxlKDEuMyk7fVxyXG43NSV7dHJhbnNmb3JtOiBzY2FsZSgxLjQpO31cclxuMTAwJXt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxufSAqL1xyXG5cclxuIiwibGFiZWwge1xuICBjb2xvcjogIzhlOGM4YztcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxubGkuZGV0YWlsc19ibGsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi8qIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZlxyXG59ICovXG4uYmFkZ2UtbGlnaHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMkJCNTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM1cHg7IH1cblxuLmxpc3RfYW5jaG9yIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gIGJhY2tncm91bmQ6ICNmNWVmZWY7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7IH1cblxuLmxpc3RfYW5jaG9yOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XG5cbi5saXN0X2FuY2hvcjpob3ZlciAuYmFkZ2UtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7IH1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7IH1cblxuLyogLmZvcm0tY29udHJvbCB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2ViZWI7XHJcbn0gKi9cbmJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRTsgfVxuXG4ucXVhbGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4uYnRuMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTEycHg7IH1cblxuLmJ0bjIge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMC41O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuLmJ0bjIgaSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG4uYXR0YWNobWVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cblxuLm5hdmJhciA+IC5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtMTVweDsgfVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJvcmRlcjogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzdiMjlmZjsgfVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4ucHJpemUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjVweDsgfVxuXG4uYnRuNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NnB4OyB9XG5cbi5zaWduYXR1cmUge1xuICBwYWRkaW5nLXRvcDogNjBweDsgfVxuXG4vKlJhZGlvIGJveCovXG4vKiBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbmZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuc3BlYWs6IG5vbmU7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC12YXJpYW50OiBub3JtYWw7XHJcbnRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5saW5lLWhlaWdodDogMTtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxud2lkdGg6IDFlbTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTkyXCI7XHJcbmNvbG9yOiAjOGU0NGFkO1xyXG5hbmltYXRpb246IGVmZmVjdCAyNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYxMTFcIjtcclxuY29sb3I6ICNjY2M7XHJcbn0gKi9cbi8qUmFkaW8gVG9nZ2xlKi9cbi8qIC50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNFwiO1xyXG5mb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbnNwZWFrOiBub25lO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA5MDA7XHJcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG50ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxubGluZS1oZWlnaHQ6IDE7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbndpZHRoOiAxZW07XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNVwiO1xyXG5jb2xvcjogIzE2YTA4NTtcclxuYW5pbWF0aW9uOiBlZmZlY3QgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuKi9cbi50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDRcIjtcbiAgY29sb3I6ICNlYzE0MTQ7IH1cblxuLyogQGtleWZyYW1lcyBlZmZlY3R7XHJcbjAle3RyYW5zZm9ybTogc2NhbGUoMCk7fVxyXG4yNSV7dHJhbnNmb3JtOiBzY2FsZSgxLjMpO31cclxuNzUle3RyYW5zZm9ybTogc2NhbGUoMS40KTt9XHJcbjEwMCV7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/employeementinfo/employeementinfo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/employeementinfo/employeementinfo.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeementinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeementinfoComponent", function() { return EmployeementinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





// import { FormatInputPathObject } from 'path';

var EmployeementinfoComponent = /** @class */ (function () {
    function EmployeementinfoComponent(fb, dataservice, router, route, sanitizer) {
        this.fb = fb;
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.reference = [];
        this.educationalqualification = [];
        this.filedata = [];
        ////////////////////////////////////////////
        //  get Exams(){
        //   return this.productForm.get('exam_points') as FormArray;
        // }
        // addMoreExam(){
        //   this.Exams.push(this.fb.group({point:''}));
        // }
        // //////////////////////////////////////////////////
        // get Reference(){
        //   return this.productForm.get('ref_points') as FormArray;
        // }
        // // addReference(){
        // //   this.Reference.push(this.fb.group({points:''}));
        // // }
        ////////////////////////////////////////////
        this.isvalid = true;
        ////////////////////////////////////////////  
        this.set = true;
        ////////////////////////////////////////////
        this.value = true;
        this.showSelected = false;
    }
    EmployeementinfoComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            presentEmployment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            NameofEmp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            designation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Employment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            PayandGrade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            DateOfIncrement: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            presentEmployer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            BasicPay: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            NoticePeriod: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            disqualified: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            dismissed: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            Criminalcase: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            chargesheet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            chargesheeted: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            convicted: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            convicteddetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            reference: this.fb.array([this.createData()]),
            qualification: this.fb.array([this.qualification()]),
            experiencedetails: this.fb.array([this.addTotalExperience()]),
            achievements: this.fb.array([this.addPrizes()]),
            certificates: this.fb.array([this.addcertificate()]),
            AdditionalInformation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            place: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]]
        });
        this.designationget();
        this.getcategorydetails();
        this.employeeget();
        this.appicationid();
        this.id = this.route.snapshot.queryParamMap.get('applicationid');
        console.log(this.id);
        // this.id = localStorage.getItem('applicationid');
        this.employeedata();
    };
    EmployeementinfoComponent.prototype.getcategorydetails = function () {
        var _this = this;
        this.dataservice.getcategeorydata().subscribe(function (data) {
            _this.Category = data.resultData;
        });
    };
    // addReferenceFormGroup(): FormGroup {
    //   return this.fb.group({
    //     referenceName: ['', Validators.required],
    //     occupation: ['', Validators.required],
    //     Address: ['', Validators.required],
    //     Email: ["", [Validators.required,]]
    //   });
    // }
    EmployeementinfoComponent.prototype.qualification = function () {
        return this.fb.group({
            qualification: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            subjects: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            board: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            yearPassing: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            classOfDivision: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            maxMarks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            obtinedMarks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            percentage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            distinction: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            certificate: [""]
        });
    };
    // addSkillButtonClick():void {
    //   (<FormArray>this.myform.get('reference')).push(this.addReferenceFormGroup());
    // }
    EmployeementinfoComponent.prototype.addqualification = function () {
        this.myform.get('qualification').push(this.qualification());
    };
    EmployeementinfoComponent.prototype.createData = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    /* total experience start */
    EmployeementinfoComponent.prototype.addmoretotal = function () {
        this.myform.get('experiencedetails').push(this.addTotalExperience());
    };
    EmployeementinfoComponent.prototype.addTotalExperience = function () {
        return this.fb.group({
            nameOfEmployer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            designation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            employmentType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pay: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            numberOfYears: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EmployeementinfoComponent.prototype.removetotalexperience = function (add) {
        this.myform.get('experiencedetails').removeAt(add);
    };
    /* total experience end */
    /* prize start */
    EmployeementinfoComponent.prototype.addmoreprizes = function () {
        this.myform.get('achievements').push(this.addPrizes());
    };
    EmployeementinfoComponent.prototype.addPrizes = function () {
        return this.fb.group({
            achievementDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    EmployeementinfoComponent.prototype.removeprize = function (add) {
        this.myform.get('achievements').removeAt(add);
    };
    /* prize end */
    /* certificate start */
    EmployeementinfoComponent.prototype.addmorecertificate = function () {
        this.myform.get('certificates').push(this.addcertificate());
    };
    EmployeementinfoComponent.prototype.addcertificate = function () {
        return this.fb.group({
            certificateName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            certificateImage: [""]
            // this.base64textString
        });
    };
    EmployeementinfoComponent.prototype.removecertificate = function (add) {
        this.myform.get('certificates').removeAt(add);
    };
    /* certificate end */
    EmployeementinfoComponent.prototype.remove = function (add) {
        this.myform.get('reference').removeAt(add);
    };
    EmployeementinfoComponent.prototype.removequalification = function (add) {
        this.myform.get('qualification').removeAt(add);
    };
    EmployeementinfoComponent.prototype.changevalue = function (valid) {
        this.isvalid = valid;
    };
    EmployeementinfoComponent.prototype.setradio = function (valid) {
        this.set = valid;
    };
    EmployeementinfoComponent.prototype.setvalue = function (valid) {
        this.value = valid;
    };
    EmployeementinfoComponent.prototype.sign_method = function (event) {
        var sign = event.target.files;
        var file = sign[0];
        if (sign && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoadeders.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EmployeementinfoComponent.prototype._handleReaderLoadeders = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64thirdimage = btoa(binaryString);
    };
    EmployeementinfoComponent.prototype.image_method = function (event) {
        var img = event.target.files;
        var file = img[0];
        if (img && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoadeds.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EmployeementinfoComponent.prototype._handleReaderLoadeds = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64secondimage = btoa(binaryString);
    };
    //////////////////////////////////////////////////// 
    // designation
    EmployeementinfoComponent.prototype.designationget = function () {
        var _this = this;
        this.dataservice.getdesignationdata().subscribe(function (data) {
            _this.designationList = data.resultData;
            console.log(_this.designationList);
        });
    };
    EmployeementinfoComponent.prototype.employeeget = function () {
        var _this = this;
        this.dataservice.getemployementdata().subscribe(function (data) {
            _this.employeementlist = data.resultData;
            console.log(_this.employeementlist);
        });
    };
    EmployeementinfoComponent.prototype.submit = function () {
        // this.reference.push({
        //    reference:this.myform.get('reference').value,
        //     address:this.myform.get('Address').value,
        //     email:this.myform.get('Email').value
        // });
        var _this = this;
        // this.educationalqualification.push({
        //     qualification: this.myform.get('qualifications').value,
        //     subjects:this.myform.get('group').value,
        //     board:this.myform.get('University').value,
        //     yearPassing:this.myform.get('YearofPassing').value,
        //     classOfDivision: this.myform.get('division').value,
        //     maxMarks:this.myform.get('cgpa').value,
        //     obtinedMarks: this.myform.get('cgpaobtained').value,
        //     percentage:this.myform.get('percentage').value,
        //     distinction:this.myform.get('distinction').value,
        //     certificate:this.base64textString
        // });
        if (this.myform.get('certificates').value && this.myform.get('certificates').value.length) {
            this.myform.get('certificates').value.forEach(function (element, i) {
                if (i === void 0) { i = 0; }
                _this.filedata.forEach(function (file, j) {
                    if (j === void 0) { j = 0; }
                    if (i == j) {
                        element.certificateImage = file;
                    }
                });
            });
        }
        if (this.myform.get('qualification').value && this.myform.get('qualification').value.length) {
            this.myform.get('qualification').value.forEach(function (element, i) {
                if (i === void 0) { i = 0; }
                _this.filedata.forEach(function (file, j) {
                    if (j === void 0) { j = 0; }
                    if (i == j) {
                        element.certificate = file;
                    }
                });
            });
        }
        var requestobj = {};
        requestobj['userId'] = sessionStorage.getItem('userId');
        requestobj['applicationNo'] = this.id;
        requestobj['presentEmployment'] = this.myform.get('presentEmployment').value;
        requestobj['nameOfEmployer'] = this.myform.get('NameofEmp').value,
            requestobj['designationTypeId'] = this.myform.get('designation').value,
            requestobj['employmentTypeId'] = this.myform.get('Employment').value,
            requestobj['pay'] = this.myform.get('PayandGrade').value,
            requestobj['dateOfNextIncrement'] = this.myform.get('DateOfIncrement').value,
            requestobj['permissionFromPresentEmployer'] = this.myform.get('presentEmployer').value,
            requestobj['basicPayAcceptable'] = this.myform.get('BasicPay').value,
            requestobj['noticePeriod'] = this.myform.get('NoticePeriod').value,
            requestobj['disqualifiedInExam'] = this.myform.get('disqualified').value,
            requestobj['dismissed'] = this.myform.get('dismissed').value,
            requestobj['criminalCaseRegistered'] = this.myform.get('Criminalcase').value,
            requestobj['chargeSheeted'] = this.myform.get('chargesheet').value,
            requestobj['chargeSheetDetails'] = this.myform.get('chargesheeted').value,
            requestobj['convictedByCourt'] = this.myform.get('convicted').value,
            requestobj['convictedByCourtDetails'] = this.myform.get('convicteddetails').value,
            requestobj['additionalInfo'] = this.myform.get('AdditionalInformation').value;
        requestobj['photoImage'] = this.base64secondimage;
        requestobj['signatureImage'] = this.base64thirdimage;
        requestobj['references'] = this.myform.get('reference').value,
            requestobj['qualificationsArrayMapper'] = { educationalQualificationsMapper: this.myform.get('qualification').value };
        requestobj['experiencedetails'] = this.myform.get('experiencedetails').value,
            requestobj['achievements'] = this.myform.get('achievements').value,
            requestobj['certificates'] = this.myform.get('certificates').value;
        requestobj['city'] = this.myform.get('place').value;
        requestobj['date'] = this.myform.get('date').value;
        // requestobj['userId'] = sessionStorage.getItem('userId');
        // requestobj['qualification'] = this.myform.get('qualification').value;
        // requestobj['totalExperience'] = this.myform.get('totalexperience').value;
        // requestobj['prizesAndMedals'] = this.myform.get('prize').value;
        // requestobj['certificate'] = this.myform.get('certificates').value; 
        // requestobj['place'] = this.myform.get('place').value;
        // requestobj['date'] = this.myform.get('date').value;
        // requestobj['image']=this.myform.get('imageInput').value;
        console.log(requestobj);
        this.dataservice.employeeinfo(requestobj).subscribe(function (res) {
            if (res) {
                alert("Registered successfully");
                _this.router.navigate(['/verify']);
            }
        });
    };
    /*get employee data start */
    EmployeementinfoComponent.prototype.setExperiencedetails = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        skillSets.forEach(function (s) {
            formArray.push(_this.fb.group({
                nameOfEmployer: s.nameOfEmployer,
                designation: s.designation,
                employmentType: s.employmentType,
                pay: s.pay,
                numberOfYears: s.numberOfYears
            }));
        });
        return formArray;
    };
    EmployeementinfoComponent.prototype.setAchievenments = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        skillSets.forEach(function (s) {
            formArray.push(_this.fb.group({
                achievementDetails: s.achievementDetails,
            }));
        });
        return formArray;
    };
    EmployeementinfoComponent.prototype.setCertificates = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        skillSets.forEach(function (s) {
            formArray.push(_this.fb.group({
                certificateName: s.certificateName,
            }));
        });
        return formArray;
    };
    EmployeementinfoComponent.prototype.setExistingSkills = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        skillSets.forEach(function (s) {
            formArray.push(_this.fb.group({
                name: s.name,
                position: s.position,
                address: s.address,
                email: s.email
            }));
        });
        return formArray;
    };
    EmployeementinfoComponent.prototype.setqualification = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        skillSets.forEach(function (s) {
            // this.educationalimage='data:image/jpeg;base64,' + s.certificate;
            _this.educationalimage = s.certificate;
            console.log(_this.educationalimage);
            formArray.push(_this.fb.group({
                qualification: s.qualification,
                subjects: s.subjects,
                board: s.board,
                yearPassing: s.yearPassing,
                classOfDivision: s.classOfDivision,
                maxMarks: s.maxMarks,
                obtinedMarks: s.obtinedMarks,
                percentage: s.percentage,
                distinction: s.distinction,
                certificate: s.certificate
            }));
            _this.imagedatas = _this.sanitizer.bypassSecurityTrustResourceUrl(s.certificate);
        });
        console.log(formArray.value);
        return formArray;
    };
    EmployeementinfoComponent.prototype.employeedata = function () {
        var _this = this;
        this.dataservice.getemployeedata(this.id).subscribe(function (res) {
            _this.resobj = res['resultData'];
            // this.referencedata=this.resobj.references
            _this.educationalimage = _this.resobj.photoImage;
            _this.imgSignatureImage = _this.resobj.signatureImage;
            _this.ImageData = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.educationalimage);
            // this.anotherImageData= this.ImageData.changingThisBreaksApplicationSecurity;
            _this.signImg = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.imgSignatureImage);
            console.log(_this.ImageData);
            _this.myform.patchValue({
                'presentEmployment': _this.resobj.presentEmployment,
                'NameofEmp': _this.resobj.nameOfEmployer,
                'designation': _this.resobj.designationTypeId,
                'Employment': _this.resobj.employmentTypeId,
                'PayandGrade': _this.resobj.pay,
                'DateOfIncrement': _this.resobj.dateOfNextIncrement,
                'presentEmployer': _this.resobj.permissionFromPresentEmployer,
                'BasicPay': _this.resobj.basicPayAcceptable,
                'NoticePeriod': _this.resobj.noticePeriod,
                'disqualified': _this.resobj.disqualifiedInExam,
                'dismissed': _this.resobj.dismissed,
                'Criminalcase': _this.resobj.criminalCaseRegistered,
                'chargesheet': _this.resobj.chargeSheeted,
                'chargesheeted': _this.resobj.chargeSheetDetails,
                'convicted': _this.resobj.convictedByCourt,
                'convicteddetails': _this.resobj.convictedByCourtDetails,
                'AdditionalInformation': _this.resobj.additionalInfo,
                'place': _this.resobj.city,
                'date': _this.resobj.date
            });
            _this.myform.setControl('reference', _this.setExistingSkills(_this.resobj.references));
            _this.myform.setControl('qualification', _this.setqualification(_this.resobj.qualificationsArrayMapper.educationalQualificationsMapper));
            _this.myform.setControl('experiencedetails', _this.setExperiencedetails(_this.resobj.experiencedetails));
            _this.myform.setControl('achievements', _this.setAchievenments(_this.resobj.achievements));
            _this.myform.setControl('certificates', _this.setCertificates(_this.resobj.certificates));
        });
    };
    EmployeementinfoComponent.prototype.transform = function () {
        var c = this.sanitizer.bypassSecurityTrustResourceUrl(this.educationalimage);
        return c;
    };
    EmployeementinfoComponent.prototype.appicationid = function () {
        var _this = this;
        var requestobj = {};
        requestobj['positionId'] = localStorage.getItem('applyid');
        requestobj['userId'] = sessionStorage.getItem('userId');
        this.dataservice.getuserlistByIds(requestobj).subscribe(function (res) {
            _this.applicationNo = res.resultData;
            console.log(res);
        });
    };
    EmployeementinfoComponent.prototype.ToggleButton = function () {
        this.showSelected = !this.showSelected;
    };
    EmployeementinfoComponent.prototype.addmore = function () {
        this.myform.get('reference').push(this.createData());
    };
    EmployeementinfoComponent.prototype.handleFileSelect = function (i, evt, index) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EmployeementinfoComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        //this.filedata.push({i:this.base64textString});
        this.filedata.push(this.base64textString);
        console.log(this.filedata);
    };
    EmployeementinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeementinfo',
            template: __webpack_require__(/*! ./employeementinfo.component.html */ "./src/app/home/employeementinfo/employeementinfo.component.html"),
            styles: [__webpack_require__(/*! ./employeementinfo.component.scss */ "./src/app/home/employeementinfo/employeementinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], EmployeementinfoComponent);
    return EmployeementinfoComponent;
}());



/***/ }),

/***/ "./src/app/home/employementtype/employementtype.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/employementtype/employementtype.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i>Employment Type</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n      data-backdrop=\"static\" data-target=\"#myModal\" (click)=\"addEmployeementType(myForm)\">Add</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <!-- <th>Id</th> -->\r\n        <th>Employment Type</th>\r\n        <th>Updated By</th>\r\n        <th>Updated Date</th>\r\n        <th>Action</th>\r\n        <th>Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let emp of employeeList | filter:term |paginate: { itemsPerPage: 5, currentPage: p };let i=index\">\r\n        <!-- <td>{{i+1}}</td> -->\r\n        <td>{{emp.employmentName}}</td>\r\n        <td>{{emp.email}}</td>\r\n        <td>{{emp.updatedDate}}</td>\r\n        <td *ngIf=\"emp.status == 'Active'\"><span [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\" (click)=\"statusEmployement(emp)\">Disable</span></td>\r\n        <td *ngIf=\"emp.status == 'Inactive'\"><span [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\" (click)=\"statusEmployement(emp)\">Enable</span></td>\r\n        <td>\r\n          <span>\r\n            <span (click)=\"editEmploymentType(emp.id)\" data-toggle=\"modal\" data-target=\"#myModal1\"\r\n              class=\"glyphicon glyphicon-pencil\">\r\n              <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n            </span>\r\n          </span>\r\n        </td>\r\n        <td>\r\n          <!-- <span>\r\n            <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\r\n              <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n            </span>\r\n          </span> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n <!-- Add Employement Type Modal-->\r\n\r\n\r\n <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <form #myForm=\"ngForm\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Employment Type</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"myForm.reset()\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <label>Employment Type</label>\r\n    \r\n            <input type=\"text\" placeholder=\"Enter Employement Type\" [(ngModel)]=\"employeementType\" name=\"employmentType\"\r\n              class=\"form-control\" #employeement=\"ngModel\" required pattern=\"[a-zA-Z ]*\">\r\n              <span style=\"color:red\" *ngIf=\"employeement.invalid &&employeement.touched \">\r\n              \r\n                  <span *ngIf=\"employeement.errors.required\">\r\n                    Employement Type is required.\r\n                  </span>\r\n                  <span *ngIf=\"employeement.errors.pattern\">\r\n                Please do not enter numbers .\r\n                  </span>\r\n               \r\n              </span> \r\n            </div>\r\n         \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"createEmployee(employeementType)\" data-dismiss=\"modal\" [disabled]=\"myForm.invalid\" >Submit</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n    \r\n  </div>\r\n</div> \r\n\r\n <!-- Add Employement Type Modal-->\r\n\r\n <!-- Update Employement Type Modal-->\r\n\r\n<div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <form [formGroup]=\"EmploymentTypeForm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update Employment Type</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <label>Employment Type</label>\r\n            <input type=\"text\" placeholder=\"Enter Employeement Type\" formControlName=\"employmentName\" name=\"eventName\"\r\n              class=\"form-control\">\r\n              <span style=\"color:red\" *ngIf = \"EmploymentTypeForm.get('employmentName').touched && EmploymentTypeForm.get('employmentName').invalid\">\r\n                  <span *ngIf = \"EmploymentTypeForm.get('employmentName').errors.required\">\r\n                      Employment Type is required\r\n                </span>\r\n              </span> \r\n            </div>\r\n\r\n          <!-- <input type=\"text\" formControlName=\"id\" name=\"id\" hidden> -->\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <!-- <button type=\"submit\"   data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (submit)=\"addata(addforms.value)\" \r\n           >Submit</button> -->\r\n         <!--- <button type=\"submit\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"saveEvent(specialEventForm)\"\r\n           >Submit</button>-->\r\n          <button type=\"button\" [disabled]=\"EmploymentTypeForm.invalid\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"updateEmployeement(EmploymentTypeForm.value)\"\r\n            >Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n <!-- Update Employement Type Modal-->"

/***/ }),

/***/ "./src/app/home/employementtype/employementtype.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/employementtype/employementtype.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1wbG95ZW1lbnR0eXBlL2VtcGxveWVtZW50dHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/employementtype/employementtype.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/employementtype/employementtype.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployementtypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployementtypeComponent", function() { return EmployementtypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





var EmployementtypeComponent = /** @class */ (function () {
    function EmployementtypeComponent(http, fb, dataservice) {
        this.http = http;
        this.fb = fb;
        this.dataservice = dataservice;
    }
    EmployementtypeComponent.prototype.ngOnInit = function () {
        this.getemployeee();
        this.EmploymentTypeForm = this.fb.group({
            'employmentName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EmployementtypeComponent.prototype.getemployeee = function () {
        var _this = this;
        this.dataservice.getemployementdata().subscribe(function (data) {
            _this.employeeList = data.resultData;
            console.log(_this.employeeList);
        });
    };
    EmployementtypeComponent.prototype.createEmployee = function (employeementType) {
        var _this = this;
        var requestObj = {};
        requestObj['employmentName'] = employeementType;
        requestObj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.addEmployementType(requestObj).subscribe(function (data) {
            _this.createEmployment = data;
            console.log(_this.createEmployment);
            // this.employeementType = '';
            _this.getemployeee();
        });
        //  this.myForm.reset()
    };
    EmployementtypeComponent.prototype.addEmployeementType = function (myForm) {
        myForm.reset();
    };
    EmployementtypeComponent.prototype.editEmploymentType = function (id) {
        var _this = this;
        this.dataservice.getEmploymentById(id).subscribe(function (data) {
            _this.getemployeeeById = data.resultData;
            _this.EmploymentTypeForm.setValue({
                'employmentName': _this.getemployeeeById.employmentName
            });
        });
    };
    EmployementtypeComponent.prototype.updateEmployeement = function (updateEmploymentById) {
        var _this = this;
        updateEmploymentById['id'] = this.getemployeeeById.id;
        updateEmploymentById['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.updateEmployementById(updateEmploymentById).subscribe(function (data) {
            _this.employmentUpdate = data;
            _this.getemployeee();
            console.log(_this.employmentUpdate);
        });
    };
    EmployementtypeComponent.prototype.statusEmployement = function (data) {
        var _this = this;
        var positionobj = {};
        positionobj['id'] = data.id;
        positionobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        if (data.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        positionobj['status'] = status;
        this.dataservice.EmployementStatus(positionobj).subscribe(function (data) {
            _this.statusData = data;
            _this.getemployeee();
        });
    };
    EmployementtypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employementtype',
            template: __webpack_require__(/*! ./employementtype.component.html */ "./src/app/home/employementtype/employementtype.component.html"),
            styles: [__webpack_require__(/*! ./employementtype.component.scss */ "./src/app/home/employementtype/employementtype.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], EmployementtypeComponent);
    return EmployementtypeComponent;
}());



/***/ }),

/***/ "./src/app/home/ethenicgroup/ethenicgroup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/ethenicgroup/ethenicgroup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Ethenic</h1>\r\n    <p>Create Ethenic Details</p>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n     <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> \r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <button class=\"btn btn-danger mr-2 mb-2 pull-right\" data-toggle=\"modal\" data-backdrop=\"static\"  data-target=\"#myModal\"><i class=\"fa fa-plus\"></i>Add Ethenic</button>\r\n    </div>\r\n  </div>\r\n<div class=\"row\">\r\n \r\n  <div class=\"col-md-12\">\r\n    \r\n    <div class=\"tile\">\r\n      <h3 class=\"tile-title\">Ethnic Details </h3>\r\n   \r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Group Name</th>\r\n            <th>Group Type</th>\r\n             <th>Action</th>\r\n             <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of ethenicData | filter:term |paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>\r\n              <div *ngIf=\"!item.isEditable2\">\r\n                  {{item.ethnicName}}\r\n              </div>\r\n             \r\n              <select *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.ethnicName\">\r\n                  <option value=\"white\">White</option>\r\n                  <option value=\"Mixed\">Mixed</option>\r\n                  <option value=\"British\">British</option>\r\n                  <option value=\"Black British\">Black British</option>\r\n                </select>\r\n             \r\n            </td>\r\n              <td>\r\n                <div *ngIf=\"!item.isEditable2\">\r\n                    {{item.ethnicType}}\r\n                </div>\r\n                <input type=\"text\" *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.ethnicType\" required>\r\n                <span class=\"text text-danger\" *ngIf=\"!item.ethnicType\">Ethenic Name is Required</span>\r\n              </td>\r\n             \r\n            <td>\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"item.isEditable2=!item.isEditable2\" *ngIf=\"!item.isEditable2\">Edit</button>\r\n                <button  class=\"btn btn-success btn-sm\" [disabled]=\"!item.ethnicType\" *ngIf=\"item.isEditable2\" (click)=\"item.isEditable2=!item.isEditable2;updateEthenicData(item)\">Save</button>                     \r\n            </td>\r\n            <td>\r\n                <button  class=\"btn btn-warning btn-sm\"  *ngIf=\"item.isEditable2\" (click)=\"item.isEditable2=!item.isEditable2\">Cancel</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n  <!-- Modal -->\r\n\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <form [formGroup]=\"ethenicForm\" (ngSubmit)=\"createEthenic(ethenicForm.value);ethenicForm.reset();\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Ethenic Details</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"form-group\">\r\n                <label for=\"groupname\">Group Name:</label>\r\n                 <select class=\"form-control\"  formControlName=\"ethnicName\">\r\n                    <option value=\"white\">White</option>\r\n                    <option value=\"Mixed\">Mixed</option>\r\n                    <option value=\"British\">British</option>\r\n                    <option value=\"Black British\">Black British</option>\r\n                  </select>\r\n                  <span class=\"text text-danger\" *ngIf=\"ethenicForm.controls['ethnicName'].invalid && ethenicForm.controls['ethnicName'].touched\">Ethenic Name is required</span>\r\n              </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"grouptype\">Group Type:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"grouptype\"  formControlName=\"ethnicType\"  required>\r\n              <span class=\"text text-danger\" *ngIf=\"ethenicForm.controls['ethnicType'].invalid && ethenicForm.controls['ethnicType'].touched\">Ethenic Type is required</span>\r\n            </div>\r\n          \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          <input type=\"submit\"  class=\"btn btn-success\" [disabled]=\"ethenicForm.invalid\"  value=\"Submit\">\r\n          </div>\r\n      </div>\r\n      </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/ethenicgroup/ethenicgroup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/ethenicgroup/ethenicgroup.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXRoZW5pY2dyb3VwL2V0aGVuaWNncm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/ethenicgroup/ethenicgroup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/ethenicgroup/ethenicgroup.component.ts ***!
  \*************************************************************/
/*! exports provided: EthenicgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthenicgroupComponent", function() { return EthenicgroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EthenicgroupComponent = /** @class */ (function () {
    function EthenicgroupComponent(dataService, fb) {
        this.dataService = dataService;
        this.fb = fb;
        this.ethenicData = [];
        this.getAllEthenic();
    }
    EthenicgroupComponent.prototype.createEthenic = function (formData) {
        var _this = this;
        $('#myModal').modal('hide');
        this.dataService.setEthenic(formData).subscribe(function (data) {
            _this.getAllEthenic();
        });
    };
    EthenicgroupComponent.prototype.getAllEthenic = function () {
        var _this = this;
        this.dataService.getEthenic().subscribe(function (data) {
            _this.ethenicData = data.resultData;
            console.log("Ethnic Data", _this.ethenicData);
        });
    };
    EthenicgroupComponent.prototype.updateEthenicData = function (item) {
        delete item['isEditable2'];
        this.dataService.updateEthenicData(item).subscribe(function (data) {
        });
    };
    EthenicgroupComponent.prototype.ngOnInit = function () {
        this.ethenicForm = this.fb.group({
            'ethnicType': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'ethnicName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EthenicgroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ethenicgroup',
            template: __webpack_require__(/*! ./ethenicgroup.component.html */ "./src/app/home/ethenicgroup/ethenicgroup.component.html"),
            styles: [__webpack_require__(/*! ./ethenicgroup.component.scss */ "./src/app/home/ethenicgroup/ethenicgroup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EthenicgroupComponent);
    return EthenicgroupComponent;
}());



/***/ }),

/***/ "./src/app/home/feestructure/feestructure.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/feestructure/feestructure.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Fee Struture</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n      data-backdrop=\"static\" data-target=\"#myModal\"  (click)=\"addEmployeementType(position)\">Add</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n  \r\n \r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <!-- <th>Id</th> -->\r\n        <th>Position Type</th>\r\n        <th>Category</th>\r\n        <th>Gender</th>\r\n        <th>Fee Amount</th>\r\n        <th>Fee Status</th>\r\n        <th>Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let data of getfee| filter:term |paginate: { itemsPerPage: 5, currentPage: p };let i=index\">\r\n        <!-- <td>{{i+1}}</td> -->\r\n        <td>{{data.positionType}}</td>\r\n        <td>{{data.catogry}}</td>\r\n        <td>{{data.gender}}</td>\r\n        <td>{{data.feeAmount}}</td>\r\n        <td *ngIf=\"data.feeStatus == 'Active'\"><span [ngClass]=\"{'status1': data.feeStatus=='Inactive', 'status2':data.feeStatus=='Active' }\" (click)=\"feeSturctureStatus(data)\">Disable</span></td>\r\n        <td *ngIf=\"data.feeStatus == 'Inactive'\"><span [ngClass]=\"{'status1': data.feeStatus=='Inactive', 'status2':data.feeStatus=='Active' }\" (click)=\"feeSturctureStatus(data)\">Enable</span></td>\r\n      <td>\r\n          <span>\r\n            <span (click)=\"editfeestructure(data.id)\" data-toggle=\"modal\" data-target=\"#myModal1\"\r\n              class=\"glyphicon glyphicon-pencil\">\r\n              <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n            </span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n\r\n<!-- Add position modal popup-->\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <form #position=\"ngForm\" (ngSubmit)=\"createPositions\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Fee structure</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"position.reset()\" >&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <label>Category Type</label>\r\n                <select class=\"form-control\" [(ngModel)]= \"categoryTypeId\" (change)=\"getcategoryTypeId($event)\" \r\n                [ngModelOptions]=\"{standalone: true}\"  #category=\"ngModel\"  name=\"Cat\" required>\r\n                <option [ngValue]=\"undefined\" hidden> Select Category Type</option> \r\n                    <option *ngFor=\"let category of categoryList\" [value]=\"category.id\">{{category.categoryName}}</option>\r\n                </select>\r\n                \r\n            <span style=\"color:red\" *ngIf=\"category.invalid && category.touched\">\r\n                <span *ngIf=\"category.errors.required\">\r\n                    Category Type is required.\r\n                </span> \r\n              </span>\r\n              </div>\r\n            <div class=\"col-md-6\">\r\n                <label>Position Type</label>\r\n              <select class=\"form-control\" [(ngModel)]= \"positionTypeId\" (change)=\"getpositionTypeId($event)\" \r\n              [ngModelOptions]=\"{standalone: true}\" #positon= \"ngModel\" name=\"Pot\" required>\r\n              <option [ngValue]=\"undefined\" hidden>Select Position Type</option> \r\n                 \r\n                  <option *ngFor=\"let positionType of datas\" [value]=\"positionType.id\">{{positionType.positionTypeName}}</option>\r\n              </select>\r\n            \r\n              <span style=\"color:red\" *ngIf=\"positon.invalid && positon.touched\">\r\n                <span *ngIf=\"positon.errors.required\">\r\n                    Position Type is required.\r\n                </span> \r\n              </span> \r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <label>Gender</label>\r\n                <select class=\"form-control\" [(ngModel)]= \"gendername\" (change)=\"getgendername($event)\" \r\n                [ngModelOptions]=\"{standalone: true}\" #nameGender= \"ngModel\" name=\"Gender\" required>\r\n                \r\n                    <option [ngValue]=\"undefined\" hidden>Select Gender</option> \r\n                    <option *ngFor=\"let genderName of gender\" [value]=\"genderName.value\">{{genderName.value}}</option>\r\n                </select>\r\n                <span style=\"color:red\" *ngIf=\"nameGender.invalid && nameGender.touched\">\r\n                    <span *ngIf=\"nameGender.errors.required\">\r\n                        Gender is required.\r\n                    </span> \r\n                  </span>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <label>Fee Amount</label>\r\n                  <input type=\"number\" placeholder=\"Fee Amount\" [(ngModel)]=\"feeAmount\" name=\"fee\"\r\n                  class=\"form-control\" #feeamount = \"ngModel\" required>\r\n                  <span style=\"color:red\" *ngIf=\"feeamount.invalid && feeamount.touched\">\r\n                      <span *ngIf=\"feeamount.errors.required\">\r\n                          Fee Amount is required.\r\n                      </span> \r\n                    </span>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" \r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"createfeestructure()\"  data-dismiss=\"modal\" [disabled]=\"position.invalid\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div> \r\n\r\n<!-- Add position modal popup-->\r\n\r\n<!--update position modal popup-->\r\n\r\n<div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <form [formGroup]=\"feeStructureFrom\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update Fee Structure</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <label>Catagory Type</label>\r\n                  <select class=\"form-control\" formControlName=\"categoryId\" (change)=\"getcategoryTypeId($event)\">\r\n                      <option value=\"\">Please select Position Type</option> \r\n                      <option *ngFor=\"let category of categoryList\" [value]=\"category.id\">{{category.categoryName}}</option>\r\n                  </select>\r\n                  <span style=\"color:red\" *ngIf = \"feeStructureFrom.get('categoryId').touched && feeStructureFrom.get('categoryId').invalid\">\r\n                      <span *ngIf = \"feeStructureFrom.get('categoryId').errors.required\">\r\n                          Catagory Type is required\r\n                      </span>\r\n                  </span>\r\n                </div>\r\n            <div class=\"col-md-6\">\r\n              <label>Position Type</label>\r\n              <select class=\"form-control\" formControlName=\"positionTypeId\" (change)=\"getpositionTypeId($event)\">\r\n                  <option value=\"\">Please select Position Type</option> \r\n                  <option *ngFor=\"let positionType of datas\" [value]=\"positionType.id\">{{positionType.positionTypeName}}</option>\r\n              </select>\r\n              <span style=\"color:red\" *ngIf = \"feeStructureFrom.get('positionTypeId').touched && feeStructureFrom.get('positionTypeId').invalid\">\r\n                  <span *ngIf = \"feeStructureFrom.get('positionTypeId').errors.required\">\r\n                      Position Type is required\r\n                  </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <label>Catagory Type</label>\r\n                  <select class=\"form-control\" formControlName=\"gender\" (change)=\"getgendername($event)\">\r\n                      <option value=\"\">Please select Gender</option> \r\n                      <option *ngFor=\"let genderName of gender\" [value]=\"genderName.value\">{{genderName.value}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label>Fee Amount</label>\r\n                    <input type=\"number\" placeholder=\"Please Enter Fee Amount\" formControlName=\"feeAmount\" name=\"regStartDate\"\r\n                    class=\"form-control\">\r\n                    <span style=\"color:red\" *ngIf = \"feeStructureFrom.get('feeAmount').touched && feeStructureFrom.get('feeAmount').invalid\">\r\n                        <span *ngIf = \"feeStructureFrom.get('feeAmount').errors.required\">\r\n                            Fee Amount is required\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"updateFeeStructureById(feeStructureFrom.value)\" [disabled]=\"feeStructureFrom.invalid\">Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div> \r\n\r\n<!--update position modal popup-->"

/***/ }),

/***/ "./src/app/home/feestructure/feestructure.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/feestructure/feestructure.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZmVlc3RydWN0dXJlL2ZlZXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/feestructure/feestructure.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/feestructure/feestructure.component.ts ***!
  \*************************************************************/
/*! exports provided: FeestructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeestructureComponent", function() { return FeestructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





var FeestructureComponent = /** @class */ (function () {
    function FeestructureComponent(http, fb, dataservice) {
        this.http = http;
        this.fb = fb;
        this.dataservice = dataservice;
        this.gender = [
            {
                id: 1,
                value: "Male",
            },
            {
                id: 2,
                value: "Female",
            },
            {
                id: 3,
                value: "Others",
            }
        ];
    }
    Object.defineProperty(FeestructureComponent.prototype, "f", {
        get: function () {
            return this.feeStructureFrom.controls;
        },
        enumerable: true,
        configurable: true
    });
    FeestructureComponent.prototype.ngOnInit = function () {
        this.feeStructureFrom = this.fb.group({
            'categoryId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'positionTypeId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'feeAmount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        console.log(this.gender);
        this.getfeestructure();
        this.getUser();
        this.categoryget();
    };
    FeestructureComponent.prototype.getpositionTypeId = function (args) {
        this.positionTypeId = args.target.value;
        console.log(this.positionTypeId);
    };
    FeestructureComponent.prototype.getcategoryTypeId = function (args) {
        this.categoryTypeId = args.target.value;
        console.log(this.categoryTypeId);
    };
    FeestructureComponent.prototype.getgendername = function (args) {
        this.gendername = args.target.value;
        console.log(this.gendername);
    };
    FeestructureComponent.prototype.categoryget = function () {
        var _this = this;
        this.dataservice.getcategeorydata().subscribe(function (data) {
            _this.categoryList = data.resultData;
            console.log(_this.categoryList);
        });
    };
    FeestructureComponent.prototype.getUser = function () {
        var _this = this;
        this.dataservice.getPositionType().subscribe(function (data) {
            _this.datas = data.resultData;
        });
    };
    FeestructureComponent.prototype.getfeestructure = function () {
        var _this = this;
        this.dataservice.getFeeStructure().subscribe(function (data) {
            _this.getfee = data.resultData;
            console.log(_this.getfee);
        });
    };
    FeestructureComponent.prototype.createfeestructure = function () {
        var _this = this;
        var requestObj = {
            "gender": this.gendername,
            "feeAmount": this.feeAmount,
            "lastUpdatedBy": sessionStorage.getItem('userId'),
            "positionTypeId": this.positionTypeId,
            "categoryId": this.categoryTypeId,
        };
        this.dataservice.createFeeStructure(requestObj).subscribe(function (data) {
            _this.postfeestructure = data.resultData;
            _this.getfeestructure();
        });
    };
    FeestructureComponent.prototype.editfeestructure = function (id) {
        var _this = this;
        this.dataservice.getFeeStructureById(id).subscribe(function (data) {
            _this.getfeestructurebyid = data;
            _this.dataAccess = _this.getfeestructurebyid['resultData'];
            console.log(_this.getfeestructurebyid);
            _this.feeStructureFrom.patchValue({
                'categoryId': _this.dataAccess.categoryId,
                'positionTypeId': _this.dataAccess.positionTypeId,
                'gender': _this.dataAccess.gender,
                'feeAmount': _this.dataAccess.feeAmount
            });
        });
    };
    FeestructureComponent.prototype.updateFeeStructureById = function (updateFeeStructure) {
        var _this = this;
        debugger;
        updateFeeStructure['id'] = this.dataAccess.id;
        updateFeeStructure['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.updateFeeStructureById(updateFeeStructure).subscribe(function (data) {
            _this.updateFeeStructureData = data;
            _this.getfeestructure();
            console.log(_this.updateFeeStructureData);
        });
    };
    FeestructureComponent.prototype.feeSturctureStatus = function (data) {
        var _this = this;
        var deleteobj = {};
        deleteobj['id'] = data.id;
        deleteobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        if (data.feeStatus === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        deleteobj['feeStatus'] = status;
        this.dataservice.stautsFeeStructure(deleteobj).subscribe(function (data) {
            _this.statusData = data;
            if (_this.statusData.errorCode == 'OK') {
                _this.getfeestructure();
            }
        });
    };
    FeestructureComponent.prototype.addEmployeementType = function (position) {
        position.reset();
    };
    FeestructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feestructure',
            template: __webpack_require__(/*! ./feestructure.component.html */ "./src/app/home/feestructure/feestructure.component.html"),
            styles: [__webpack_require__(/*! ./feestructure.component.scss */ "./src/app/home/feestructure/feestructure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], FeestructureComponent);
    return FeestructureComponent;
}());



/***/ }),

/***/ "./src/app/home/help/help.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/help/help.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  help works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/help/help.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/help/help.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/help/help.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/help/help.component.ts ***!
  \*********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/home/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/home/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app sidebar-mini rtl\">\r\n\r\n  <header class=\"app-header\" *ngIf=\"role=='ADMIN'\">\r\n\r\n    <div class=\"logo logo_three\">\r\n      <a href=\"#\"><img src=\"assets/img/img/logo.png\" style=\"width: 169px;\r\n          margin-top: -14px;\r\n          margin-left: -21px;\" alt=\"\"></a>\r\n    </div>\r\n\r\n    <!-- Sidebar toggle button--><a class=\"app-sidebar__toggle\" href=\"#\" style=\"margin-left: 220px;\"\r\n      data-toggle=\"sidebar\" aria-label=\"Hide Sidebar\"></a>\r\n    <!-- Navbar Right Menu-->\r\n    <ul class=\"app-nav\">\r\n      <!--Notification Menu-->\r\n      <!-- User Menu-->\r\n      <li class=\"dropdown\"><a class=\"app-nav__item\" href=\"#\" data-toggle=\"dropdown\" aria-label=\"Open Profile Menu\"><i\r\n            class=\"fa fa-user fa-lg\"></i></a>\r\n        <ul class=\"dropdown-menu settings-menu dropdown-menu-right\">\r\n          <li (click)=\"logoutAction()\"><a class=\"dropdown-item\" href=\"\"><i class=\"fa fa-sign-out fa-lg\"></i> Logout</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </header>\r\n\r\n  <header class=\"app-header1\" *ngIf=\"role=='USER'\">\r\n\r\n      <div class=\"logo logo_three\">\r\n        <a href=\"#\"></a>\r\n      </div>\r\n\r\n      <p>Application Form</p>\r\n      <!-- Navbar Right Menu-->\r\n      <ul class=\"app-nav\">\r\n  \r\n      \r\n        <li class=\"dropdown\"><a class=\"app-nav__item\" href=\"#\" data-toggle=\"dropdown\" aria-label=\"Open Profile Menu\"><i class=\"fa fa-user fa-lg\"></i></a>\r\n          <ul class=\"dropdown-menu settings-menu dropdown-menu-right\">\r\n            <li (click)=\"logoutAction()\"><a class=\"dropdown-item\" href=\"\"><i class=\"fa fa-sign-out fa-lg\"></i> Logout</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </header>\r\n\r\n  \r\n  \r\n  <!-- Sidebar menu-->\r\n  <div class=\"app-sidebar__overlay\" data-toggle=\"sidebar\"></div>\r\n  <aside class=\"app-sidebar\" *ngIf=\"role=='ADMIN'\">\r\n    <div class=\"text-center\" class=\"app-sidebar__user\"><span style=\"color:white;\r\n        font-size: 35px;\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>&nbsp;&nbsp;\r\n      <p class=\"text-center app-sidebar__user-name\">{{username}}</p>\r\n    </div>\r\n\r\n    <ul class=\"app-menu\">\r\n      <!-- <li><a class=\"app-menu__item active\" routerLink=\"/dashboard\" routerLinkActive=\"active\"><i\r\n            class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li> -->\r\n\r\n      <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i\r\n            class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i\r\n            class=\"treeview-indicator fa fa-angle-right\"></i></a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a class=\"treeview-item\" routerLink=\"/registered\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-users\"></i>&nbsp;Registered Candidate</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/administrativeuser\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>&nbsp;Administrative Users</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/employementtype\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-users\"></i>&nbsp;Employment Type</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/positiontype\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-quora\"></i>&nbsp;Position Type</a></li>\r\n\r\n          <li><a class=\"treeview-item\" routerLink=\"/positions\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-calendar\"></i>&nbsp;Position</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/category\" routerLinkActive=\"active\"><i class=\"fa fa-hand-o-up\"\r\n                aria-hidden=\"true\"></i>&nbsp;Category</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/feestructure\" routerLinkActive=\"active\"><i class=\"fa fa-hand-o-up\"\r\n                aria-hidden=\"true\"></i>&nbsp;Fee Structure</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/designation\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Designation</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/applicationlist\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Application List</a></li>\r\n        </ul>\r\n\r\n      </li>\r\n      <hr>\r\n      <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span\r\n            class=\"app-menu__label\">Logout</span></a></li>\r\n    </ul>\r\n    <ul class=\"app-menu\" *ngIf=\"role=='COMMISSIONERUSER'\">\r\n      <li><a class=\"app-menu__item active\" routerLink=\"/dashboard\" routerLinkActive=\"active\"><i\r\n            class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li>\r\n\r\n      <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i\r\n            class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i\r\n            class=\"treeview-indicator fa fa-angle-right\"></i></a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a class=\"treeview-item\" routerLink=\"/sponsordetail\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Commissioner</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/servicerequest\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Order Request</a></li>\r\n        </ul>\r\n\r\n      </li>\r\n      <hr>\r\n      <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span\r\n            class=\"app-menu__label\">Logout</span></a></li>\r\n    </ul>\r\n    <ul class=\"app-menu\" *ngIf=\"role=='SUPPORTUSER'\">\r\n      <li><a class=\"app-menu__item active\" routerLink=\"/dashboard\" routerLinkActive=\"active\"><i\r\n            class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li>\r\n\r\n      <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i\r\n            class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i\r\n            class=\"treeview-indicator fa fa-angle-right\"></i></a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a class=\"treeview-item\" routerLink=\"/servicerequest\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Order Request</a></li>\r\n        </ul>\r\n\r\n      </li>\r\n      <hr>\r\n      <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span\r\n            class=\"app-menu__label\">Logout</span></a></li>\r\n    </ul>\r\n    <ul class=\"app-menu\" *ngIf=\"role=='SUPERADMIN'\">\r\n      <li><a class=\"app-menu__item active\" routerLink=\"/dashboard\" routerLinkActive=\"active\"><i\r\n            class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li>\r\n\r\n      <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i\r\n            class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i\r\n            class=\"treeview-indicator fa fa-angle-right\"></i></a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a class=\"treeview-item\" routerLink=\"/userdetail\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-users\"></i>Users</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/sponsordetail\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Commissioner</a></li>\r\n          <li><a class=\"treeview-item\" routerLink=\"/servicerequest\" routerLinkActive=\"active\"><i\r\n                class=\"icon fa fa-user\"></i>Order Request</a></li>\r\n        </ul>\r\n\r\n      </li>\r\n      <hr>\r\n      <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span\r\n            class=\"app-menu__label\">Logout</span></a></li>\r\n    </ul>\r\n\r\n  </aside>\r\n\r\n  <div class=\"application-sidebar\" *ngIf=\"role=='USER'\">\r\n\r\n    <img src=\"../../assets/img/img/logo/logo.png\" alt=\"path not correct\"/>\r\n\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item details_blk\" routerLink=\"/dashboard\" routerLinkActive=\"active\" ><a class=\"list_anchor\"><span\r\n            class=\"badge badge-light\" >1</span>&nbsp;Demographic Information</a></li>\r\n      <li class=\"list-group-item details_blk\" [routerLink]=\"['/empinfo']\"  routerLinkActive=\"active\"><a class=\"list_anchor\"><span\r\n            class=\"badge badge-light\">2</span>&nbsp;Employment Information</a></li>\r\n      <li class=\"list-group-item details_blk\" [routerLink]=\"['/verify']\"  routerLinkActive=\"active\"><a class=\"list_anchor\"><span\r\n            class=\"badge badge-light\">3</span>&nbsp;Verify & Submit</a></li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n  <main class=\"app-content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.details_blk {\n  font-size: 14px;\n  padding: 0px;\n  margin: 14px auto; }\n\n/* body {\r\n    background: #efefef\r\n} */\n\n.badge-light {\n  font-size: 20px;\n  border: 1px solid #32BB50;\n  border-radius: 100%;\n  padding: 17px;\n  width: 57px;\n  text-align: center;\n  height: 58px;\n  display: block;\n  margin: 14px auto; }\n\n.list_anchor {\n  padding: 12px 8px;\n  display: block;\n  border-bottom: 1px solid #e3e3e3;\n  background: #f5efef;\n  transition-duration: 0.6s;\n  font-weight: bold; }\n\n.list_anchor:hover {\n  text-decoration: none;\n  background: #ffffff; }\n\n.list_anchor:hover .badge-light {\n  background: green;\n  color: #fff; }\n\n.app-header1 {\n  position: absolute;\n  left: 0px;\n  right: 0;\n  top: -50px;\n  width: 100%;\n  display: flex;\n  background-color: #cd1306;\n  z-index: 1;\n  padding-right: 15px; }\n\n.app-header1 p {\n  color: white;\n  font-size: 24px;\n  padding-left: 16%;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n  padding-top: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcaW10YWMtcmVjcnVpdG1lbnQtZ2l0XFxpbXRhYy1yZWNydWl0bWVudFxccmVjcnVpdG1lbnQtdWkvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSXJCOztHQ0FHOztBRElIO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUVmO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHdkI7RUFFSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkuZGV0YWlsc19ibGsge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxNHB4IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWZcclxufSAqL1xyXG5cclxuLmJhZGdlLWxpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMkJCNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICAgIHdpZHRoOiA1N3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDE0cHggYXV0bztcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yIHtcclxuICAgIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcclxuICAgIGJhY2tncm91bmQ6ICNmNWVmZWY7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0X2FuY2hvcjpob3ZlciAuYmFkZ2UtbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYXBwLWhlYWRlcjFcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkMTMwNjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYXBwLWhlYWRlcjEgcFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufSIsImxpLmRldGFpbHNfYmxrIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMTRweCBhdXRvOyB9XG5cbi8qIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZlxyXG59ICovXG4uYmFkZ2UtbGlnaHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMkJCNTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIHdpZHRoOiA1N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNThweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTRweCBhdXRvOyB9XG5cbi5saXN0X2FuY2hvciB7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gIGJhY2tncm91bmQ6ICNmNWVmZWY7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5saXN0X2FuY2hvcjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxuXG4ubGlzdF9hbmNob3I6aG92ZXIgLmJhZGdlLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hcHAtaGVhZGVyMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMDtcbiAgdG9wOiAtNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDEzMDY7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7IH1cblxuLmFwcC1oZWFkZXIxIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, routerNavigate, dataservice) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
        this.dataservice = dataservice;
        this.role = sessionStorage.getItem('userRole');
        this.username = sessionStorage.getItem('username');
    }
    HomeComponent.prototype.logoutAction = function () {
        localStorage.clear();
        sessionStorage.clear();
        if (this.authService.logOutAction()) {
            this.routerNavigate.navigate(['login']);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".push_menu").click(function () {
                $(".wrapper").toggleClass("active");
            });
            (function () {
                "use strict";
                var treeviewMenu = $('.app-menu');
                // Toggle Sidebar
                $('[data-toggle="sidebar"]').click(function (event) {
                    event.preventDefault();
                    $('.app').toggleClass('sidenav-toggled');
                });
                // Activate sidebar treeview toggle
                $("[data-toggle='treeview']").click(function (event) {
                    event.preventDefault();
                    if (!$(this).parent().hasClass('is-expanded')) {
                        treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
                    }
                    $(this).parent().toggleClass('is-expanded');
                });
                // Set initial active toggle
                $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');
                //Activate bootstrip tooltips
                $("[data-toggle='tooltip']").tooltip();
            })();
        });
        // this.UserListById();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "./src/app/home/help/help.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/home/users/users.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ethenicgroup/ethenicgroup.component */ "./src/app/home/ethenicgroup/ethenicgroup.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status/status.component */ "./src/app/home/status/status.component.ts");
/* harmony import */ var _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./specialevent/specialevent.component */ "./src/app/home/specialevent/specialevent.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/home/userdetails/userdetails.component.ts");
/* harmony import */ var _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicerequest/servicerequest.component */ "./src/app/home/servicerequest/servicerequest.component.ts");
/* harmony import */ var _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./testcode/testcode.component */ "./src/app/home/testcode/testcode.component.ts");
/* harmony import */ var _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postalcode/postalcode.component */ "./src/app/home/postalcode/postalcode.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _applicationlist_applicationlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./applicationlist/applicationlist.component */ "./src/app/home/applicationlist/applicationlist.component.ts");
/* harmony import */ var _registeredcandidate_registeredcandidate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./registeredcandidate/registeredcandidate.component */ "./src/app/home/registeredcandidate/registeredcandidate.component.ts");
/* harmony import */ var _administrativeuser_administrativeuser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./administrativeuser/administrativeuser.component */ "./src/app/home/administrativeuser/administrativeuser.component.ts");
/* harmony import */ var _employementtype_employementtype_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employementtype/employementtype.component */ "./src/app/home/employementtype/employementtype.component.ts");
/* harmony import */ var _positiontype_positiontype_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./positiontype/positiontype.component */ "./src/app/home/positiontype/positiontype.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/home/positions/positions.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./category/category.component */ "./src/app/home/category/category.component.ts");
/* harmony import */ var _feestructure_feestructure_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./feestructure/feestructure.component */ "./src/app/home/feestructure/feestructure.component.ts");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./designation/designation.component */ "./src/app/home/designation/designation.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./application/application.component */ "./src/app/home/application/application.component.ts");
/* harmony import */ var _employeementinfo_employeementinfo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./employeementinfo/employeementinfo.component */ "./src/app/home/employeementinfo/employeementinfo.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/home/verify/verify.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/home/userlist/userlist.component.ts");































var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_8__["EthenicgroupComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_9__["StatusComponent"], _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_10__["SpecialeventComponent"], _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_11__["UserdetailsComponent"], _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_12__["ServicerequestComponent"], _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_13__["TestcodeComponent"], _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_14__["PostalcodeComponent"], _applicationlist_applicationlist_component__WEBPACK_IMPORTED_MODULE_18__["ApplicationlistComponent"], _registeredcandidate_registeredcandidate_component__WEBPACK_IMPORTED_MODULE_19__["RegisteredcandidateComponent"], _administrativeuser_administrativeuser_component__WEBPACK_IMPORTED_MODULE_20__["AdministrativeuserComponent"], _employementtype_employementtype_component__WEBPACK_IMPORTED_MODULE_21__["EmployementtypeComponent"], _positiontype_positiontype_component__WEBPACK_IMPORTED_MODULE_22__["PositiontypeComponent"], _positions_positions_component__WEBPACK_IMPORTED_MODULE_23__["PositionsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_24__["CategoryComponent"], _feestructure_feestructure_component__WEBPACK_IMPORTED_MODULE_25__["FeestructureComponent"], _designation_designation_component__WEBPACK_IMPORTED_MODULE_26__["DesignationComponent"], _application_application_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationComponent"], _employeementinfo_employeementinfo_component__WEBPACK_IMPORTED_MODULE_28__["EmployeementinfoComponent"], _verify_verify_component__WEBPACK_IMPORTED_MODULE_29__["VerifyComponent"], _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_30__["UserlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"].forRoot(), ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.router.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.router.ts ***!
  \*************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gaurds/auth.guard */ "./src/app/gaurds/auth.guard.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/home/users/users.component.ts");
/* harmony import */ var _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ethenicgroup/ethenicgroup.component */ "./src/app/home/ethenicgroup/ethenicgroup.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/home/status/status.component.ts");
/* harmony import */ var _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specialevent/specialevent.component */ "./src/app/home/specialevent/specialevent.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/home/userdetails/userdetails.component.ts");
/* harmony import */ var _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicerequest/servicerequest.component */ "./src/app/home/servicerequest/servicerequest.component.ts");
/* harmony import */ var _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testcode/testcode.component */ "./src/app/home/testcode/testcode.component.ts");
/* harmony import */ var _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./postalcode/postalcode.component */ "./src/app/home/postalcode/postalcode.component.ts");
/* harmony import */ var _applicationlist_applicationlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./applicationlist/applicationlist.component */ "./src/app/home/applicationlist/applicationlist.component.ts");
/* harmony import */ var _administrativeuser_administrativeuser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./administrativeuser/administrativeuser.component */ "./src/app/home/administrativeuser/administrativeuser.component.ts");
/* harmony import */ var _employementtype_employementtype_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employementtype/employementtype.component */ "./src/app/home/employementtype/employementtype.component.ts");
/* harmony import */ var _positiontype_positiontype_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./positiontype/positiontype.component */ "./src/app/home/positiontype/positiontype.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/home/positions/positions.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./category/category.component */ "./src/app/home/category/category.component.ts");
/* harmony import */ var _feestructure_feestructure_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feestructure/feestructure.component */ "./src/app/home/feestructure/feestructure.component.ts");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./designation/designation.component */ "./src/app/home/designation/designation.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./application/application.component */ "./src/app/home/application/application.component.ts");
/* harmony import */ var _registeredcandidate_registeredcandidate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./registeredcandidate/registeredcandidate.component */ "./src/app/home/registeredcandidate/registeredcandidate.component.ts");
/* harmony import */ var _employeementinfo_employeementinfo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employeementinfo/employeementinfo.component */ "./src/app/home/employeementinfo/employeementinfo.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/home/verify/verify.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/home/userlist/userlist.component.ts");
























var HomeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
            { path: 'dashboard/:appNo', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
            { path: 'ethenicgroup', component: _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_4__["EthenicgroupComponent"] },
            { path: 'status', component: _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"] },
            { path: 'specialevent', component: _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_6__["SpecialeventComponent"] },
            { path: 'userdetail', component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_7__["UserdetailsComponent"] },
            { path: 'servicerequest', component: _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_8__["ServicerequestComponent"] },
            { path: 'testcode', component: _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_9__["TestcodeComponent"] },
            { path: 'postalcode', component: _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_10__["PostalcodeComponent"] },
            { path: 'applicationlist', component: _applicationlist_applicationlist_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationlistComponent"] },
            { path: 'administrativeuser', component: _administrativeuser_administrativeuser_component__WEBPACK_IMPORTED_MODULE_12__["AdministrativeuserComponent"] },
            { path: 'employementtype', component: _employementtype_employementtype_component__WEBPACK_IMPORTED_MODULE_13__["EmployementtypeComponent"] },
            { path: 'positiontype', component: _positiontype_positiontype_component__WEBPACK_IMPORTED_MODULE_14__["PositiontypeComponent"] },
            { path: 'positions', component: _positions_positions_component__WEBPACK_IMPORTED_MODULE_15__["PositionsComponent"] },
            { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"] },
            { path: 'feestructure', component: _feestructure_feestructure_component__WEBPACK_IMPORTED_MODULE_17__["FeestructureComponent"] },
            { path: 'designation', component: _designation_designation_component__WEBPACK_IMPORTED_MODULE_18__["DesignationComponent"] },
            { path: 'application', component: _application_application_component__WEBPACK_IMPORTED_MODULE_19__["ApplicationComponent"] },
            { path: 'registered', component: _registeredcandidate_registeredcandidate_component__WEBPACK_IMPORTED_MODULE_20__["RegisteredcandidateComponent"] },
            { path: 'empinfo', component: _employeementinfo_employeementinfo_component__WEBPACK_IMPORTED_MODULE_21__["EmployeementinfoComponent"] },
            { path: 'verify', component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_22__["VerifyComponent"] },
            { path: 'userList', component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_23__["UserlistComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/home/positions/positions.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/positions/positions.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Positions</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n      data-backdrop=\"static\" data-target=\"#myModal\"  (click)=\"addEmployeementType(position)\">Add</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <!-- <th>Id</th> -->\r\n        <th>Position Name</th>\r\n        <th>Position Type</th>\r\n        <th>Position Code</th>\r\n        <th>Eligibility Criteria</th>\r\n        <!-- <th>Advt Number</th> -->\r\n        <th>Reg Start Date</th>\r\n        <th>Reg End Date</th>\r\n        <th>Updated Date</th>\r\n        <th>Updated By</th>\r\n         <th>Status</th>\r\n        <th>Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let emp of positionlist| filter:term |paginate: { itemsPerPage: 5, currentPage: p };let i=index\">\r\n        <!-- <td>{{i+1}}</td> -->\r\n        <td>{{emp?.positionName}}</td>\r\n        <td>{{emp?.positionTypeName}}</td>\r\n        <td>{{emp.positionCode}}</td>\r\n        <td>{{emp.eligibilityCriteria}}</td>\r\n        <!-- <td>{{emp.advtNumber}}</td> -->\r\n        <td>{{emp.regStartDate | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{emp.regEndDate | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{emp.updatedDate | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{emp.email}}</td>\r\n        <td *ngIf=\"emp.status == 'Active'\"><span [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\" (click)=\"statusPositions(emp)\">Disable</span></td>\r\n        <td *ngIf=\"emp.status == 'Inactive'\"><span [ngClass]=\"{'status1': emp.status=='Inactive', 'status2':emp.status=='Active' }\" (click)=\"statusPositions(emp)\">Enable</span></td>\r\n        <td>\r\n          <span>\r\n            <span (click)=\"editPositions(emp.id)\" data-toggle=\"modal\" data-target=\"#myModal1\"\r\n              class=\"glyphicon glyphicon-pencil\">\r\n              <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n            </span>\r\n          </span>\r\n        </td>\r\n        <td>\r\n          <!-- <span>\r\n            <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\r\n              <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n            </span>\r\n          </span> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n<!-- Add position modal popup-->\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <form #position=\"ngForm\" (ngSubmit)=\"createPositions\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Position</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"position.reset()\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>Position Name</label>\r\n              <input type=\"text\" placeholder=\"Position Name\" [(ngModel)]=\"positionTypeName\" name=\"Positon\"\r\n              class=\"form-control\" #PositionName=\"ngModel\" required>\r\n              <span style=\"color:red\" *ngIf=\"PositionName.invalid && PositionName.touched\">\r\n                  <span *ngIf=\"PositionName.errors.required\">\r\n                      Position Name is required.\r\n                  </span> \r\n                </span>\r\n               <!-- <span class=\"text text-danger\"\r\n              *ngIf=\"addforms.controls['eventName'].invalid && addforms.controls['eventName'].touched\">positionTypeName Required</span> -->\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label>Position Type</label>\r\n              <select class=\"form-control\" [(ngModel)]= \"positionTypeId\" (change)=\"getSelectedValueId($event)\" #PositionTypeId=\"ngModel\" name=\"Positon Type\" required>\r\n                  <option [ngValue]=\"undefined\" hidden> Select Position Type</option>  \r\n                  <option *ngFor=\"let positionType of datas\" [value]=\"positionType.id\">{{positionType.positionTypeName}}</option>\r\n              </select>\r\n              <span style=\"color:red\" *ngIf=\"PositionTypeId.invalid && PositionTypeId.touched\">\r\n                 \r\n                  <span *ngIf=\"PositionTypeId.errors.required\">\r\n                      Position Type is required.\r\n                  </span> \r\n                  \r\n                </span>\r\n            </div>\r\n            <!-- <select class=\"form-control select\" formControlName=\"Industry\" (change)=\"getSelectedOptionText($event)\">\r\n                <option value=\"\">Please select Value</option>  \r\n                <option *ngFor=\"let industry of industries\" value=\"{{industry.ID}}\">{{industry.Name}}</option>\r\n              </select> -->\r\n            \r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <label>Advt Number</label>\r\n                  <input type=\"text\" placeholder=\"Advt Number\" [(ngModel)]=\"advtNumber\" class=\"form-control\" \r\n                   #AdvtNum= \"ngModel\" name=\"Advt\" required>\r\n                  <span style=\"color:red\" *ngIf=\"AdvtNum.invalid && AdvtNum.touched\">\r\n                    <span *ngIf=\"AdvtNum.errors.required\">\r\n                      Advt Number is required.\r\n                    </span> \r\n                  </span> \r\n                </div>\r\n\r\n            <div class=\"col-md-6\">\r\n              <label>Eligibility Criteria</label>\r\n              <textarea type=\"\" placeholder=\"Eligibility Criteria\" [(ngModel)]=\"eligibilityCriteria\" class=\"form-control\" \r\n               #Eligibility=\"ngModel\" name=\"Eligible\" required></textarea>\r\n              <span style=\"color:red\" *ngIf=\"Eligibility.invalid && Eligibility.touched\">\r\n                <span *ngIf=\"Eligibility.errors.required\">\r\n                      Eligibility Criteria is required.\r\n                </span> \r\n              </span> \r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                  <label>Registration Start Date</label>\r\n                  <input type=\"date\" placeholder=\"Registration Start Date\" [(ngModel)]=\"regStartDate\"\r\n                  class=\"form-control\" #RegStartDate=\"ngModel\" name=\"start\" required>\r\n                  <span style=\"color:red\" *ngIf=\"RegStartDate.invalid && RegStartDate.touched\">\r\n                    <span *ngIf=\"RegStartDate.errors.required\">\r\n                        Registration Start Date is required.\r\n                      </span> \r\n                    </span> \r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label>Registration End Date</label>\r\n                  <input type=\"date\" placeholder=\"Registration End Date\" [(ngModel)]=\"regEndDate\"\r\n                  class=\"form-control\" class=\"form-control\" #RegEndDate=\"ngModel\" name=\"end\" required>\r\n                  <span style=\"color:red\" *ngIf=\"RegEndDate.invalid && RegEndDate.touched\">\r\n                 \r\n                      <span *ngIf=\"RegEndDate.errors.required\">\r\n                        Registration End Date is required.\r\n                      </span> \r\n                      \r\n                    </span> \r\n                </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <label>Position Code</label>\r\n                <input type=\"text\" placeholder=\"Position Code\" [(ngModel)]=\"positionCodes\"\r\n                class=\"form-control\" #positionCode=\"ngModel\" name=\"Position Code\" required>\r\n                <span style=\"color:red\" *ngIf=\"positionCode.invalid && positionCode.touched\">\r\n                  <span *ngIf=\"positionCode.errors.required\">\r\n                      Position Code is required.\r\n                    </span> \r\n                  </span> \r\n              </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" \r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"createPositions()\" data-dismiss=\"modal\" [disabled]=\"position.invalid\" >Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div> \r\n\r\n<!-- Add position modal popup-->\r\n\r\n<!--update position modal popup-->\r\n\r\n<div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <form [formGroup]=\"positionsFrom\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update Position</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label> Position Name</label>\r\n              <input type=\"text\" placeholder=\"Position Name\" formControlName=\"positionName\" name=\"positionName\" \r\n              class=\"form-control\">\r\n              <span style=\"color:red\" *ngIf = \"positionsFrom.get('positionName').touched && positionsFrom.get('positionName').invalid\">\r\n                  <span *ngIf = \"positionsFrom.get('positionName').errors.required\">\r\n                      Position Name is required\r\n                  </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>Position Type</label>\r\n              <select class=\"form-control\" formControlName=\"positionTypeId\" (change)=\"getSelectedValueId($event)\">\r\n                  <option [ngValue]=\"undefined\" hidden> Select Position Type</option>  \r\n                  <option *ngFor=\"let positionType of datas\" [value]=\"positionType.id\">{{positionType.positionTypeName}}</option>\r\n              </select>\r\n              <span style=\"color:red\" *ngIf = \"positionsFrom.get('positionTypeId').touched && positionsFrom.get('positionTypeId').invalid\">\r\n                  <span *ngIf = \"positionsFrom.get('positionTypeId').errors.required\">\r\n                      Position Type is required\r\n                  </span>\r\n                  </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <label>Advt Number</label>\r\n                <input type=\"text\" placeholder=\"Advt Number\" formControlName=\"advtNumber\" name=\"advtNumber\" class=\"form-control\">\r\n                <span style=\"color:red\" *ngIf = \"positionsFrom.get('advtNumber').touched && positionsFrom.get('advtNumber').invalid\">\r\n                    <span *ngIf = \"positionsFrom.get('advtNumber').errors.required\">\r\n                        Advt Number is required\r\n                    </span>\r\n                    </span>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label>Eligibility Criteria</label>\r\n                <textarea placeholder=\"Eligibility Criteria\" formControlName=\"eligibilityCriteria\" name=\"eligibilityCriteria\"\r\n              class=\"form-control\"></textarea>\r\n              <span style=\"color:red\" *ngIf = \"positionsFrom.get('eligibilityCriteria').touched && positionsFrom.get('eligibilityCriteria').invalid\">\r\n                  <span *ngIf = \"positionsFrom.get('eligibilityCriteria').errors.required\">\r\n                      Eligibility Criteria is required\r\n                  </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <label>Registration Start Date</label>\r\n                <input type=\"date\" placeholder=\"Registration Start Date\" formControlName=\"regStartDate\" name=\"regStartDate\"\r\n                class=\"form-control\">\r\n                <span style=\"color:red\" *ngIf = \"positionsFrom.get('regStartDate').touched && positionsFrom.get('regStartDate').invalid\">\r\n                    <span *ngIf = \"positionsFrom.get('regStartDate').errors.required\">\r\n                        Registration Start Date is required\r\n                    </span>\r\n                    </span>\r\n                </div>\r\n            <div class=\"col-md-6\">\r\n                <label>Registration End Date</label>\r\n                <input type=\"date\" placeholder=\"Registration End Date\" formControlName=\"regEndDate\" name=\"regEndDate\"\r\n                class=\"form-control\">\r\n                <span style=\"color:red\" *ngIf = \"positionsFrom.get('regEndDate').touched && positionsFrom.get('regEndDate').invalid\">\r\n                    <span *ngIf = \"positionsFrom.get('regEndDate').errors.required\">\r\n                        Registration End Date is required\r\n                    </span>\r\n                    </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <label>Position Code</label>\r\n                <input type=\"text\" placeholder=\"Position code\" formControlName=\"positionCode\" name=\"positionCode\"\r\n                class=\"form-control\">\r\n                <span style=\"color:red\" *ngIf = \"positionsFrom.get('positionCode').touched && positionsFrom.get('positionCode').invalid\">\r\n                    <span *ngIf = \"positionsFrom.get('positionCode').errors.required\">\r\n                        Position code is required\r\n                    </span>\r\n                    </span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\"  data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"updatePositions(positionsFrom.value)\" [disabled]=\"positionsFrom.invalid\">Update</button>\r\n        </div>\r\n       </div>\r\n    </form>\r\n  </div>\r\n</div> \r\n\r\n<!--update position modal popup-->"

/***/ }),

/***/ "./src/app/home/positions/positions.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/positions/positions.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9zaXRpb25zL3Bvc2l0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/positions/positions.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/positions/positions.component.ts ***!
  \*******************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");






var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(http, auth, dataservice, fb) {
        this.http = http;
        this.auth = auth;
        this.dataservice = dataservice;
        this.fb = fb;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        this.getposition();
        this.getUser();
        this.positionsFrom = this.fb.group({
            'positionName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'positionTypeId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'advtNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'eligibilityCriteria': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'regStartDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'regEndDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'positionCode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    PositionsComponent.prototype.getSelectedValueId = function (args) {
        this.countryValue = args.target.value;
        console.log(this.countryValue);
    };
    PositionsComponent.prototype.getUser = function () {
        var _this = this;
        this.dataservice.getPositionType().subscribe(function (data) {
            _this.datas = data.resultData;
        });
    };
    PositionsComponent.prototype.getposition = function () {
        var _this = this;
        this.dataservice.getpositions().subscribe(function (data) {
            _this.positionlist = data.resultData;
            console.log(_this.positionlist);
        });
    };
    PositionsComponent.prototype.createPositions = function () {
        var _this = this;
        var requestObj = {
            "positionName": this.positionTypeName,
            "positionTypeId": this.countryValue,
            "advtNumber": this.advtNumber,
            "eligibilityCriteria": this.eligibilityCriteria,
            "regStartDate": this.regStartDate,
            "regEndDate": this.regEndDate,
            "positionCode": this.positionCodes,
            "lastUpdatedBy": sessionStorage.getItem('userId'),
        };
        console.log(requestObj);
        this.dataservice.createPositions(requestObj).subscribe(function (data) {
            _this.positionsCreate = data;
            _this.getposition();
            console.log(_this.positionsCreate);
        });
    };
    PositionsComponent.prototype.editPositions = function (id) {
        var _this = this;
        this.dataservice.getPositionsById(id).subscribe(function (data) {
            _this.getDetailsById = data.resultData;
            console.log(_this.getDetailsById);
            _this.positionsFrom.patchValue({
                "positionName": _this.getDetailsById.positionName,
                "positionTypeId": _this.getDetailsById.positionTypeId,
                "advtNumber": _this.getDetailsById.advtNumber,
                "eligibilityCriteria": _this.getDetailsById.eligibilityCriteria,
                "regStartDate": _this.getDetailsById.regStartDate,
                "regEndDate": _this.getDetailsById.regEndDate,
                "positionCode": _this.getDetailsById.positionCode
            });
        });
    };
    PositionsComponent.prototype.updatePositions = function (updatePositionById) {
        var _this = this;
        updatePositionById['id'] = this.getDetailsById.id;
        updatePositionById['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.updatePositionsById(updatePositionById).subscribe(function (data) {
            _this.positionsById = data;
            _this.getposition();
            console.log(_this.positionsById);
        });
    };
    PositionsComponent.prototype.statusPositions = function (formdata) {
        var _this = this;
        var deleteobj = {};
        deleteobj['id'] = formdata.id;
        deleteobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        if (formdata.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        deleteobj['status'] = status;
        this.dataservice.actionPositions(deleteobj).subscribe(function (data) {
            console.log(data);
            _this.getposition();
        });
    };
    PositionsComponent.prototype.addEmployeementType = function (position) {
        position.reset();
    };
    PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/home/positions/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.scss */ "./src/app/home/positions/positions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/app/home/positiontype/positiontype.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/positiontype/positiontype.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Position Type</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\"\r\n      data-backdrop=\"static\" data-target=\"#myModal1\" (click)=\"addEmployeementType(myForm)\" >Add</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n  <!-- <h5>Position Type</h5> -->\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr style=\"font-size:15px\">\r\n        <!-- <th>Id</th> -->\r\n        <th>Position Type</th>\r\n        <!-- <th>LastUpdatedBy</th> -->\r\n        <th>Updated Date</th>\r\n        <th>Action</th>\r\n        <th>Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr *ngFor=\"let data of datas | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\"> -->\r\n      <tr *ngFor=\"let data of datas| filter:term |paginate: { itemsPerPage: 5, currentPage: p };let i=index\">\r\n        <!-- <td>{{i+1}}</td> -->\r\n        <td>{{data.positionTypeName}}</td>\r\n        <!-- <td>{{data.lastUpdatedBy}}</td> -->\r\n        <td>{{data.updatedDate}}</td>\r\n        <td *ngIf=\"data.status == 'Active'\"><span [ngClass]=\"{'status1': data.status=='Inactive', 'status2':data.status=='Active' }\" (click)=\"activedata(data)\">Disable</span></td>\r\n        <td *ngIf=\"data.status == 'Inactive'\"><span [ngClass]=\"{'status1': data.status=='Inactive', 'status2':data.status=='Active' }\" (click)=\"activedata(data)\">Enable</span></td>\r\n        <td>\r\n          <span>\r\n            <span (click)=\"editPositionType(data.id)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n              class=\"glyphicon glyphicon-pencil\">\r\n              <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n            </span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <form [formGroup]=\"positionTypeForm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update Position Type</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  >&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"col-md-12\">\r\n                <label>Position Type</label>\r\n                <input type=\"text\" placeholder=\"Enter Position Type\" formControlName=\"positionTypeName\" class=\"form-control\" \r\n                name=\"positionTypeName\">\r\n    \r\n                <span style=\"color:red\" *ngIf = \"positionTypeForm.get('positionTypeName').touched && \r\n                positionTypeForm.get('positionTypeName').invalid\">\r\n                  <span *ngIf = \"positionTypeForm.get('positionTypeName').errors.required\">\r\n                         Position Type is required\r\n                  </span>\r\n                    <!-- <span *ngIf = \"positionTypeForm.get('positionTypeName').errors.pattern\">\r\n                        Only Alphabets are allowed\r\n                    </span> -->\r\n                  </span>\r\n                 \r\n              </div>\r\n\r\n          <!-- <input type=\"text\" formControlName=\"id\" name=\"id\" hidden> -->\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <!-- <button type=\"submit\"   data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (submit)=\"addata(addforms.value)\" \r\n           >Submit</button> -->\r\n         <!--- <button type=\"submit\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"saveEvent(specialEventForm)\"\r\n           >Submit</button>-->\r\n          <button type=\"button\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"updateEvent(positionTypeForm.value)\" [disabled]=\"positionTypeForm.invalid\"\r\n            >Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--add form start-->\r\n\r\n  <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <form #myForm=\"ngForm\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Position Type</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"myForm.reset()\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"col-md-12\">\r\n                <label>Position Type</label>\r\n        \r\n                 <input type=\"text\" placeholder=\"Enter Position Type\" [(ngModel)]=\"postionType\" name=\"eventName\"\r\n                  class=\"form-control\" #positon=\"ngModel\" required minlength=\"4\">\r\n                  <span style=\"color:red\" *ngIf=\"positon.invalid && positon.touched\">\r\n                 \r\n           \r\n                   <span *ngIf=\"positon.errors.required\">\r\n                    Positon is required.\r\n                   </span>\r\n                   <span *ngIf=\"positon.errors.minlength\">\r\n                    Positon must be at least 4 characters long.\r\n                   </span>\r\n                  \r\n                 </span>\r\n                \r\n                 </div>\r\n         \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" data-dismiss=\"modal\"\r\n            class=\"btn btn-primary float-right\" id=\"register\" (click)=\"addata(postionType)\" [disabled]=\"myForm.invalid\">Submit</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n    \r\n  </div>\r\n</div> \r\n\r\n\r\n\r\n<!--add form end-->"

/***/ }),

/***/ "./src/app/home/positiontype/positiontype.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/positiontype/positiontype.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-family: Poppins;\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3NpdGlvbnR5cGUvRDpcXGltdGFjLXJlY3J1aXRtZW50LWdpdFxcaW10YWMtcmVjcnVpdG1lbnRcXHJlY3J1aXRtZW50LXVpL3NyY1xcYXBwXFxob21lXFxwb3NpdGlvbnR5cGVcXHBvc2l0aW9udHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9zaXRpb250eXBlL3Bvc2l0aW9udHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbiAgICBmb250LWZhbWlseTpQb3BwaW5zO1xyXG4gICAgbWFyZ2luLXRvcDo4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/positiontype/positiontype.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/positiontype/positiontype.component.ts ***!
  \*************************************************************/
/*! exports provided: PositiontypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositiontypeComponent", function() { return PositiontypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");






var PositiontypeComponent = /** @class */ (function () {
    function PositiontypeComponent(http, fb, auth, dataservice) {
        this.http = http;
        this.fb = fb;
        this.auth = auth;
        this.dataservice = dataservice;
        this.updatfrm = false;
        this.addfrm = false;
        this.position2 = true;
        this.position1 = true;
        this.anotherobj = {};
    }
    PositiontypeComponent.prototype.ngOnInit = function () {
        this.addforms = this.fb.group({
            'positionType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.positionTypeForm = this.fb.group({
            'positionTypeName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.getUser();
    };
    PositiontypeComponent.prototype.addEmployeementType = function (myForm) {
        myForm.reset();
    };
    PositiontypeComponent.prototype.getUser = function () {
        var _this = this;
        this.dataservice.getPositionType().subscribe(function (data) {
            _this.datas = data.resultData;
            console.log(_this.datas);
        });
    };
    PositiontypeComponent.prototype.editPositionType = function (id) {
        var _this = this;
        this.updatfrm = true;
        this.addfrm = false;
        this.dataservice.getPositionTypeById(id).subscribe(function (data) {
            _this.updateData = data.resultData;
            _this.positionTypeForm.setValue({
                'positionTypeName': _this.updateData.positionTypeName
            });
        });
    };
    PositiontypeComponent.prototype.updateEvent = function (updateDataById) {
        var _this = this;
        updateDataById['id'] = this.updateData.id;
        updateDataById['lastUpdatedBy'] = sessionStorage.getItem('userId');
        console.log(updateDataById);
        this.dataservice.updatePositionTypeById(updateDataById).subscribe(function (data) {
            _this.updateDateById = data;
            _this.getUser();
            console.log(_this.updateDateById);
        });
    };
    PositiontypeComponent.prototype.activedata = function (data) {
        var _this = this;
        var positionobj = {};
        positionobj['id'] = data.id;
        positionobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        if (data.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        positionobj['status'] = status;
        this.dataservice.actionPositionType(positionobj).subscribe(function (data) {
            _this.positiondata = data;
            if (_this.positiondata.errorCode == 'OK') {
                _this.getUser();
            }
        });
    };
    PositiontypeComponent.prototype.addata = function (positiontype) {
        var _this = this;
        var requestobj = {};
        requestobj['positionTypeName'] = positiontype;
        requestobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
        this.dataservice.sendpositiondata(requestobj).subscribe(function (data) {
            _this.datas = data;
            _this.getUser();
            _this.postionType = '';
        });
    };
    PositiontypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-positiontype',
            template: __webpack_require__(/*! ./positiontype.component.html */ "./src/app/home/positiontype/positiontype.component.html"),
            styles: [__webpack_require__(/*! ./positiontype.component.scss */ "./src/app/home/positiontype/positiontype.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], PositiontypeComponent);
    return PositiontypeComponent;
}());



/***/ }),

/***/ "./src/app/home/postalcode/postalcode.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/postalcode/postalcode.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n    <div>\r\n      <h1><i class=\"fa fa-th-list\"></i>Descrict Codes</h1>\r\n      <p>Create Descrict Codes</p>\r\n    </div>\r\n    <ul class=\"app-breadcrumb breadcrumb\">\r\n       <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> \r\n    </ul>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n            </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n          <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger pull-right\"  data-backdrop=\"static\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n          (click)=\"add(postalCodeForm)\">Add</button>\r\n         </div>\r\n    </div>\r\n  \r\n  <div class=\"tile\">  \r\n <H3>District Code Details</H3>\r\n  <table class=\"table\" >\r\n   <thead>\r\n     <tr style=\"font-size:15px\">\r\n       <th>Id</th>\r\n       <th>District Code</th>\r\n       <th>Edit</th>\r\n       <th>Delete</th>\r\n     </tr>\r\n   </thead>\r\n   <tbody>\r\n     <tr *ngFor = \"let data of postalCodes | filter:term | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n       <td>{{data.id}}</td>\r\n       <td>{{data.postalCode}}</td>\r\n       <td>\r\n         <span>\r\n           <span (click)=\"editPostal(data)\" data-toggle=\"modal\" data-target=\"#myModal\"  class=\"glyphicon glyphicon-pencil\">\r\n             <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n           </span>\r\n         </span>\r\n       </td>\r\n       <td>\r\n         <span>\r\n           <span (click)=\"deletePostalCode(data.id)\" value=\"delete\">\r\n             <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n           </span>\r\n         </span>\r\n       </td>\r\n     </tr>\r\n   </tbody>\r\n  </table>\r\n\r\n  </div>\r\n\r\n  <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <form  [formGroup]=\"postalCodeForm\" >\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">District Codes</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        \r\n            </div>\r\n            <div class=\"modal-body\">\r\n        \r\n              <div class=\"col-md-12\">\r\n                <input type=\"text\" placeholder=\"District Code\" name=\"postalCode\" class=\"form-control\"  formControlName=\"postalCode\">\r\n               \r\n                <span class=\"text text-danger\" *ngIf=\"postalCodeForm.controls['postalCode'].invalid && (postalCodeForm.controls['postalCode'].touched || postalCodeForm.controls['postalCode'].dirty)\"> Only 4 Digits District code is Required</span>\r\n              </div>\r\n              <input type=\"text\" name=\"postalCode\" formControlName=\"id\" hidden>\r\n        \r\n        \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"submit\" (click)=\"addPostalCode(postalCodeForm)\" *ngIf=\"addfrm\"   data-dismiss=\"modal\"  class=\"btn btn-primary float-right\" id=\"register\"  [disabled]=\"postalCodeForm.invalid\">Submit</button>\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\"  [disabled]=\"postalCodeForm.invalid\" id=\"register\"\r\n                (click)=\"updatePostalData(postalCodeForm)\" *ngIf=\"updatfrm\">Update</button>\r\n            </div>\r\n          </div>\r\n      </form>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/postalcode/postalcode.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/postalcode/postalcode.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9zdGFsY29kZS9wb3N0YWxjb2RlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/postalcode/postalcode.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/postalcode/postalcode.component.ts ***!
  \*********************************************************/
/*! exports provided: PostalcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalcodeComponent", function() { return PostalcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var PostalcodeComponent = /** @class */ (function () {
    function PostalcodeComponent(dataservice, fb) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.updatfrm = false;
        this.addfrm = true;
        this.postalObj = {};
        // this.getEventById(this.id);
    }
    PostalcodeComponent.prototype.ngOnInit = function () {
        this.postalCodeForm = this.fb.group({
            // 'postalCode':[null,Validators.compose([Validators.required,Validators.pattern('^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')])],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)])],
            id: []
        });
        this.getPostalcode();
    };
    PostalcodeComponent.prototype.add = function (postalCodeForm) {
        this.updatfrm = false;
        this.addfrm = true;
        postalCodeForm.reset();
    };
    // Save 
    PostalcodeComponent.prototype.addPostalCode = function (postalCodeForm) {
        var _this = this;
        this.dataservice.postPostalcode(postalCodeForm.value).subscribe(function (res) {
            postalCodeForm.reset();
            _this.getPostalcode();
        });
    };
    //Update Special Event
    PostalcodeComponent.prototype.updatePostalData = function (postalCodeForm) {
        var _this = this;
        postalCodeForm.id = this.pId;
        this.dataservice.updatePostalcode(postalCodeForm.value).subscribe(function (res) {
            _this.getPostalcode();
            postalCodeForm.reset();
        });
    };
    // Get all Special Event
    PostalcodeComponent.prototype.getPostalcode = function () {
        var _this = this;
        this.dataservice.getAllPostalcode().subscribe(function (res) {
            console.log("getting data", res);
            _this.postalCodes = res.resultData;
        });
    };
    PostalcodeComponent.prototype.editPostal = function (data) {
        this.pId = data.id;
        this.postalCodeForm.setValue({
            'postalCode': data.postalCode,
            'id': data.id
        });
        this.updatfrm = true;
        this.addfrm = false;
    };
    //Delete Special event
    PostalcodeComponent.prototype.deletePostalCode = function (id) {
        var _this = this;
        this.dataservice.deletePostalcode(id).subscribe(function (res) {
            console.log("deleted status", res);
            _this.getPostalcode();
        });
    };
    PostalcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postalcode',
            template: __webpack_require__(/*! ./postalcode.component.html */ "./src/app/home/postalcode/postalcode.component.html"),
            styles: [__webpack_require__(/*! ./postalcode.component.scss */ "./src/app/home/postalcode/postalcode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PostalcodeComponent);
    return PostalcodeComponent;
}());



/***/ }),

/***/ "./src/app/home/registeredcandidate/registeredcandidate.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/home/registeredcandidate/registeredcandidate.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Registered Candidtates</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n    <!-- <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> -->\r\n\r\n\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Trigger the modal with a button -->\r\n    <!-- Modal -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n      \r\n      </div>\r\n    </div>\r\n    <div class=\"tile\">\r\n\r\n      <!-- <h3 class=\"tile-title\">Registered Candidtates</h3> -->\r\n      <div>\r\n        <table class=\"table \">\r\n          <thead>\r\n            <tr>\r\n              <th>Candidate Name</th>\r\n              <th>Aadhar Number</th>\r\n              <th>Email</th>\r\n              <th>Mobile Number</th>\r\n              <th>Date Of Birth</th>\r\n             \r\n              <th>Status</th>\r\n              <!---<th>Edit</th>\r\n              <th>Delete</th>-->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let x of data | filter:term |paginate: { itemsPerPage: 5, currentPage: p }\">\r\n              <td>{{x.username}}</td>\r\n              <td>{{x.aadharNumber}}</td>\r\n              <td>{{x.username}}</td>\r\n              <td>{{x.mobileNumber}}</td>\r\n              <td>{{x.dob}}</td>\r\n              <td *ngIf=\"x.status == 'Active'\"><span [ngClass]=\"{'status1': x.status=='Inactive', 'status2':x.status=='Active' }\" (click)=\"registerActiveStatus(x)\">Disable</span></td>\r\n              <td *ngIf=\"x.status == 'Inactive'\"><span [ngClass]=\"{'status1': x.status=='Inactive', 'status2':x.status=='Active' }\" (click)=\"registerActiveStatus(x)\">Enable</span></td>\r\n            <!----<td>\r\n                <span>\r\n                  <span (click)=\"editForm(x)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                    class=\"glyphicon glyphicon-pencil\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n                  </span>\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  <span (click)=\"deleteData(x.id)\" value=\"delete\">\r\n                    <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n                  </span>\r\n                </span>\r\n              </td>-->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/registeredcandidate/registeredcandidate.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/home/registeredcandidate/registeredcandidate.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVnaXN0ZXJlZGNhbmRpZGF0ZS9yZWdpc3RlcmVkY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/registeredcandidate/registeredcandidate.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/registeredcandidate/registeredcandidate.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisteredcandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredcandidateComponent", function() { return RegisteredcandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");






var RegisteredcandidateComponent = /** @class */ (function () {
    function RegisteredcandidateComponent(http, fb, auth, dataservice) {
        this.http = http;
        this.fb = fb;
        this.auth = auth;
        this.dataservice = dataservice;
        this.updatfrm = false;
        this.addfrm = false;
    }
    RegisteredcandidateComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.profileForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'emailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'mobileNum': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[6-9]\\d{9}')])],
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'sponsorId': [null],
            'id': [null],
            'status': [null]
        });
    };
    RegisteredcandidateComponent.prototype.getUser = function () {
        var _this = this;
        var formObj = {
            "pageNumber": 0,
            "pageSize": 10
        };
        this.dataservice.getRegisteredList(formObj).subscribe(function (res) {
            _this.data = res.responseDataList;
            console.log(_this.data);
        });
    };
    RegisteredcandidateComponent.prototype.registerActiveStatus = function (data) {
        var _this = this;
        debugger;
        var deleteobj = {};
        deleteobj['id'] = data.id;
        deleteobj['updatedBy'] = sessionStorage.getItem('userId');
        if (data.status === "Active") {
            status = "Inactive";
        }
        else {
            status = "Active";
        }
        deleteobj['status'] = status;
        this.dataservice.registerStatus(deleteobj).subscribe(function (data) {
            console.log(data);
            _this.getUser();
        });
    };
    RegisteredcandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registeredcandidate',
            template: __webpack_require__(/*! ./registeredcandidate.component.html */ "./src/app/home/registeredcandidate/registeredcandidate.component.html"),
            styles: [__webpack_require__(/*! ./registeredcandidate.component.scss */ "./src/app/home/registeredcandidate/registeredcandidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], RegisteredcandidateComponent);
    return RegisteredcandidateComponent;
}());



/***/ }),

/***/ "./src/app/home/servicerequest/servicerequest.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/servicerequest/servicerequest.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Order Request</h1>\r\n    <p>Order Details</p>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <label>Select to Filter</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"search\">\r\n      <option></option>\r\n      <option value=\"date\">Date</option>\r\n      <option value=\"mobile\">Mobile Number</option>\r\n      <option value=\"email\">Email Id</option>\r\n      <option value=\"order\">Order Numbser</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"col-md-4\" *ngIf=\"search=='date'\">\r\n    <div class=\"form-group\">\r\n      <label>Start Date:</label>\r\n      <input type=\"date\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\" *ngIf=\"search=='date'\">\r\n    <div class=\"form-group\">\r\n      <label>End Date:</label>\r\n      <input type=\"date\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\" *ngIf=\"search =='mobile' || search =='email'|| search =='order'\">\r\n    <div class=\"form-group\">\r\n      <label>Search with {{search}}:</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search Here..\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"tile\">\r\n  <h3 class=\"tile-title\">Order Details </h3>\r\n  <table class=\"table\" *ngIf=\"userrole=='ADMIN'\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <!-- <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Email</th>\r\n              <th>Gender</th>\r\n              <th>Mobile</th> -->\r\n        <th>Order Code</th>\r\n        <th>Post Code</th>\r\n        <th>PX Code</th>\r\n        <th>Status</th>\r\n        <!-- <th>View</th> -->\r\n        <th>Date of Request</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of sponsorIdData|paginate: { itemsPerPage: 10, currentPage: p };let i=index\">\r\n        <td>{{i+1}}</td>\r\n        <!-- <td >{{item.firstName}}</td>\r\n              <td >{{item.lastName}}</td>\r\n              <td >{{item.notificationEmail}}</td>\r\n              <td >{{item.oppositeGender}}</td>\r\n              <td >{{item.notificationPhone}}</td> -->\r\n        <td>{{item.orderCode}}</td>\r\n        <td>{{item.postCode}}</td>\r\n        <td>YF45</td>\r\n        <td>{{item.status}}</td>\r\n        <!-- <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getNotificationDetails(item)\">Notification Details</button></td> -->\r\n        <td>{{item.createdDate | date:'MMM d, y'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <table class=\"table\" *ngIf=\"userrole=='COMMISSIONERUSER'\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <!-- <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Email</th>\r\n                <th>Gender</th>\r\n                <th>Mobile</th> -->\r\n        <th>Order Code</th>\r\n        <th>Post Code</th>\r\n        <th>PX Code</th>\r\n        <th>Status</th>\r\n        <!-- <th>View</th> -->\r\n        <th>Date of Request</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of sponsorIdData|paginate: { itemsPerPage: 10, currentPage: p };let i=index\">\r\n        <td>{{i+1}}</td>\r\n        <!-- <td >{{item.firstName}}</td>\r\n                <td >{{item.lastName}}</td>\r\n                <td >{{item.notificationEmail}}</td>\r\n                <td >{{item.oppositeGender}}</td>\r\n                <td >{{item.notificationPhone}}</td> -->\r\n        <td>{{item.orderCode}}</td>\r\n        <td>{{item.postCode}}</td>\r\n        <td>YF45</td>\r\n        <td>{{item.status}}</td>\r\n        <!-- <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getNotificationDetails(item)\">Notification Details</button></td> -->\r\n        <td>{{item.createdDate | date:'MMM d, y'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <table class=\"table\" *ngIf=\"userrole=='SUPPORTUSER'\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <!-- <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Email</th>\r\n                  <th>Gender</th>\r\n                  <th>Mobile</th> -->\r\n        <th>Order Code</th>\r\n        <th>Post Code</th>\r\n        <th>PX Code</th>\r\n        <th>Status</th>\r\n        <!-- <th>View</th> -->\r\n        <th>Date of Request</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of sponsorIdData|paginate: { itemsPerPage: 10, currentPage: p };let i=index\">\r\n        <td>{{i+1}}</td>\r\n        <!-- <td >{{item.firstName}}</td>\r\n                  <td >{{item.lastName}}</td>\r\n                  <td >{{item.notificationEmail}}</td>\r\n                  <td >{{item.oppositeGender}}</td>\r\n                  <td >{{item.notificationPhone}}</td> -->\r\n        <td>{{item.orderCode}}</td>\r\n        <td>{{item.postCode}}</td>\r\n        <td>YF45</td>\r\n        <td>{{item.status}}</td>\r\n        <!-- <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getNotificationDetails(item)\">Notification Details</button></td> -->\r\n        <td>{{item.createdDate | date:'MMM d, y'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <table class=\"table\" *ngIf=\"userrole=='SUPERADMIN'\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Email</th>\r\n        <th>Gender</th>\r\n        <th>Mobile</th>\r\n        <th>Order Code</th>\r\n        <th>Post Code</th>\r\n        <th>PX Code</th>\r\n        <th>Status</th>\r\n        <!-- <th>View</th> -->\r\n        <th>Date of Request</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of sponsorIdData|paginate: { itemsPerPage: 10, currentPage: p };let i=index\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{item.firstName}}</td>\r\n        <td>{{item.lastName}}</td>\r\n        <td>{{item.notificationEmail}}</td>\r\n        <td>{{item.gender}}</td>\r\n        <td>{{item.notificationPhone}}</td>\r\n        <td>{{item.orderCode}}</td>\r\n        <td>{{item.postCode}}</td>\r\n        <td>YF45</td>\r\n        <td>{{item.status}}</td>\r\n        <!-- <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getNotificationDetails(item)\">Notification Details</button></td> -->\r\n        <td>{{item.createdDate | date:'MMM d, y'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <table class=\"table\" *ngIf=\"false\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Email</th>\r\n        <th>Gender</th>\r\n        <th>Mobile</th>\r\n        <th>Order Code</th>\r\n        <th>Post Code</th>\r\n        <th>PX Code</th>\r\n        <th>Status</th>\r\n        <!-- <th>View</th> -->\r\n        <th>Date of Request</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of sponsorIdData|paginate: { itemsPerPage: 10, currentPage: p };let i=index\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{item.firstName}}</td>\r\n        <td>{{item.lastName}}</td>\r\n        <td>{{item.notificationEmail}}</td>\r\n        <td>{{item.gender}}</td>\r\n        <td>{{item.notificationPhone}}</td>\r\n        <td>{{item.orderCode}}</td>\r\n        <td>{{item.postCode}}</td>\r\n        <td>YF45</td>\r\n        <td>{{item.status}}</td>\r\n        <!-- <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getNotificationDetails(item)\">Notification Details</button></td> -->\r\n        <td>{{item.createdDate | date:'MMM d, y'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Notification Details</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>&nbsp;Delivery Address : &nbsp; <span\r\n            style=\"font-size: 18px;\">{{address}}</span></h4>\r\n        <h4><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>&nbsp;Email Notification: &nbsp;<span\r\n            style=\"font-size: 18px;\">{{notificationEmail}}</span></h4>\r\n        <h4><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp; SMS Notification : &nbsp;<span\r\n            style=\"font-size: 18px;\">{{notificationPhone}}</span></h4>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/servicerequest/servicerequest.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/servicerequest/servicerequest.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VydmljZXJlcXVlc3Qvc2VydmljZXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/servicerequest/servicerequest.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/servicerequest/servicerequest.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServicerequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicerequestComponent", function() { return ServicerequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ServicerequestComponent = /** @class */ (function () {
    function ServicerequestComponent(dataservice) {
        this.dataservice = dataservice;
        this.sponsorIdData = [];
        this.allServiceRequestData = [];
        this.userrole = sessionStorage.getItem('userRole');
        this.getServiceRequestDetails();
    }
    ServicerequestComponent.prototype.getNotificationDetails = function (data) {
        this.address = data.address;
        this.notificationEmail = data.notificationEmail;
        this.notificationPhone = data.notificationPhone;
    };
    ServicerequestComponent.prototype.getServiceRequestDetails = function () {
        var _this = this;
        if ((sessionStorage.getItem('userRole') == 'COMMISSIONERUSER') || (sessionStorage.getItem('userRole') == 'ADMIN')) {
            this.dataservice.getServiceRequestDetails(sessionStorage.getItem('sponsorId')).subscribe(function (response) {
                _this.sponsorIdData = response.resultData;
            });
        }
        if ((sessionStorage.getItem('userRole') == 'SUPPORTUSER') || (sessionStorage.getItem('userRole') == 'SUPERADMIN')) {
            this.dataservice.getAllServiceRequestDetails().subscribe(function (response) {
                _this.sponsorIdData = response.resultData;
            });
        }
    };
    ServicerequestComponent.prototype.ngOnInit = function () {
    };
    ServicerequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-servicerequest',
            template: __webpack_require__(/*! ./servicerequest.component.html */ "./src/app/home/servicerequest/servicerequest.component.html"),
            styles: [__webpack_require__(/*! ./servicerequest.component.scss */ "./src/app/home/servicerequest/servicerequest.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ServicerequestComponent);
    return ServicerequestComponent;
}());



/***/ }),

/***/ "./src/app/home/specialevent/specialevent.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/specialevent/specialevent.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Special Event</h1>\r\n    <p>Special Events Details</p>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#myModal\"\r\n        (click)=\"add(specialEventForm)\">Add</button>\r\n            </div>\r\n  </div>\r\n<div class=\"tile\">\r\n  <h5>Special Event</h5>\r\n\r\n <table class=\"table\" >\r\n   <thead>\r\n     <tr style=\"font-size:15px\">\r\n       <th>Id</th>\r\n       <th>Event Name</th>\r\n       <th>Edit</th>\r\n       <th>Delete</th>\r\n     </tr>\r\n   </thead>\r\n   <tbody>\r\n     <tr *ngFor = \"let data of eventData | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\">\r\n       <td>{{data.id}}</td>\r\n       <td>{{data.eventName}}</td>\r\n       <td>\r\n         <span>\r\n           <span (click)=\"editSpecialevent(data)\" data-toggle=\"modal\" data-target=\"#myModal\"  class=\"glyphicon glyphicon-pencil\">\r\n             <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n           </span>\r\n         </span>\r\n       </td>\r\n       <td>\r\n         <span>\r\n           <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\r\n             <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n           </span>\r\n         </span>\r\n       </td>\r\n     </tr>\r\n   </tbody>\r\n </table>\r\n </div>\r\n <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n\r\n <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <form [formGroup]=\"specialEventForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Special Event</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"col-md-12\">\r\n              <input type=\"text\" placeholder=\"Special Event\"  formControlName=\"eventName\" name=\"eventName\" class=\"form-control\">\r\n              <span class=\"text text-danger\" *ngIf=\"specialEventForm.controls['eventName'].invalid && specialEventForm.controls['eventName'].touched\">Special Event Required</span>\r\n            </div>\r\n            <input type=\"text\" formControlName=\"id\" name=\"id\" hidden>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"submit\"  [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\r\n              (click)=\"saveEvent(specialEventForm)\" *ngIf=\"addfrm\">Submit</button>\r\n            <button type=\"button\" [disabled]=\"specialEventForm.invalid\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\r\n              (click)=\"updateEvent(specialEventForm)\" *ngIf=\"updatfrm\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/specialevent/specialevent.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/specialevent/specialevent.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3BlY2lhbGV2ZW50L3NwZWNpYWxldmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/specialevent/specialevent.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/specialevent/specialevent.component.ts ***!
  \*************************************************************/
/*! exports provided: SpecialeventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialeventComponent", function() { return SpecialeventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SpecialeventComponent = /** @class */ (function () {
    function SpecialeventComponent(dataservice, router, route, fb) {
        var _this = this;
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.updatfrm = false;
        this.addfrm = false;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log("Id: ", _this.id);
        });
    }
    SpecialeventComponent.prototype.ngOnInit = function () {
        this.specialEventForm = this.fb.group({
            'eventName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'id': []
        });
        this.getAllspecialEvent();
    };
    SpecialeventComponent.prototype.add = function (specialEventForm) {
        //regForm.reset();
        this.addfrm = true;
        this.updatfrm = false;
        specialEventForm.reset();
    };
    // Save Special Event
    SpecialeventComponent.prototype.saveEvent = function (specialEventForm) {
        var _this = this;
        this.dataservice.postspecialEvent(specialEventForm.value).subscribe(function (res) {
            _this.getAllspecialEvent();
            specialEventForm.reset();
        });
    };
    //Update Special Event
    SpecialeventComponent.prototype.updateEvent = function (specialEventForm) {
        var _this = this;
        specialEventForm.id = this.eventId;
        // var dt = { id:this.data['id'], eventName: this.peventName}
        this.dataservice.updateEvents(specialEventForm.value).subscribe(function (res) {
            console.log(res);
            specialEventForm.reset();
            _this.getAllspecialEvent();
        });
    };
    // Get all Special Event
    SpecialeventComponent.prototype.getAllspecialEvent = function () {
        var _this = this;
        if (this.id != 0) {
            this.dataservice.getSpecialEvent().subscribe(function (res) {
                // console.log("getting data",res)
                _this.eventData = res.resultData;
                console.log("getting data", res.resultData);
            });
        }
    };
    // Get all Special Event By Id
    SpecialeventComponent.prototype.getEventById = function (id) {
        this.dataservice.getSpecialEventById(id).subscribe(function (res) {
            // this.id = res.resultData.id;
            console.log("getting data gfgfd", res);
        });
    };
    SpecialeventComponent.prototype.editSpecialevent = function (data) {
        this.eventId = data.id;
        this.updatfrm = true;
        this.addfrm = false;
        this.specialEventForm.setValue({
            'eventName': data.eventName,
            'id': data.id
        });
        //  this.data =data
        // this.id = this.data['id'];
        //  this.peventName = data['eventName'];
    };
    //Delete Special event
    SpecialeventComponent.prototype.deleteSpecialEvent = function (id) {
        var _this = this;
        debugger;
        this.dataservice.deleteEvent(id).subscribe(function (res) {
            console.log("deleted status", res);
            _this.getAllspecialEvent();
        });
    };
    SpecialeventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialevent',
            template: __webpack_require__(/*! ./specialevent.component.html */ "./src/app/home/specialevent/specialevent.component.html"),
            styles: [__webpack_require__(/*! ./specialevent.component.scss */ "./src/app/home/specialevent/specialevent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SpecialeventComponent);
    return SpecialeventComponent;
}());



/***/ }),

/***/ "./src/app/home/status/status.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/status/status.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Status</h1>\r\n    <p>Status Details</p>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#myModal\"\r\n        (click)=\"addStatus(regForm)\">Add</button>  \r\n        </div>\r\n  </div>\r\n<div class=\"tile\">\r\n <h5>Status</h5>\r\n\r\n\r\n<table class=\"table\" >\r\n  <thead>\r\n    <tr style=\"font-size:15px\">\r\n      <th>Id</th>\r\n      <th>Status</th>\r\n      <th>Edit</th>\r\n      <th>Delete</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of statusData | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\">\r\n      <td>{{data.id}}</td>\r\n      <td>{{data.nameOfTheStatus}}</td>\r\n      <td>\r\n        <span>\r\n          <span (click)=\"editStatus(data)\" data-toggle=\"modal\" data-target=\"#myModal\"  class=\"glyphicon glyphicon-pencil\">\r\n            <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n          </span>\r\n        </span>\r\n      </td>\r\n      <td>\r\n        <span>\r\n          <span (click)=\"deleteStatus(data.id)\" value=\"delete\">\r\n            <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n          </span>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n  \r\n      <!-- Modal content-->\r\n      <form [formGroup]=\"statusForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Status</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      \r\n          </div>\r\n          <div class=\"modal-body\">\r\n      \r\n            <div class=\"col-md-12\">\r\n              <input type=\"text\" placeholder=\"Status\" name=\"nameOfTheStatus\" class=\"form-control\" formControlName=\"nameOfTheStatus\">\r\n              <span class=\"text text-danger\" *ngIf=\"statusForm.controls['nameOfTheStatus'].invalid && statusForm.controls['nameOfTheStatus'].touched\">Status is required</span>\r\n            </div>\r\n      \r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"submit\"  [disabled]=\"statusForm.invalid\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\r\n              (click)=\"save(statusForm)\" *ngIf=\"addfrm\">Submit</button>\r\n            <button type=\"button\"  [disabled]=\"statusForm.invalid\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\r\n              (click)=\"updateStatusData(statusForm)\" *ngIf=\"updatfrm\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/status/status.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/status/status.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/status/status.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/status/status.component.ts ***!
  \*************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var StatusComponent = /** @class */ (function () {
    function StatusComponent(dataservice, http, fb) {
        this.dataservice = dataservice;
        this.http = http;
        this.fb = fb;
        this.updatfrm = false;
        this.addfrm = false;
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.statusForm = this.fb.group({
            'nameOfTheStatus': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.getAllstatus();
    };
    StatusComponent.prototype.addStatus = function (regForm) {
        this.updatfrm = false;
        this.addfrm = true;
        this.nameOfTheStatus = "";
    };
    // Save status data
    StatusComponent.prototype.save = function (statusForm) {
        var _this = this;
        this.dataservice.postStatus(statusForm.value).subscribe(function (res) {
            _this.getAllstatus();
            statusForm.reset();
        });
    };
    // Get request for status
    StatusComponent.prototype.getAllstatus = function () {
        var _this = this;
        this.dataservice.getStatusData().subscribe(function (data) {
            _this.statusData = data.resultData;
            console.log("status data", _this.statusData);
        });
    };
    //Post request for status
    // saveStatus(formData:any){
    //     this.dataservice.postStatus(formData).subscribe(data=>{
    //       console.log("adding data",data)
    //     })
    // }
    StatusComponent.prototype.editStatus = function (data) {
        this.updatfrm = true;
        this.addfrm = false;
        this.statusId = data.id;
        this.statusForm.setValue({
            'nameOfTheStatus': data.nameOfTheStatus,
        });
    };
    StatusComponent.prototype.updateStatusData = function (statusForm) {
        var _this = this;
        statusForm.id = this.statusId;
        this.dataservice.updateStatus(statusForm.value, statusForm.id).subscribe(function (data) {
            statusForm.reset();
            _this.getAllstatus();
        });
    };
    //Delete Status
    StatusComponent.prototype.deleteStatus = function (id) {
        var _this = this;
        this.dataservice.deleteStatus(id).subscribe(function (res) {
            console.log("deleted status", res);
            _this.getAllstatus();
        });
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/home/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/home/status/status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/home/testcode/testcode.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/testcode/testcode.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Test Code</h1>\r\n    <p>Test Code Details</p>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n  </ul>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <button type=\"button\" class=\"btn btn-danger pull-right\" style=\"margin-bottom: 10px;\" data-backdrop=\"static\" data-toggle=\"modal\"\r\n      data-target=\"#myModal\"><i class=\"fa fa-plus\"></i>Add Test</button>\r\n  </div>\r\n</div>\r\n<div class=\"tile\">\r\n  <span style=\"font-size: 25px;\">Test Code Details</span>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Test Name</th>\r\n        <th>Test Code</th>\r\n        <th>Test Code Description</th>\r\n        <th>Is Default Test</th>\r\n        <th>Edit</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor='let item of testCodeData | filter:term |paginate: { itemsPerPage: 10, currentPage: p };let i=index'>\r\n        <td>\r\n          <div>{{i+1}}</div>\r\n        </td>\r\n        <td>\r\n          <div *ngIf=\"!item.isEditable\">{{item.testName}}</div>\r\n          <input [(ngModel)]=\"item.testName\" *ngIf=\"item.isEditable\" type=\"text\" class=\"form-control\">\r\n        </td>\r\n        <td>\r\n          <div *ngIf=\"!item.isEditable\">{{item.testCode}}\r\n          </div>\r\n          <input [(ngModel)]=\"item.testCode\" type=\"text\" *ngIf=\"item.isEditable\" class=\"form-control\">\r\n        </td>\r\n        <td>\r\n          <div *ngIf=\"!item.isEditable\">{{item.description}}</div>\r\n          <input type=\"text\" [(ngModel)]=\"item.description\" *ngIf=\"item.isEditable\" class=\"form-control\">\r\n        </td>\r\n        <td>\r\n          <div *ngIf=\"!item.isEditable\">{{item.defaultTest}}</div>\r\n          <input type=\"text\" [(ngModel)]=\"item.defaultTest\" *ngIf=\"item.isEditable\" class=\"form-control\">\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"item.isEditable=!item.isEditable\"\r\n            *ngIf=\"!item.isEditable\">Edit</button>\r\n          <button type=\"button\" class=\"btn btn-success\" *ngIf=\"item.isEditable\"\r\n            (click)=\"item.isEditable=!item.isEditable;updateTestCode(item.testName,item.testCode,item.description,item.id,item.defaultTest)\">Save</button>\r\n        </td>\r\n        <td>\r\n            <button  class=\"btn btn-warning btn-sm\"  *ngIf=\"item.isEditable\" (click)=\"item.isEditable=!item.isEditable\">Cancel</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n\r\n\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <form [formGroup]=\"testCodeForm\" (ngSubmit)=\"creattestDetails(testCodeForm.value)\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Test Details Form</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Test Name:</label>\r\n            <input type=\"text\" formControlName=\"testName\" class=\"form-control\" id=\"name\">\r\n            <span class=\"text text-danger\"\r\n              *ngIf=\"testCodeForm.controls['testName'].invalid && testCodeForm.controls['testName'].touched\">Test Name\r\n              is required</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"code\">Test Code:</label>\r\n            <input type=\"text\" formControlName=\"testCode\" class=\"form-control\" id=\"code\">\r\n            <span class=\"text text-danger\"\r\n              *ngIf=\"testCodeForm.controls['testCode'].invalid && testCodeForm.controls['testCode'].touched\">Test Code\r\n              is required</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"desc\">Test Description:</label>\r\n            <textarea type=\"text\" formControlName=\"description\" rows=\"4\" class=\"form-control\" id=\"desc\"></textarea>\r\n            <span class=\"text text-danger\"\r\n              *ngIf=\"testCodeForm.controls['description'].invalid && testCodeForm.controls['description'].touched\">Test Code\r\n              is required</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"default\">Is Default: </label>&nbsp;\r\n            <input type=\"checkbox\"  class=\".form-check-inline\" formControlName=\"defalut\" id=\"defalut\">\r\n            <span class=\"text text-danger\"\r\n              *ngIf=\"testCodeForm.controls['defalut'].invalid && testCodeForm.controls['defalut'].touched\">Please check the box </span>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Close</button>\r\n          <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"testCodeForm.invalid\" value=\"Submit\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/testcode/testcode.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/testcode/testcode.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVzdGNvZGUvdGVzdGNvZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/testcode/testcode.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/testcode/testcode.component.ts ***!
  \*****************************************************/
/*! exports provided: TestcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcodeComponent", function() { return TestcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TestcodeComponent = /** @class */ (function () {
    function TestcodeComponent(dataservice, fb) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.getAllTestCodeDetails();
    }
    TestcodeComponent.prototype.creattestDetails = function (formData) {
        var _this = this;
        $(document).ready(function () {
            $('#myModal').modal('hide');
        });
        this.dataservice.createTestDetails(formData).subscribe(function (data) {
            _this.getAllTestCodeDetails();
        });
        formData.reset();
    };
    TestcodeComponent.prototype.getAllTestCodeDetails = function () {
        var _this = this;
        this.dataservice.getAllTestCodeDetails().subscribe(function (response) {
            _this.testCodeData = response.resultData;
        });
    };
    TestcodeComponent.prototype.updateTestCode = function (testName, testCode, description, id, defaultTest) {
        var _this = this;
        var obj = { testCode: testCode, description: description, testName: testName, id: id, defalut: defaultTest };
        this.dataservice.updateTestCodeDetails(obj).subscribe(function (data) {
            _this.getAllTestCodeDetails();
            $('#StudentModal').modal('hide');
        });
    };
    TestcodeComponent.prototype.ngOnInit = function () {
        this.testCodeForm = this.fb.group({
            'testName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'testCode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'defalut': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    TestcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-testcode',
            template: __webpack_require__(/*! ./testcode.component.html */ "./src/app/home/testcode/testcode.component.html"),
            styles: [__webpack_require__(/*! ./testcode.component.scss */ "./src/app/home/testcode/testcode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TestcodeComponent);
    return TestcodeComponent;
}());



/***/ }),

/***/ "./src/app/home/userdetails/userdetails.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/userdetails/userdetails.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"app-title\">\r\n    <div>\r\n      <h1><i class=\"fa fa-th-list\"></i> Users</h1>\r\n      <p>Users Details</p>\r\n    </div>\r\n    <ul class=\"app-breadcrumb breadcrumb\">\r\n    </ul>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Here...\">\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#myModal\">Add Users</button>  \r\n        </div>\r\n  </div>\r\n<div class=\"panel-body\">\r\n    <div class=\"tile\">\r\n    <h4 class=\"panel-title\">&nbsp;&nbsp;Contact Info</h4>\r\n   <table class=\"table profile__table\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>First Name</th>\r\n          <th>Last Name</th>\r\n          <th>Email Id</th>\r\n          <th>Mobile Number</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of userDetails;let i=index\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{item.firstName}}</td>\r\n          <td>{{item.lastName}}</td>\r\n          <td>{{item.emailId}}</td>\r\n          <td>{{item.mobileNum}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">User Details</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <!-- Radio Buttons Started-->\r\n      <form [formGroup]=\"profileForm\">\r\n      <div class=\"modal-body\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"col-md-6\">\r\n                <label>\r\n                  First Name:\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\r\n                  <span class=\"text text-danger\"\r\n                    *ngIf=\"profileForm.controls['firstName'].invalid && profileForm.controls['firstName'].touched\">First Name is Required</span>\r\n\r\n                </label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <label>\r\n                  Last Name:\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\r\n                  <span class=\"text text-danger\"\r\n                    *ngIf=\"profileForm.controls['lastName'].invalid && profileForm.controls['lastName'].touched\">Last Name is required</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6\">\r\n                <label>\r\n                  Email:\r\n                  <input type=\"email\" class=\"form-control\" formControlName=\"emailId\">\r\n                  <span class=\"text text-danger\"\r\n                    *ngIf=\"profileForm.controls['emailId'].invalid && (profileForm.controls['emailId'].touched ||  profileForm.controls['emailId'].dirty)\">Email Id is required</span>\r\n\r\n                </label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <label>\r\n                  Username:\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"userName\">\r\n                  <span class=\"text text-danger\"\r\n                  *ngIf=\"profileForm.controls['userName'].invalid && profileForm.controls['userName'].touched\">Username is required</span>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-6\">\r\n                <label>\r\n                  MobileNo:\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"mobileNum\">\r\n                  <span class=\"text text-danger\"\r\n                  *ngIf=\"profileForm.controls['mobileNum'].invalid && (profileForm.controls['mobileNum'].touched || profileForm.controls['mobileNum'].dirty)\">Valid Mobile number is required</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n         \r\n      \r\n      </div>\r\n    </form>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n       <!--<input type=\"button\" class=\"btn btn-info float-right\" (click)=\"updateValue()\" *ngIf=\"updatfrm\"\r\n          value=\"Update\" />-->\r\n        <input type=\"submit\" class=\"btn btn-success float-right\" (click)=\"save(profileForm.value)\"\r\n          [disabled]=\"profileForm.invalid\" data-dismiss=\"modal\" value=\"Submit\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/userdetails/userdetails.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/userdetails/userdetails.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/userdetails/userdetails.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/userdetails/userdetails.component.ts ***!
  \***********************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(dataservice, fb) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.getusersByid();
    }
    UserdetailsComponent.prototype.getusersByid = function () {
        var _this = this;
        this.dataservice.getuserByid(sessionStorage.getItem('sponsorId')).subscribe(function (data) {
            _this.userDetails = data.resultData;
        });
    };
    UserdetailsComponent.prototype.save = function (formData) {
        var _this = this;
        formData.sponsorId = sessionStorage.getItem('sponsorId');
        formData.role = "COMMISSIONERUSER";
        this.dataservice.postUsers(formData).subscribe(function (data) {
            _this.getusersByid();
        });
    };
    UserdetailsComponent.prototype.ngOnInit = function () {
        this.profileForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'emailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            'mobileNum': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[6-9]\\d{9}')])],
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! ./userdetails.component.html */ "./src/app/home/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.scss */ "./src/app/home/userdetails/userdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/userlist/userlist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/userlist/userlist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"getUserListId == null\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n            <h3>Dear {{localuserdata?.candidateName}}</h3>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"text-primary\">You haven't applied for any post yet...!!!!</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"getUserListId != null\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive table_style\">\n        <h3>Dear {{localuserdata?.candidateName}}</h3>\n        <div>\n          <h6>This are your applied positions</h6>\n        </div>\n        <table class=\"table table-bordered table2\">\n          <thead>\n            <tr>\n              <th>Application Id</th>\n              <th>Position Applied For</th>\n              <th>Position Code</th>\n              <th>Aadhar</th>\n              <th>Mobile Number</th>\n              <th>Registration End data</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let testvalue of getUserListId;let i=index;\">\n              <td><span (click)=\"existingApp(testvalue.applicationNo)\">{{testvalue.applicationNo}}</span></td>\n              <td>{{testvalue.possitionAppliedFor}}</td>\n              <td>{{testvalue.possitionCode}}</td>\n              <td>{{testvalue.aadharNumber}}</td>\n              <td>{{testvalue.mobileNumber}}</td>\n              <td>{{testvalue.regEndDate}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/userlist/userlist.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/userlist/userlist.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table2 {\n  background-color: white; }\n\n.table2 thead {\n  background-color: #007080;\n  color: white;\n  box-shadow: inset 0 0 2px 0 rgba(255, 255, 255, 0.4), inset 0 0 3px 0 rgba(0, 0, 0, 0.4), inset 0 0 3px 5px rgba(0, 0, 0, 0.05), 2px 2px 4px 0 rgba(0, 0, 0, 0.25); }\n\n.table_style {\n  background-color: white;\n  padding: 10px; }\n\n.table_style h3 {\n  padding-top: 10px; }\n\n.table_style p {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS91c2VybGlzdC9EOlxcaW10YWMtcmVjcnVpdG1lbnQtZ2l0XFxpbXRhYy1yZWNydWl0bWVudFxccmVjcnVpdG1lbnQtdWkvc3JjXFxhcHBcXGhvbWVcXHVzZXJsaXN0XFx1c2VybGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUF1QixFQUFBOztBQUUzQjtFQUVJLHlCQUF5QjtFQUN6QixZQUFXO0VBQ1gsa0tBSTZCLEVBQUE7O0FBR2pDO0VBRUksdUJBQXVCO0VBQ3ZCLGFBQVksRUFBQTs7QUFFaEI7RUFFSSxpQkFBZ0IsRUFBQTs7QUFFcEI7RUFFSSxvQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi50YWJsZTIgdGhlYWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzA4MDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgIGluc2V0IDAgMCAycHggMCByZ2JhKDI1NSwyNTUsMjU1LC40KSxcclxuICAgIGluc2V0IDAgMCAzcHggMCByZ2JhKDAsMCwwLC40KSxcclxuICAgIGluc2V0IDAgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjA1KSxcclxuICAgIDJweCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMjUpO1xyXG5cclxufVxyXG4udGFibGVfc3R5bGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjEwcHg7ICAgXHJcbn1cclxuLnRhYmxlX3N0eWxlICBoM1xyXG57XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi50YWJsZV9zdHlsZSAgcFxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/userlist/userlist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/userlist/userlist.component.ts ***!
  \*****************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.idBasedApiCall();
        this.localuserdata = JSON.parse(localStorage.getItem('userinformation'));
        console.log(this.localuserdata);
    };
    UserlistComponent.prototype.idBasedApiCall = function () {
        debugger;
        // requestobj['positionId'] = localStorage.getItem('applyid');
        // requestobj['userId'] = sessionStorage.getItem('userId');
        if (localStorage.getItem('positionId') != null && sessionStorage.getItem('userId') != null) {
            this.appicationid();
        }
        if (localStorage.getItem('positionId') == null && sessionStorage.getItem('userId') != null) {
            this.UserListById();
        }
    };
    UserlistComponent.prototype.appicationid = function () {
        var _this = this;
        var requestobj = {};
        requestobj['positionId'] = localStorage.getItem('positionId');
        requestobj['userId'] = sessionStorage.getItem('userId');
        this.dataservice.getuserlistByIds(requestobj).subscribe(function (res) {
            _this.applicationId = res.resultData;
            console.log(_this.applicationId);
        });
    };
    UserlistComponent.prototype.UserListById = function () {
        var _this = this;
        var id = sessionStorage.getItem('userId');
        this.dataservice.getUserListById(id).subscribe(function (res) {
            _this.getUserListId = res.resultData;
            console.log(_this.getUserListId);
        });
    };
    UserlistComponent.prototype.existingApp = function (id) {
        this.router.navigate(['/dashboard', { queryParams: { idApp: id } }]);
    };
    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/home/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.scss */ "./src/app/home/userlist/userlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/home/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n  <div>\r\n    <h1><i class=\"fa fa-th-list\"></i> Registered Candidtates</h1>\r\n  </div>\r\n  <ul class=\"app-breadcrumb breadcrumb\">\r\n    <!-- <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> -->\r\n\r\n\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Trigger the modal with a button -->\r\n    <!-- Modal -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"term\" placeholder=\"Search Here...\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n      \r\n      </div>\r\n    </div>\r\n    <div class=\"tile\">\r\n\r\n      <h3 class=\"tile-title\">Users Details</h3>\r\n      <div>\r\n        <table class=\"table \">\r\n          <thead>\r\n            <tr>\r\n              <th>Username</th>\r\n              <th>Firstname</th>\r\n              <th>Lastname</th>\r\n              <th>Email</th>\r\n              <th>Role</th>\r\n              <th>Phone No</th>\r\n              <th>Status</th>\r\n              <!---<th>Edit</th>\r\n              <th>Delete</th>-->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let x of data | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\">\r\n              <td>{{x.username}}</td>\r\n              <td>{{x.firstName}}</td>\r\n              <td>{{x.lastName}}</td>\r\n              <td>{{x.emailId}}</td>\r\n              <td>{{x.roles}}</td>\r\n              <td>{{x.mobileNum}}</td>\r\n              <td>{{x.status}}</td>\r\n             <!----<td>\r\n                <span>\r\n                  <span (click)=\"editForm(x)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                    class=\"glyphicon glyphicon-pencil\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\r\n                  </span>\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  <span (click)=\"deleteData(x.id)\" value=\"delete\">\r\n                    <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\r\n                  </span>\r\n                </span>\r\n              </td>-->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/users/users.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/users/users.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");






var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, fb, auth, dataservice) {
        this.http = http;
        this.fb = fb;
        this.auth = auth;
        this.dataservice = dataservice;
        this.updatfrm = false;
        this.addfrm = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.profileForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'emailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'mobileNum': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[6-9]\\d{9}')])],
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'sponsorId': [null],
            'id': [null],
            'status': [null]
        });
    };
    UsersComponent.prototype.getUser = function () {
        var _this = this;
        this.dataservice.getUsersData().subscribe(function (data) {
            _this.data = data.resultData;
        });
    };
    UsersComponent.prototype.addUsers = function (profileForm) {
        profileForm.reset();
        this.updatfrm = false;
        this.addfrm = true;
    };
    UsersComponent.prototype.save = function (profileForm) {
        var _this = this;
        this.dataservice.postUsers(profileForm.value).subscribe(function (data) {
            console.log("adding data", data);
            profileForm.reset();
            _this.getUser();
        });
    };
    UsersComponent.prototype.changeUser = function () {
        var _this = this;
        this.dataservice.getSponserUser().subscribe(function (data) {
            _this.sponserUsers = data.resultData;
        });
    };
    UsersComponent.prototype.editForm = function (data) {
        console.log("hfdhf", data.id);
        this.updatfrm = true;
        this.addfrm = false;
        this.profileForm.patchValue({
            'mobileNum': data.mobileNum,
            'role': data.roles[0],
            'emailId': data.emailId,
            'sponsorId': data.sponsorId,
            'firstName': data.firstName,
            'lastName': data.lastName,
            'userName': data.username,
            'id': data.id,
            'status': data.status
        });
    };
    UsersComponent.prototype.deleteData = function (id) {
        var _this = this;
        this.dataservice.deleteUsers(id).subscribe(function (data) {
            console.log("deleting data", data);
            _this.getUser();
        });
    };
    UsersComponent.prototype.updateValue = function (profileForm) {
        var _this = this;
        var dt = {
            id: profileForm.id,
            role: profileForm.role,
            firstName: profileForm.firstName,
            lastName: profileForm.lastName,
            emailId: profileForm.emailId,
            userName: profileForm.userName,
            mobileNum: profileForm.mobileNum,
            sponsorId: profileForm.sponsorId,
            status: profileForm.status
        };
        console.log(dt);
        this.dataservice.updateUsers(profileForm.value).subscribe(function (data) {
            _this.getUser();
        });
        profileForm.reset();
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/home/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/home/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/home/verify/verify.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/verify/verify.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px;\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12\" *ngFor=\"let d of DemographicArr\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5>Personal Information<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"gotoHeroes()\">Edit</a></h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Name of the Candidate</label>\r\n              <h6>{{d.fullName}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Mobile</label>\r\n              <h6>{{d.mobileNumber}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>E-Mail</label>\r\n              <h6>{{d.emailId}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Date of Birth</label>\r\n              <h6>{{d.dob}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>Age</label>\r\n              <h6>{{d.currentAge}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>Gender</label>\r\n              <h6>{{d.gender}}</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>place Of Birth<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.placeOfBirth}}</h6>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <label>Position Applied For<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.possitionAppliedFor}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>Aadhar Number</label>\r\n              <h6>{{d.aadharNumber}}</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Father's Name<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.fatherName}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>Mother's Name<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.motherName}}</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Residence/Domicile<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.domicile}}/\r\n                {{d.otherDomicileDetails}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <!-- <label>Domicile certificate<span style=\"color:red;\">*</span></label>\r\n              <h6><i class=\"material-icons attachment\">&#xe226;</i>&nbsp;&nbsp;Domilcile_certificate.jpg</h6> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Nationality<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.nationality}}</h6>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n\r\n          <!--- Correspondance address-->\r\n          <h5>Correspondance Address<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"gotoHeroes()\">Edit</a></h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n              <label>Address<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.addresses[0].addressLine2}},\r\n                {{d.addresses[0].streetAddress}},\r\n                {{d.addresses[0].city}},\r\n                {{d.addresses[0].state}},\r\n                {{d.addresses[0].zipCode}}\r\n              </h6>\r\n\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <!--- Permanent address-->\r\n          <h5>Permanent Address<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"gotoHeroes()\">Edit</a></h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n              <label>Address<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.addresses[1].addressLine2}},\r\n                {{d.addresses[1].streetAddress}},\r\n                {{d.addresses[1].city}},\r\n                {{d.addresses[1].state}},\r\n                {{d.addresses[1].zipCode}}</h6>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <!--- Occupation Details-->\r\n          <h5>Matrial Status<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"gotoHeroes()\">Edit</a></h5>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>Married/Unmarreid</label>\r\n              <h6>{{d.maritalStatus}}</h6>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <label>If married no.of Living Spouses(more than one)</label>\r\n              <h6>{{d.moreLivingSpouses}}</h6>\r\n            </div>\r\n          </div>\r\n\r\n          <hr />\r\n          <!--- Upload Images Details-->\r\n          <h5>Uploaded Aadhar<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"gotoHeroes()\">Edit</a></h5>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>Aadhar Number<span>*</span></label>\r\n              <h6>{{d.aadharNumber}}</h6>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n              <!-- <label>Aadhar Image<span>*</span></label><br>\r\n              <img [src]=\"transform()\" style=\"width: 10%\"> -->\r\n            </div>\r\n          </div>\r\n          <hr>\r\n\r\n          <h5>Ex-Serviceman Details<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"gotoHeroes()\">Edit</a></h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>Whether you are Ex-Serviceman or not ?<span style=\"color:red;\">*</span></label>\r\n              <h6>{{d.exServiceMan}}</h6>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n             <!-- <label>ExServiceMan Image</label><br>\r\n               <img [src]=\"exserviceimg()\" style=\"width: 10%\"> ----->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n\r\n\r\n    <!--- Examinations Passed-->\r\n\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <h5>Examinations Passed<a style=\"color:blue;float:right;font-size: 14px;\" (click)=\"getdemographic()\">Edit</a></h5><br />\r\n              <h5 class=\"examination\">Reference Data</h5>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <table class=\"table table-striped table-responsive\">\r\n                    <thead>\r\n                      <th>Name</th>\r\n                      <th>Position</th>\r\n                      <th>address</th>\r\n                      <th>email</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let ref of refernce\">\r\n                        <td>{{ref.name}}</td>\r\n                        <td>{{ref.position}}</td>\r\n                        <td>{{ref.address}}</td>\r\n                        <td>{{ref.email}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <h5 class=\"examination\">Education Details</h5>\r\n              <a class=\"edit2\" (click)=\"getdemographic()\">Edit</a>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <table class=\"table table-striped  table-responsive\">\r\n                      <thead>\r\n                        <th>Qualification</th>\r\n                        <th>Group</th>\r\n                        <th>Board</th>\r\n                        <th>year of passing</th>\r\n                        <th>Division</th>\r\n                        <th>Percentage</th>\r\n                        <th>Distinction</th>\r\n                        <th>Certificate</th>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let ref of qualification\">\r\n                          <td>{{ref.qualification}}</td>\r\n                          <td>{{ref.subjects}}</td>\r\n                          <td>{{ref.board}}</td>\r\n                          <td>{{ref.yearPassing}}</td>\r\n                          <td>{{ref.classOfDivision}}</td>\r\n                          <td>{{ref.percentage}}</td>\r\n                          <td>{{ref.distinction}}</td>\r\n                          <td><img [src]=\"'data:image/jpg;base64,'+ref.certificate\"/></td> \r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <hr/>\r\n                 <!-- Experience start -->\r\n                <div class=\"row\">\r\n                  \r\n                    <div class=\"col-md-7\">\r\n                        <h5 class=\"examination\">experiencedetails</h5>\r\n                      <table class=\"table table-striped  table-responsive\">\r\n                        <thead>\r\n                          <th>nameOfEmployer</th>\r\n                          <th>designation</th>\r\n                          <th>employmentType</th>\r\n                          <th>pay</th>\r\n                          <th>numberOfYears</th>\r\n                          <!-- <th>Certificate</th> -->\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let ref of experience\">\r\n                            <td>{{ref.nameOfEmployer}}</td>\r\n                            <td>{{ref.designation}}</td>\r\n                            <td>{{ref.employmentType}}</td>\r\n                            <td>{{ref.pay}}</td>\r\n                            <td>{{ref.numberOfYears}}</td>\r\n                            <!-- <td>{{ref.certificate}}</td> -->\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <a class=\"edit3\" (click)=\"getdemographic()\">Edit</a>\r\n                        <h5 class=\"examination\">achievements</h5>\r\n                        <table class=\"table table-striped  table-responsive\">\r\n                          <thead>\r\n                            <th>achievements list</th>\r\n                \r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let ref of achivements\">\r\n                              <td>{{ref.achievementDetails}}</td>\r\n                           \r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                  </div>\r\n                  <!-- Experience end -->\r\n                  <hr/>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <h5 class=\"examination\">certificates</h5>\r\n                      <table class=\"table table-striped  table-responsive\">\r\n                        <thead>\r\n                          <th>certificateName</th>\r\n                          <!-- <th>certificateImage</th> -->\r\n                          <!-- <th>Certificate</th> -->\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let ref of certificates\">\r\n                            <td>{{ref.certificateName}}</td>\r\n                            <!-- <td><img [src]=\"certificateImage\" alt=\"path not correct\"></td> -->\r\n                            <!-- <td>{{ref.certificate}}</td> -->\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <h4>Photo image</h4>\r\n                      <img [src]=\"'data:image/jpg;base64,'+photoimage\" alt=\"path not correct\" style=\"width:30%;\"/>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      \r\n                      <!-- <h4>Signature image</h4>\r\n                      <span class=\"signature\">Edit</span>\r\n                      <img [src]=\"'data:image/jpg;base64,'+signatureimage\" alt=\"path not correct\" style=\"width:30%;\"/> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4 text-center\">\r\n      <p style=\"font-size: 12px\">DELIVERY PARTNER</p>\r\n      <img src=\"imtac-logo.png\" width=\"120px\" height=\"30px\">\r\n    </div>\r\n  </div>\r\n</div><br />"

/***/ }),

/***/ "./src/app/home/verify/verify.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/verify/verify.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: #8e8c8c;\n  font-size: 14px; }\n\n.container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto; }\n\nli.details_blk {\n  font-size: 14px;\n  padding: 0px; }\n\na {\n  color: black; }\n\n/* body {\r\n    background: #efefef\r\n} */\n\n.badge-light {\n  font-size: 20px;\n  border: 1px solid #32BB50;\n  border-radius: 50%;\n  padding: 6px;\n  width: 35px;\n  text-align: center;\n  height: 35px; }\n\n.list_anchor {\n  padding: 12px 20px;\n  display: block;\n  border-bottom: 1px solid #e3e3e3;\n  background: #f5efef;\n  transition-duration: 0.6s; }\n\n.list_anchor:hover {\n  text-decoration: none;\n  background: #ffffff; }\n\n.list_anchor:hover .badge-light {\n  background: green;\n  color: #fff; }\n\ninput[type=text] {\n  background-color: #FAFAFA; }\n\n/* .form-control {\r\n\r\n    background-color: #FAFAFA;\r\n    border: 1px solid #ecebeb;\r\n} */\n\nbt {\n  background-color: #62CDBE; }\n\n.attachment {\n  color: white;\n  background-color: #62CDBE;\n  padding: 2px;\n  border-radius: 6px;\n  vertical-align: center; }\n\n.navbar > .container {\n  margin-top: -15px; }\n\ninput[type=radio] {\n  border: 10px;\n  width: 33%;\n  height: 19px;\n  color: #7b29ff; }\n\nh4 {\n  font-size: 16px; }\n\n.bordered {\n  border: 1px solid gray; }\n\n.examination {\n  padding-bottom: 5px;\n  text-transform: uppercase; }\n\n.edit2 {\n  position: relative;\n  top: -34px;\n  right: 9px;\n  float: right;\n  color: blue;\n  font-weight: bold;\n  cursor: pointer; }\n\n.edit3 {\n  float: right;\n  font-weight: bold;\n  color: blue;\n  cursor: pointer; }\n\n.signature {\n  color: blue;\n  font-weight: bold;\n  float: right;\n  cursor: pointer; }\n\n/*Radio box*/\n\n/* input[type=\"radio\"] + .label-text:before{\r\ncontent: \"\\f111\";\r\nfont-family: \"Font Awesome 5 Free\";\r\nspeak: none;\r\nfont-style: normal;\r\nfont-variant: normal;\r\ntext-transform: none;\r\nline-height: 1;\r\n-webkit-font-smoothing:antialiased;\r\nwidth: 1em;\r\ndisplay: inline-block;\r\nmargin-right: 5px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + .label-text:before{\r\ncontent: \"\\f192\";\r\ncolor: #8e44ad;\r\nanimation: effect 250ms ease-in;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled + .label-text{\r\ncolor: #aaa;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled + .label-text:before{\r\ncontent: \"\\f111\";\r\ncolor: #ccc;\r\n} */\n\n/*Radio Toggle*/\n\n/* .toggle input[type=\"radio\"] + .label-text:before{\r\ncontent: \"\\f204\";\r\nfont-family: \"Font Awesome 5 Free\";\r\nspeak: none;\r\nfont-style: normal;\r\nfont-weight: 900;\r\nfont-variant: normal;\r\ntext-transform: none;\r\nline-height: 1;\r\n-webkit-font-smoothing:antialiased;\r\nwidth: 1em;\r\ndisplay: inline-block;\r\nmargin-right: 10px;\r\n}\r\n\r\n.toggle input[type=\"radio\"]:checked + .label-text:before{\r\ncontent: \"\\f205\";\r\ncolor: #16a085;\r\nanimation: effect 250ms ease-in;\r\n}\r\n\r\n.toggle input[type=\"radio\"]:disabled + .label-text{\r\ncolor: #aaa;\r\n}\r\n*/\n\n.toggle input[type=\"radio\"]:disabled + .label-text:before {\n  content: \"\\f204\";\n  color: #ec1414; }\n\n/* @keyframes effect{\r\n0%{transform: scale(0);}\r\n25%{transform: scale(1.3);}\r\n75%{transform: scale(1.4);}\r\n100%{transform: scale(1);}\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92ZXJpZnkvRDpcXGltdGFjLXJlY3J1aXRtZW50LWdpdFxcaW10YWMtcmVjcnVpdG1lbnRcXHJlY3J1aXRtZW50LXVpL3NyY1xcYXBwXFxob21lXFx2ZXJpZnlcXHZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCOztHQ0ZHOztBRE1IO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QixFQUFBOztBQUc3Qjs7OztHQ05HOztBRFlIO0VBQ0kseUJBQ0osRUFBQTs7QUFPQTtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUVJLHNCQUFxQixFQUFBOztBQUd6QjtFQUVJLG1CQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFFSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBRWxCO0VBRUEsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBYyxFQUFBOztBQUVkO0VBRUksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBYyxFQUFBOztBQUdsQixZQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0NERzs7QUQ4QkgsZUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDTkM7O0FEK0JEO0VBQ0EsZ0JBQWdCO0VBQ2hCLGNBQXVCLEVBQUE7O0FBSXZCOzs7OztHQzNCRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVyaWZ5L3ZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGNvbG9yOiAjOGU4YzhjO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcblxyXG5saS5kZXRhaWxzX2JsayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWZcclxufSAqL1xyXG5cclxuLmJhZGdlLWxpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMkJCNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVlZmVmO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLmxpc3RfYW5jaG9yOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0X2FuY2hvcjpob3ZlciAuYmFkZ2UtbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4vKiAuZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWJlYjtcclxufSAqL1xyXG5cclxuYnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRVxyXG59XHJcblxyXG4vLyAuc2FtcGxlZm9vdGVyIHtcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjEwNDAzLCAjRUUyNTA5KTtcclxuLy8gfVxyXG5cclxuLmF0dGFjaG1lbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyQ0RCRTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXI+LmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjN2IyOWZmO1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5ib3JkZXJlZFxyXG57XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5leGFtaW5hdGlvblxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZWRpdDJcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMzRweDtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmVkaXQzXHJcbntcclxuZmxvYXQ6IHJpZ2h0O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuY29sb3I6IGJsdWU7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5zaWduYXR1cmVcclxue1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4vKlJhZGlvIGJveCovXHJcblxyXG4vKiBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbmZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuc3BlYWs6IG5vbmU7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC12YXJpYW50OiBub3JtYWw7XHJcbnRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5saW5lLWhlaWdodDogMTtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxud2lkdGg6IDFlbTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTkyXCI7XHJcbmNvbG9yOiAjOGU0NGFkO1xyXG5hbmltYXRpb246IGVmZmVjdCAyNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYxMTFcIjtcclxuY29sb3I6ICNjY2M7XHJcbn0gKi9cclxuXHJcbi8qUmFkaW8gVG9nZ2xlKi9cclxuXHJcbi8qIC50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNFwiO1xyXG5mb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbnNwZWFrOiBub25lO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA5MDA7XHJcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG50ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxubGluZS1oZWlnaHQ6IDE7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbndpZHRoOiAxZW07XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNVwiO1xyXG5jb2xvcjogIzE2YTA4NTtcclxuYW5pbWF0aW9uOiBlZmZlY3QgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuKi9cclxuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMjA0XCI7XHJcbmNvbG9yOiByZ2IoMjM2LCAyMCwgMjApO1xyXG59IFxyXG5cclxuXHJcbi8qIEBrZXlmcmFtZXMgZWZmZWN0e1xyXG4wJXt0cmFuc2Zvcm06IHNjYWxlKDApO31cclxuMjUle3RyYW5zZm9ybTogc2NhbGUoMS4zKTt9XHJcbjc1JXt0cmFuc2Zvcm06IHNjYWxlKDEuNCk7fVxyXG4xMDAle3RyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG59ICovXHJcblxyXG4iLCJsYWJlbCB7XG4gIGNvbG9yOiAjOGU4YzhjO1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG5saS5kZXRhaWxzX2JsayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4OyB9XG5cbmEge1xuICBjb2xvcjogYmxhY2s7IH1cblxuLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmXHJcbn0gKi9cbi5iYWRnZS1saWdodCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyQkI1MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDsgfVxuXG4ubGlzdF9hbmNob3Ige1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgYmFja2dyb3VuZDogI2Y1ZWZlZjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42czsgfVxuXG4ubGlzdF9hbmNob3I6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IH1cblxuLmxpc3RfYW5jaG9yOmhvdmVyIC5iYWRnZS1saWdodCB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjsgfVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsgfVxuXG4vKiAuZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWJlYjtcclxufSAqL1xuYnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJDREJFOyB9XG5cbi5hdHRhY2htZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJDREJFO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxuXG4ubmF2YmFyID4gLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0xNXB4OyB9XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm9yZGVyOiAxMHB4O1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjN2IyOWZmOyB9XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7IH1cblxuLmV4YW1pbmF0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4uZWRpdDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM0cHg7XG4gIHJpZ2h0OiA5cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmVkaXQzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc2lnbmF0dXJlIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKlJhZGlvIGJveCovXG4vKiBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbmZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuc3BlYWs6IG5vbmU7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC12YXJpYW50OiBub3JtYWw7XHJcbnRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5saW5lLWhlaWdodDogMTtcclxuLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxud2lkdGg6IDFlbTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAubGFiZWwtdGV4dDpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXFxmMTkyXCI7XHJcbmNvbG9yOiAjOGU0NGFkO1xyXG5hbmltYXRpb246IGVmZmVjdCAyNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIC5sYWJlbC10ZXh0OmJlZm9yZXtcclxuY29udGVudDogXCJcXGYxMTFcIjtcclxuY29sb3I6ICNjY2M7XHJcbn0gKi9cbi8qUmFkaW8gVG9nZ2xlKi9cbi8qIC50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNFwiO1xyXG5mb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbnNwZWFrOiBub25lO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA5MDA7XHJcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG50ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxubGluZS1oZWlnaHQ6IDE7XHJcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbndpZHRoOiAxZW07XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9nZ2xlIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmxhYmVsLXRleHQ6YmVmb3Jle1xyXG5jb250ZW50OiBcIlxcZjIwNVwiO1xyXG5jb2xvcjogIzE2YTA4NTtcclxuYW5pbWF0aW9uOiBlZmZlY3QgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLnRvZ2dsZSBpbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAubGFiZWwtdGV4dHtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxuKi9cbi50b2dnbGUgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmRpc2FibGVkICsgLmxhYmVsLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDRcIjtcbiAgY29sb3I6ICNlYzE0MTQ7IH1cblxuLyogQGtleWZyYW1lcyBlZmZlY3R7XHJcbjAle3RyYW5zZm9ybTogc2NhbGUoMCk7fVxyXG4yNSV7dHJhbnNmb3JtOiBzY2FsZSgxLjMpO31cclxuNzUle3RyYW5zZm9ybTogc2NhbGUoMS40KTt9XHJcbjEwMCV7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/verify/verify.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/verify/verify.component.ts ***!
  \*************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var VerifyComponent = /** @class */ (function () {
    //router: any;
    function VerifyComponent(dataservice, fb, sanitizer, router, route) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.DemographicArr = [];
        this.certificatesdata = [];
    }
    // myform: FormGroup;
    VerifyComponent.prototype.ngOnInit = function () {
        this.getDemographicDetails();
        this.employeedata();
    };
    VerifyComponent.prototype.getDemographicDetails = function () {
        var _this = this;
        this.id = localStorage.getItem('applicationid');
        this.dataservice.getDemographic(this.id).subscribe(function (data) {
            debugger;
            console.log(data);
            _this.resobj = data['resultData'];
            _this.DemoArr = _this.DemographicArr.push(_this.resobj);
            console.log('DemographicArr:', _this.resobj);
            _this.b = 'data:image/jpeg;base64,' + _this.resobj.aadharImage;
            _this.d = 'data:image/jpeg;base64,' + _this.resobj.exServiceImage;
        });
    };
    VerifyComponent.prototype.employeedata = function () {
        var _this = this;
        this.dataservice.getemployeedata(this.id).subscribe(function (res) {
            console.log(res);
            _this.resObj = res['resultData'];
            _this.refernce = res['resultData'].references;
            _this.qualification = res['resultData'].qualificationsArrayMapper.educationalQualificationsMapper;
            _this.experience = res['resultData'].experiencedetails;
            _this.achivements = res['resultData'].achievements;
            _this.certificates = res['resultData'].certificates;
            _this.photoimage = res['resultData'].photoImage;
            _this.signatureimage = res['resultData'].signatureImage;
        });
    };
    VerifyComponent.prototype.gotoHeroes = function () {
        this.router.navigate(['/dashboard']);
    };
    VerifyComponent.prototype.getdemographic = function () {
        this.router.navigate(['/empinfo']);
    };
    VerifyComponent.prototype.transform = function () {
        var c = this.sanitizer.bypassSecurityTrustResourceUrl(this.b);
        return c;
    };
    VerifyComponent.prototype.exserviceimg = function () {
        var e = this.sanitizer.bypassSecurityTrustResourceUrl(this.d);
        return e;
    };
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/home/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.scss */ "./src/app/home/verify/verify.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--header area start-->\r\n\r\n<div class=\"top_right\">\r\n\t<!----<button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>-->\r\n\t<button class=\"btn btn-light btn-sm login\" style=\"margin-top: 8px\" >Login</button>\r\n\r\n</div>\r\n\r\n\r\n<!--body start-->\r\n\r\n\r\n<div class=\"container-fluid Imgheight\">\r\n\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"desk\">\r\n\t\t\t<img src=\"assets\\img\\img\\background.png\">\r\n\r\n\t\t</div>\r\n\t\t<div class=\"desk1\">\r\n\t\t\t<img src=\"assets\\img\\img\\jobs.png\">\r\n\t\t</div>\r\n\t\t<div class=\"govt\">\r\n\t\t\t<img src=\"assets\\img\\img\\logo-desktop.png\">\r\n\t\t</div>\r\n\t\t<div class=\"uni\">\r\n\t\t\t<h4> GURUGRAM UNIVERSITY </h4>\r\n\t\t\t<p> (State Govt. University Established Under Haryana Act 17 Of 2017) </p>\r\n\t\t</div>\r\n\t\t<div class=\"job\">\r\n\t\t\t<h1 style=\"color: rgb(206, 245, 33)\">2019-2020</h1>\r\n\t\t\t<br>\r\n\t\t\t<h1 style=\"color: white\">\r\n\t\t\t\tJob Application\r\n\t\t\t</h1>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div class=\"buttonStyle\">\r\n\t\t<button class=\"btn btn-lg btn-warning custom-reg-btn\" id=\"signup\" type=\"button\"> Register Now &nbsp;&nbsp; <i\r\n\t\t\t\tclass=\"fa fa-angle-right\"></i></button>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"container pt-0\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<section class=\"col-md-10 offset-md-1 mt-5 \">\r\n\t\t\t\t<div class=\"card pgm-list\"> \r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h5>Open Positions</h5><br>\r\n\t\t\t\t\t<div>               \r\n\t\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let list of recrutmentData;\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t<p class=\"fontSize\">{{list.positionName}}</p>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-color\">Eligibility Criteria</button>  <span>{{list.eligibilityCriteria}}</span>\r\n\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-outline-success apply-btn name\" type=\"button\" \r\n\t\t\t\t\t\t\t\t\t(click)=\"onClick(list)\">Apply Now</button>  \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</section>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!--body end-->\r\n<!----<router-outlet></router-outlet>-->\r\n<button class=\"modal-close1\" id=\"sign\" type=\"button\"><i class=\"fa fa-close fa-2x cursor1\"></i></button>\r\n\r\n<!--Sign in Login Modal -->\r\n<div id=\"loginModal\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"container col-md-12\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xl-6\">\r\n\t\t\t\t\t\t\t<img alt=\"Register\" class=\"img-fluid mt-5\"\r\n\t\t\t\t\t\t\t\tsrc=\"https://gu.stage.aimserp.co.in/admission/assets/images/register.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xl-6\" *ngIf=\"!createdby\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row px-2\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"Register-Now\"> Sign In </h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t\t<form class=\"form col-md-12 col-sm-12 col-xl-12 ng-invalid ng-touched ng-dirty\"\r\n\t\t\t\t\t\t\t\t\t[formGroup]=\"loginform\" (ngSubmit)=\"LoginAction(loginform.value)\">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label js-hide-label\" for=\"username-modal\">Email</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-touched ng-dirty ng-invalid\" id=\"username-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"username-modal\" placeholder=\"Email\" required=\"required\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"email\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label js-hide-label\"\r\n\t\t\t\t\t\t\t\t\t\t\tfor=\"login-password-modal\">Password</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-touched ng-dirty ng-invalid\" type=\"password\"\r\n\t\t\t\t\t\t\t\t\t\t\tid=\"login-password-modal\" name=\"login-password-modal\" placeholder=\"Password\"\r\n\t\t\t\t\t\t\t\t\t\t\trequired=\"required\" formControlName=\"password\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                    \r\n\t\t\t\t\t\t\t\t\t<div class=\"row mt-5\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 col-md-5 col-xl-5 mt-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-modal-sign-in\" type=\"submit\">Sign In</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 col-md-7 col-xl-7 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"modal-popup-already\" href=\"#\" id=\"forgotPassword\" (click)=\"forget()\">Forgot\r\n\t\t\t\t\t\t\t\t\t\t\t\tPassword</a><br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"modal-popup-already\"> Don't have account? <a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"modal-popup-already buttonlink\" id=\"openRegModal1\"> Register\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHere</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <!-- forgot start -->\r\n\r\n\t\t\t\t\t\t <div class=\"col-md-6 col-sm-6 col-xl-6\" *ngIf=\"createdby\">\r\n                                <div class=\"row px-2\">\r\n                                    <h4 class=\"Register-Now\">Forgot Password </h4>\r\n                                </div>\r\n                                <div class=\"row px-2 mt-3\">\r\n                                    <h5 class=\"modal-sign-in-h6\"> Password send to your mail </h5>\r\n                                </div>\r\n                                <div class=\"row\">\r\n    \r\n                                    <form class=\"form col-md-12 col-sm-12 col-xl-12\" #forgotForm=\"ngForm\">\r\n    \r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-label js-hide-label\" for=\"username-modal\">Email</label>\r\n                                            <input class=\"form-control\" id=\"username-modal\"\r\n                                                 placeholder=\"Email\" minlength=\"4\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                                                 [(ngModel)]=\"emailInput\" name=\"forgot\" minlength=\"4\" \r\n                                                 class=\"form-control\" #forgotPassword=\"ngModel\" required>\r\n                                                                                \r\n                                                  <span style=\"color:red\" *ngIf=\"forgotPassword.invalid && forgotPassword.touched\">\r\n                                                \r\n                                                    <span *ngIf=\"forgotPassword.errors.required\">\r\n                                                        Email is required.\r\n                                                      </span>\r\n                                                      <span *ngIf=\"forgotPassword.errors.minlength\">\r\n                                                        Email must be at least 4 characters long.\r\n                                                      </span>\r\n                                                      <span *ngIf=\"forgotPassword.errors.pattern\">\r\n                                                        Email must contains @.\r\n                                                      </span>                \r\n                                                 </span>  \r\n                                           </div>\r\n\r\n                                        <div class=\"row mt-5\">\r\n                                            <div class=\"col-sm-5 col-md-5 col-xl-5 mt-4\">\r\n                                                <button class=\"btn btn-modal-sign-in\"  (click)=\"forgotPassword123()\">Submit</button><br>\r\n                                            </div>\r\n                                            <div class=\"col-sm-7 col-md-7 col-xl-7 text-right mt-4\">\r\n                                                <strong><a (click)=\"backToLogin()\">Back To Login</a></strong> \r\n                                            </div>\r\n                                        </div>\r\n    \r\n                                    </form>\r\n                                </div>\r\n    \r\n                            </div>\r\n\r\n\t\t\t\t\t\t\t<!-- forgot end -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Register Modal pop up-->\r\n\r\n\r\n<button class=\"modal-close1\" id=\"sign1\" type=\"button\"><i class=\"fa fa-close fa-2x cursor1\"></i></button>\r\n\r\n<!--Sign in Login Modal -->\r\n<div id=\"reigsterModal\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"container col-md-12\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xl-6\">\r\n\t\t\t\t\t\t\t<img alt=\"Register\" class=\"img-fluid mt-5\"\r\n\t\t\t\t\t\t\t\tsrc=\"https://gu.stage.aimserp.co.in/admission/assets/images/register.png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xl-6\">\r\n\t\t\t\t\t\t\t<div class=\"row px-2\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"Register-Now\">Register Now</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<form class=\"form col-md-12 col-sm-12 col-xl-12 ng-invalid ng-touched ng-dirty\"\r\n\t\t\t\t\t\t\t\t\t[formGroup]=\"registerform\" (ngSubmit)=\"register(registerform.value)\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"username-modal\">Candiate Name (As per matric\r\n\t\t\t\t\t\t\t\t\t\t\tcertificate Name)</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-touched ng-dirty ng-invalid\" id=\"username-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"username-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Candiate Name (As per matric certificate Name)\" required\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"email\" formControlName=\"candidateName\">\r\n\t\t\t\t\t\t\t\t\t       <span *ngIf=\"registerform.controls['candidateName'].invalid && registerform.controls['candidateName'].touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass='text text-danger'>Please Enter Name</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"login-password-modal\">Aadhar Number</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-invalid ng-touched ng-dirty\" id=\"aadhar-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"aadhar-modal\" placeholder=\"Aadhar Number\" required type=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"aadharNumber\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"registerform.controls['aadharNumber'].invalid && registerform.controls['aadharNumber'].touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass='text text-danger'>Please Enter Aadhar Number</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"email-modal\">Email</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-pristine ng-invalid ng-touched\" id=\"email-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"email-modal\" placeholder=\"Email\" required type=\"email\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"email\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"registerform.controls['email'].invalid && registerform.controls['email'].touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass='text text-danger'>Please enter email</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"mobile-modal\">Mobile Number</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-pristine ng-invalid ng-touched\" id=\"mobile-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"mobile-modal\" placeholder=\"Mobile Number\" required type=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"mobileNumber\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"registerform.controls['mobileNumber'].invalid && registerform.controls['mobileNumber'].touched\"\r\n\t\t\t\t\t\t\t\t\t\tclass='text text-danger'>Please enter Mobile Number</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"message-modal\">Date of Birth</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-pristine ng-invalid ng-touched\" id=\"dob-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"dob-modal\" placeholder=\"Date of Birth\" required type=\"date\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"dob\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"registerform.controls['dob'].invalid && registerform.controls['dob'].touched\"\r\n\t\t\t\t\t\t\t\t\t\tclass='text text-danger'>Please enter dob</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label js-hide-label\" for=\"password-modal\">Password</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-pristine ng-invalid ng-touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tid=\"password-modal\" name=\"password-modal\" placeholder=\"Password\" required\r\n\t\t\t\t\t\t\t\t\t\t\ttype=\"password\" formControlName=\"password\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"registerform.controls['password'].invalid && registerform.controls['password'].touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass='text text-danger'>Please enter password</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"confirm password modal\">Confirm Password</label>\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control ng-pristine ng-invalid ng-touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tid=\"confirm_password-modal\" name=\"confirm_password-modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Confirm Password\" required type=\"password\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<p class=\"wait\" *ngIf=\"spin\">Please wait &nbsp;<i \r\n\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-spinner fa-spin\"></i>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row mt-5\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 col-md-5 col-xl-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-modal-sign-in\" type=\"submit\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"registerform.invalid\">Register </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 col-md-7 col-xl-7 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"modal-popup-already\"> Already have a account? <a\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"modal-popup-already buttonlink\" id=\"openRegModal\"> Sign In\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHere</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n<!--popup end-->"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli:400,700\");\n.custom-sign-btn {\n  border-radius: 16px !important;\n  padding: 0.25rem 0.5rem !important;\n  font-size: 0.875rem !important;\n  line-height: 1.5 !important;\n  background-color: #fff;\n  color: #b00404; }\n.modal-close {\n  background-color: #fff !important;\n  border-radius: 15px;\n  padding: 15px !important;\n  color: #506d85;\n  opacity: unset;\n  border: 0 !important;\n  position: relative;\n  cursor: pointer !important;\n  left: 5em; }\n.cursor1 {\n  cursor: pointer !important; }\n.modal-backdrop.fade {\n  opacity: 0.5; }\n#loginModal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.41);\n  /* Black w/ opacity */ }\n#reigsterModal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.41);\n  /* Black w/ opacity */ }\n.modal-close1 {\n  background-color: #fff !important;\n  border-radius: 15px;\n  padding: 15px !important;\n  color: #506d85;\n  border: 0 !important;\n  position: fixed;\n  top: 20px;\n  right: 40px;\n  cursor: pointer !important;\n  z-index: 99999; }\n.buttonlink {\n  color: #157ac1 !important; }\n.cursor1 {\n  font-size: 20px; }\n.Register-Now {\n  font-family: Muli !important;\n  font-size: 32px !important;\n  font-weight: 700 !important;\n  font-style: normal !important;\n  font-stretch: normal !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  color: #292c30 !important; }\n.modal-sign-in-h6 {\n  font-family: Muli;\n  font-size: 18px;\n  font-weight: 700;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #292c30; }\n.btn-modal-register, .btn-modal-sign-in {\n  border-radius: 32px;\n  background-color: #ff9429;\n  color: #fff;\n  padding: .375rem 2rem; }\n.btn:hover {\n  color: #212529;\n  text-decoration: none; }\n.modal-popup-already {\n  font-family: Muli;\n  font-size: 14px;\n  font-weight: 700;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #506d85; }\n.modal-popup-sign-in {\n  font-family: Muli;\n  font-size: 14px;\n  font-weight: 700;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #00b9f5;\n  display: block; }\n#sign1, #sign {\n  display: none; }\n.wait {\n  color: red; }\n.wait i {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvRDpcXGltdGFjLXJlY3J1aXRtZW50LWdpdFxcaW10YWMtcmVjcnVpdG1lbnRcXHJlY3J1aXRtZW50LXVpL3NyY1xcYXBwXFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQVk7QUFFWjtFQUNJLDhCQUE2QjtFQUM3QixrQ0FBK0I7RUFDL0IsOEJBQTRCO0VBQzVCLDJCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBO0FBRWxCO0VBRUksaUNBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7RUFDZCxvQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixTQUFTLEVBQUE7QUFHYjtFQUVJLDBCQUEwQixFQUFBO0FBRzlCO0VBQ0ksWUFBWSxFQUFBO0FBR2hCO0VBRUksYUFBYTtFQUFFLHNCQUFBO0VBQ2YsZUFBZTtFQUFFLGtCQUFBO0VBQ2pCLFVBQVU7RUFBRSxlQUFBO0VBQ1osa0JBQWtCO0VBQUUsd0JBQUE7RUFDcEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQUUsZUFBQTtFQUNiLFlBQVk7RUFBRSxnQkFBQTtFQUNkLGNBQWM7RUFBRSw0QkFBQTtFQUNoQix1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixxQ0FBcUM7RUFBRSxxQkFBQSxFQUFzQjtBQUdqRTtFQUVJLGFBQWE7RUFBRSxzQkFBQTtFQUNmLGVBQWU7RUFBRSxrQkFBQTtFQUNqQixVQUFVO0VBQUUsZUFBQTtFQUNaLGtCQUFrQjtFQUFFLHdCQUFBO0VBQ3BCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUFFLGVBQUE7RUFDYixZQUFZO0VBQUUsZ0JBQUE7RUFDZCxjQUFjO0VBQUUsNEJBQUE7RUFDaEIsdUJBQTRCO0VBQUUsbUJBQUE7RUFDOUIscUNBQXFDO0VBQUUscUJBQUEsRUFBc0I7QUFLakU7RUFFSSxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixTQUFRO0VBQ1IsV0FBVTtFQUNWLDBCQUEwQjtFQUMxQixjQUFhLEVBQUE7QUFHakI7RUFFSSx5QkFBd0IsRUFBQTtBQUc1QjtFQUVJLGVBQWMsRUFBQTtBQUdqQjtFQUNHLDRCQUEyQjtFQUMzQiwwQkFBeUI7RUFDekIsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUM1QiwrQkFBOEI7RUFDOUIsOEJBQTZCO0VBQzdCLGlDQUFnQztFQUNoQyx5QkFBd0IsRUFBQTtBQUUzQjtFQUNHLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7QUFFbEI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTtBQUV6QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUV6QjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7QUFFbEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGNBQWMsRUFBQTtBQUdsQjtFQUVJLGFBQVksRUFBQTtBQUVoQjtFQUVJLFVBQVMsRUFBQTtBQUViO0VBRUksVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGk6NDAwLDcwMCcpO1xyXG5cclxuLmN1c3RvbS1zaWduLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW0haW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICNiMDA0MDQ7XHJcbn1cclxuLm1vZGFsLWNsb3NlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNTA2ZDg1O1xyXG4gICAgb3BhY2l0eTogdW5zZXQ7XHJcbiAgICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA1ZW07XHJcbn1cclxuXHJcbi5jdXJzb3IxXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3AuZmFkZSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuI2xvZ2luTW9kYWxcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuI3JlaWdzdGVyTW9kYWxcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuXHJcblxyXG4ubW9kYWwtY2xvc2UxXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzUwNmQ4NTtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICByaWdodDo0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4Ojk5OTk5O1xyXG59XHJcblxyXG4uYnV0dG9ubGlua1xyXG57XHJcbiAgICBjb2xvcjojMTU3YWMxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXJzb3IxXHJcbntcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcblxyXG4gLlJlZ2lzdGVyLU5vdyB7XHJcbiAgICBmb250LWZhbWlseTogTXVsaSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDMycHghaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWwhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWwhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbCFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjkyYzMwIWltcG9ydGFudDtcclxuIH1cclxuIC5tb2RhbC1zaWduLWluLWg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzI5MmMzMDtcclxufVxyXG4uYnRuLW1vZGFsLXJlZ2lzdGVyLCAuYnRuLW1vZGFsLXNpZ24taW4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk0Mjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gMnJlbTtcclxufVxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5tb2RhbC1wb3B1cC1hbHJlYWR5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzUwNmQ4NTtcclxufVxyXG4ubW9kYWwtcG9wdXAtc2lnbi1pbiB7XHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMGI5ZjU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZ24xLCNzaWduXHJcbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4ud2FpdFxyXG57XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLndhaXQgaVxyXG57XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");









var IndexComponent = /** @class */ (function () {
    function IndexComponent(authService, routerNavigate, fb, index, http, dataservice) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
        this.fb = fb;
        this.index = index;
        this.http = http;
        this.dataservice = dataservice;
        this.loginActionActive = false;
        this.registerdisabled = false;
        this.spin = false;
        this.createdby = false;
        this.Url = "http://192.168.1.137:8088/recruitment/rest/user/forgotPassword/";
    }
    IndexComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.loginActionActive = true;
            this.loginform.reset();
        }
    };
    IndexComponent.prototype.navigateToDashboard = function () {
        var _this = this;
        if (this.loginActionActive) {
            debugger;
            this.roleNagivation = sessionStorage.getItem('userRole');
            if (this.roleNagivation == 'USER') {
                var requestobj = {};
                requestobj['positionId'] = localStorage.getItem('positionId');
                requestobj['userId'] = sessionStorage.getItem('userId');
                if (localStorage.getItem('positionId') != null && sessionStorage.getItem('userId') != null) {
                    this.dataservice.getuserlistByIds(requestobj).subscribe(function (res) {
                        _this.applicationid = res;
                        if (_this.applicationid.errorMessage == "Application already exists") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Already applied for this position", "Please Login...!!!!").then(function (value) {
                                _this.routerNavigate.navigate(['login']);
                                $("#loginModal").hide();
                                localStorage.clear();
                                sessionStorage.clear();
                            });
                        }
                        if (_this.applicationid.errorMessage == 'Application not exists') {
                            _this.routerNavigate.navigate(['dashboard']);
                        }
                    });
                }
                if (localStorage.getItem('positionId') == null && sessionStorage.getItem('userId') != null) {
                    var id = sessionStorage.getItem('userId');
                    this.dataservice.getUserListById(id).subscribe(function (res) {
                        _this.getUserListId = res.resultData;
                        _this.routerNavigate.navigate(['userList']);
                        console.log(_this.getUserListId);
                    });
                }
            }
            if (this.roleNagivation == 'ADMIN') {
                this.routerNavigate.navigate(['registered']);
            }
        }
    };
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginform = this.fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.getRecurimentList();
        this.registerform = this.fb.group({
            'candidateName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'aadharNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'email': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            'mobileNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'dob': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.authService.logindata.subscribe(function (data) {
            _this.navigateToDashboard();
        });
        $(document).ready(function () {
            $('.login').click(function () {
                $("#loginModal").toggle();
            });
            $('.login').click(function () {
                $("#loginModal").show();
                $('#sign').show();
            });
            $('#sign').click(function () {
                $("#loginModal").hide();
                $('#sign').hide();
            });
            $('#signup').click(function () {
                $("#reigsterModal").toggle();
                $('#sign1').show();
            });
            $('#sign1').click(function () {
                $("#reigsterModal").hide();
                $(this).hide();
            });
            $('#openRegModal1').click(function () {
                $("#reigsterModal,#sign1").show();
                $("#loginModal,#sign").hide();
            });
            $('#openRegModal').click(function () {
                $("#reigsterModal,#sign1").hide();
                $("#loginModal,#sign").show();
            });
        });
    };
    IndexComponent.prototype.viewResult = function () {
        this.routerNavigate.navigate(['viewresults']);
    };
    IndexComponent.prototype.register = function (formdata) {
        var _this = this;
        this.registerdisabled = true;
        this.spin = true;
        var requestobj = {
            'role': 'user'
        };
        requestobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, formdata, requestobj);
        return this.index.register(requestobj).subscribe(function (res) {
            _this.registerdisabled = false;
            _this.spin = false;
            if (res['statusCode'] == 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Registered Successfully!", "Thank you", "success");
            }
            else if (res['statusCode'] == 226) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Email id and aadhar already exists");
            }
        }, function (err) {
            if (err.status == 500) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Internal server error");
            }
        });
    };
    IndexComponent.prototype.getRecurimentList = function () {
        var _this = this;
        this.index.getRecrutment().subscribe(function (data) {
            _this.recrutmentData = data.resultData;
            console.log(_this.recrutmentData);
        });
    };
    IndexComponent.prototype.onClick = function (list) {
        $("#loginModal").show();
        $('#sign').show();
        var id = localStorage.setItem('positionId', list.id);
        var applno = localStorage.setItem("applno", list.positionName);
        console.log(list);
    };
    IndexComponent.prototype.forget = function () {
        this.createdby = true;
    };
    IndexComponent.prototype.forgotPassword123 = function () {
        var _this = this;
        alert();
        this.http.get(this.Url + this.emailInput).subscribe(function (data) {
            _this.res = data;
            if (_this.res.responseMessage == "Password Sent to Your Email.") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()(_this.res.responseMessage, "", "success");
            }
        });
        this.createdby = false;
    };
    IndexComponent.prototype.backToLogin = function () {
        this.createdby = false;
    };
    IndexComponent.prototype.LoginPage = function () {
        this.routerNavigate.navigate(['loginpageaction']);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/index/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ }),

/***/ "./src/app/index/index.router.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.router.ts ***!
  \***************************************/
/*! exports provided: Indexroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indexroutes", function() { return Indexroutes; });
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _gaurds_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gaurds/login.guard */ "./src/app/gaurds/login.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/index/login/login.component.ts");



var Indexroutes = [
    { path: '', component: _index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"], canActivate: [_gaurds_login_guard__WEBPACK_IMPORTED_MODULE_1__["LoginGuard"]],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
        ]
    }
];


/***/ }),

/***/ "./src/app/index/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/index/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/index/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/index/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/index/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/index/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/index/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/index/services/index.service.ts":
/*!*************************************************!*\
  !*** ./src/app/index/services/index.service.ts ***!
  \*************************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IndexService = /** @class */ (function () {
    /* imtac variable start */
    /* imtac variable end */
    function IndexService(http, router) {
        this.http = http;
        this.router = router;
        this.host_url = "";
        this.server = this.host_url + 'rest/endUsers/validateAgeAndPostCode';
        this.sends = this.host_url + 'rest/endUsers/validateGenderAndEthnicGroup';
        this.fourth = this.host_url + 'rest/ethnicGroups/getAllEthnics';
        this.pass_data = [];
        this.user = {};
        this.logindata = {};
        this.persondata = {};
        this.seconddata = {};
        this.thirddata = [];
        this.fourthdata = {};
        this.persondetails = {};
        this.testerror = false;
        this.checkpostal = {};
        this.err = 'internal server error';
    }
    IndexService.prototype.sendone = function (user) {
        var _this = this;
        console.log(user);
        return this.http.post(this.sends, user).subscribe(function (res) {
            //this.testname=res.resultData.testCodes[0].testName
            _this.testcodes = res;
            console.log(_this.testcodes);
            if (res['message'] == "Success") {
                _this.value = res['resultData'].sponsorId;
                sessionStorage.setItem('sponsorId', _this.value);
                _this.router.navigate(['test']);
            }
            else {
                _this.router.navigate(['not']);
            }
        }, function (err) {
            _this.router.navigate(['internal']);
        });
    };
    IndexService.prototype.another = function (data) {
        var _this = this;
        this.thirdone = this.host_url + 'rest/endUsers/create/' + sessionStorage.getItem('sponsorId');
        console.log(data);
        // var obj={EthnicGroupId:sessionStorage.getItem('ethenicGroupId')}
        data.ethnicGroupId = sessionStorage.getItem('ethenicGroupId');
        return this.http.post(this.thirdone, data).subscribe(function (res) {
            _this.message1 = res['message'];
            sessionStorage.setItem('message', _this.message1);
            _this.some = res['status'];
            if (_this.some == "Success") {
                _this.router.navigate(['final']);
                localStorage.clear();
                _this.getAllComponents(localStorage, "component");
            }
        }, function (err) {
            _this.router.navigate(['internal']);
        });
    };
    IndexService.prototype.anothers = function (data) {
        var _this = this;
        return this.http.post(this.thirdone, data).subscribe(function (res) {
            _this.some = res['status'];
            if (_this.some == "Success") {
                _this.router.navigate(['result']);
            }
        }, function (err) {
            _this.router.navigate(['internal']);
        });
    };
    IndexService.prototype.anothers1 = function (data) {
        var _this = this;
        console.log(data);
        return this.http.post(this.thirdone, data).subscribe(function (res) {
            _this.some = res['status'];
        });
    };
    IndexService.prototype.getethnic = function () {
        return this.http.get(this.fourth);
    };
    IndexService.prototype.getOrderDetails = function (orderId) {
        return this.http.get(this.host_url + 'rest/endUsers/endUser/' + orderId);
    };
    IndexService.prototype.getTestResult = function (code) {
        return this.http.get(this.host_url + 'rest/testResult/' + code);
    };
    IndexService.prototype.lookup = function () {
        this.addressid = sessionStorage.getItem('age');
        this.address = 'https://api.getAddress.io/find/' + this.addressid + '/?api-key=x5CPOTrNhkKPq_1PxN6A_w18921';
        return this.http.get(this.address);
    };
    // Get recuriment list
    IndexService.prototype.getRecrutment = function () {
        return this.http.get(this.host_url + 'rest/positions/activepositions');
    };
    /* get the local storage start */
    IndexService.prototype.getAllComponents = function (obj, string) {
        var i = 0;
        for (var key in obj) {
            if (key.startsWith(string)) {
                localStorage.removeItem(key);
            }
        }
    };
    /* get the localstorage end */
    /* imtac start */
    IndexService.prototype.register = function (data) {
        return this.http.post(this.host_url + 'rest/user/createUser', data);
    };
    IndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/app/no-page/no-page.component.html":
/*!************************************************!*\
  !*** ./src/app/no-page/no-page.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-light\">\r\n  <div class=\"navbar-header d-flex col\">\r\n    <a class=\"navbar-brand\" href=\"#\"><b>Medintu</b></a>\r\n    <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\"\r\n      class=\"navbar-toggle navbar-toggler ml-auto\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n  </div>\r\n  <!-- Collection of nav links, forms, and other content for toggling -->\r\n  <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\r\n    <ul class=\"nav navbar-nav navbar-right ml-auto\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" href=\"\" (click)=\"logoutAction()\"><i class=\"fa fa-user-o\"></i> Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<h1 class=\"text-center\">\r\nPage Not Found !\r\n</h1>\r\n<p class=\"mt-4 mb-4 text-center\"><a class=\"btn btn-primary mr-2 mb-2\" routerLink=\"/dashboard\"><i class=\"fa fa-file\"></i>Go to Back</a></p>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/no-page/no-page.component.scss":
/*!************************************************!*\
  !*** ./src/app/no-page/no-page.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header.col {\n  padding: 0 !important; }\n\n.navbar {\n  background: #fff;\n  padding-left: 16px;\n  padding-right: 16px;\n  border-bottom: 1px solid #dfe3e8;\n  border-radius: 0; }\n\n.navbar .navbar-brand {\n  font-size: 20px;\n  padding-left: 0;\n  padding-right: 50px; }\n\n.navbar .navbar-brand b {\n  font-weight: bold;\n  color: #29c68c; }\n\n.navbar ul.nav li a {\n  color: #999; }\n\n.navbar ul.nav li a:hover, .navbar ul.nav li a:focus {\n  color: #29c68c !important; }\n\n.navbar ul.nav li.active > a, .navbar ul.nav li.open > a {\n  color: #26bb84 !important;\n  background: transparent !important; }\n\n.navbar .form-inline .input-group-addon {\n  box-shadow: none;\n  border-radius: 2px 0 0 2px;\n  background: #f5f5f5;\n  border-color: #dfe3e8;\n  font-size: 16px; }\n\n.navbar .form-inline i {\n  font-size: 16px; }\n\n.navbar .form-inline .btn {\n  border-radius: 2px;\n  color: #fff;\n  border-color: #29c68c;\n  background: #29c68c;\n  outline: none; }\n\n.navbar .form-inline .btn:hover, .navbar .form-inline .btn:focus {\n  border-color: #26bb84;\n  background: #26bb84; }\n\n.navbar .search-form {\n  display: inline-block; }\n\n.navbar .search-form .btn {\n  margin-left: 4px; }\n\n.navbar .search-form .form-control {\n  border-radius: 2px; }\n\n.navbar .login-form .input-group {\n  margin-right: 4px;\n  float: left; }\n\n.navbar .login-form .form-control {\n  max-width: 158px;\n  border-radius: 0 2px 2px 0; }\n\n.navbar .navbar-right .dropdown-toggle::after {\n  display: none; }\n\n.navbar .dropdown-menu {\n  border-radius: 1px;\n  border-color: #e5e5e5;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); }\n\n.navbar .dropdown-menu li a {\n  padding: 6px 20px; }\n\n.navbar .navbar-right .dropdown-menu {\n  width: 505px;\n  padding: 20px;\n  left: auto;\n  right: 0;\n  font-size: 14px; }\n\n@media (min-width: 1200px) {\n  .search-form .input-group {\n    width: 300px;\n    margin-left: 30px; } }\n\n@media (max-width: 768px) {\n  .navbar .navbar-right .dropdown-menu {\n    width: 100%;\n    background: transparent;\n    padding: 10px 20px; }\n  .navbar .input-group {\n    width: 100%;\n    margin-bottom: 15px; }\n  .navbar .input-group .form-control {\n    max-width: none; }\n  .navbar .login-form .btn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tcGFnZS9EOlxcaW10YWMtcmVjcnVpdG1lbnQtZ2l0XFxpbXRhYy1yZWNydWl0bWVudFxccmVjcnVpdG1lbnQtdWkvc3JjXFxhcHBcXG5vLXBhZ2VcXG5vLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHlCQUF5QjtFQUN6QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUFxQyxFQUFBOztBQUV6QztFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlLEVBQUE7O0FBRW5CO0VBQ0k7SUFDSSxZQUFZO0lBQ1osaUJBQWlCLEVBQUEsRUFDcEI7O0FBRUw7RUFDSTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL25vLXBhZ2Uvbm8tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2YmFyLWhlYWRlci5jb2wge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHRcclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlM2U4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQgYiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjljNjhjO1x0XHRcclxufVxyXG4ubmF2YmFyIHVsLm5hdiBsaSBhIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5uYXZiYXIgdWwubmF2IGxpIGE6aG92ZXIsIC5uYXZiYXIgdWwubmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMyOWM2OGMgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIHVsLm5hdiBsaS5hY3RpdmUgPiBhLCAubmF2YmFyIHVsLm5hdiBsaS5vcGVuID4gYSB7XHJcbiAgICBjb2xvcjogIzI2YmI4NCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RmZTNlODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjljNjhjO1xyXG4gICAgYmFja2dyb3VuZDogIzI5YzY4YztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5hdmJhciAuZm9ybS1pbmxpbmUgLmJ0bjpob3ZlciwgLm5hdmJhciAuZm9ybS1pbmxpbmUgLmJ0bjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNmJiODQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjZiYjg0O1xyXG59XHJcbi5uYXZiYXIgLnNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2YmFyIC5zZWFyY2gtZm9ybSAuYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLm5hdmJhciAuc2VhcmNoLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLm5hdmJhciAubG9naW4tZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ubmF2YmFyIC5sb2dpbi1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWF4LXdpZHRoOiAxNThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xyXG59ICAgIFx0XHJcbi5uYXZiYXIgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IGxpIGEge1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiA1MDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICAuc2VhcmNoLWZvcm0gLmlucHV0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5uYXZiYXIgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHRcdFx0XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5sb2dpbi1mb3JtIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/no-page/no-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/no-page/no-page.component.ts ***!
  \**********************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoPageComponent = /** @class */ (function () {
    function NoPageComponent() {
    }
    NoPageComponent.prototype.ngOnInit = function () {
    };
    NoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-page',
            template: __webpack_require__(/*! ./no-page.component.html */ "./src/app/no-page/no-page.component.html"),
            styles: [__webpack_require__(/*! ./no-page.component.scss */ "./src/app/no-page/no-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoPageComponent);
    return NoPageComponent;
}());



/***/ }),

/***/ "./src/app/no-page/no-page.router.ts":
/*!*******************************************!*\
  !*** ./src/app/no-page/no-page.router.ts ***!
  \*******************************************/
/*! exports provided: NoPageRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageRoute", function() { return NoPageRoute; });
/* harmony import */ var _no_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-page.component */ "./src/app/no-page/no-page.component.ts");

var NoPageRoute = [
    { path: '**', component: _no_page_component__WEBPACK_IMPORTED_MODULE_0__["NoPageComponent"] }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.host_url = "";
        this.logindata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.url = this.host_url + "rest/user/authenticate";
    }
    AuthService.prototype.isAuthenticate = function () {
        //method return true or false based on login credential
        var userData = sessionStorage.getItem('userData');
        if (userData && userData.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.loginAction = function (postData) {
        var _this = this;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', postData.email)
            .set('password', postData.password);
        this.http
            .post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .subscribe(function (res) {
            console.log(res);
            _this.userdata = res['responseData']['user'];
            localStorage.setItem('userinformation', JSON.stringify(_this.userdata));
            sessionStorage.setItem('userData', res['responseData'].token);
            sessionStorage.setItem('userId', res['responseData']['user'].id);
            sessionStorage.setItem('username', res['responseData']['user'].username);
            sessionStorage.setItem('userRole', res['responseData']['user'].roles[0]);
            // if((res['user'].roles[0]=="ADMIN")){
            //       }
            //       if(res['user'].roles[0]=="SUPPERADMIN"){
            //       }
            //       if(res['user'].roles[0]=="USER"){
            //       } -->
            _this.logindata.emit();
        });
        return true;
    };
    AuthService.prototype.SignUp = function (postData) {
        //registraion api
    };
    AuthService.prototype.logOutAction = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //session/local storage clear
                    return [4 /*yield*/, sessionStorage.removeItem('userData')];
                    case 1:
                        //session/local storage clear
                        _a.sent();
                        return [4 /*yield*/, sessionStorage.clear()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AuthService.prototype.getUserdata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                userData = sessionStorage.getItem('userData');
                return [2 /*return*/, JSON.parse(userData)];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AuthService.prototype, "logindata", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.host_url = "";
    }
    DataService.prototype.demographicApp = function (formData) {
        return this.http.post(this.host_url + 'rest/demographicinfo/saveDemographicInfo', formData);
    };
    DataService.prototype.updatedemographicApp = function (formdata) {
        return this.http.put(this.host_url + 'rest/demographicinfo/updateDemographicInfo', formdata);
    };
    DataService.prototype.getRegisteredList = function (formObj) {
        return this.http.post(this.host_url + 'rest/admin/usersList', formObj);
    };
    //recruitment/rest/admin/updateUserStatus
    DataService.prototype.registerStatus = function (formObj) {
        return this.http.post(this.host_url + 'rest/admin/updateUserStatus', formObj);
    };
    //Positions Type
    DataService.prototype.getPositionType = function () {
        return this.http.get(this.host_url + 'rest/positiontypes');
    };
    DataService.prototype.getPositionTypeById = function (id) {
        return this.http.get(this.host_url + 'rest/positiontypes/' + id);
    };
    DataService.prototype.updatePositionTypeById = function (formData) {
        return this.http.put(this.host_url + 'rest/positiontypes/updatePositionType', formData);
    };
    DataService.prototype.sendpositiondata = function (formData) {
        return this.http.post(this.host_url + 'rest/positiontypes/createPositionType', formData);
    };
    DataService.prototype.actionPositionType = function (positiondata) {
        return this.http.post(this.host_url + 'rest/positiontypes/deletePositionType', positiondata);
    };
    //Administrator Users 
    DataService.prototype.getAdminUsers = function () {
        return this.http.get(this.host_url + 'rest/admin/adminsList');
    };
    DataService.prototype.createUser = function (addFrom) {
        return this.http.post(this.host_url + 'rest/user/createUser', addFrom);
    };
    // position type
    DataService.prototype.getpositions = function () {
        return this.http.get(this.host_url + 'rest/positions');
    };
    DataService.prototype.createPositions = function (formData) {
        return this.http.post(this.host_url + 'rest/positions/createPositon', formData);
    };
    DataService.prototype.getPositionsById = function (id) {
        return this.http.get(this.host_url + 'rest/positions/' + id);
    };
    DataService.prototype.updatePositionsById = function (formData) {
        return this.http.put(this.host_url + 'rest/positions/updatePosition', formData);
    };
    DataService.prototype.actionPositions = function (formData) {
        return this.http.post(this.host_url + 'rest/positions/deletePosition', formData);
    };
    //category start
    DataService.prototype.getcategeorydata = function () {
        return this.http.get(this.host_url + 'rest/category');
    };
    DataService.prototype.categoryupdate = function (formdata) {
        return this.http.put(this.host_url + 'rest/category/updateCategory', formdata);
    };
    DataService.prototype.createcategory = function (formdata) {
        return this.http.post(this.host_url + 'rest/category/createCategory', formdata);
    };
    DataService.prototype.deletcategory = function (formdata) {
        return this.http.post(this.host_url + 'rest/category/deleteCategory', formdata);
    };
    //category end
    //designation start
    //designation start
    DataService.prototype.getdesignationdata = function () {
        return this.http.get(this.host_url + 'rest/desingation');
    };
    DataService.prototype.createdesignationdata = function (formdata) {
        return this.http.post(this.host_url + 'rest/desingation/createDesignation/', formdata);
    };
    DataService.prototype.upddatedesignation = function (formdata) {
        return this.http.put(this.host_url + 'rest/desingation/updateDesignation/', formdata);
    };
    DataService.prototype.editdesignationdata = function (formdata) {
        return this.http.put(this.host_url + 'rest/desingation/updateDesignation/', formdata);
    };
    DataService.prototype.deletedesignation = function (formdata) {
        return this.http.post(this.host_url + 'rest/desingation/deleteDesignation', formdata);
    };
    //designation end
    //designation End
    // Employment Type
    DataService.prototype.getemployementdata = function () {
        return this.http.get(this.host_url + 'rest/employmenttypes');
    };
    DataService.prototype.addEmployementType = function (formData) {
        return this.http.post(this.host_url + 'rest/employmenttypes/createEmploymentType', formData);
    };
    DataService.prototype.getEmploymentById = function (id) {
        return this.http.get(this.host_url + 'rest/employmenttypes/' + id);
    };
    DataService.prototype.updateEmployementById = function (formData) {
        return this.http.put(this.host_url + 'rest/employmenttypes/updateEmploymentType', formData);
    };
    DataService.prototype.EmployementStatus = function (formData) {
        return this.http.post(this.host_url + 'rest/employmenttypes/deleteEmploymentType', formData);
    };
    // Fee structure
    DataService.prototype.getFeeStructure = function () {
        return this.http.get(this.host_url + 'rest/feeStructure');
    };
    DataService.prototype.createFeeStructure = function (formData) {
        return this.http.post(this.host_url + 'rest/feeStructure/insertFeeDetails', formData);
    };
    DataService.prototype.getFeeStructureById = function (id) {
        return this.http.get(this.host_url + 'rest/feeStructure/' + id);
    };
    DataService.prototype.updateFeeStructureById = function (formData) {
        return this.http.put(this.host_url + 'rest/feeStructure/updateFeeDetails', formData);
    };
    DataService.prototype.stautsFeeStructure = function (formData) {
        return this.http.post(this.host_url + 'rest/feeStructure/deleteFeeDetails', formData);
    };
    DataService.prototype.getUsersData = function () {
        return this.http.get(this.host_url + 'rest/SponsorUser/getAllSponsorUsers');
    };
    //get application id
    DataService.prototype.getapplication = function () {
        return this.http.get(this.host_url + 'rest/demographicinfo/getApplications');
    };
    DataService.prototype.getapplicationid = function (id) {
        return this.http.get(this.host_url + 'rest/positions/applicationSeq/' + id);
    };
    DataService.prototype.getuserlistByIds = function (formdata) {
        return this.http.post(this.host_url + 'rest/positions/applicationSeq', formdata);
    };
    DataService.prototype.getUserListById = function (id) {
        return this.http.get(this.host_url + 'rest/demographicinfo/getDemographicInfoByUserId/' + id);
    };
    DataService.prototype.employeecreate = function (formdata) {
        return this.http.post(this.host_url + 'rest/employmentInfo/saveEmploymentInfo', formdata);
    };
    DataService.prototype.employeeinfo = function (formdata) {
        return this.http.post(this.host_url + 'rest/employmentInfo/saveEmploymentInfo', formdata);
    };
    DataService.prototype.getemployeedata = function (id) {
        return this.http.get(this.host_url + 'rest/employmentInfo/getEmploymentInfoById/' + id);
    };
    //application start
    DataService.prototype.searchapplication = function (date, id) {
        return this.http.get(this.host_url + 'rest/demographicinfo/searchApplications?date=' + date + '&position=' + id);
    };
    //application end
    //get verify component start
    DataService.prototype.getDemographic = function (id) {
        return this.http.get(this.host_url + 'rest/demographicinfo/getDemographicInfo/' + id);
    };
    //get verify component end
    //another project
    DataService.prototype.getSponserUser = function () {
        return this.http.get(this.host_url + "rest/sponsor/showAllSponsors");
    };
    // Post user
    DataService.prototype.postUsers = function (data) {
        return this.http.post(this.host_url + "rest/SponsorUser/createUser", data);
    };
    // add contact
    DataService.prototype.adduserContact = function (contactdata) {
        return this.http.post(this.host_url + "rest/sponsoraddress/create", contactdata);
    };
    // Delet User
    DataService.prototype.deleteUsers = function (id) {
        return this.http.delete(this.host_url + 'rest/SponsorUser/deleteSponsorUser' + "/" + id);
    };
    DataService.prototype.updateUsers = function (data) {
        return this.http.put(this.host_url + "rest/SponsorUser/updateSponsorUser", data);
    };
    DataService.prototype.createSponsorDetails = function (sponsorData) {
        return this.http.post(this.host_url + "rest/sponsor/createSponsor", sponsorData);
    };
    DataService.prototype.setEthenic = function (ethenicData) {
        return this.http.post(this.host_url + "rest/ethnicGroups/save", ethenicData);
    };
    DataService.prototype.getEthenic = function () {
        return this.http.get(this.host_url + "rest/ethnicGroups/getAllEthnics");
    };
    //All status 
    DataService.prototype.getStatusData = function () {
        return this.http.get(this.host_url + "rest/Status/getAllStatus");
    };
    DataService.prototype.getSponsorsList = function () {
        return this.http.get(this.host_url + "rest/sponsor/showAllSponsors ");
    };
    // Post Status
    DataService.prototype.postStatus = function (data) {
        return this.http.post(this.host_url + "rest/Status/createStatus", data);
    };
    //Delete Status
    DataService.prototype.deleteStatus = function (id) {
        return this.http.delete(this.host_url + 'rest/Status/getStatusById' + "/" + id);
    };
    //Edit Status
    // editStatusData(data,id):Observable<any>{
    //   return this.http.put(rest/Status/updateStatus' +"/"+ id );
    // }
    //All SpecialEvent 
    DataService.prototype.getSpecialEvent = function () {
        return this.http.get(this.host_url + "rest/SpecialEvent/getSpecialEvents");
    };
    // Get SpecialEvent by Id
    DataService.prototype.getSpecialEventById = function (id) {
        return this.http.get(this.host_url + "rest/SpecialEvent/getSpecialEventById" + '/' + id);
    };
    // Post SpecialEvent
    DataService.prototype.postspecialEvent = function (data) {
        return this.http.post(this.host_url + "rest/SpecialEvent/createSpecialEvent", data);
    };
    //Update SpecialEvent
    DataService.prototype.updateEvents = function (data) {
        return this.http.put(this.host_url + 'rest/SpecialEvent/updateSpecialEvent', data);
    };
    //Delete SpecialEvent
    DataService.prototype.deleteEvent = function (id) {
        return this.http.delete(this.host_url + 'rest/SpecialEvent/deleteSpecialEvent' + "/" + id);
    };
    //sponsors details
    DataService.prototype.getAddressDetails = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/addresses/' + id);
    };
    DataService.prototype.getRulesDetails = function (id) {
        //return this.http.get(this.host_url+'rest/sponsor/rules/'+id);
        return this.http.get(this.host_url + 'rest/rules/' + id);
    };
    DataService.prototype.getTestCodeDetails = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/testCodes/' + id);
    };
    DataService.prototype.getServiceRequestDetails = function (sponsorId) {
        return this.http.get(this.host_url + 'rest/endUsers/' + sponsorId);
    };
    DataService.prototype.getAllServiceRequestDetails = function () {
        return this.http.get(this.host_url + 'rest/endUsers/getAll');
    };
    DataService.prototype.createTestDetails = function (testCodeData) {
        return this.http.post(this.host_url + "rest/testCode/createTest", testCodeData);
    };
    DataService.prototype.getAllTestCodeDetails = function () {
        return this.http.get(this.host_url + 'rest/testCode/getAllTestCodes');
    };
    DataService.prototype.updateTestCodeDetails = function (testCodeData) {
        return this.http.put(this.host_url + 'rest/testCode/updateTestCode', testCodeData);
    };
    DataService.prototype.getMultiplepostCode = function () {
        return this.http.get(this.host_url + 'rest/PostalCode/getAllPostalCodes');
    };
    DataService.prototype.createRuleDetails = function (ruledata) {
        return this.http.post(this.host_url + "rest/rules/createRuleListMapper", ruledata);
    };
    //Get All Postalcode 
    DataService.prototype.getAllPostalcode = function () {
        return this.http.get(this.host_url + "rest/PostalCode/getAllPostalCodes");
    };
    // Post Postalcode
    DataService.prototype.postPostalcode = function (data) {
        return this.http.post(this.host_url + "rest/PostalCode/createPostalCode", data);
    };
    //Update Postalcode
    DataService.prototype.updatePostalcode = function (data) {
        return this.http.put(this.host_url + 'rest/PostalCode/updatePostalCode', data);
    };
    // add contact by Id
    DataService.prototype.adduserContactbyid = function (contactdata) {
        return this.http.post(this.host_url + "rest/sponsoraddress/create", contactdata);
    };
    //Delete Postalcode
    DataService.prototype.deletePostalcode = function (id) {
        return this.http.delete(this.host_url + 'rest/PostalCode/deletePostalCode' + "/" + id);
    };
    DataService.prototype.getPostCodeList = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/postCodes/' + id);
    };
    DataService.prototype.updateSelectedPostalCode = function (postCode, sponsorId) {
        return this.http.put(this.host_url + 'rest/sponsor/postCodes/update/' + sponsorId, postCode);
    };
    DataService.prototype.updateSelectedAddress = function (sponsorAddress) {
        return this.http.put(this.host_url + 'rest/sponsor/addresses/update', sponsorAddress);
    };
    //update ethenic
    DataService.prototype.editEthenicData = function () {
        return this.http.get(this.host_url + 'rest/ethnicGroups/getAllEthnicMapper');
    };
    DataService.prototype.editTestListData = function () {
        return this.http.get(this.host_url + 'rest/testCode/getAllTestCodesMapper');
    };
    DataService.prototype.updateEthenicData = function (ethinicData) {
        return this.http.put(this.host_url + 'rest/ethnicGroups/update', ethinicData);
    };
    DataService.prototype.getSponsorbyId = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/sponsorDetails/' + id);
    };
    DataService.prototype.getuserByid = function (id) {
        return this.http.get(this.host_url + 'rest/SponsorUser/getAllUsersBySponsorId/' + id);
    };
    DataService.prototype.updateSelectedRule = function (data) {
        //return this.http.put(this.host_url+'rest/sponsor/rules/update',data) 
        //return this.http.put(this.host_url+'rest/rules/update',data) 
        return this.http.put(this.host_url + "rest/rules/update", data);
    };
    DataService.prototype.getSponsorUpdate = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/sponsorWithPostalCode/' + id);
    };
    DataService.prototype.updateSponsorDetails = function (data, id) {
        return this.http.put(this.host_url + 'rest/sponsor/sponsorWithPostalCode/' + id, data);
    };
    DataService.prototype.updateStatus = function (data, id) {
        return this.http.put(this.host_url + 'rest/Status/updateStatus/' + id, data);
    };
    DataService.prototype.getDashboardData = function (sponsorId) {
        return this.http.get(this.host_url + 'rest/sponsor/sponsorOrder/' + sponsorId);
    };
    DataService.prototype.getDashboardDataALl = function () {
        return this.http.get(this.host_url + 'rest/sponsor/sponsorOrder/all');
        //return this.http.get('http://192.168.1.137:8080/rest/sponsor/sponsorOrder/all');
    };
    DataService.prototype.getsponsorDashboardspentList = function (sponsorId) {
        return this.http.get(this.host_url + 'rest/spnsorspents/' + sponsorId);
    };
    DataService.prototype.getSuperAdminspendlist = function () {
        return this.http.get(this.host_url + 'rest/spnsorspents/budget/');
    };
    //Dashboard reports
    DataService.prototype.getreports = function () {
        return this.http.get(this.host_url + 'rest/endUsers/requestsForTheLastMonth');
    };
    DataService.prototype.getreportsTests = function () {
        return this.http.get(this.host_url + 'rest/endUsers/testRequestsForTheLastMonth');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\imtac-recruitment-git\imtac-recruitment\recruitment-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map