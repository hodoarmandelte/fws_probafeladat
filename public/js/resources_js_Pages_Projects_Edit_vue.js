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
/* harmony import */ var _Ui_Modals_UniversalModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ui/Modals/UniversalModal.vue */ "./resources/js/Ui/Modals/UniversalModal.vue");
/* harmony import */ var _Ui_Svg_SaveIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ui/Svg/SaveIcon.vue */ "./resources/js/Ui/Svg/SaveIcon.vue");
/* harmony import */ var _Ui_Svg_PlusIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Ui/Svg/PlusIcon.vue */ "./resources/js/Ui/Svg/PlusIcon.vue");
/* harmony import */ var _Ui_ContactEdit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Ui/ContactEdit.vue */ "./resources/js/Ui/ContactEdit.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    project: Object,
    contacts: Object,
    errors: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      id: props.project.id,
      name: props.project.name,
      desc: props.project.desc,
      state: props.project.state
    });

    var submit = function submit() {
      form.put("/projects/" + props.project.id);
    };

    var __returned__ = {
      props: props,
      form: form,
      submit: submit,
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm,
      UniversalModal: _Ui_Modals_UniversalModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      SaveIcon: _Ui_Svg_SaveIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      PlusIcon: _Ui_Svg_PlusIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      ContactEdit: _Ui_ContactEdit_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/ContactEdit.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/ContactEdit.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ui_Svg_DeleteIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ui/Svg/DeleteIcon.vue */ "./resources/js/Ui/Svg/DeleteIcon.vue");
/* harmony import */ var _Ui_Svg_SaveIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ui/Svg/SaveIcon.vue */ "./resources/js/Ui/Svg/SaveIcon.vue");
/* harmony import */ var _edit_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit_contact.js */ "./resources/js/edit_contact.js");
/* harmony import */ var _edit_contact_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_edit_contact_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _delete_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete_contact.js */ "./resources/js/delete_contact.js");
/* harmony import */ var _delete_contact_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_delete_contact_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    contact: Object,
    errors: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      props: props,
      DeleteIcon: _Ui_Svg_DeleteIcon_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      SaveIcon: _Ui_Svg_SaveIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      editcontact: (_edit_contact_js__WEBPACK_IMPORTED_MODULE_2___default()),
      deletecontact: (_delete_contact_js__WEBPACK_IMPORTED_MODULE_3___default())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Modals/UniversalModal.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Modals/UniversalModal.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Svg_InfoIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Svg/InfoIcon.vue */ "./resources/js/Ui/Svg/InfoIcon.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    modal_visible: Boolean,
    modal_color: String,
    modal_title: String,
    modal_text: String,
    modal_extraaction: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      props: props,
      InfoIcon: _Svg_InfoIcon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/InfoIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/InfoIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/PlusIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/PlusIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/SaveIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/SaveIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-3xl"
}, "Projekt szerkesztése", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
};
var _hoisted_3 = {
  "class": "inline-block min-w-full shadow rounded-lg overflow-hidden"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"crud-th border-b-2 border-dashed\"> Projektadatok </div><div class=\"grid grid-cols-4 min-w-full leading-normal\"><div class=\"crud-th\">Név</div><div class=\"crud-th\">Leírás</div><div class=\"crud-th\">Státusz</div><div class=\"crud-th\">Műveletek</div></div>", 2);

var _hoisted_6 = ["id"];
var _hoisted_7 = {
  "class": "crud-td"
};
var _hoisted_8 = ["textContent"];
var _hoisted_9 = {
  "class": "crud-td"
};
var _hoisted_10 = ["textContent"];
var _hoisted_11 = {
  "class": "crud-td"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "State", -1
/* HOISTED */
);

var _hoisted_13 = ["textContent"];
var _hoisted_14 = ["id"];
var _hoisted_15 = ["disabled"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "crud-th border-b-2 border-dashed"
}, " Kapcsolattartók adatai ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "min-w-full leading-normal table-auto"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"grid grid-cols-4 min-w-full leading-normal\"><div class=\"crud-th\">ID</div><div class=\"crud-th\">Név</div><div class=\"crud-th\">Email</div><div class=\"crud-th\">Műveletek</div></div>", 1);

