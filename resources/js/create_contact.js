function addcontact()
{
    $.ajax({
        type:'POST',
        url: '/contacts',
        async: true,
        data: {
            'name': $('#new_contact_name').val(),
            'email': $('#new_contact_email').val(),
            'project_id': $('#new_contact_project_id').val()

        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success:function(data)
        {
            console.log("Kontakt létrehozási kérelme sikeresen feldolgoza szerveroldalon.");
            if(!data.modal)
            {
                $('#UModalTitle').html(data.modal_title);
                $('#UModalText').html(data.modal_text);
                $('#UModalContainer').removeClass('invisible');
            }
            else    //ok
            {
                location.reload();
            }
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Létrehozási kérelem feldolgozása közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
            $('#UModalTitle').html('Hiba!');
            $('#UModalText').html('Létrehozási kérelem feldolgozása közben szerverhiba lépett fel: '+xhr.status+'   '+thrownError);
            $('#UModalContainer').removeClass('invisible');
        }
    });
}

module.exports = addcontact;
