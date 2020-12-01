exports.ids = [2];
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=1f28f0d7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.$store.state.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"exact":"","to":{
                name: 'home',
                query: { tab: 'your_feed' }
              }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ 'active': _vm.tab !== 'your_feed' && !_vm.tag },attrs:{"exact":"","to":{
                  name: 'home',
                  query: { tab: 'global_feed' }
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "+((_vm.tag)?("<li class=\"nav-item\"><span class=\"nav-link active disabled\">"+_vm._ssrEscape("#"+_vm._s(_vm.tag))+"</span></li>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {
                username: item.author.username
              }
            }}},[(item.author.image)?_c('img',{attrs:{"src":item.author.image}}):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name: 'profile',
                params: {
                  username: item.author.username
                }
              }}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ 'active': item.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: item.slug } }}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{'active': item === _vm.page}))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
              name: 'home',
              query: { page: item, tag: _vm.tag, tab: _vm.tab }
            }}},[_vm._v(_vm._s(item))])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._l((_vm.tags),function(item){return _vm._ssrNode("<div class=\"tag-list\">","</div>",[_c('nuxt-link',{staticClass:"tag-pill tag-default",attrs:{"to":{
              name: 'home',
              query: { tag: item }
            }}},[_vm._v(_vm._s(item))])],1)})],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=1f28f0d7&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(11);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query,
    store
  }) {
    const limit = 20;
    const page = +query.page || 1;
    const {
      tab = 'global_feed',
      tag
    } = query;
    const [tagsData, articalData] = await Promise.all([Object(api["g" /* getTags */])(), (tab === 'your_feed' && store.state.user ? api["f" /* getFeedArticles */] : api["d" /* getArticles */])({
      limit,
      offset: (page - 1) * limit,
      tag
    })]);
    const {
      articles,
      articlesCount
    } = articalData.data;
    return {
      articles,
      articlesCount,
      limit,
      page,
      tab,
      tag,
      tags: tagsData.data.tags
    };
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorive(article) {
      if (article.favoriteDisabled) return;
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(api["b" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2df9b1d9"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map