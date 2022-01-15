//  Util:

var disabledbuttongroup = `
    <div id="project_delete_button_deleted" class="w-6 mr-2 cursor-not-allowed">
    <span title="Törlölt kontakt">Törölve</span></span>
    </div>`;

// Projekt törlése, megerősítés után

function deletecontact(contactid)
{
    $.ajax({
        type:'DELETE',
        url: '/contacts/'+contactid,
        async: true,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        success:function(data)
        {
            console.log(contactid+". kontakt törlési kérelme sikeresen feldolgoza szerveroldalon.");
            $('#contact_row_'+contactid).addClass('invisible');
            $('#contact_row_'+contactid).html('');
            $('#ModalTitle').html(data.modal_title);
            $('#ModalText').html(data.modal_text);
            $('#ModalContainer').removeClass('invisible');
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Törlési kérelem feldolgozása közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
            $('#ModalTitle').html('Hiba!');
            $('#ModalText').html('Törlési kérelem feldolgozása közben szerverhiba lépett fel: '+xhr.status+'   '+thrownError);
            $('#ModalContainer').removeClass('invisible');
        }
    });
}





module.exports = deletecontact;
