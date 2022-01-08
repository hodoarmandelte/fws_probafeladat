//  Util:

var disabledbuttongroup = `
    <div id="project_edit_button_deleted" class="w-6 mr-2 cursor-not-allowed">
    <span title="Törlölt projekt">-</span>
    </div>
    <div id="project_delete_button_deleted" class="w-6 mr-2 cursor-not-allowed">
    <span title="Törlölt projekt">-</span>
    </div>`;

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
            $('#Modal_delresult').removeClass('invisible');
            $('#tr_'+id).addClass('deletedrecord');
            if (window.location.href.indexOf("index") != -1)
            {
                $('#project_buttons_'+id).empty();
                $('#project_buttons_'+id).append(disabledbuttongroup);
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
