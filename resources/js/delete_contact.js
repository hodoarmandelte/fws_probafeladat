//  Util:

var disabledbuttongroup = `
    <div id="project_delete_button_deleted" class="w-6 mr-2 cursor-not-allowed">
    <span title="Törlölt kontakt">Törölve</span></span>
    </div>`;

// Projekt törlése, megerősítés után

function deletecontact(id)
{
    $.ajax({
        type:'DELETE',
        url: '/contacts/'+id,
        async: true,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        success:function(data)
        {
            console.log(id+". kontakt törlési kérelme sikeresen feldolgoza szerveroldalon.");
            $('#Modal_contact_delresult').removeClass('invisible');
            $('#tr_contact_'+id).addClass('deletedrecord');
            if (window.location.href.indexOf("projects") != -1)
            {
                $('#contact_buttons_'+id).empty();
                $('#contact_name_'+id).prop('disabled', true);
                $('#contact_email_'+id).prop('disabled', true);
                $('#contact_name_'+id).addClass('cursor-not-allowed');
                $('#contact_email_'+id).addClass('cursor-not-allowed');
                $('#contact_buttons_'+id).append(disabledbuttongroup);
            }
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Törlési kérelem feldolgozás közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}





module.exports = deletecontact;
