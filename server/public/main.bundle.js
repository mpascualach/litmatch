webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/allposts/allposts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  list-style: none;\n}\n\n.webTitle {\n  margin: 0 auto;\n  position: relative;\n  width: 40%;\n  text-align: center;\n  opacity: 0.8;\n  text-decoration: underline;\n  border-radius: 5px;\n  height: 65px;\n  margin-top: 10px;\n}\n\n.portalContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 70%;\n}\n\n.postPortal {\n  border: 4px solid black;\n  padding: 20px 5px;\n  margin: 0 auto;\n  opacity: 0.8;\n  margin-top: 30px;\n  height: 540px;\n  overflow-y: scroll;\n}\n\n.title {\n  text-align: center;\n  margin-top: 0;\n  border: 1.5px solid black;\n  padding: 5px;\n}\n\n.indivpost {\n  border: 1px solid black;\n  padding: 5px 20px;\n  margin: 5px;\n  text-align: center;\n}\n\n.postLinks {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.postLinks li {\n  margin: 0 5px;\n}\n\n.date {\n  font-size: 8px;\n}\n\n.credit {\n  font-size: 10px;\n}\n\n.content {\n  cursor: pointer;\n}\n\n.makePost {\n  width: 20%;\n  margin: 0 auto;\n}\n\n.bottomBar {\n  position: relative;\n  bottom: 60px;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 3px 45px;\n  width: 67.5%;\n  right: 4px;\n  height: 55px;\n  opacity: 0.9;\n}\n\n.button-handler {\n  background-color: white;\n  opacity: 0.9;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding: 3px;\n  margin-top: 6px;\n}\n\n.commentText {\n  height: 140px;\n}\n\n.reminderButton {\n  width: 200%;\n  position: relative;\n  right: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allposts/allposts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s4 webTitle white\">\n  <h2>{{title}}</h2>\n</div>\n<div class=\"portalContainer container\">\n  <div class=\"postPortal container white col s8\">\n    <h4 class=\"title col s6\">Most recent posts</h4>\n    <ul *ngFor=\"let post of posts\" class=\"indivpost indivpost{{post._id}} col s4 hoverable\">\n       <li class=\"credit\"> Posted by: <a routerLink='/user/{{post.creator._id}}'>{{post.creator.username}}</a> at {{post.creator.created_at}}</li>\n      <b>{{post.title}}</b>\n      <li class=\"content truncate\" (click)=\"show()\">{{post.content}}</li>\n      <div class=\"postLinks\">\n        <li><a routerLink=\"/post/{{post._id}}\">See post - {{post.comments.length}} comments</a></li>\n      </div>\n      <li *ngIf=\"user\">\n        <button class=\"fortextarea\" (click)=\"comment(post)\">Comment</button>\n      </li>\n      <div class=\"comment hide\">\n        <textarea name=\"comment\" class=\"commentText\" [(ngModel)]=\"formInfo.content\" rows=\"25\" cols=\"80\"></textarea>\n        <button (click)=\"goBack(post)\">Go Back</button><button (click)=\"sendComment(post)\">Send</button>\n      </div>\n    </ul>\n  </div>\n  <div class=\"container col s8 bottomBar grey\">\n    <div class=\"container button-handler hoverable\">\n      <div class=\"makePost\"><button *ngIf=\"user\" (click)=\"makePost()\">Make post</button>\n        <button class=\"reminderButton\" (click)=\"gotoSignUp()\"*ngIf=\"!user\">Sign in to make posts :)</button></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/allposts/allposts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllpostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllpostsComponent = (function () {
    function AllpostsComponent(Post, auth, router) {
        var _this = this;
        this.Post = Post;
        this.auth = auth;
        this.router = router;
        this.title = 'LitMatch';
        this.formInfo = {
            content: ""
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    AllpostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Post.listPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            posts.forEach(function (post) {
                if (post.creator._id === _this.user._id) {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__(".editing").toggleClass("hide");
                }
            });
        });
    };
    AllpostsComponent.prototype.makePost = function () {
        this.router.navigate(['makepost']);
    };
    AllpostsComponent.prototype.gotoSignUp = function () {
        this.router.navigate(['signup']);
    };
    AllpostsComponent.prototype.show = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".content").toggleClass("truncate");
    };
    AllpostsComponent.prototype.comment = function (post) {
        console.log(post._id);
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".indivpost" + post._id + " > .comment").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".fortextarea").hide();
    };
    AllpostsComponent.prototype.goBack = function (post) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".fortextarea").show();
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".indivpost" + post._id + " > .comment").toggleClass("hide");
    };
    AllpostsComponent.prototype.sendComment = function (post) {
        this.Post.makeComment(post._id, this.formInfo.content, this.user._id)
            .subscribe(function (comment) { console.log(comment); post.comments.push(comment); });
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".fortextarea").show();
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".indivpost" + post._id + " > .comment").toggleClass("hide");
    };
    return AllpostsComponent;
}());
AllpostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-allposts',
        template: __webpack_require__("../../../../../src/app/allposts/allposts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/allposts/allposts.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AllpostsComponent);

var _a, _b, _c;
//# sourceMappingURL=allposts.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  position: fixed;\n}\n\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-image: url(http://www.thisiscolossal.com/wp-content/uploads/2017/06/library-1.jpg);\n  background-size: cover;\n  box-shadow: inset 0 0 0 2000px rgba(224, 242, 241, 0.3);\n  opacity: 0.9;\n  background-color: green;\n  overflow-y: scroll;\n}\n\n.links {\n  opacity: 0.5;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 10px;\n  height: 30px;\n}\n\n.link {\n  border: 2px solid black;\n  display: inline-block;\n  background-color: red;\n  margin: 0 auto;\n  margin-top: 2px;\n}\n\n.sidebar {\n  height: 91%;\n  position: fixed;\n  margin-top: 20px;\n  opacity: 0.8;\n  border-radius: 5px;\n  width: 17%;\n  list-style: none;\n}\n\n.sidebar li {\n  margin-left: 10px;\n}\n\n.userHandler {\n  margin-top: 10px;\n}\n\n.sidebar .logout {\n  margin-top: 8px;\n  position: relative;\n  left: 10px;\n}\n\n.sidebar .editProfile {\n  margin-top: 8px;\n  margin-bottom: 5px;\n}\n\n.buttonHandler {\n  display: inline-block;\n  float: right;\n}\n\n.userPostHandler {\n  text-align: start;\n}\n\n.indivUserPost {\n  margin-top: -14px;\n}\n\n.indivUserPost a {\n  color: black;\n  text-decoration: underline;\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background teal lighten-1\">\n  <div style=\"text-align:center\" class=\"col s10 links white container\">\n    <div class=\"container linksHandler\">\n      <div class=\"col s1 link hoverable\"><a [routerLink]=\"['/']\">Home</a></div>\n      <div class=\"col s1 link hoverable\"><a [routerLink]=\"['/login']\">Login</a></div>\n      <div class=\"col s1 link hoverable\"><a [routerLink]=\"['/signup']\">Signup</a></div>\n    </div>\n  </div>\n  <div class=\"col s4 sidebar red\">\n    <div class=\"container orange userHandler\">\n      <li><b> Username: </b><span *ngIf=\"user\">{{user.username}}\n      </span><span *ngIf=\"!user\">Anonymous</span></li>\n    </div>\n    <div class=\"container orange userHandler\">\n      <li><b>Messages: </b><a *ngIf=\"user\" href=\"/messages\">{{user.messages.length}}</a>\n        <span *ngIf=\"!user\">None</span></li>\n    </div>\n    <div class=\"container orange userHandler\">\n      <li><b>Posts: </b><span *ngIf=\"!user\">None</span></li>\n    </div>\n    <div class=\"container orange userHandler userPostHandle\">\n      <ul *ngFor=\"let post of postlist\" >\n        <div class=\"indivUserPost truncate\">\n          <a routerLink=\"/post/{{post._id}}\">{{post.title}}</a>\n        </div>\n      </ul>\n    </div>\n    <div *ngIf=\"user\" class=\"buttonHandler container\">\n      <button class=\"editProfile\" (click)=\"gotoProfile()\">Go to profile</button>\n      <br>\n      <button class=\"logout\" (click)=\"logout()\">Logout</button>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(auth, posts, router) {
        this.auth = auth;
        this.posts = posts;
        this.router = router;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.user = user;
            _this.posts.listPostsById(user._id)
                .subscribe(function (postlist) {
                _this.postlist = postlist;
                console.log(_this.postlist);
            });
        });
    };
    AppComponent.prototype.gotoProfile = function () {
        this.router.navigate(['user', this.user._id]);
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function () { return _this.router.navigate(['/']); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css__ = __webpack_require__("../../../../materialize-css/dist/js/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__allposts_allposts_component__ = __webpack_require__("../../../../../src/app/allposts/allposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__makecomment_makecomment_component__ = __webpack_require__("../../../../../src/app/makecomment/makecomment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__makepost_makepost_component__ = __webpack_require__("../../../../../src/app/makepost/makepost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__seepost_seepost_component__ = __webpack_require__("../../../../../src/app/seepost/seepost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__editpost_editpost_component__ = __webpack_require__("../../../../../src/app/editpost/editpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__seeuser_seeuser_component__ = __webpack_require__("../../../../../src/app/seeuser/seeuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_9__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_14__allposts_allposts_component__["a" /* AllpostsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__editprofile_editprofile_component__["a" /* EditprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__makecomment_makecomment_component__["a" /* MakecommentComponent */],
            __WEBPACK_IMPORTED_MODULE_17__makepost_makepost_component__["a" /* MakepostComponent */],
            __WEBPACK_IMPORTED_MODULE_18__seepost_seepost_component__["a" /* SeepostComponent */],
            __WEBPACK_IMPORTED_MODULE_20__seeuser_seeuser_component__["a" /* SeeuserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__editpost_editpost_component__["a" /* EditpostComponent */],
            __WEBPACK_IMPORTED_MODULE_21__message_message_component__["a" /* MessageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_8__services_posts_service__["a" /* PostsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/editpost/editpost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formHandler {\n  margin: 0 auto;\n  margin-top: 40px;\n  height: 550px;\n  width: 60%;\n  opacity: 0.8;\n}\n\n.newPostForm{\n  margin: 0 auto;\n  position: relative;\n  top: 40px;\n  height: 450px;\n  width: 90%;\n  border: 2px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  vertical-align: center\n}\n\n.textFields {\n  margin-top: 30px;\n  display: inline-block;\n}\n\n.component{\n  margin-top: 20px;\n  margin: 0 auto;\n}\n\n.component .editContent {\n  height: 200px;\n  color: grey;\n}\n\n.component .editTitle {\n  width: 85%;\n  overflow-x: auto;\n  color: grey;\n}\n\n.component button {\n  margin-left: 45%;\n  margin-top: 10px;\n}\n\n.title {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\n.credit {\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editpost/editpost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s7 container white formHandler\">\n  <form class=\"newPostForm container\" action=\"index.html\" method=\"post\">\n    <div class=\"textFields container\">\n      <div class=\"component title\">\n        <h5>Incoming New Post <span class=\"credit\">by <a [routerLink]=\"['user']\">{{user.username}}</a> :</span></h5>\n      </div>\n      <div class=\"component hoverable\">\n        <span>Title:<input type=\"text\" name=\"title\" class=\"editTitle\" value=\"{{post.title}}\" [(ngModel)]=\"formInfo.title\"></span>\n      </div>\n      <br>\n      <div class=\"component hoverable\">\n        <textarea name=\"content\" class=\"editContent\" rows=\"8\" cols=\"80\" value=\"{{post.content}}\" [(ngModel)]=\"formInfo.content\"></textarea>\n      </div>\n      <div class=\"category\">\n        <select name=\"category\" class=\"component category\" [(ngModel)]=\"formInfo.category\" *ngFor=\"let category of categories\">\n          <option value=\"{{category}}\"></option>\n        </select>\n      </div>\n      <div class=\"component\">\n        <button type=\"button\" (click)=\"editPost()\">Send</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editpost/editpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditpostComponent = (function () {
    function EditpostComponent(Post, auth, route, router) {
        this.Post = Post;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.formInfo = {
            user: '',
            title: '',
            content: '',
            category: ''
        };
        this.categories = ["literature", "exchange", "writing"];
    }
    EditpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.isLoggedIn().subscribe(function (user) { return _this.user = user; });
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.user = user;
        });
        this.route.params
            .subscribe(function (params) {
            _this.Post.seePost(params.id).subscribe(function (post) {
                _this.post = post;
            });
        });
    };
    EditpostComponent.prototype.editPost = function (post) {
        var _this = this;
        this.Post.editPost(this.post._id, this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    EditpostComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    EditpostComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
        this.router.navigate(['/']);
    };
    return EditpostComponent;
}());
EditpostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editpost',
        template: __webpack_require__("../../../../../src/app/editpost/editpost.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editpost/editpost.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], EditpostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editpost.component.js.map

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editForm {\n  width: 50%;\n  padding: 5px;\n  opacity: 0.9;\n}\n\n.formHandler {\n  margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"formInfo\">\n\n  <form class=\"white editForm container\">\n    <h5>Editing {{user.username}}'s profile</h5>\n    <div class=\"formHandler container\">\n      <div class=\"component container\">\n        <label>Username</label> <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\">\n      </div>\n      <div class=\"component container\">\n        <label>Password</label> <input type=\"text\" [(ngModel)]=\"formInfo.password\" name=\"password\">\n      </div>\n      <div class=\"component container\">\n        <label>Email</label> <input type=\"text\" [(ngModel)]=\"formInfo.email\" name=\"email\">\n      </div>\n      <div class=\"component container\">\n        <label>Location</label> <input type=\"text\" [(ngModel)]=\"formInfo.location\" name=\"location\">\n      </div>\n      <div class=\"component container\">\n        <label>Favourite Genre</label> <input type=\"text\" [(ngModel)]=\"formInfo.favouriteGenre\" name=\"favouriteGenre\">\n      </div>\n      <div class=\"component container\">\n        <label>Favourite Book</label> <input type=\"text\" [(ngModel)]=\"formInfo.favouriteBook\" name=\"favouriteGenre\">\n      </div>\n      <div class=\"component container\">\n        <button (click)=\"editUser()\">Edit user</button>\n      </div>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditprofileComponent = (function () {
    function EditprofileComponent(auth, Post, router) {
        this.auth = auth;
        this.Post = Post;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            email: "",
            location: "",
            favouriteGenre: "",
            favouriteBook: " "
        };
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            _this.posts.listPostsById()
                .subscribe(function (postlist) { console.log(postlist); _this.postlist = postlist; });
        });
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.formInfo = {
                username: user.username,
                password: user.password,
                email: user.email,
                location: user.location,
                favouriteGenre: user.favouriteGenre,
                favouriteBook: user.favouriteBook,
            };
        });
        console.log(this.user);
    };
    EditprofileComponent.prototype.editUser = function () {
        var _this = this;
        this.auth.editUser(this.user._id, this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    EditprofileComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    EditprofileComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
        this.router.navigate(['user']);
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/editprofile/editprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editprofile/editprofile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], EditprofileComponent);

var _a, _b, _c;
//# sourceMappingURL=editprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginForm {\n  border: 2px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 45%;\n  height: 340px;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 20px;\n  position: absolute;\n  left: 25%;\n}\n\n.loginForm input {\n  border: 0.5px solid black;\n  height: 20px;\n  width: 80%;\n}\n\n.lofinForm label {\n  margin-top: 0px;\n}\n\n.loginForm h2 {\n  margin: 0;\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <p>You've already logged in</p>\n</div>\n\n<form class=\"col s10 loginForm white\">\n  <h2> Login </h2>\n  <div class=\"textField\">\n    <label> Username </label> <br>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  </div>\n  <br>\n  <div class=\"textField\">\n    <label> Password </label> <br>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n  </div>\n  <div class=\"textField\">\n    <button (click)=\"login()\"> login </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); }, function () { return _this.router.navigate(['']); });
    };
    LoginformComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    LoginformComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/makecomment/makecomment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/makecomment/makecomment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  makecomment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/makecomment/makecomment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakecommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakecommentComponent = (function () {
    function MakecommentComponent() {
    }
    MakecommentComponent.prototype.ngOnInit = function () {
    };
    return MakecommentComponent;
}());
MakecommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-makecomment',
        template: __webpack_require__("../../../../../src/app/makecomment/makecomment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/makecomment/makecomment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MakecommentComponent);

//# sourceMappingURL=makecomment.component.js.map

/***/ }),

/***/ "../../../../../src/app/makepost/makepost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formHandler {\n  margin: 0 auto;\n  margin-top: 40px;\n  height: 550px;\n  width: 60%;\n  opacity: 0.8;\n}\n\n.newPostForm{\n  margin: 0 auto;\n  position: relative;\n  top: 40px;\n  height: 450px;\n  width: 90%;\n  border: 2px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  vertical-align: center\n}\n\n.textFields {\n  margin-top: 40px;\n  display: inline-block;\n}\n\n.component{\n  margin-top: 20px;\n  margin: 0 auto;\n}\n\n.component textarea {\n  height: 200px;\n}\n\n.component input {\n  width: 85%;\n  height: 19px;\n  overflow-x: auto;\n}\n\n.component button {\n  margin-left: 45%;\n  margin-top: 10px;\n}\n\n.title {\n  text-align: center;\n}\n\nh5 {\n  font-size: 18px;\n}\n\n.credit {\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/makepost/makepost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s7 container white formHandler\">\n  <form class=\"newPostForm container\" action=\"index.html\" method=\"post\">\n    <div class=\"textFields container\">\n      <div class=\"component title\">\n        <h5>Incoming New Post <span class=\"credit\">by <a [routerLink]=\"['user']\">{{user.username}}</a> :</span></h5>\n      </div>\n      <div class=\"component hoverable\">\n        <span>Title:<input type=\"text\" name=\"title\" value=\"\" [(ngModel)]=\"formInfo.title\"></span>\n      </div>\n      <br>\n      <div class=\"component hoverable\">\n        <textarea name=\"content\" rows=\"8\" cols=\"80\" [(ngModel)]=\"formInfo.content\"></textarea>\n      </div>\n      <div class=\"category\">\n        <select name=\"category\" class=\"component category\" [(ngModel)]=\"formInfo.category\" *ngFor=\"let category of categories\">\n          <option value=\"{{category}}\"></option>\n        </select>\n      </div>\n      <div class=\"component\">\n        <button type=\"button\" (click)=\"makePost()\">Send</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/makepost/makepost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakepostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakepostComponent = (function () {
    function MakepostComponent(posts, auth, router) {
        this.posts = posts;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            user: '',
            title: '',
            content: '',
            category: ''
        };
        this.categories = ["literature", "exchange", "writing"];
    }
    MakepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.isLoggedIn().subscribe(function (user) { return _this.user = user; });
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            console.log(_this.user);
            _this.user = user;
        });
    };
    MakepostComponent.prototype.makePost = function () {
        var _this = this;
        this.formInfo.user = this.user._id;
        this.posts.makePost(this.formInfo)
            .subscribe(function (post) { return _this.successCb(post); }, function (err) { return _this.errorCb(err); });
    };
    MakepostComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.posts = null;
        this.router.navigate(['/makepost']);
    };
    MakepostComponent.prototype.successCb = function (val) {
        this.posts = val;
        this.error = null;
        this.router.navigate(['/']);
    };
    return MakepostComponent;
}());
MakepostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-makepost',
        template: __webpack_require__("../../../../../src/app/makepost/makepost.component.html"),
        styles: [__webpack_require__("../../../../../src/app/makepost/makepost.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], MakepostComponent);

var _a, _b, _c;
//# sourceMappingURL=makepost.component.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messagePortal {\n  width: 45%;\n  text-align: center;\n  height: 240px;\n  margin-top: 100px;\n  opacity: 0.9;\n  border-radius: 5px;\n}\n\n.messageHolder1 {\n  margin-top: 50px;\n  position: relative;\n  top: 20px;\n}\n\n.noMessages {\n  border: 1px solid black;\n  height: 140px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container white messagePortal\">\n  <div class=\"container messageHolder1\">\n    <h5>Messages:</h5>\n    <div class=\"noMessages\" *ngIf=\"messages.length == 0\">No messages at the moment</div>\n  </div>\n  <div class=\"messageHolder2 container\" *ngFor=\"let message of messages\">\n    <a href=\"#\">{{message.sender}}</a> <p>{{message.content}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = (function () {
    function MessageComponent(auth, message) {
        this.auth = auth;
        this.message = message;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.user = user;
            _this.message.listMessages(user._id)
                .subscribe(function (messages) {
                _this.messages = messages;
                console.log(_this.messages);
            });
        });
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message/message.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], MessageComponent);

