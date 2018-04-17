webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark black darken-4 scrolling-navbar ie-nav fixed-top\" [containerInside]=\"true\">\n    <logo>\n        <a class=\"logo navbar-brand\" routerLink=\"/home\">\n            <strong>The Books Library</strong>\n            <span class=\"sr-only\">(current)</span>\n        </a>\n    </logo>\n    <links>\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\" routerLink=\"/getallbooks\">All Books</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\" routerLink=\"/addbook\">Add Book</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\" routerLink=\"/updatebook\">Update Book</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\" routerLink=\"/deletebook\">Delete Book</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav nav-flex-icons\">\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\n                <a class=\"nav-link\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n            </li>\n        </ul>\n        <form class=\"form-inline  waves-light\" mdbRippleRadius>\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        </form>\n    </links>\n</mdb-navbar>\n<router-outlet></router-outlet>\n<footer class=\"page-footer\">\n    <hr>\n    <div class=\"call-to-action\">\n        <ul>\n            <li>\n                <h5 style=\"color: grey\">Register for free</h5>\n            </li>\n            <li>\n                <a href=\"\" class=\"btn btn-danger waves-light\" mdbRippleRadius>Sign up!</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container-fluid\">© 2018 Copyright:\n            <a href=\"/home\"> The Book Library </a>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".call-to-action {\n  color: #272623;\n  font-family: 'Roboto Condensed';\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 3px;\n  margin-bottom: 48px;\n  text-align: center;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_book_add_book_component__ = __webpack_require__("../../../../../src/app/components/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_get_all_books_get_all_books_component__ = __webpack_require__("../../../../../src/app/components/get-all-books/get-all-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_update_book_update_book_component__ = __webpack_require__("../../../../../src/app/components/update-book/update-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_delete_book_delete_book_component__ = __webpack_require__("../../../../../src/app/components/delete-book/delete-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_non_english_pipe__ = __webpack_require__("../../../../../src/app/pipes/non-english.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_header_page_header_component__ = __webpack_require__("../../../../../src/app/components/page-header/page-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_show_book_show_book_component__ = __webpack_require__("../../../../../src/app/components/show-book/show-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_feature_feature_component__ = __webpack_require__("../../../../../src/app/components/feature/feature.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'getallbooks', component: __WEBPACK_IMPORTED_MODULE_9__components_get_all_books_get_all_books_component__["a" /* GetAllBooksComponent */] },
    { path: 'updatebook', component: __WEBPACK_IMPORTED_MODULE_10__components_update_book_update_book_component__["a" /* UpdateBookComponent */] },
    { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_8__components_add_book_add_book_component__["a" /* AddBookComponent */] },
    { path: 'deletebook', component: __WEBPACK_IMPORTED_MODULE_12__components_delete_book_delete_book_component__["a" /* DeleteBookComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_book_add_book_component__["a" /* AddBookComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_get_all_books_get_all_books_component__["a" /* GetAllBooksComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_update_book_update_book_component__["a" /* UpdateBookComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_delete_book_delete_book_component__["a" /* DeleteBookComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_non_english_pipe__["a" /* NonEnglishPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_page_header_page_header_component__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_show_book_show_book_component__["a" /* ShowBookComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_feature_feature_component__["a" /* FeatureComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_13__pipes_non_english_pipe__["a" /* NonEnglishPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-book/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Add Book</title>\n  <link href=\"http://fonts.googleapis.com/css?family=Varela+Round\" rel=\"stylesheet\" />\n</head>\n\n<body>\n  <p id=\"header\">{{pageTitle}}</p>\n  <div class=\"jumbotron mt-5 ml-5 mr-5\">\n    <h1 id=\"quotes\">“The best and most beautiful books in the world cannot be read or even touched - they must be felt with the heart.”</h1>\n    <p id=\"header\">\n      <a class=\"header\" href=\"/home\">The Book Library</a>\n    </p>\n    <div id=\"header\" class=\"container\">\n      <a class='btn btn-info btn-xs' data-toggle=\"modal\" data-target=\"#addBook\">\n        <span class=\"glyphicon glyphicon-edit\"></span> Add New Book</a>\n    </div>\n  </div>\n  <app-get-all-books></app-get-all-books>\n  <!-- add book Modal -->\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal fade\" id=\"addBook\" aria-labelledby=\"addBookLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title\" id=\"addBookLabel\">Add New Book</h3>\n          </div>\n          <div class=\"container\">\n            <p>Please Fill In The Details Of The New Book :</p>\n            <p>Book ID :</p>\n            <input type=\"number\" formControlName=\"id\" name=\"id\" [(ngModel)]=\"id\" required/>\n            <div *ngIf=\"myForm.controls['id'].touched && !myForm.controls['id'].valid\">\n              <span *ngIf=\"myForm.controls['id'].hasError('required')\">\n                <p class=\"message\">Id Is Requierd !</p>\n              </span>\n            </div>\n            <p>Author Name :</p>\n            <input type=\"text\" formControlName=\"author\" name=\"author\" [(ngModel)]=\"author\" required/>\n            <div *ngIf=\"myForm.controls['author'].touched && !myForm.controls['author'].valid\">\n              <span *ngIf=\"myForm.controls['author'].hasError('required')\">\n                <p class=\"message\">Author Name Is Requierd !</p>\n              </span>\n            </div>\n            <p>Date :</p>\n            <input type=\"date\" name=\"date\" formControlName=\"date\" [(ngModel)]=\"date\" required/>\n            <div *ngIf=\"myForm.controls['date'].touched && !myForm.controls['date'].valid\">\n              <span *ngIf=\"myForm.controls['date'].hasError('required') \">\n                <p class=\"message\">Date Is Requierd !</p>\n              </span>\n            </div>\n            <p>Title : </p>\n            <input type=\"text\" (ngModelChange)=\"checkIfTitleExist($event)\" name=\"title\" formControlName=\"title\" [(ngModel)]=\"title\" required/>\n            <div *ngIf=\"myForm.controls['title'].touched && !myForm.controls['title'].valid\">\n              <span *ngIf=\"myForm.controls['title'].hasError('required')\">\n                <p class=\"message\"> Book Title Is Requierd !</p>\n              </span>\n            </div>\n            <span *ngIf=\"isAlreadyExist\" class=\"message\">\n              <p>Title already exist, Please try different title !</p>\n            </span>\n          </div>\n          <div class=\"modal-body\">\n            <strong>Would You Like To Add This Book To The List Of Books?</strong>\n            <br> Click 'Add' To Add The New Book, Or Cancel !\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]='!myForm.valid' (click)=\"addBook()\">Add Book</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/add-book/add-book.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-book/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(fb, httpService) {
        this.fb = fb;
        this.httpService = httpService;
        this.allBooks = [];
        this.bookObj = {};
        this.author = '';
        this.date = '';
        this.title = '';
        this.isAlreadyExist = false;
    }
    //get all books from the json file
    AddBookComponent.prototype.getAllBooks = function () {
        var _this = this;
        this.httpService.getAllBooks().subscribe(function (data) { _this.allBooks = data; }, function (err) { console.log(err); });
        return this.allBooks || [];
    };
    // checking if the book title id already and display a message to the user
    AddBookComponent.prototype.checkIfTitleExist = function (Text) {
        var _this = this;
        var newTtile = Text; //check
        newTtile = newTtile;
        if (typeof newTtile !== 'string' || !newTtile || /^\s*$/.test(newTtile)) {
            this.isAlreadyExist = false;
            return void [0];
        }
        this.allBooks.map(function (book) {
            if (typeof book.title === 'string') {
                if (book.title === newTtile) {
                    _this.isAlreadyExist = true;
                    return;
                }
            }
        });
    };
    // add new book to json file
    AddBookComponent.prototype.addBook = function () {
        var _this = this;
        var isAlreadyExist = false;
        var titleToCheck = this.title.trim();
        if (typeof this.title !== 'string' || !this.title || /^\s*$/.test(this.title)) {
            return void [0];
        }
        this.allBooks.map(function (book) {
            if (typeof book.title === 'string') {
                if (book.title === titleToCheck) {
                    isAlreadyExist = true;
                    return;
                }
            }
        });
        if (!isAlreadyExist) {
            this.errorMessage = '';
            this.bookObj.id = this.id;
            this.bookObj.author = this.author;
            this.bookObj.date = this.date;
            this.bookObj.title = this.title;
            this.httpService.addBook(this.bookObj).subscribe(function (data) { _this.bookObj = data; }, function (err) { console.log(err); });
            this.onSubmit();
            //location.reload();
        }
        else {
            this.errorMessage = 'Title Is Already Exist, Please Try New Title !';
            console.error(this.errorMessage);
        }
    };
    // reset inputs filed after submit the form
    AddBookComponent.prototype.onSubmit = function () {
        if (this.myForm.valid) {
            this.myForm.reset();
        }
    };
    AddBookComponent.prototype.ngOnInit = function () {
        this.isAlreadyExist = false;
        this.pageTitle = "Add Books";
        this.getAllBooks();
        this.myForm = this.fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            author: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    };
    AddBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/components/add-book/add-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-book/add-book.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/delete-book/delete-book.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Delete Book</title>\n  <link href=\"http://fonts.googleapis.com/css?family=Varela+Round\" rel=\"stylesheet\" />\n</head>\n\n<body>\n  <p id=\"header\">{{pageTitle}}</p>\n  <div class=\"jumbotron mt-5 ml-5 mr-5\">\n    <h1 id=\"quotes\">“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h1>\n    <p id=\"header\">\n      <a class=\"header\" href=\"/home\">The Book Library</a>\n    </p>\n  </div>\n  <div class=\"container\" style=\"overflow:left;\">\n    <div class=\"pricing-table\">\n      <div class=\"scroller-spacer\" [ngStyle]=\"spacerStyle\"></div>\n      <div class=\"pricing-option mt-3 mr-3\" *ngFor=\"let book of allBooks\">\n        <b>Title</b>\n        <h1>{{book.title | titlecase | nonEnglish}}</h1>\n        <b>Id : {{book.id}}</b>\n        <hr />\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore\n          quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\n        <hr />\n        <div class=\"price\">\n          <div class=\"front\">\n            <b>Author</b>\n            <span class=\"price\">{{book.author | titlecase | nonEnglish}}\n              <b>{{book.date | date}}</b>\n            </span>\n          </div>\n          <div class=\"back\">\n            <a class='button' data-toggle=\"modal\" data-target=\"#deleteBook\" (click)=\"openDeleteModal(book)\">Delete</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- delete Modal -->\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal fade\" id=\"deleteBook\" aria-labelledby=\"deleteBookLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title\" id=\"deleteBookLabel\">Delete Book</h3>\n          </div>\n          <br/>\n          <div class=\"modal-body\">\n            <strong>Are you sure you want to Delete this book ?</strong>\n            <br> Click 'delete' to Delete the Book, or Cancel !\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]='!myForm.valid' (click)=\"deleteBook()\">Delete Book</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/delete-book/delete-book.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete-book/delete-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBookComponent = /** @class */ (function () {
    function DeleteBookComponent(fb, httpService) {
        this.fb = fb;
        this.httpService = httpService;
        this.allBooks = [];
        this.bookObj = {};
        this.deletedBook = {};
        this.author = '';
        this.date = '';
        this.title = '';
    }
    DeleteBookComponent.prototype.getAllBooks = function () {
        var _this = this;
        this.httpService.getAllBooks().subscribe(function (data) { _this.allBooks = data; }, function (err) { console.log(err); });
        return this.allBooks || [];
    };
    DeleteBookComponent.prototype.openDeleteModal = function (book) {
        this.deletedBook = book;
    };
    // delete book on json file
    DeleteBookComponent.prototype.deleteBook = function () {
        var _this = this;
        this.bookObj.id = this.deletedBook.id;
        console.log("bookObj :", this.bookObj.id);
        console.log("deletedBook: ", this.deletedBook);
        console.log("deletedBook id : ", this.deletedBook.id);
        this.httpService.deleteBook(this.bookObj).subscribe(function (date) { _this.bookObj = date; }, function (err) { console.log(err); });
        location.reload();
    };
    DeleteBookComponent.prototype.onSubmit = function () {
        if (this.myForm.valid) {
            console.log("Form Submitted!");
            this.myForm.reset();
        }
    };
    DeleteBookComponent.prototype.ngOnInit = function () {
        this.pageTitle = "Delete Books";
        this.getAllBooks();
        this.myForm = this.fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
    };
    DeleteBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-delete-book',
            template: __webpack_require__("../../../../../src/app/components/delete-book/delete-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/delete-book/delete-book.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */]])
    ], DeleteBookComponent);
    return DeleteBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feature/feature.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n\n<body>\n    <section class=\"section pb-3\">\n        <h2 class=\"section-heading h1 pt-4\">\n            <strong>Open yourself to new books ...</strong>\n        </h2>\n        <p class=\"lead grey-text\">Daily reading will bring you to dream, to feel and to reach new areas that you have never reached.</p>\n        <div class=\"row text-center\">\n            <div class=\"col-lg-4 col-md-12 mb-r\">\n                <div class=\"card-body mt-1\">\n                    <a href=\"\" class=\"pink-text\">\n                        <h5>\n                            <i class=\"fa fa-coffee\"></i>book over cup of coffee</h5>\n                    </a>\n                    <h4>Title of the news</h4>\n                    <p class=\"lead grey-text\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti\n                        atque.</p>\n                    <a class=\"btn btn-indigo btn-sm waves-light\" mdbRippleRadius>\n                        <i class=\"fa fa-clone left\"></i> View books</a>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-r\">\n                <div class=\"card-body mt-1\">\n                    <a href=\"\" class=\"blue-text\">\n                        <h5>\n                            <i class=\"fa fa-camera\"></i>Business books to all</h5>\n                    </a>\n                    <h4>Title of the news</h4>\n                    <p class=\"lead grey-text\">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n                        facere possimus.</p>\n                    <a class=\"btn btn-indigo btn-sm waves-light\" mdbRippleRadius>\n                        <i class=\"fa fa-clone left\"></i>View books</a>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-r\">\n                <div class=\"card-body mt-1\">\n                    <a href=\"\" class=\"purple-text\">\n                        <h5>\n                            <i class=\"fa fa-plane\"></i>Travels books - With guides</h5>\n                    </a>\n                    <h4>Title of the news</h4>\n                    <p class=\"lead grey-text\">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates\n                        repudiandae.\n                    </p>\n                    <a class=\"btn btn-indigo btn-sm waves-light\" mdbRippleRadius>\n                        <i class=\"fa fa-clone left\"></i> View books</a>\n                </div>\n            </div>\n        </div>\n    </section>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/feature/feature.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feature/feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feature',
            template: __webpack_require__("../../../../../src/app/components/feature/feature.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feature/feature.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/get-all-books/get-all-books.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Get All Books</title>\n    <link href=\"http://fonts.googleapis.com/css?family=Varela+Round\" rel=\"stylesheet\" />\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n</head>\n\n<body>\n    <p id=\"header\">{{title}}</p>\n    <h1 class=\"demo-title\">“A room without books is like a body without a soul.”</h1>\n    <div class=\"container\" style=\"overflow:left;\">\n        <div class=\"pricing-table\">\n            <div class=\"scroller-spacer\" [ngStyle]=\"spacerStyle\"></div>\n            <div class=\"pricing-option mt-3 mr-3\" *ngFor=\"let book of allBooks\">\n                <b>Title</b>\n                <h1>{{book.title | titlecase | nonEnglish}}</h1>\n                <b>Id : {{book.id}}</b>\n                <hr />\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus\n                    inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt\n                    sed illo.</p>\n                <hr />\n                <div class=\"price\">\n                    <div class=\"front\">\n                        <b>Author</b>\n                        <span class=\"price\">{{book.author | titlecase | nonEnglish}}\n                            <b>{{book.date | date}}</b>\n                        </span>\n                    </div>\n                    <div class=\"back\">\n                        <a class=\"button\">Purchase now</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/get-all-books/get-all-books.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/get-all-books/get-all-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllBooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAllBooksComponent = /** @class */ (function () {
    function GetAllBooksComponent(httpService) {
        this.httpService = httpService;
        this.allBooks = [];
    }
    GetAllBooksComponent.prototype.getAllBooks = function () {
        var _this = this;
        this.httpService.getAllBooks()
            .subscribe(function (data) { _this.allBooks = data; }, function (err) { console.log(err); });
        return this.allBooks || [];
    };
    GetAllBooksComponent.prototype.ngOnInit = function () {
        this.title = 'All Books';
        this.getAllBooks();
    };
    GetAllBooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-all-books',
            template: __webpack_require__("../../../../../src/app/components/get-all-books/get-all-books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/get-all-books/get-all-books.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]])
    ], GetAllBooksComponent);
    return GetAllBooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n\n<body>\n    <div class=\"container\">\n        <app-page-header></app-page-header>\n        <app-feature></app-feature>\n        <app-show-book></app-show-book>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n\n<body>\n\n    <section class=\"intro\">\n        <div class=\"inner\">\n            <div class=\"content\">\n                <h1>The Book Library</h1>\n                <h5>Probably the best books in the world</h5>\n                <a class=\"btn\" href=\"#\">More Info</a>\n                <a class=\"btn\" role=\"button\" mdbRippleRadius routerLink=\"/getallbooks\">Watch All Books</a>\n            </div>\n        </div>\n    </section>\n\n    <div class=\"jumbotron mt-5\">\n        <h1 class=\"h1-responsive\">Hello, book Worm!</h1>\n        <h3>Love to read books?\n            <br>\n        </h3>\n        <p class=\"lead\">\n            Here you will find a wide range of books: cookbooks, travel books, biographies, nature, drama, comedy and more ....</p>\n        <hr class=\"my-2\">\n        <a class=\"btn btn-primary\" role=\"button\" mdbRippleRadius routerLink=\"/getAllBooks\">Watch All Books</a>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/page-header/page-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro {\n  height: 100%;\n  width: 100%;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/image/frontImage.jpg")) + ") no-repeat center fixed;\n  display: table;\n  margin: 0; }\n\n.intro .inner {\n  vertical-align: middle;\n  width: 100%;\n  max-width: none;\n  margin-top: 40%; }\n\n.content {\n  max-width: 500%;\n  margin: 0 auto;\n  text-align: center; }\n\n.content h1 {\n  font-family: 'Relway', sans-serif;\n  color: #fff;\n  font-size: 70px; }\n\n.content h5 {\n  color: gray; }\n\n.btn {\n  border-radius: 9px;\n  font-family: 'Oswald', sans-serif;\n  color: #036Ab1;\n  font-size: 100%;\n  padding: 10px 20px;\n  border: solid  1px;\n  text-decoration: none; }\n\n.btn:hover {\n  border: solid #036Ab1 1px;\n  font-family: sans-serif #036Ab1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-header',
            template: __webpack_require__("../../../../../src/app/components/page-header/page-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-header/page-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/show-book/show-book.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n\n<body>\n    <section class=\"section feature-box\">\n        <h2 class=\"section-heading h1 pt-4\">\n            <strong>Read The Most Powerfull Programming Books</strong>\n        </h2>\n        <p class=\"section-description lead grey-text\">TypeScript (TS) and JavaScript (JS) are two widely known languages in the development world, but what are the differences\n            and what use cases are better suited for one over the other?\n            <strong style=\"color:red;\">Download The Book For Free...</strong>\n        </p>\n        <div class=\"row features-small pt-2\">\n            <div class=\"col-lg-5 mb-r center-on-small-only\">\n                <img src=\"../assets/image/ecmascript-book.jpg\" alt=\"\" class=\"img-fluid z-depth-0\">\n            </div>\n            <div class=\"col-lg-7\">\n                <div class=\"row pb-3\">\n                    <div class=\"col-2 col-md-1\">\n                        <i class=\"fa fa-bank blue-text\"></i>\n                    </div>\n                    <div class=\"col-10\">\n                        <h5 class=\"feature-title\">Practical knowledge</h5>\n                        <p class=\"grey-text\">Giving the maximum knowledge in order to master the most advanced programming language. Integrated\n                            with advanced code snippets, download options for self learning and practice projects.</p>\n                    </div>\n                </div>\n                <div class=\"row pb-3\">\n                    <div class=\"col-2 col-md-1\">\n                        <i class=\"fa fa-code blue-text\"></i>\n                    </div>\n                    <div class=\"col-10\">\n                        <h5 class=\"feature-title\">Easy to learn</h5>\n                        <p class=\"grey-text\">The goal of this book is simple: greatly strengthen your core JavaScript skills while preparing and\n                            updating you to write modern JavaScript. The book includes 21 modules that go through ES6 in\n                            its entirety.</p>\n                    </div>\n                </div>\n                <div class=\"row pb-3\">\n                    <div class=\"col-2 col-md-1\">\n                        <i class=\"fa fa-money blue-text\"></i>\n                    </div>\n                    <div class=\"col-10\">\n                        <h5 class=\"feature-title\">ES6</h5>\n                        <p class=\"grey-text\">ES6 is a significant update to the language, and the first update to the language since ES5 was standardized\n                            in 2009. Implementation of these features in major JavaScript engines is underway now.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/show-book/show-book.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  margin-left: 10%;\n  height: 80%;\n  width: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/show-book/show-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowBookComponent = /** @class */ (function () {
    function ShowBookComponent() {
    }
    ShowBookComponent.prototype.ngOnInit = function () {
    };
    ShowBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show-book',
            template: __webpack_require__("../../../../../src/app/components/show-book/show-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/show-book/show-book.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowBookComponent);
    return ShowBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/update-book/update-book.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Update Book</title>\n  <link href=\"http://fonts.googleapis.com/css?family=Varela+Round\" rel=\"stylesheet\" />\n</head>\n\n<body>\n  <p id=\"header\">{{pageTitle}}</p>\n  <div class=\"jumbotron mt-5 ml-5 mr-5\">\n    <h1 id=\"quotes\">“Reading gives us someplace to go when we have to stay where we are.”</h1>\n    <p id=\"header\">\n      <a class=\"header\" href=\"/home\">The Book Library</a>\n    </p>\n  </div>\n  <div class=\"container\" style=\"overflow:left;\">\n    <div class=\"pricing-table\">\n      <div class=\"scroller-spacer\" [ngStyle]=\"spacerStyle\"></div>\n      <div class=\"pricing-option mt-3 mr-3\" *ngFor=\"let book of allBooks; index as i\">\n        <b>Title</b>\n        <h1>{{book.title | titlecase | nonEnglish}}</h1>\n        <b>Id : {{book.id}}</b>\n        <hr />\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore\n          quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\n        <hr />\n        <div class=\"price\">\n          <div class=\"front\">\n            <b>Author</b>\n            <span class=\"price\">{{book.author | titlecase | nonEnglish}}\n              <b>{{book.date | date}}</b>\n            </span>\n          </div>\n          <div class=\"back\">\n            <a class='button' data-toggle=\"modal\" data-target=\"#updateBook\" (click)=\"openUpdateModal(book)\">\n              <span class=\"glyphicon glyphicon-edit\"></span> Edit</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- updateBook Modal -->\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal fade\" id=\"updateBook\" aria-labelledby=\"updateBookLabel\" aria-hidden=\"false\">\n      <div class=\"modal-dialog\" role=\"dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title\" id=\"updateBookLabel\">Update Book</h3>\n          </div>\n          <div class=\"container\">\n            <p class=\"mt-2\">Author Name :</p>\n            <input class=\"form-control\" type=\"text\" formControlName=\"author\" name=\"author\" [(ngModel)]=\"author\" required/>\n            <div *ngIf=\"myForm.controls['author'].touched && !myForm.controls['author'].valid\">\n              <span *ngIf=\"myForm.controls['author'].hasError('required')\">\n                <p class=\"message\">Author Name Is Requierd !</p>\n              </span>\n            </div>\n            <p>Date :</p>\n            <input class=\"form-control\" type=\"date\" name=\"date\" formControlName=\"date\" [(ngModel)]=\"date\" required/>\n            <div *ngIf=\"myForm.controls['date'].touched && !myForm.controls['date'].valid\">\n              <span *ngIf=\"myForm.controls['date'].hasError('required')\">\n                <p class=\"message\">Date Is Requierd !</p>\n              </span>\n            </div>\n            <p>Title :</p>\n            <input class=\"form-control\" type=\"text\" name=\"title\" (ngModelChange)=\"checkIfTitleExist($event)\" formControlName=\"title\"\n              [(ngModel)]=\"title\" required/>\n            <div *ngIf=\"myForm.controls['title'].touched && !myForm.controls['title'].valid\">\n              <span *ngIf=\"myForm.controls['title'].hasError('required')\">\n                <p class=\"message\">Book Title Is Requierd !</p>\n              </span>\n            </div>\n            <span *ngIf=\"isAlreadyExist\" class=\"message\">\n              <P>Title already exist, Please try different title !</P>\n            </span>\n          </div>\n          <div class=\"modal-body\">\n            <strong>Are you sure you want to Update this book ?</strong>\n            <br> Click Save to save the changes or Cancel to cancel the change !\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary \" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]='!myForm.valid' (click)=\"updateBook()\">Save changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/update-book/update-book.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update-book/update-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateBookComponent = /** @class */ (function () {
    function UpdateBookComponent(fb, httpService) {
        this.fb = fb;
        this.httpService = httpService;
        this.allBooks = [];
        this.bookObj = {};
        this.author = '';
        this.date = '';
        this.title = '';
        this.isAlreadyExist = false;
        this.updatedBook = {};
    }
    //get all books from the json file
    UpdateBookComponent.prototype.getAllBooks = function () {
        var _this = this;
        this.httpService.getAllBooks()
            .subscribe(function (data) { _this.allBooks = data; }, function (err) { console.log(err); });
        return this.allBooks || [];
    };
    // checking if the book title id already and display a message to the user
    UpdateBookComponent.prototype.checkIfTitleExist = function (Text) {
        var _this = this;
        var newTitle = Text; //check
        if (typeof newTitle !== 'string' || !newTitle || /^\s*$/.test(newTitle)) {
            this.isAlreadyExist = false;
            return void [0];
        }
        this.allBooks.map(function (book) {
            if (typeof book.title === 'string') {
                if (book.title === newTitle) {
                    _this.isAlreadyExist = true;
                    return;
                }
            }
        });
    };
    UpdateBookComponent.prototype.openUpdateModal = function (book) {
        this.updatedBook = book;
    };
    // update book on json file
    UpdateBookComponent.prototype.updateBook = function () {
        var _this = this;
        var isAlreadyExist = false;
        var titleToCheck = this.title.trim();
        if (typeof this.updatedBook.title !== 'string' || !this.updatedBook.title || /^\s*$/.test(this.updatedBook.title)) {
            return void [0];
        }
        this.allBooks.map(function (book) {
            if (typeof book.title === 'string') {
                if (book.title === titleToCheck) {
                    isAlreadyExist = true;
                    return;
                }
            }
        });
        if (!isAlreadyExist) {
            this.errorMessage = '';
            this.bookObj.id = this.updatedBook.id;
            this.bookObj.author = this.author;
            this.bookObj.date = this.date;
            this.bookObj.title = this.title;
            this.httpService.updateBook(this.bookObj)
                .subscribe(function (res) { _this.bookObj = res; }, function (err) { console.log(err); });
            this.onSubmit();
        }
        else {
            this.errorMessage = 'Title Is Already Exist, Please Try New Title !';
            console.error(this.errorMessage);
        }
    };
    UpdateBookComponent.prototype.onSubmit = function () {
        if (this.myForm.valid) {
            this.myForm.reset();
        }
    };
    // reset inputs filed after submit the form
    UpdateBookComponent.prototype.ngOnInit = function () {
        var bookId = this.bookObj.id;
        this.isAlreadyExist = false;
        this.pageTitle = 'Update Books';
        this.getAllBooks();
        this.myForm = this.fb.group({
            id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ bookId: bookId }),
            author: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
    };
    UpdateBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-book',
            template: __webpack_require__("../../../../../src/app/components/update-book/update-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/update-book/update-book.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]])
    ], UpdateBookComponent);
    return UpdateBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/non-english.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonEnglishPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NonEnglishPipe = /** @class */ (function () {
    function NonEnglishPipe() {
    }
    NonEnglishPipe.prototype.transform = function (str) {
        return str ? str.replace(/[^\w ]/g, '') : str;
    };
    NonEnglishPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'nonEnglish'
        })
    ], NonEnglishPipe);
    return NonEnglishPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        //works
        this.books = [];
        this.allBooksApiRoot = 'http://localhost:3000/books/';
        //works
        this.deleteBookApiRoot = 'http://localhost:3000/books/';
        //works
        this.addBookApiRoot = 'http://localhost:3000/books';
    }
    HttpService.prototype.getAllBooks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.get(this.allBooksApiRoot, { headers: headers });
    };
    //works
    HttpService.prototype.updateBook = function (bookObj) {
        if (bookObj.id < 0) {
            return void [0];
        }
        console.log("bookObj ", bookObj);
        var url = 'http://localhost:3000/books/' + bookObj.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.put(url, bookObj, { headers: headers });
    };
    HttpService.prototype.deleteBook = function (book) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.delete(this.deleteBookApiRoot + book.id, { headers: headers });
    };
    HttpService.prototype.addBook = function (book) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.post(this.addBookApiRoot, book, { headers: headers });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/assets/image/frontImage.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "frontImage.ecb9adb58d92427175bb.jpg";

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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map