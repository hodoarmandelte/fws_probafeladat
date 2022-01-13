<template>
    <div class="flex justify-between mb-6">
        <h1 class="text-3xl font-bold">Projektek</h1>

        <div>
            <select
                v-model="search"
                class="mt-1 w-full form-select font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center text-gray-800 bg-gray-200 hover:bg-gray-100 border-2 border-solid border-gray-600"
            >
                <option :value="0">Összes</option>
                <option :value="-1">Fejlesztésre vár</option>
                <option :value="1">Folyamatban</option>
                <option :value="2">Kész</option>
            </select>
        </div>

        <div>
            <div class="lg:ml-40 ml-10 space-x-8">
                <button class="button-new">
                    <a href="projects/create"><span>Új Projekt</span></a>
                </button>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
                <div
                    class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                    <table
                        class="min-w-full divide-y divide-gray-200 leading-normal"
                    >
                        <thead>
                            <tr>
                                <th class="crud-th">Név</th>
                                <th class="crud-th">Státusz</th>
                                <th class="crud-th">Kapcsolattartók</th>
                                <th class="crud-th">Műveletek</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="project in projects.data"
                                :key="project.id"
                                class="crud-tr"
                                id="tr_{{project.id }}"
                            >
                                <td class="crud-td">
                                    <p id="name_{{ project.id }}">
                                        {{ project.name }}
                                    </p>
                                </td>
                                <td class="crud-td">
                                    <StateInfo :state="project.state" />
                                </td>
                                <td class="crud-td">
                                    <p id="contacts_{{ project.id }}">
                                        {{ project.contacts }} db
                                    </p>
                                </td>
                                <td
                                    id="project_buttons_{{$project.id }}"
                                    class="crud-td flex justify-start"
                                >
                                    <div
                                        id="project_edit_button_{{ project.id }}"
                                        class="w-6 mr-2 transform hover:text-yellow-400 hover:scale-110"
                                    >
                                        <Link
                                            :href="
                                                '/projects/' +
                                                project.id +
                                                '/edit'
                                            "
                                        >
                                            <EditIcon />
                                        </Link>
                                    </div>
                                    <div
                                        id="project_delete_button_{{ project.id }}"
                                        class="w-6 mr-2 transform hover:text-red-600 hover:scale-110 cursor-pointer"
                                        onclick="mark_project_for_delete({{ $project }})"
                                    >
                                        <span title="Törlés">
                                            <DeleteIcon />
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="flex mt-2 mb-6 justify-center">
        <Pagination :links="projects.links" />
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

import DeleteIcon from "../../Ui/Svg/DeleteIcon.vue";
import EditIcon from "../../Ui/Svg/EditIcon.vue";
import StateInfo from "../../Ui/StateInfo.vue";
import Pagination from "../../Shared/Pagination.vue";

let props = defineProps({
    projects: Object,
    filters: Object,
});

let search = ref(props.filters.search)? ref(props.filters.search) :'0';

watch(
    search,
    debounce(function (value) {
        //  GET->(oldal, adat, opciók)
        Inertia.get(
            "/projects",
            { search: value },
            { preserveState: true, replace: true }
        );
    }, 300)
);
</script>
