function editcontact(contactid)
{
    $.ajax({
        type:'POST',
        url: '/contacts/'+contactid,
        async: true,
        data: {
            'name': $('#contact_name_' + contactid).val(),
            'email': $('#contact_email_' + contactid).val()
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            "X-HTTP-Method-Override": "PUT"
        },
        success:function(data)
        {
            console.log(contactid+". kontakt változtatási kérelme sikeresen feldolgoza szerveroldalon.");
            $('#ModalTitle').html(data.modal_title);
            $('#ModalText').html(data.modal_text);
            $('#ModalContainer').removeClass('invisible');
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Módosítási kérelem feldolgozása közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
            $('#ModalTitle').html('Hiba!');
            $('#ModalText').html('Módosítási kérelem feldolgozása közben szerverhiba lépett fel: '+xhr.status+'   '+thrownError);
            $('#ModalContainer').removeClass('invisible');
        }
    });
}

module.exports = editcontact;