var _hoisted_19 = ["id"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "crud-new-contact-tr",
  id: "new_contact_tr"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pl-3"
}, " Új kontaktszemély felvétele ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Projekt szerkesztése"
  }), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grid grid-cols-4 crud-tr",
    id: 'tr_' + $props.project.id
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    type: "text",
    name: "name",
    id: "name",
    size: "35",
    maxlength: "35",
    "class": "border-2 border-solid border-gray-400 rounded-md p-1",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.desc = $event;
    }),
    type: "text",
    name: "name",
    id: "name",
    size: "35",
    maxlength: "35",
    "class": "border-2 border-solid border-gray-400 rounded-md p-1",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.desc]]), $setup.form.errors.desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.desc),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, $setup.form.errors.state ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.state),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: 'project_buttons_' + $setup.form.id,
    "class": "crud-td flex item-start justify-start"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    title: "Mentés",
    type: "submit",
    id: "submit",
    disabled: $setup.form.processing,
    "class": "w-6 mr-2 transform hover:text-blue-600 hover:scale-110"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SaveIcon"])], 8
  /* PROPS */
  , _hoisted_15)], 8
  /* PROPS */
  , _hoisted_14)], 8
  /* PROPS */
  , _hoisted_6)], 32
  /* HYDRATE_EVENTS */
  ), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.contacts, function (contact) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: contact.id,
      id: 'contact_row_' + contact.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ContactEdit"], {
      contact: contact
    }, null, 8
    /* PROPS */
    , ["contact"])], 8
    /* PROPS */
    , _hoisted_19);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_20])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["UniversalModal"], {
    modal_visible: "false",
    modal_color: "blue",
    modal_title: "Default",
    modal_text: "Default",
    modal_extraaction: ""
  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_2 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_3 = ["id", "value"];
var _hoisted_4 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_5 = ["id", "value"];
var _hoisted_6 = ["id"];
var _hoisted_7 = {
  title: "Mentés"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.submit && _ctx.submit.apply(_ctx, arguments);
    }, ["prevent"])),
    "class": "grid grid-cols-4 crud-tr"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.contact.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: 'contact_name_' + $props.contact.id,
    value: $props.contact.name,
    type: "text",
    name: "name",
    size: "35",
    maxlength: "35",
    "class": "border-2 border-solid border-gray-400 rounded-md p-1"
  }, null, 8
  /* PROPS */
  , _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: 'contact_email_' + $props.contact.id,
    value: $props.contact.email,
    type: "text",
    name: "email",
    size: "50",
    maxlength: "128",
    "class": "border-2 border-solid border-gray-400 rounded-md p-1"
  }, null, 8
  /* PROPS */
  , _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: 'contact_buttons_' + $props.contact.id,
    "class": "crud-td flex item-center justify-start space-x-2"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    title: "Mentés",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.editcontact($props.contact.id);
    }),
    "class": "w-6 mr-2 mt-1 transform hover:text-blue-600 hover:scale-110 hover:cursor-pointer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SaveIcon"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    title: "Törlés",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.deletecontact($props.contact.id);
    }),
    "class": "w-6 mr-2 transform hover:text-red-600 hover:scale-110"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DeleteIcon"])])], 8
  /* PROPS */
  , _hoisted_6)], 32
  /* HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Modals/UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Modals/UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed z-10 inset-0 invisible overflow-y-auto",
  "aria-labelledby": "modal-title",
  role: "dialog",
  "aria-modal": "true",
  id: "ModalContainer"
};
var _hoisted_2 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
  "aria-hidden": "true"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
};
var _hoisted_6 = {
  "class": "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
};
var _hoisted_7 = {
  "class": "sm:flex sm:items-start"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900",
  id: "ModalTitle"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-gray-500",
  id: "ModalText"
}, "Modal txt.")])], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "ModalCloseButton",
  type: "button",
  onclick: "$('#ModalContainer').addClass('invisible');",
  "class": "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
}, " OK ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-' + $props.modal_color + '-200 sm:mx-0 sm:h-10 sm:w-10')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InfoIcon"])], 2
  /* CLASS */
  ), _hoisted_8])]), _hoisted_9])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "w-6 h-6",
  fill: "currentColor",
  viewBox: "0 0 16 16"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-info-circle",
  viewBox: "0 0 16 16"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/PlusIcon.vue?vue&type=template&id=3b52afab&lang=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/PlusIcon.vue?vue&type=template&id=3b52afab&lang=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "currentColor",
  viewBox: "0 0 16 16"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "w-6 h-6",
  fill: "currentColor",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        class=\"h-6 w-6\"\n        fill=\"none\"\n        viewBox=\"0 0 512 512\"\n        stroke=\"currentColor\"\n    >\n        <g id=\"#000000ff\">\n            <path\n                fill=\"#000000\"\n                opacity=\"1.00\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                stroke-width=\"2\"\n                d=\" M 41.44 0.00 L 384.37 0.00 C 388.42 0.16 392.32 1.95 395.10 4.88 C 432.43 42.23 469.81 79.53 507.11 116.91 C 509.81 119.41 511.44 122.84 512.00 126.45 L 512.00 469.44 C 511.05 491.40 492.33 510.40 470.47 512.00 L 42.48 512.00 C 20.60 510.97 1.65 492.37 0.00 470.57 L 0.00 42.34 C 1.05 20.50 19.70 1.65 41.44 0.00 M 30.00 44.98 C 30.01 185.66 29.99 326.34 30.00 467.01 C 29.84 474.99 37.01 482.12 44.98 482.00 C 62.32 482.00 79.66 482.00 97.00 482.00 C 97.05 421.32 96.90 360.64 97.07 299.97 C 97.57 277.06 118.08 257.06 140.97 257.04 C 204.32 256.98 267.68 256.97 331.03 257.04 C 353.94 257.00 374.40 277.08 374.92 299.96 C 375.10 360.64 374.94 421.32 375.00 482.00 C 405.67 482.00 436.35 481.99 467.02 482.00 C 475.00 482.12 482.10 475.01 482.00 467.04 C 482.00 356.10 481.99 245.16 482.00 134.22 C 447.27 99.47 412.53 64.74 377.79 30.00 C 377.09 30.00 375.70 30.00 375.00 30.00 C 374.94 63.34 375.10 96.69 374.92 130.04 C 374.40 152.92 353.94 172.96 331.04 172.96 C 267.68 173.03 204.32 173.03 140.97 172.96 C 118.08 172.90 97.57 152.95 97.07 130.04 C 96.90 96.69 97.05 63.35 97.00 30.00 C 79.66 30.00 62.32 30.00 44.98 30.00 C 37.01 29.86 29.85 37.00 30.00 44.98 M 127.00 30.00 C 127.00 62.67 126.99 95.34 127.00 128.01 C 126.83 135.99 134.01 143.12 141.97 143.01 C 188.31 142.99 234.65 143.00 281.00 143.00 C 281.00 105.33 281.00 67.67 281.00 30.00 C 229.66 30.00 178.33 30.00 127.00 30.00 M 311.00 30.00 C 310.99 67.67 310.99 105.33 311.00 143.00 C 322.74 142.67 341.24 146.64 344.66 131.03 C 345.44 97.40 344.77 63.67 345.00 30.00 C 333.66 30.00 322.33 30.00 311.00 30.00 M 127.00 321.00 C 199.67 321.00 272.33 321.00 345.00 321.00 C 344.87 309.02 348.45 289.84 332.14 287.14 C 268.06 286.91 203.94 286.91 139.86 287.14 C 123.54 289.84 127.12 309.02 127.00 321.00 M 127.00 351.00 C 127.00 394.67 127.00 438.33 127.00 482.00 C 199.67 482.00 272.33 482.00 345.00 482.00 C 345.00 438.33 345.00 394.67 345.00 351.00 C 272.33 351.00 199.67 351.00 127.00 351.00 Z\"\n            />\n        </g>\n    </svg> "), _hoisted_1], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/delete_contact.js":
