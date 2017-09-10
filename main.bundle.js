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

/***/ "../../../../../src/app/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




var AdminAuthGuard = (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.auth.appUser$
            .map(function (appUser) { return appUser.isAdmin; });
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-order-details/admin-order-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-order-details/admin-order-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>My Order</h1>\n<div >\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <p>\n        Your order was placed on {{ order.datePlaced | date }}.\n      </p>\n      <p>\n        Email: {{ order.userEmail }}\n      </p>\n      <p>Name: {{ order.shipping?.name }}</p>\n      <div>\n        <p>Address Line 1: {{ order.shipping?.addressLine1 }}</p>\n        <p>Address Line 2: {{ order.shipping?.addressLine2 }}</p>\n        <p>City: {{ order.shipping?.city }}</p>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>Product</th>\n            <th class=\"text-center\" style=\"width: 230px;\">Quantity</th>\n            <th class=\"text-right\" style=\"width: 200px;\">Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of order.items\" >\n            <td>\n              <div [style.backgroundImage]=\"'url(' + item.product.imageUrl + ')'\" class=\"thumbnail\" ></div>\n            </td>\n            <td>\n              {{ item.product.title }}\n            </td>\n            <td class=\"text-center\">\n              {{ item.quantity }}\n            </td>\n            <td class=\"text-right\">\n              {{ item.totalPrice | currency:'GBP':true }}\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <th></th>\n            <th></th>\n            <th></th>\n            <!--<th class=\"text-right\">{{ cart.totalPrice | currency:'GBP':true }}</th> -->\n            <th class=\"text-right\">\n              Total Price: {{ totalPrice() | currency:'GBP':true }}\n            </th>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n  <a class=\"btn btn-primary\"\n    routerLink=\"/my/orders\">\n    My orders\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-order-details/admin-order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminOrderDetailsComponent = (function () {
    function AdminOrderDetailsComponent(router, route, orderService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.order = {};
        this.id = this.route.snapshot.paramMap.get('id');
        //console.log('this.id ', this.id);
        if (this.id) {
            this.orderService.get(this.id)
                .subscribe(function (o) {
                _this.order = o;
                _this.items = o.items;
                console.log('this.items ', _this.items);
            });
        }
    }
    AdminOrderDetailsComponent.prototype.ngOnInit = function () {
    };
    AdminOrderDetailsComponent.prototype.totalPrice = function () {
        var sum = 0;
        for (var productId in this.items)
            sum += this.items[productId].totalPrice;
        //console.log('sum ', sum);
        return sum;
    };
    return AdminOrderDetailsComponent;
}());
AdminOrderDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-order-details',
        template: __webpack_require__("../../../../../src/app/admin/admin-order-details/admin-order-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-order-details/admin-order-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */]) === "function" && _c || Object])
], AdminOrderDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-order-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <!--<a href=\"#\">View</a> -->\n        <a [routerLink]=\"['/admin/orders/', order.$key]\" >View</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminOrdersComponent = (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
        this.orders$ = orderService.getOrders();
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    return AdminOrdersComponent;
}());
AdminOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-orders',
        template: __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object])
], AdminOrdersComponent);

var _a;
//# sourceMappingURL=admin-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">\n    New product\n  </a>\n</p>\n<p>\n  <input type=\"text\"\n        #query\n        class=\"form-control\"\n        placeholder=\"Search...\"\n        (keyup)=\"filter(query.value)\" >\n</p>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Price</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of filteredProducts\" >\n      <td>{{ p.title }}</td>\n      <td>{{ p.price | currency:'GBP':true }}</td>\n      <td>\n        <a [routerLink]=\"['/admin/products/', p.$key]\" >Edit</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProductsComponent = (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.subscription = this.productService.getAll()
            .subscribe(function (products) { return _this.filteredProducts = _this.products = products; });
        // this.subscription = this.productService.getAll()
        //   .subscribe(products => {
        //     this.filteredProducts = this.products = products;
        //     this.initializeTable(products);
        //
        //     });
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.filter = function (query) {
        console.log('query ', query);
        this.filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
    };
    return AdminProductsComponent;
}());
AdminProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-products',
        template: __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], AdminProductsComponent);

