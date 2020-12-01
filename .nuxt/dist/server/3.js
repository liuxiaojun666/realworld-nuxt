exports.ids = [3];
exports.modules = {

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
 // 登录

const login = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: '/api/users/login',
  method: 'POST',
  data
}); // 注册

const register = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: '/api/users',
  method: 'POST',
  data
}); // 文章列表

const getArticles = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/articles',
  params
}); // 用户关注的文章列表

const getFeedArticles = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/articles/feed',
  params
}); // 文章tags

const getTags = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/tags',
  params
}); // 文章点赞

const addFavorite = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'POST',
  url: `/api/articles/${slug}/favorite`
}); // 文章取消点赞

const deleteFavorite = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'DELETE',
  url: `/api/articles/${slug}/favorite`
}); // 获取文章详情

const getArticle = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/articles/${slug}`
}); // 获取文章评论

const getComments = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/articles/${slug}/comments`
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=713e39ef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(msg){return ("<li>"+_vm._ssrEscape(_vm._s(field + ' ' + msg))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" required=\"required\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" required=\"required\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" required=\"required\" minlength=\"8\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=713e39ef&

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : void 0;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: ['notAuthentecated'],
  name: 'loginIndex',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = await (this.isLogin ? api["h" /* login */] : api["i" /* register */])({
          user: this.user
        });
        this.$store.commit('SET_USER', data.user);
        Cookie.set('user', data.user);
        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "68cdd10b"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map