/*!****************************************!*\
  !*** ./resources/js/delete_contact.js ***!
  \****************************************/
/***/ ((module) => {

//  Util:
var disabledbuttongroup = "\n    <div id=\"project_delete_button_deleted\" class=\"w-6 mr-2 cursor-not-allowed\">\n    <span title=\"T\xF6rl\xF6lt kontakt\">T\xF6r\xF6lve</span></span>\n    </div>"; // Projekt törlése, megerősítés után

function deletecontact(contactid) {
  $.ajax({
    type: 'DELETE',
    url: '/contacts/' + contactid,
    async: true,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    success: function success(data) {
      console.log(contactid + ". kontakt törlési kérelme sikeresen feldolgoza szerveroldalon.");
      $('#contact_row_' + contactid).addClass('invisible');
      $('#contact_row_' + contactid).html('');
      $('#ModalTitle').html(data.modal_title);
      $('#ModalText').html(data.modal_text);
      $('#ModalContainer').removeClass('invisible');
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      console.log("Törlési kérelem feldolgozása közben szerverhiba lépett fel:");
      console.log(xhr.status);
      console.log(thrownError);
      $('#ModalTitle').html('Hiba!');
      $('#ModalText').html('Törlési kérelem feldolgozása közben szerverhiba lépett fel: ' + xhr.status + '   ' + thrownError);
      $('#ModalContainer').removeClass('invisible');
    }
  });
}

module.exports = deletecontact;

/***/ }),

