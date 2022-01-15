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
            location.reload();
            console.log("Kontakt létrehozási kérelme sikeresen feldolgoza szerveroldalon.");
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
