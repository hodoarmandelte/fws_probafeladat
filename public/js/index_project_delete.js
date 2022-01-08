// Projekt törlése, megerősítés után

function mark_project_for_delete(projectdata)
{
    switch (projectdata['state'])
    {
        case 0:
            projectdata['state'] = 'Fejlesztésre vár';
            break;
        case 1:
            projectdata['state'] = 'Folyamatban';
            break;
        case 2:
            projectdata['state'] = 'Kész';
            break;
    }
    var delcommand = 'delete_project('+projectdata['id']+')';
    $('#delconfirmProjectinfo_name').html(projectdata['name']);
    $('#delconfirmProjectinfo_state').html(projectdata['state']);
    $('#delconfirmProjectinfo_contacts').html(projectdata['contacts'].length+' db');
    $('#delconfirmProjectinfo_desc').html(projectdata['desc']);
    $('#delconfirmProjectinfo_created').html(projectdata['created_at']);
    $('#delconfirmProjectinfo_lastsaved').html(projectdata['modified_at']);
    $("#modal_exec_confirmed_delete").attr('onclick', delcommand);
    $('#Modal_delconfirm').removeClass('invisible');
}


function delete_project(id)
{
    $('#Modal_delconfirm').addClass('invisible');
    $.ajax({
        type:'DELETE',
        url: '/projects/'+id,
        async: true,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        success:function(data)
        {
            console.log(id+". projekt törlési kérelme sikeresen feldolgoza szerveroldalon.");
        },
        error:function(xhr, ajaxOptions, thrownError)
        {
            console.log("Törlési kérelem feldolgozás közben szerverhiba lépett fel:");
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
