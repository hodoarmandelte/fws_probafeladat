
<span id="index_state_dropdown_initvalue" hidden>{{$text}}</span>
<select id="index_state_dropdown_selector" onChange="set_statecolor()" class="{{ $colors[0] }} {{ $colors[1] }} {{$colors[2]}} font-medium rounded-l-lg text-sm px-4 py-2.5 text-center inline-flex items-center" name="state" id="state">
    <option id="index_state_dropdown_option_3" value="3">Összes</option>
    <option id="index_state_dropdown_option_0" value="0">Fejlesztésre vár</option>
    <option id="index_state_dropdown_option_1" value="1">Folyamatban</option>
    <option id="index_state_dropdown_option_2" value="2">Kész</option>
</select>

<script>
    function set_statedropdown_initcolor()
    {
        switch ($('#index_state_dropdown_initvalue').html())
        {
            case 'Fejlesztésre vár':
                $("#index_state_dropdown_option_0").attr('selected', 'selected');
                break;
            case 'Folyamatban':
                $("#index_state_dropdown_option_1").attr('selected', 'selected');
                break;
            case 'Kész':
                $("#index_state_dropdown_option_2").attr('selected', 'selected');
                break;
            case 'Összes':
                $("#index_state_dropdown_option_3").attr('selected', 'selected');
                break;
        }
        set_statecolor();
    }
    function set_statecolor()
    {
        var filter_state = $('#index_state_dropdown_selector').val()
        $('#index_state_dropdown_selector').removeClass();
        var filter_url = (''+$("#index_filter_button").attr('href')).replace(/.$/,filter_state+'');
        $("#index_filter_button").attr('href', filter_url);
        switch (filter_state)
        {
            case '0':
                $('#index_state_dropdown_selector').addClass('text-orange-800 bg-orange-200 hover:bg-gray-200 border-2 border-solid border-gray-600 font-medium rounded-l-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
            case '1':
                $('#index_state_dropdown_selector').addClass('text-green-800 bg-green-200 hover:bg-gray-200 border-2 border-solid border-gray-600 font-medium rounded-l-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
            case '2':
                $('#index_state_dropdown_selector').addClass('text-sky-800 bg-sky-200 hover:bg-gray-200 border-2 border-solid border-gray-600 font-medium rounded-l-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
            case '3':
                $('#index_state_dropdown_selector').addClass('text-slate-900 bg-slate-300 hover:bg-slate-200 border-2 border-solid border-gray-600 font-medium rounded-l-lg text-sm px-4 py-2.5 text-center inline-flex items-center');
                break;
        }
    }
</script>