var _a;
//# sourceMappingURL=admin-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\" >\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input #title=\"ngModel\"\n                [(ngModel)]=\"product.title\"\n                name=\"title\"\n                id=\"title\"\n                type=\"text\"\n                class=\"form-control\"\n                required>\n        <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n          Title is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">£</span>\n          <input #price=\"ngModel\"\n                  [(ngModel)]=\"product.price\"\n                  name=\"price\"\n                  id=\"price\"\n                  type=\"number\"\n                  class=\"form-control\"\n                  required\n                  [min]=\"0\">\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\" >\n          <div *ngIf=\"price.errors.required \">Price is required.</div>\n          <div *ngIf=\"price.errors.min \">Price should be 0 or higher.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\">Category</label>\n        <select #category=\"ngModel\"\n                [(ngModel)]=\"product.category\"\n                name=\"category\"\n                id=\"category\"\n                class=\"form-control\"\n                required>\n          <option value=\"\"></option>\n          <option *ngFor=\"let c of categories$ | async\" [value]=\"c.$key\">\n            {{ c.name }}\n          </option>\n        </select>\n        <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\" >\n          Category is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image Url</label>\n        <input #imageUrl=\"ngModel\"\n                [(ngModel)]=\"product.imageUrl\"\n                name=\"imageUrl\"\n                id=\"imageUrl\"\n                type=\"text\"\n                class=\"form-control\"\n                required\n                url>\n        <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n          <div *ngIf=\"imageUrl.errors.required\" >Image URL is required.</div>\n          <div *ngIf=\"imageUrl.errors.url\" >Please enter a valid url.</div>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\">Save</button>\n      <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n    <app-product-card [product]=\"product\" [show-actions]=\"false\" ></app-product-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = (function () {
    function ProductFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getCategories();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.productService.get(this.id).take(1)
                .subscribe(function (p) { return _this.product = p; });
        }
    }
    ProductFormComponent.prototype.save = function (product) {
        //console.log('product ', product);
        if (this.id) {
            this.productService.update(this.id, product);
            this.router.navigate(['/admin/products']);
        }
        else {
            this.productService.create(product);
            this.router.navigate(['/admin/products']);
        }
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this product?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.ngOnDestroy = function () {
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-form',
        template: __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/product-form/product-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === "function" && _d || Object])
], ProductFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__ = __webpack_require__("../../../../../src/app/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bs_navbar_bs_navbar_component__ = __webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__check_out_check_out_component__ = __webpack_require__("../../../../../src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__order_success_order_success_component__ = __webpack_require__("../../../../../src/app/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_admin_products_admin_products_component__ = __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__products_product_filter_product_filter_component__ = __webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__product_quantity_product_quantity_component__ = __webpack_require__("../../../../../src/app/product-quantity/product-quantity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shopping_cart_summary_shopping_cart_summary_component__ = __webpack_require__("../../../../../src/app/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shipping_form_shipping_form_component__ = __webpack_require__("../../../../../src/app/shipping-form/shipping-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__admin_admin_order_details_admin_order_details_component__ = __webpack_require__("../../../../../src/app/admin/admin-order-details/admin-order-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_22__check_out_check_out_component__["a" /* CheckOutComponent */],
            __WEBPACK_IMPORTED_MODULE_23__order_success_order_success_component__["a" /* OrderSuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_24__my_orders_my_orders_component__["a" /* MyOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_25__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_28__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
            __WEBPACK_IMPORTED_MODULE_29__products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_30__product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_32__product_quantity_product_quantity_component__["a" /* ProductQuantityComponent */],
            __WEBPACK_IMPORTED_MODULE_34__shopping_cart_summary_shopping_cart_summary_component__["a" /* ShoppingCartSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_35__shipping_form_shipping_form_component__["a" /* ShippingFormComponent */],
            __WEBPACK_IMPORTED_MODULE_36__admin_admin_order_details_admin_order_details_component__["a" /* AdminOrderDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_20__products_products_component__["a" /* ProductsComponent */] },
                { path: 'products', component: __WEBPACK_IMPORTED_MODULE_20__products_products_component__["a" /* ProductsComponent */] },
                { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_21__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */] },
                { path: 'check-out', component: __WEBPACK_IMPORTED_MODULE_22__check_out_check_out_component__["a" /* CheckOutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]] },
                { path: 'order-success/:id', component: __WEBPACK_IMPORTED_MODULE_23__order_success_order_success_component__["a" /* OrderSuccessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]] },
                { path: 'my/orders', component: __WEBPACK_IMPORTED_MODULE_24__my_orders_my_orders_component__["a" /* MyOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */]] },
                {
                    path: 'admin/products/new',
                    component: __WEBPACK_IMPORTED_MODULE_28__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                },
                {
                    path: 'admin/products/:id',
                    component: __WEBPACK_IMPORTED_MODULE_28__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                },
                {
                    path: 'admin/products',
                    component: __WEBPACK_IMPORTED_MODULE_25__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                },
                {
                    path: 'admin/orders/:id',
                    component: __WEBPACK_IMPORTED_MODULE_36__admin_admin_order_details_admin_order_details_component__["a" /* AdminOrderDetailsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                },
                {
                    path: 'admin/orders',
                    component: __WEBPACK_IMPORTED_MODULE_26__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_8__admin_auth_guard_service__["a" /* AdminAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_15__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_31__shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_33__order_service__["a" /* OrderService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(userService, afAuth, route) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton {\n  outline: none;\n}\n\nli {\n  list-style: none;\n\n}\n\n.fa-shopping-cart {\n  font-size: 20px;\n}\n\n.fa-leaf {\n  font-size: 30px;\n}\n\n.space {\n  width: 100px;\n}\n\n.dropdown-toggle {\n  cursor: pointer;\n\n}\n\n.navbar-brand {\n  color: #338a3e;\n  font-size: 24px;\n}\n\nnav.navbar {\n\n  border-bottom: 2px solid #a5d6a7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light fixed-top\" style=\"background-color: #d7ffd9; height: 50px;\">\n  <div class=\"container\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <i class=\"fa fa-leaf\" aria-hidden=\"true\"></i>\n  </a>\n  <button class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarsExampleDefault\"\n          aria-controls=\"navbarsExampleDefault\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n          <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\" ></i>\n          <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$ | async as cart\" >\n            {{ cart.totalItemsCount }}\n          </span>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n\n      <ng-template #anonymousUser>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n      </ng-template>\n      <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ appUser.name }}\n        </a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n          <ng-container *ngIf=\"appUser.isAdmin\">\n            <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n            <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n          </ng-container>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BsNavbarComponent = (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return BsNavbarComponent;
}());
BsNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'bs-navbar',
        template: __webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], BsNavbarComponent);

var _a, _b;
//# sourceMappingURL=bs-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getCategories = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Shipping</h2>\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n  <div class=\"col-6\">\n    <app-shipping-form [cart]=\"cart\" ></app-shipping-form>\n  </div>\n  <div class=\"col-6\">\n    <app-shopping-cart-summary [cart]=\"cart\" ></app-shopping-cart-summary>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CheckOutComponent = (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // I need a shopping cart and not an observable.
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        // I need a shopping cart and not an observable.
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CheckOutComponent;
}());
CheckOutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-out',
        template: __webpack_require__("../../../../../src/app/check-out/check-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-out/check-out.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], CheckOutComponent);

var _a;
//# sourceMappingURL=check-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.google {\r\n  background-color: red;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\nbutton:focus {\r\n  outline: none;\r\n  text-decoration: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button\n  (click)=\"login()\"\n  class=\"btn btn-primary google\">\n  <i class=\"fa fa-google\" aria-hidden=\"true\" ></i> Login with Google\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.shoppingCart = shoppingCart;
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/models/shopping-cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartItem; });
var ShoppingCartItem = (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());

//# sourceMappingURL=shopping-cart-item.js.map

/***/ }),

/***/ "../../../../../src/app/models/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_item__ = __webpack_require__("../../../../../src/app/models/shopping-cart-item.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ShoppingCart = (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_0__shopping_cart_item__["a" /* ShoppingCartItem */](__assign({}, item, { $key: productId })));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        var item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.itemsMap)
                count += this.itemsMap[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());

