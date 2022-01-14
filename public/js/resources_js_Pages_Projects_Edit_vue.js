(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Projects_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    project: Object,
    contacts: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      name: props.project.name,
      desc: props.project.desc,
      state: props.project.state
    });

    var submit = function submit() {
      form.post("/projects");
    };

    var __returned__ = {
      props: props,
      form: form,
      submit: submit,
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\resources\\js\\Pages\\Projects\\Edit.vue: Unexpected token (151:79)\n\n\u001b[0m \u001b[90m 149 |\u001b[39m                     _hoisted_19\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 150 |\u001b[39m                     _createElementVNode(\u001b[32m\"td\"\u001b[39m\u001b[33m,\u001b[39m _hoisted_20\u001b[33m,\u001b[39m [\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 151 |\u001b[39m                       _createElementVNode(\u001b[32m\"p\"\u001b[39m\u001b[33m,\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m _toDisplayString($contact\u001b[33m-\u001b[39m\u001b[33m>\u001b[39mid)\u001b[33m,\u001b[39m \u001b[35m1\u001b[39m \u001b[90m/* TEXT */\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                                                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 152 |\u001b[39m                     ])\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 153 |\u001b[39m                     _hoisted_21\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 154 |\u001b[39m                     _hoisted_22\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:569:17)\n    at Parser.raiseWithData (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:562:17)\n    at Parser.raise (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:523:17)\n    at Parser.unexpected (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:3601:16)\n    at Parser.parseExprAtom (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:12100:22)\n    at Parser.parseExprSubscripts (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:11654:23)\n    at Parser.parseUpdate (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:11634:21)\n    at Parser.parseMaybeUnary (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:11609:23)\n    at Parser.parseMaybeUnaryOrPrivate (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:11421:61)\n    at Parser.parseExprOpBaseRightExpr (F:\\00_Projects_Cache\\03_PHP-Laravel\\fws_probafeladat\\fws_probafeladat\\node_modules\\@babel\\parser\\lib\\index.js:11537:34)");

/***/ }),

/***/ "./resources/js/Pages/Projects/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Projects/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_1abe7046_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=1abe7046&lang=true */ "./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true");
/* harmony import */ var _Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Projects/Edit.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_1abe7046_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Projects/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Projects/Edit.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_1abe7046_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=1abe7046&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true");


/***/ })

}]);