<template lang="">
    <Head title="Projekt szerkesztése" />
    <h1 class="text-3xl">Projekt szerkesztése</h1>
    <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
                class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
                <div class="crud-th border-b-2 border-dashed">
                    Projektadatok
                </div>
                <div class="grid grid-cols-4 min-w-full leading-normal">
                    <div class="crud-th">Név</div>
                    <div class="crud-th">Leírás</div>
                    <div class="crud-th">Státusz</div>
                    <div class="crud-th">Műveletek</div>
                </div>
                <form @submit.prevent="submit">
                    <div
                        class="grid grid-cols-4 crud-tr"
                        :id="'tr_' + project.id"
                    >
                        <div class="crud-td">
                            <input
                                v-model="form.name"
                                type="text"
                                name="name"
                                id="name"
                                size="35"
                                maxlength="35"
                                class="border-2 border-solid border-gray-400 rounded-md p-1"
                                required
                            />
                            <div
                                v-if="form.errors.name"
                                v-text="form.errors.name"
                                class="text-red-500 text-xs mt-1"
                            ></div>
                        </div>
                        <div class="crud-td">
                            <input
                                v-model="form.desc"
                                type="text"
                                name="name"
                                id="name"
                                size="35"
                                maxlength="35"
                                class="border-2 border-solid border-gray-400 rounded-md p-1"
                                required
                            />
                            <div
                                v-if="form.errors.desc"
                                v-text="form.errors.desc"
                                class="text-red-500 text-xs mt-1"
                            ></div>
                        </div>
                        <div class="crud-td">
                            <div>State</div>
                            <div
                                v-if="form.errors.state"
                                v-text="form.errors.state"
                                class="text-red-500 text-xs mt-1"
                            ></div>
                        </div>
                        <div
                            :id="'project_buttons_' + form.id"
                            class="crud-td flex item-start justify-start"
                        >
                            <button
                                title="Mentés"
                                type="submit"
                                id="submit"
                                :disabled="form.processing"
                                class="w-6 mr-2 transform hover:text-blue-600 hover:scale-110"
                            >
                                <SaveIcon />
                            </button>
                            <button
                                title="Mentés"
                                :id="'delete_'+form.id"
                                class="w-6 mr-2 transform hover:text-red-600 hover:scale-110"
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                </form>
                <div class="crud-th border-b-2 border-dashed">
                    Kapcsolattartók adatai
                </div>
                <table class="min-w-full leading-normal table-auto">
                    <div class="grid grid-cols-4 min-w-full leading-normal">
                        <div class="crud-th">ID</div>
                        <div class="crud-th">Név</div>
                        <div class="crud-th">Email</div>
                        <div class="crud-th">Műveletek</div>
                    </div>
                    <div>
                        <div
                            v-for="contact in contacts"
                            :key="contact.id"

                            :id="'tr_contact_' + contact.id"
                        >
                            <ContactEdit :contact="contact"/>
                        </div>

                        <tr class="crud-new-contact-tr" id="new_contact_tr">
                            <td>
                                <div class="pl-3">
                                    Új kontaktszemély felvétele
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </div>
                </table>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

import DeleteIcon from "../../Ui/Svg/DeleteIcon.vue";
import SaveIcon from "../../Ui/Svg/SaveIcon.vue";
import PlusIcon from "../../Ui/Svg/PlusIcon.vue";
import ContactEdit from "../../Ui/ContactEdit.vue";

let props = defineProps({
    project: Object,
    contacts: Object,
    errors: Object,
});

let form = useForm({
    id: props.project.id,
    name: props.project.name,
    desc: props.project.desc,
    state: props.project.state,
});

let submit = () => {
    form.put("/projects/" + props.project.id);
};

<style lang="">
</style>
