
<div class="max-w-lg mx-auto">

<select id="state" onChange="set_statecolor()" class="{{ $colors[0] }} {{ $colors[1] }} {{$colors[2]}} font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" name="state" id="state">
    <option value="0">Fejlesztésre vár</option>
    <option value="1">Folyamatban</option>
    <option value="2">Kész</option>
</select>

<script>
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
