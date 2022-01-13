<template>
    <div class="flex justify-between mb-6">
        <div class="flex items-center">
            <h1 class="text-3xl font-bold">projects</h1>

            <Link href="/projects/create" class="text-blue-500 text-sm ml-3"
                >New project</Link
            >
        </div>

        <input
            v-model="search"
            type="text"
            placeholder="search..."
            class="border px-2 rounded-lg"
        />
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
    <Pagination :links="projects.links" class="mt-6" />
</template>

<script setup>
import Pagination from "../../Shared/Pagination.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

import DeleteIcon from "../../Ui/Svg/DeleteIcon.vue";
import EditIcon from "../../Ui/Svg/EditIcon.vue";
import StateInfo from "../../Ui/StateInfo.vue";

let props = defineProps({
    projects: Object,
    filters: Object,
});

let search = ref(props.filters.search);

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
