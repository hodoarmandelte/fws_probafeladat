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
    $('#delconfirmProjectinfo_name').html(projectdata['name']);
    $('#delconfirmProjectinfo_state').html(projectdata['state']);
    $('#delconfirmProjectinfo_contacts').html(projectdata['contacts'].length+' db');
    $('#delconfirmProjectinfo_desc').html(projectdata['desc']);
    $('#delconfirmProjectinfo_created').html(projectdata['created_at']);
    $('#delconfirmProjectinfo_lastsaved').html(projectdata['modified_at']);
    $('#Modal_delconfirm').removeClass('invisible');
}
