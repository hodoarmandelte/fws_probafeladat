@extends('layout')

@section('extra_header')

    <script type="text/javascript" src="{{ URL::asset('js/index_project_delete.js') }}"></script>
    <script> var projectsdata = {!! $projects->toJson() !!} </script>
    <script> var projectscount = {!! $projects->count() !!} </script>
    <meta name="currentpage" content="1">
    <meta name="markedtodelete" content="X">

@endsection

@section('content')
    <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-gray-600 font-semibold">Projektek</h2>
                <span class="text-xs" id="projects_info_summary" >Az összes projekt listája</span>
            </div>
            <div class="flex items-center justify-between">
                <x-svg.search/>
                <div class="lg:ml-40 ml-10 space-x-8">
                    <button class="button-new">Új Projekt</button>
                    <button class="button-new">Új kontaktszemély</button>
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
                            @foreach ($projects as $project)
                                <tr id="tr_{{$project->id}}">
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p id="name_{{$project->id}}">{{$project->name}}</p>
                                    </td>
                                    <td class="crud-td">
                                        <x-ui.state type="{{$project->state}}" />
                                    </td>
                                    <td class="crud-td">
                                        <p id="contacts_{{$project->id}}">{{$project->contacts->count()}} db</p>
                                    </td>
                                    <td class="crud-td flex item-center justify-center">
                                        <div class="w-6 mr-2 transform hover:text-yellow-400 hover:scale-110">
                                            <a title = "Szerkesztés" href = "{{url('/users/'.' '.'/edit')}}"><x-svg.edit-icon/></a>
                                        </div>
                                        <!--openModal_delconfirm-->
                                        <div class="w-6 mr-2 transform hover:text-red-600 hover:scale-110 cursor-pointer" onclick="mark_project_for_delete({{$project}})">
                                            <span title="Törlés"><x-svg.delete-icon/></span>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>

                    <div id="pageinfo_bottom" class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                        {{ $projects->links()}}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-ui.deleteconfirm_modal/>

    <script type="text/javascript">
        $(document).ready(function ()
        {

            $('.closeModal_delconfirm').on('click', function(e){
                $('#Modal_delconfirm').addClass('invisible');
            });
        });
    </script>

@endsection
