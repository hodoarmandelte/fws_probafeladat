(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/edit_project"],{

/***/ "./resources/js/edit_project.js":
/*!**************************************!*\
  !*** ./resources/js/edit_project.js ***!
  \**************************************/
/***/ ((module) => {

//  Util:
var disabledbuttongroup = "\n    <div id=\"project_delete_button_deleted\" class=\"w-6 mr-2 cursor-not-allowed\">\n    <span title=\"T\xF6rl\xF6lt kontakt\">T\xF6r\xF6lve</span></span>\n    </div>"; // Projekt törlése, megerősítés után

function mark_contact_for_delete(contact) {
  var delcommand = 'delete_contact(' + contact['id'] + ')';
  $('#delconfirmContactInfo_name').html(contact['name']);
  $('#delconfirmContactInfo_email').html(contact['email']);
  $('#delconfirmContactInfo_created').html(contact['created_at']);
  $('#delconfirmContactInfo_lastsaved').html(contact['updated_at']);
  $("#modal_exec_contact_confirmed_delete").attr('onclick', delcommand);
  $('#Modal_contact_delconfirm').removeClass('invisible');
}

function editcontact(contactid) {
  $.ajax({
    type: 'PUT',
    url: '/contacts/' + contactid,
    async: true,
    id: contactid,
    name: $('#contact_name_' + contactid).val(),
    email: $('#contact_email_' + contactid).val(),
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    success: function success(data) {
      console.log(id + ". kontakt változtatási kérelme sikeresen feldolgoza szerveroldalon.");
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      console.log("Módosítási kérelem feldolgozás közben szerverhiba lépett fel:");
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}

function delete_contact(id) {
  $('#Modal_contact_delconfirm').addClass('invisible');
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

module.exports = editcontact;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/edit_project.js"));
/******/ }
]);