(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/delete_contact"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/delete_contact.js"));
/******/ }
]);