/***/ "./resources/js/edit_contact.js":
/*!**************************************!*\
  !*** ./resources/js/edit_contact.js ***!
  \**************************************/
/***/ ((module) => {

function editcontact(contactid) {
  $.ajax({
    type: 'POST',
    url: '/contacts/' + contactid,
    async: true,
    data: {
      'name': $('#contact_name_' + contactid).val(),
      'email': $('#contact_email_' + contactid).val()
    },
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
      "X-HTTP-Method-Override": "PUT"
    },
    success: function success(data) {
      console.log(contactid + ". kontakt változtatási kérelme sikeresen feldolgoza szerveroldalon.");
      $('#ModalTitle').html(data.modal_title);
      $('#ModalText').html(data.modal_text);
      $('#ModalContainer').removeClass('invisible');
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      console.log("Módosítási kérelem feldolgozása közben szerverhiba lépett fel:");
      console.log(xhr.status);
      console.log(thrownError);
      $('#ModalTitle').html('Hiba!');
      $('#ModalText').html('Módosítási kérelem feldolgozása közben szerverhiba lépett fel: ' + xhr.status + '   ' + thrownError);
      $('#ModalContainer').removeClass('invisible');
    }
  });
}

module.exports = editcontact;

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

/***/ "./resources/js/Ui/ContactEdit.vue":
/*!*****************************************!*\
  !*** ./resources/js/Ui/ContactEdit.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactEdit_vue_vue_type_template_id_31d70dcd_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true */ "./resources/js/Ui/ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true");
/* harmony import */ var _ContactEdit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactEdit.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Ui/ContactEdit.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ContactEdit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ContactEdit_vue_vue_type_template_id_31d70dcd_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Ui/ContactEdit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Ui/Modals/UniversalModal.vue":
/*!***************************************************!*\
  !*** ./resources/js/Ui/Modals/UniversalModal.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UniversalModal_vue_vue_type_template_id_5be4e24e_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true */ "./resources/js/Ui/Modals/UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true");
/* harmony import */ var _UniversalModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UniversalModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Ui/Modals/UniversalModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UniversalModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UniversalModal_vue_vue_type_template_id_5be4e24e_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Ui/Modals/UniversalModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Ui/Svg/DeleteIcon.vue":
/*!********************************************!*\
  !*** ./resources/js/Ui/Svg/DeleteIcon.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteIcon_vue_vue_type_template_id_19922ebc_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true */ "./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true");
/* harmony import */ var _DeleteIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteIcon.vue?vue&type=script&lang=js */ "./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=script&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteIcon_vue_vue_type_template_id_19922ebc_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Ui/Svg/DeleteIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Ui/Svg/InfoIcon.vue":
/*!******************************************!*\
  !*** ./resources/js/Ui/Svg/InfoIcon.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoIcon_vue_vue_type_template_id_e43d9a82_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true */ "./resources/js/Ui/Svg/InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true");
/* harmony import */ var _InfoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoIcon.vue?vue&type=script&lang=js */ "./resources/js/Ui/Svg/InfoIcon.vue?vue&type=script&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InfoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InfoIcon_vue_vue_type_template_id_e43d9a82_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Ui/Svg/InfoIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Ui/Svg/PlusIcon.vue":
/*!******************************************!*\
  !*** ./resources/js/Ui/Svg/PlusIcon.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlusIcon_vue_vue_type_template_id_3b52afab_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlusIcon.vue?vue&type=template&id=3b52afab&lang=true */ "./resources/js/Ui/Svg/PlusIcon.vue?vue&type=template&id=3b52afab&lang=true");
