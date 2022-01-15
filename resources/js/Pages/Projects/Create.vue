<template lang="">
    <Head title="Projekt létrehozása" />
    <div class="flex items-center justify-between">
        <h1 class="text-3xl">Projekt létrehozása</h1>
        <div class="flex items-center mr-5">
            <a href="/">
                <div class="button-back">Vissza a projektekhez</div>
            </a>
        </div>
    </div>
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
                        id=""
                    >
                        <div class="crud-td">
                            <input
                                v-model="form.name"
                                type="text"
                                name="name"
                                id="name"
                                size="50"
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
                                size="50"
                                maxlength="128"
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
                            <div>
                                <select
                                    v-model="form.state"
                                    class="mt-1 w-64 form-select font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center text-gray-800 bg-gray-200 hover:bg-gray-100 border-2 border-solid border-gray-600"
                                    required
                                >
                                    <option :value="0">Fejlesztésre vár</option>
                                    <option :value="1">Folyamatban</option>
                                    <option :value="2">Kész</option>
                                </select>
                            </div>
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
                                class="w-6 mr-2 transform hover:text-green-600 hover:scale-110"
                            >
                                <PlusIcon />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <UniversalModal
        modal_visible="false"
        modal_color="blue"
        modal_title="Default"
        modal_text="Default"
    />
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

import UniversalModal from "../../Ui/Modals/UniversalModal.vue";

import PlusIcon from "../../Ui/Svg/PlusIcon.vue";

let props = defineProps({
    errors: Object
});

let form = useForm({
    id: '',
    name: '',
    desc: '',
    state: '',
});

let submit = () => {
    form.post("/projects");
};
</script>
<style lang=""></style>
