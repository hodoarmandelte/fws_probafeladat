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
            $('#UModalTitle').html(data.modal_title);
            $('#UModalText').html(data.modal_text);
            $('#UModalContainer').removeClass('invisible');
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Módosítási kérelem feldolgozása közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
            $('#UModalTitle').html('Hiba!');
            $('#UModalText').html('Módosítási kérelem feldolgozása közben szerverhiba lépett fel: '+xhr.status+'   '+thrownError);
            $('#UModalContainer').removeClass('invisible');
        }
    });
}

module.exports = editcontact;