//# sourceMappingURL=shopping-cart.js.map

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <!--<a href=\"#\">View</a>-->\n        <a [routerLink]=\"['/admin/orders/', order.$key]\" >View</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyOrdersComponent = (function () {
    function MyOrdersComponent(authService, orderService) {
        this.authService = authService;
        this.orderService = orderService;
        this.orders$ = authService.user$.switchMap(function (u) { return orderService.getOrdersByUser(u.uid); });
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    return MyOrdersComponent;
}());
MyOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-orders',
        template: __webpack_require__("../../../../../src/app/my-orders/my-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-orders/my-orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */]) === "function" && _b || Object])
], MyOrdersComponent);

var _a, _b;
//# sourceMappingURL=my-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
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

var OrderSuccessComponent = (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    return OrderSuccessComponent;
}());
OrderSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-success',
        template: __webpack_require__("../../../../../src/app/order-success/order-success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order-success/order-success.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderSuccessComponent);

//# sourceMappingURL=order-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OrderService = (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    OrderService.prototype.placeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.get = function (orderId) {
        return this.db.object('/orders/' + orderId)
            .map(function (result) {
            var order = result;
            console.log('order ', order);
            return order;
        });
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', {
            query: {
                orderByChild: 'userId',
                equalTo: userId
            }
        });
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], OrderService);

