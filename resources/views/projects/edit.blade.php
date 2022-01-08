@extends('layout')

@section('extra_header')
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <script type="text/javascript" src="{{ URL::asset('js/index_project_delete.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/flowbite.bundle.js') }}"></script>
@endsection

@section('content')

<div class="bg-white p-8 rounded-md w-full">
    <div class=" flex items-center justify-between pb-6">
        <div>
            <h2 class="text-gray-600 font-semibold">Projekt szerkesztése</h2>
            <span class="text-xs" id="projects_info_summary" >A projekt szerkesztése</span>
        </div>
        <div class="flex items-center justify-between">
            <div class="lg:ml-40 ml-10 space-x-8">
                <p hidden></p>
            </div>
        </div>
    </div>
    <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
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
                                Kapcsolattartók
                            </th>
                            <th class="crud-th">
                                Műveletek
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <form action = "/projects/{{$project->id}}" method ="POST">
                            @csrf
                            @method('PUT')
                            <tr id="tr_{{$project->id}}">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <input type="text" name="name" size="35" maxlength="35" value="{{$project->name}}" class="border-2 border-solid border-gray-400 rounded-md p-1"></input>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <input type="text" name="desc" size="128" maxlength="128" value="{{$project->desc}}" class="border-2 border-solid border-gray-400 rounded-md p-1"></input>
                                </td>
                                <td class="crud-td">
                                    <x-ui.edit-state-dropdown-menu id="edit_statedropdown" type="{{$project->state}}"/>
                                </td>
                                <td class="crud-td">
                                    <p id="contacts_{{$project->id}}">{{$project->contacts->count()}} db</p>
                                </td>
                                <td id="project_buttons_{{$project->id}}" class="crud-td flex item-center justify-center">
                                    <button title = "Mentés" type="submit" class="w-6 mr-2 transform hover:text-blue-600 hover:scale-110">
                                        <x-svg.save-icon/>
                                    </button>
                                    <div id="project_delete_button_{{$project->id}}" class="w-6 mr-2 transform hover:text-red-600 hover:scale-110 cursor-pointer" onclick="mark_project_for_delete({{$project}})">
                                        <span title="Törlés"><x-svg.delete-icon/></span>
                                    </div>
                                </td>
                            </tr>
                        </form>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


<x-ui.deleteconfirm_modal/>
<x-ui.deleteresult_modal/>

<script type="text/javascript">
    $(document).ready(function ()
    {
        $('.closeModal_delconfirm').on('click', function(e){
            $('#Modal_delconfirm').addClass('invisible');
        });
        $('.closeModal_delresult').on('click', function(e){
            $('#Modal_delresult').addClass('invisible');
            $(location).attr("href", "/");
        });
    });
</script>

@endsection