var _a, _b;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__seepost_seepost_component__ = __webpack_require__("../../../../../src/app/seepost/seepost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__makecomment_makecomment_component__ = __webpack_require__("../../../../../src/app/makecomment/makecomment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makepost_makepost_component__ = __webpack_require__("../../../../../src/app/makepost/makepost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editpost_editpost_component__ = __webpack_require__("../../../../../src/app/editpost/editpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__seeuser_seeuser_component__ = __webpack_require__("../../../../../src/app/seeuser/seeuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__allposts_allposts_component__ = __webpack_require__("../../../../../src/app/allposts/allposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__allposts_allposts_component__["a" /* AllpostsComponent */] },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_0__seepost_seepost_component__["a" /* SeepostComponent */],
        children: [
            { path: 'comment', component: __WEBPACK_IMPORTED_MODULE_1__makecomment_makecomment_component__["a" /* MakecommentComponent */] },
        ]
    },
    { path: 'editpost/:id', component: __WEBPACK_IMPORTED_MODULE_4__editpost_editpost_component__["a" /* EditpostComponent */] },
    { path: 'makepost', component: __WEBPACK_IMPORTED_MODULE_2__makepost_makepost_component__["a" /* MakepostComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_5__seeuser_seeuser_component__["a" /* SeeuserComponent */],
        children: [
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile_component__["a" /* EditprofileComponent */] },
        ]
    },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_9__message_message_component__["a" /* MessageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/seepost/seepost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".postPortrait {\n  margin: 0 auto;\n  margin-top: 95px;\n  text-align: center;\n  width: 50%;\n  border: 2px solid black;\n  list-style: none;\n  opacity: 0.9;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.title {\n  margin-bottom: 25px;\n}\n\n.textField {\n  border: 1.5px solid black;\n  text-align: start;\n  padding-bottom: 70px;\n  margin-bottom: 10px;\n}\n\n.postPortrait .commentButton {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  margin-right: 30px;\n}\n\n.postPortrait .editButton {\n  float: right;\n  margin-top: 10px;\n}\n\n.commentsNumber {\n  float: left;\n}\n\n.commentText {\n  height: 140px;\n}\n\n.comment {\n  width: 100%;\n}\n\n.indivcomment {\n  border: 1px solid black;\n  width: 49.5%;\n  margin: 0 auto;\n  opacity: 0.8;\n  border-radius: 2px;\n  position: relative;\n  bottom: 2px;\n  list-style: none;\n}\n\n.commentHolder {\n  margin-bottom: 35px;\n  margin-left: 60px;\n  border-radius: 5px;\n  border: 1px solid black;\n  margin-top: 10px;\n  width: 80%;\n  padding-bottom: 15px;\n  margin-top: 20px;\n}\n\n.commentHolder li {\n  margin-left: 20px;\n}\n\n.commentOnComment {\n  margin: 10px;\n  margin-left: 45%;\n}\n\n.indivContent {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seepost/seepost.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"white col s8 container postPortrait\">\n  <div class=\"container\">\n    <div class=\"title\">\n      <h5>{{post.title}}</h5>\n    </div>\n    <div class=\"credit\">\n      <p>By <a routerLink=\"/user/{{post.creator._id}}\">{{post.creator.username}}</a></p>\n    </div>\n    <div *ngIf=\"post.creator._id==user._id\" class=\"editButton\">\n      <button (click)=\"gotoEdit()\">Edit post</button>\n    </div>\n    <div class=\"textField\">\n      <li>{{post.content}}</li>\n    </div>\n    <div class=\"commentsNumber\">\n      <li>{{post.comments.length}} comment<span>s</span></li>\n    </div>\n    <div *ngIf=\"user\">\n      <button class=\"commentButton\" (click)=\"comment(post)\">Comment</button>\n      <button class=\"editButton\" (click)=\"gotoEdit(post)\">Edit</button>\n    </div>\n    <div class=\"commentBox hide container\">\n      <textarea name=\"comment\" class=\"commentText\" [(ngModel)]=\"formInfo.content\" rows=\"25\" cols=\"80\"></textarea>\n      <div class=\"newButtons container\">\n        <button (click)=\"goBack(post)\">Go Back</button><button (click)=\"sendComment(post)\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngFor=\"let comment of comments\" class=\"indivcomment grey indivcomment\" (load)=\"alternateColor()\">\n  <div class=\"commentHolder white container\">\n    <li>\n      <div class=\"indivCredit\">\n        <p>By <a href=\"/user/{{comment.creator._id}}\">{{comment.creator.username}}</a></p>\n      </div>\n    </li>\n    <button type=\"button\" *ngIf=\"comment.creator._id==user._id\" name=\"button\" (click)=\"deleteComment(comment)\">Delete</button>\n    <li>\n      <div class=\"indivContent\">\n        {{comment.content}}\n      </div>\n    </li>\n    <li>\n      <div *ngIf=\"user\" class=\"commentOnComment\">\n        <button (click)=\"comment2(comment)\">Comment</button>\n      </div>\n      <div class=\"commentBox{{comment._id}} hide container\">\n        <textarea name=\"comment\" class=\"commentText\" [(ngModel)]=\"formInfo.content\" rows=\"25\" cols=\"80\"></textarea>\n        <div class=\"newButtons container\">\n          <button (click)=\"goBack2(comment)\">Go Back</button><button (click)=\"sendComment(comment)\">Send</button>\n        </div>\n      </div>\n    </li>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/seepost/seepost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeepostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeepostComponent = (function () {
    function SeepostComponent(Post, auth, route, router) {
        var _this = this;
        this.Post = Post;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.formInfo = {
            content: ""
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    SeepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.Post.seePost(params.id).subscribe(function (post) {
                _this.post = post;
                _this.comments = post.comments;
                // if (post.creator!=this.user._id){
                //   console.log("toggling");
                //   $(".editing").hide()
                // }
            });
        });
    };
    SeepostComponent.prototype.alternateColor = function () {
        for (var i = 0; i < this.comments.length; i++) {
            if (i % 2 === 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".indiv").attr("background-color", "blue");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".indiv").attr("background-color", "purple");
            }
        }
    };
    SeepostComponent.prototype.gotoEdit = function (post) {
        this.router.navigate(["/editpost/" + post._id]);
    };
    SeepostComponent.prototype.comment = function (post) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".commentBox").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".fortextarea").hide();
    };
    SeepostComponent.prototype.goBack = function (post) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".commentBox").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".fortextarea").hide();
    };
    SeepostComponent.prototype.comment2 = function (comment) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".commentBox" + comment._id).toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".commentOnComment").hide();
    };
    SeepostComponent.prototype.goBack2 = function (comment) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".commentOnComment").show();
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".commentBox" + comment._id).toggleClass("hide");
    };
    SeepostComponent.prototype.sendComment = function (post) {
        this.Post.makeComment(post._id, this.formInfo.content, this.user._id)
            .subscribe(function (comment) { console.log(comment); post.comments.push(comment); });
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".fortextarea").show();
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".comment").toggleClass("hide");
        this.router.navigate(['/']);
    };
    SeepostComponent.prototype.deleteComment = function (comment) {
        console.log("deleting");
        this.Post.deleteComment(comment._id);
    };
    return SeepostComponent;
}());
SeepostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-seepost',
        template: __webpack_require__("../../../../../src/app/seepost/seepost.component.html"),
        styles: [__webpack_require__("../../../../../src/app/seepost/seepost.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SeepostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=seepost.component.js.map

/***/ }),

