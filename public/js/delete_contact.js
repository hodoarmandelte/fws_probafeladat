(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/delete_contact"],{

/***/ "./resources/js/delete_contact.js":
/*!****************************************!*\
  !*** ./resources/js/delete_contact.js ***!
  \****************************************/
/***/ ((module) => {

//  Util:
var disabledbuttongroup = "\n    <div id=\"project_delete_button_deleted\" class=\"w-6 mr-2 cursor-not-allowed\">\n    <span title=\"T\xF6rl\xF6lt kontakt\">T\xF6r\xF6lve</span></span>\n    </div>"; // Projekt törlése, megerősítés után

function deletecontact(id) {
  $.ajax({
    type: 'DELETE',
    url: '/contacts/' + id,
    async: true,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    success: function success(data) {
      console.log(id + ". kontakt törlési kérelme sikeresen feldolgoza szerveroldalon.");
      $('#Modal_contact_delresult').removeClass('invisible');
      $('#tr_contact_' + id).addClass('deletedrecord');

      if (window.location.href.indexOf("projects") != -1) {
        $('#contact_buttons_' + id).empty();
        $('#contact_name_' + id).prop('disabled', true);
        $('#contact_email_' + id).prop('disabled', true);
        $('#contact_name_' + id).addClass('cursor-not-allowed');
        $('#contact_email_' + id).addClass('cursor-not-allowed');
        $('#contact_buttons_' + id).append(disabledbuttongroup);
      }
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      console.log("Törlési kérelem feldolgozás közben szerverhiba lépett fel:");
      console.log(xhr.status);
      console.log(thrownError);
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