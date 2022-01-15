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
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Módosítási kérelem feldolgozás közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}

module.exports = editcontact;
