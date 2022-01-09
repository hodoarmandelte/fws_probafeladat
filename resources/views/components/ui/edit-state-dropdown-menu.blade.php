
<span id="edit_state_dropdown_initvalue" hidden>{{$text}}</span>
<select id="state" onChange="set_statecolor()" class="{{ $colors[0] }} {{ $colors[1] }} {{$colors[2]}} font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" name="state" id="state">
    <option id="edit_state_dropdown_option_0" value="0">Fejlesztésre vár</option>
    <option id="edit_state_dropdown_option_1" value="1">Folyamatban</option>
    <option id="edit_state_dropdown_option_2" value="2">Kész</option>
</select>

<script>
    function set_statedropdown_initcolor()
    {
        switch ($('#edit_state_dropdown_initvalue').html())
        {
            case 'Fejlesztésre vár':
                $("#edit_state_dropdown_option_0").attr('selected', 'selected');
                break;
            case 'Folyamatban':
                $("#edit_state_dropdown_option_1").attr('selected', 'selected');
                break;
            case 'Kész':
                $("#edit_state_dropdown_option_2").attr('selected', 'selected');
                break;
        }
    }
    function set_statecolor()
    {
        $('#state').removeClass();
        switch ($('#state').val())
        {
            case '0':
                $('#state').addClass('text-orange-800 bg-orange-200 hover:bg-gray-200 border-2 border-solid border-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
            case '1':
                $('#state').addClass('text-green-800 bg-green-200 hover:bg-gray-200 border-2 border-solid border-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
            case '2':
                $('#state').addClass('text-sky-800 bg-sky-200 hover:bg-gray-200 border-2 border-solid border-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
        }
    }
</script>
