@extends('layout')

@section('extra_header')
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <script type="text/javascript" src="{{ URL::asset('js/edit_project.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/index_project_delete.js') }}"></script>
    <title>FWS-HA: Új projekt űrlap</title>
@endsection

@section('content')

    <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-gray-600 font-semibold">Új projekt</h2>
                <span class="text-xs" id="projects_info_summary">Új projekt létrehozása</span>
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
                <div class="flex items-center justify-between">
                    <div class="lg:ml-40 ml-10 space-x-8">
                        <div class="button-back"><a href="
                                           @if (str_contains(url()->previous(), 'edit'))
                                {{ route('projects.index') }}
                            @else
                                {{ url()->previous() }}
                                @endif
                                ">Vissza</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <div class="crud-th border-b-2 border-dashed">Projektadatok</div>
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th class="crud-th">
                                    Név
                                </th>
                                <th class="crud-th">
                                    Leírás
                                </th>
                                <th class="crud-th">
                                    Státusz
                                </th>
                                <th class="crud-th">
                                    Műveletek
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="crud-tr">
                                <form action="{{ route('projects.store') }}" method="POST">
                                    @csrf
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <input type="text" name="name" size="35" maxlength="35" placegolder="A projekt neve" class="border-2 border-solid border-gray-400 rounded-md p-1"></input>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <input type="text" name="desc" size="128" maxlength="128" placegolder="A projekt leírása" class="border-2 border-solid border-gray-400 rounded-md p-1"></input>
                                    </td>
                                    <td class="crud-td">
                                        <x-ui.edit-state-dropdown-menu id="edit_statedropdown" type="0" />
                                    </td>
                                    <td class="crud-td flex item-center justify-center">
                                        <button title="Mentés" type="submit" class="w-6 mr-2 transform hover:text-blue-600 hover:scale-110">
                                            <span title="Mentés">
                                                <x-svg.save-icon />
                                            </span>
                                        </button>
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

    <x-ui.contactdeleteconfirm_modal />
    <x-ui.contactdeleteresult_modal />

    <x-ui.contactupdated_modal />
    <x-ui.contactsaved_modal />

    <x-ui.projectupdatedresult_modal />

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
            $('.closeModal_contact_updated').on('click', function(e) {
                $('#Modal_contactupdatedresult').addClass('invisible');
            });
            $('.closeModal_contact_saved').on('click', function(e) {
                $('#Modal_contactsavedresult').addClass('invisible');
            });
            $('.closeModal_contact_delconfirm').on('click', function(e) {
                $('#Modal_contact_delconfirm').addClass('invisible');
            });
            $('.closeModal_contact_delresult').on('click', function(e) {
                $('#Modal_contact_delresult').addClass('invisible');
            });
            $('.closeModal_project_updated').on('click', function(e) {
                $('#Modal_projectupdatedresult').addClass('invisible');
            });
        });
    </script>

    @if (Session::has('project_updated'))
        <script>
            $('#Modal_projectupdatedresult').removeClass('invisible');
        </script>
    @elseif (Session::has('contact_updated'))
        <script>
            $('#Modal_contactupdatedresult').removeClass('invisible');
        </script>
    @elseif(Session::has('contact_saved'))
        <script>
            $('#Modal_contactsavedresult').removeClass('invisible');
        </script>
    @endif

@endsection