/***/ "../../../../../src/app/seeuser/seeuser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userProfile {\n  padding: 10px;\n  padding-bottom: 30px;\n  width: 52%;\n  border: 1.5px solid black;\n  opacity: 0.9;\n  margin: 0 auto;\n  list-style: none;\n  text-align: center;\n  margin-top: 80px;\n  border-radius: 5px;\n}\n\n.userProfile .image {\n  color: grey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seeuser/seeuser.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"userProfile container white\">\n  <li><img class=\"image\" [src]=\"\" alt=\"(profile pic goes here)\"></li>\n  <li><b>Username: </b>{{subjectUser.username}}</li>\n  <li>from {{subjectUser.location}} <span *ngIf=\"!subjectUser.favouriteGenre\">...</span></li>\n  <li><b>Preferred Genre: </b>{{subjectUser.favouriteGenre}} <span *ngIf=\"!subjectUser.favouriteGenre\">None at the moment</span></li>\n  <li><b>Collection of books: </b>{{subjectUser.favouriteBooks}}<span *ngIf=\"!subjectUser.favouriteBooks\">No collection registered</span></li>\n  <div *ngIf=\"user._id==subjectUser._id\"><button click=\"gotoEdit()\">Edit profile</button></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/seeuser/seeuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeeuserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeeuserComponent = (function () {
    function SeeuserComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    SeeuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.isLoggedIn();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.user = user;
        });
        this.route.params
            .subscribe(function (params) {
            _this.auth.seeUser(params['id']).subscribe(function (user) {
                _this.subjectUser = user;
                console.log(_this.subjectUser);
            });
        });
    };
    return SeeuserComponent;
}());
SeeuserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-seeuser',
        template: __webpack_require__("../../../../../src/app/seeuser/seeuser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/seeuser/seeuser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SeeuserComponent);

var _a, _b, _c;
//# sourceMappingURL=seeuser.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.seeUser = function (id) {
        return this.http.get(BASEURL + "/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", user, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(BASEURL + "/login", user, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.editUser = function (id, user) {
        var _this = this;
        return this.http.put(BASEURL + "/user/" + id + "/edit", user, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        //return this.auth.isLoggedIn().map(user => true)
        return this.auth.getUser() ? true : false;
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/messages";
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.messageListener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.options = { withCredentials: true };
    }
    MessageService.prototype.handleError = function (e) {
        console.log("MESSAGING ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    MessageService.prototype.messageUpdate = function () {
        return this.messageListener;
    };
    MessageService.prototype.emitUserLoginEvent = function (messages) {
        this.messages = messages;
        this.messageListener.emit(messages);
        return messages;
    };
    MessageService.prototype.listMessages = function (a) {
        return this.http.get(BASEURL + "/listbyId/" + a)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/post";
var BASEURL2 = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/comment";
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        this.postsUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    PostsService.prototype.handleError = function (e) {
        console.log("POST ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    PostsService.prototype.getPostUpdate = function () {
        return this.postsUpdate;
    };
    PostsService.prototype.listPosts = function () {
        return this.http.get(BASEURL + "/list", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.listPostsById = function (a) {
        var _this = this;
        console.log(a);
        return this.http.get(BASEURL + "/listbyId/" + a, this.options)
            .map(function (res) { return res.json(); })
            .map(function (posts) { _this.postsUpdate.emit(posts); return posts; })
            .catch(this.handleError);
    };
    PostsService.prototype.emitPostsUpdate = function (user) {
        this.user = user;
        this.postsUpdate.emit(user);
        return user;
    };
    PostsService.prototype.seePost = function (id) {
        return this.http.get(BASEURL + "/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.makePost = function (post) {
        return this.http.post(BASEURL + "/makepost", post, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.makeComment = function (postId, content, userId) {
        return this.http.post(BASEURL2 + "/makecomment", { postId: postId, content: content, userId: userId }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.deleteComment = function (id) {
        return this.http.get(BASEURL2 + "/delete/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PostsService.prototype.editPost = function (id, updates) {
        return this.http.put(BASEURL + "/edit/" + id, updates, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return PostsService;
}());
PostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostsService);

var _a;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signupForm {\n  border: 2px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 43%;\n  height: 340px;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 90px;\n  position: absolute;\n  left: 29%;\n}\n\n.signupForm input {\n  border: 0.5px solid black;\n  height: 20px;\n  width: 80%;\n}\n\n.lofinForm label {\n  margin-top: 0px;\n}\n\n.signupForm h2 {\n  margin: 0;\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"signupForm white\">\n  <h2> Signup </h2>\n  <div class=\"textField\">\n    <label> Username </label>\n    <br>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  </div>\n  <div class=\"textField\">\n    <label> Password </label>\n    <br>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n  </div>\n  <div class=\"textField\">\n    <label> Email </label>\n    <br>\n    <input type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\"/>\n  </div>\n  <div class=\"textField\">\n      <button (click)=\"signup()\"> signup </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            email: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        this.auth.signup(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); }, function () { return _this.router.navigate(['/']); });
    };
    SignupformComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    SignupformComponent.prototype.successCb = function (user) {
        this.error = null;
        this.user = user;
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notLogged, .profile {\n  background-color: white;\n  display: inline-block;\n  text-align: center;\n  width: 40%;\n  margin: 0 auto;\n  margin-top: 40px;\n  border: 1.5px solid black;\n  position: absolute;\n  left: 30%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div *ngIf=\"!user\" class=\"notLogged col s9\">\n  <h5>NO USER LOGGED IN</h5>\n  <div class=\"col s6 noUserLinks\">\n    New? <a [routerLink]=\"['/signup']\">Sign up</a>\n    <br>\n    or\n    <br>\n    <a [routerLink]=\"['/login']\"> Log in </a>\n  </div>\n</div>\n\n<div *ngIf=\"user\" id=\"userCard\" class=\"profile col s9\">\n  <h2> Username: {{user.username}}</h2>\n  <p> Favourite genre: {{user.favouriteGenre}} </p>\n  <p> Favourite books: {{user.books}}</p>\n\n  <button (click)=\"edit()\">Edit profile</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = (function () {
    function UserprofileComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.edit = function () {
        this.router.navigate(['user', this.user._id, 'edit']);
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#userCard").hide();
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    BASEURL: ''
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map