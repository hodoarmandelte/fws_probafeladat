@extends('layout')

@section('content')
    <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-gray-600 font-semibold">Kapcsolattartó szerkesztése</h2>
                <span class="text-xs" id="contact_info_summary">A kapcsolattartó szerkesztése</span>
            </div>
            <div class="flex items-center justify-between">
                <div class="lg:ml-40 ml-10 space-x-8">
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <strong>Hiba az adatok kitöltésével:<br><br>
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif
                </div>
                <div class="lg:ml-40 ml-10 space-x-8">
                    <button class="button-back"><a href="{{ url()->previous() }}">Vissza</a></button>
                </div>
            </div>
        </div>
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <div class="crud-th border-b-2 border-dashed">Kapcsolattartó adatai</div>
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th class="crud-th">
                                    ID
                                </th>
                                <th class="crud-th">
                                    Név
                                </th>
                                <th class="crud-th">
                                    Email
                                </th>
                                <th class="crud-th">
                                    Műveletek
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr id="tr_contact_{{ $contact->id }}">
                                    <form action="{{ route('contacts.update', $contact->id) }}" method="POST">
                                        @csrf
                                        @method('PUT')
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p>{{ $contact->id }}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input type="text" name="name" size="35" maxlength="35" value="{{ $contact->name }}" class="border-2 border-solid border-gray-400 rounded-md p-1"></input>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input type="text" name="email" size="128" maxlength="128" value="{{ $contact->email }}" class="border-2 border-solid border-gray-400 rounded-md p-1"></input>
                                        </td>
                                        <td id="contact_buttons_{{ $contact->id }}" class="crud-td flex item-center justify-center">
                                            <button title="Mentés" type="submit" class="w-6 mr-2 transform hover:text-blue-600 hover:scale-110">
                                                <span title="Mentés">
                                                    <x-svg.save-icon />
                                                </span>
                                            </button>
                                            <div id="contact_delete_button_{{ $contact->id }}" class="w-6 mr-2 transform hover:text-red-600 hover:scale-110 cursor-pointer" onclick="mark_contact_for_delete({{ $contact }})">
                                                <span title="Törlés">
                                                    <x-svg.delete-icon />
                                                </span>
                                            </div>
                                        </td>
                                    </form>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <x-ui.deleteconfirm_modal />
    <x-ui.deleteresult_modal />

    <script type="text/javascript">
        $(document).ready(function() {
            set_statedropdown_initcolor();
            $('.closeModal_delconfirm').on('click', function(e) {
                $('#Modal_delconfirm').addClass('invisible');
            });
            $('.closeModal_delresult').on('click', function(e) {
                $('#Modal_delresult').addClass('invisible');
                $(location).attr("href", "/");
            });
        });
    </script>

@endsection