var _a, _b;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.card-footer {\r\n  padding: 0;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/*button {\r\n  background-color: grey;\r\n  border: 0;\r\n}*/\r\n\r\n.card-footer button {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n  <img class=\"card-img-top\" src=\"{{ product.imageUrl }}\" alt=\"{{ product.title }}\" *ngIf=\"product.imageUrl\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ product.title }}</h4>\n    <p class=\"card-text\">{{ product.price | currency:'GBP':true }}</p>\n  </div>\n  <div class=\"card-footer\" *ngIf=\"showActions && shoppingCart\">\n    <button class=\"btn btn-secondary btn-block\"\n            (click)=\"addToCart()\"\n            *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity\" >\n        Add to Cart\n    </button>\n    <ng-template #updateQuantity >\n      <app-product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\" >\n      </app-product-quantity>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_product__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCardComponent = (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    return ProductCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product__["Product"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_product__["Product"]) === "function" && _a || Object)
], ProductCardComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('show-actions'),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "showActions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shopping-cart'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__["a" /* ShoppingCart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__["a" /* ShoppingCart */]) === "function" && _b || Object)
], ProductCardComponent.prototype, "shoppingCart", void 0);
ProductCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-card',
        template: __webpack_require__("../../../../../src/app/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-card/product-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], ProductCardComponent);

var _a, _b, _c;
//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-quantity/product-quantity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-quantity/product-quantity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-block\"\n            (click)=\"removeFromCart()\">\n      -\n    </button>\n  </div>\n  <div class=\"col text-center\">\n    {{ shoppingCart.getQuantity(product) }} in cart\n  </div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-block\"\n          (click)=\"addToCart()\">\n      +\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-quantity/product-quantity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuantityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_product__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductQuantityComponent = (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.ngOnInit = function () {
    };
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    return ProductQuantityComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product__["Product"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_product__["Product"]) === "function" && _a || Object)
], ProductQuantityComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shopping-cart'),
    __metadata("design:type", Object)
], ProductQuantityComponent.prototype, "shoppingCart", void 0);
ProductQuantityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-quantity',
        template: __webpack_require__("../../../../../src/app/product-quantity/product-quantity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-quantity/product-quantity.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], ProductQuantityComponent);

var _a, _b;
//# sourceMappingURL=product-quantity.component.js.map

/***/ }),

/***/ "../../../../../src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        // the product object should only have properties that can be updated.
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\r\n  background-color: #75a478;\r\n  border: none;\r\n}\r\n\r\n.sticky-top {\r\n  top: 80px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item list-group-item-action\"\n        [class.active]=\"!category\"\n        routerLink=\"/\" >\n      All categories\n    </a>\n    <a class=\"list-group-item list-group-item-action\"\n        *ngFor=\"let c of categories$ | async\"\n        routerLink=\"/\"\n        [queryParams]=\"{ category: c.$key }\"\n        [class.active]=\"category === c.$key\">\n      {{ c.name }}\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = (function () {
    function ProductFilterComponent(categoryService) {
        this.categoryService = categoryService;
        this.categories$ = categoryService.getCategories();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    return ProductFilterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('category'),
    __metadata("design:type", Object)
], ProductFilterComponent.prototype, "category", void 0);
ProductFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter',
        template: __webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], ProductFilterComponent);

var _a;
//# sourceMappingURL=product-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.active {\r\n  background-color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <app-product-filter [category]=\"category\"></app-product-filter>\n  </div>\n  <div class=\"col\">\n    <div class=\"row\" *ngIf=\"cart$ | async as cart\" >\n      <ng-container *ngFor=\"let p of filteredProducts; let i = index\">\n        <div class=\"col\">\n          <app-product-card [product]=\"p\" [shopping-cart]=\"cart\" ></app-product-card>\n        </div>\n        <div *ngIf=\"(i + 1) % 2 === 0\" class=\"w-100\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductsComponent = (function () {
    function ProductsComponent(productService, route, shoppingCartService) {
        this.productService = productService;
        this.route = route;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
        this.category = '';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        this.populateProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populateProducts = function () {
        var _this = this;
        this.productService
            .getAll()
            .switchMap(function (products) {
            _this.products = products;
            return _this.route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.applyFilter();
        });
    };
    ProductsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredProducts = (this.category) ?
            this.products.filter(function (p) { return p.category === _this.category; }) :
            this.products;
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], ProductsComponent);