/* harmony import */ var _PlusIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlusIcon.vue?vue&type=script&lang=js */ "./resources/js/Ui/Svg/PlusIcon.vue?vue&type=script&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlusIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlusIcon_vue_vue_type_template_id_3b52afab_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Ui/Svg/PlusIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Ui/Svg/SaveIcon.vue":
/*!******************************************!*\
  !*** ./resources/js/Ui/Svg/SaveIcon.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SaveIcon_vue_vue_type_template_id_75c15ee4_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true */ "./resources/js/Ui/Svg/SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true");
/* harmony import */ var _SaveIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaveIcon.vue?vue&type=script&lang=js */ "./resources/js/Ui/Svg/SaveIcon.vue?vue&type=script&lang=js");
/* harmony import */ var F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_00_Projects_Cache_03_PHP_Laravel_fws_probafeladat_fws_probafeladat_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SaveIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SaveIcon_vue_vue_type_template_id_75c15ee4_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Ui/Svg/SaveIcon.vue"]])
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

/***/ "./resources/js/Ui/ContactEdit.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Ui/ContactEdit.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactEdit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactEdit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactEdit.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/ContactEdit.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Ui/Modals/UniversalModal.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Ui/Modals/UniversalModal.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UniversalModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UniversalModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UniversalModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Modals/UniversalModal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Ui/Svg/InfoIcon.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Ui/Svg/InfoIcon.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/InfoIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Ui/Svg/PlusIcon.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Ui/Svg/PlusIcon.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlusIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlusIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlusIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/PlusIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Ui/Svg/SaveIcon.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Ui/Svg/SaveIcon.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaveIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaveIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SaveIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/SaveIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_1abe7046_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_1abe7046_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=1abe7046&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Edit.vue?vue&type=template&id=1abe7046&lang=true");


/***/ }),

/***/ "./resources/js/Ui/ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true":
/*!*********************************************************************************!*\
  !*** ./resources/js/Ui/ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactEdit_vue_vue_type_template_id_31d70dcd_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactEdit_vue_vue_type_template_id_31d70dcd_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/ContactEdit.vue?vue&type=template&id=31d70dcd&lang=true");


/***/ }),

/***/ "./resources/js/Ui/Modals/UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Ui/Modals/UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UniversalModal_vue_vue_type_template_id_5be4e24e_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UniversalModal_vue_vue_type_template_id_5be4e24e_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Modals/UniversalModal.vue?vue&type=template&id=5be4e24e&lang=true");


/***/ }),

/***/ "./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true":
/*!************************************************************************************!*\
  !*** ./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteIcon_vue_vue_type_template_id_19922ebc_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteIcon_vue_vue_type_template_id_19922ebc_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/DeleteIcon.vue?vue&type=template&id=19922ebc&lang=true");


/***/ }),

/***/ "./resources/js/Ui/Svg/InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/Ui/Svg/InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoIcon_vue_vue_type_template_id_e43d9a82_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoIcon_vue_vue_type_template_id_e43d9a82_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/InfoIcon.vue?vue&type=template&id=e43d9a82&lang=true");


/***/ }),

/***/ "./resources/js/Ui/Svg/PlusIcon.vue?vue&type=template&id=3b52afab&lang=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/Ui/Svg/PlusIcon.vue?vue&type=template&id=3b52afab&lang=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlusIcon_vue_vue_type_template_id_3b52afab_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlusIcon_vue_vue_type_template_id_3b52afab_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlusIcon.vue?vue&type=template&id=3b52afab&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/PlusIcon.vue?vue&type=template&id=3b52afab&lang=true");


/***/ }),

/***/ "./resources/js/Ui/Svg/SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/Ui/Svg/SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaveIcon_vue_vue_type_template_id_75c15ee4_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaveIcon_vue_vue_type_template_id_75c15ee4_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Ui/Svg/SaveIcon.vue?vue&type=template&id=75c15ee4&lang=true");


/***/ })

}]);