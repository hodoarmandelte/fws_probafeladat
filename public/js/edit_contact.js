(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/edit_contact"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/edit_contact.js"));
/******/ }
]);