var _a, _b, _c;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/shipping-form/shipping-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shipping-form/shipping-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"\">Name</label>\n    <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" class=\"form-control\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n      <div *ngIf=\"name.errors.required\">Name is required.</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Address</label>\n    <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"Line 1\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n      <div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required.</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\"></label>\n    <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"Line 2\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n      <div *ngIf=\"addressLine2.errors.required\">Address Line 2 is required.</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">City</label>\n    <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" type=\"text\" class=\"form-control\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n      <div *ngIf=\"city.errors.required\">City is required.</div>\n    </div>\n  </div>\n  <button\n    [disabled]=\"!f.valid\"\n    (click)=\"placeOrder()\"\n    class=\"btn btn-primary\">Place Order</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shipping-form/shipping-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ShippingFormComponent = (function () {
    function ShippingFormComponent(router, authService, orderService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new __WEBPACK_IMPORTED_MODULE_4__models_order__["a" /* Order */](this.userId, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        //this.shoppingCartService.clearCart();
                        this.router.navigate(['/order-success', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShippingFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_shopping_cart__["a" /* ShoppingCart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_shopping_cart__["a" /* ShoppingCart */]) === "function" && _a || Object)
], ShippingFormComponent.prototype, "cart", void 0);
ShippingFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shipping-form',
        template: __webpack_require__("../../../../../src/app/shipping-form/shipping-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shipping-form/shipping-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]) === "function" && _d || Object])
], ShippingFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shipping-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-cart-summary/shopping-cart-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart-summary/shopping-cart-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Order Summary</h4>\n    <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in your shopping cart.</p>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let item of cart.items\" class=\"list-group-item\"  >\n        {{ item.quantity }} x {{ item.title }}\n        <div class=\"float right\">\n          {{ item.totalPrice | currency:'GBP':true }}\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        Total\n        <div class=\"float-right\">\n          {{ cart.totalPrice | currency:'GBP':true }}\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart-summary/shopping-cart-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartSummaryComponent = (function () {
    function ShoppingCartSummaryComponent() {
    }
    ShoppingCartSummaryComponent.prototype.ngOnInit = function () {
    };
    return ShoppingCartSummaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_shopping_cart__["a" /* ShoppingCart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_shopping_cart__["a" /* ShoppingCart */]) === "function" && _a || Object)
], ShoppingCartSummaryComponent.prototype, "cart", void 0);
ShoppingCartSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shopping-cart-summary',
        template: __webpack_require__("../../../../../src/app/shopping-cart-summary/shopping-cart-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-cart-summary/shopping-cart-summary.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShoppingCartSummaryComponent);

var _a;
//# sourceMappingURL=shopping-cart-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ShoppingCartService = (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId)
                                .map(function (x) { return new __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__["a" /* ShoppingCart */](x.items); })];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, item$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.$key);
                        item$.take(1).subscribe(function (item) {
                            var quantity = (item.quantity || 0) + change;
                            if (quantity === 0)
                                item$.remove();
                            else
                                item$.update({
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: quantity
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ShoppingCartService);

var _a;
//# sourceMappingURL=shopping-cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.thumbnail {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<div class=\"row col-10\"  *ngIf=\"cart$ | async as cart\">\n  <p>\n    You have {{ cart.totalItemsCount }} items in your shopping cart.\n    <button class=\"btn btn-light btn-sm\" (click)=\"clearCart()\"  *ngIf=\"cart.items.length\">\n      Clear Shopping Cart\n    </button>\n  </p>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th class=\"text-center\" style=\"width: 230px;\">Quantity</th>\n        <th class=\"text-right\" style=\"width: 200px;\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items\">\n        <td>\n          <div [style.backgroundImage]=\"'url(' + item.imageUrl + ')'\" class=\"thumbnail\"></div>\n        </td>\n        <td>\n          {{ item.title }}\n        </td>\n        <td>\n          <app-product-quantity [product]=\"item\" [shopping-cart]=\"cart\" >\n          </app-product-quantity>\n        </td>\n        <td class=\"text-right\">\n          {{ item.totalPrice | currency:'GBP':true }}\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th class=\"text-right\">{{ cart.totalPrice | currency:'GBP':true }}</th>\n      </tr>\n    </tfoot>\n  </table>\n  <a class=\"btn btn-primary\"\n    *ngIf=\"cart.items.length\"\n    routerLink=\"/check-out\">\n    Check output\n  </a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], ShoppingCartComponent);

var _a;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDYALqaFxwyjwj0zo82pvDzseA4ygCdP7Q",
        authDomain: "udemy-angular4.firebaseapp.com",
        databaseURL: "https://udemy-angular4.firebaseio.com",
        projectId: "udemy-angular4",
        storageBucket: "udemy-angular4.appspot.com",
        messagingSenderId: "725081147895"
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