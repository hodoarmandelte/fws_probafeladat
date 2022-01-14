<template lang="">
    <Head title="Projekt szerkesztése" />
    <h1 class="text-3xl">Projekt szerkesztése</h1>
    <form @submit.prevent="submit" class="max-w-md mx-auto mt-8">
        <div class="mb-6">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700"
                for="name"
            >
                Name
            </label>
            <input
                v-model="form.name"
                class="border vorder-gray-400 p2 w-full"
                type="text"
                name="name"
                id="name"
                maxlength="35"
                required
            />
            <div
                v-if="form.errors.name"
                v-text="form.errors.name"
                class="text-red-500 text-xs mt-1"
            ></div>
        </div>
        <div class="mb-6">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700"
                for="email"
            >
                Email
            </label>
            <input
                v-model="form.desc"
                class="border vorder-gray-400 p2 w-full"
                type="text"
                name="desc"
                id="desc"
                required
            />
            <div
                v-if="form.errors.desc"
                v-text="form.errors.desc"
                class="text-red-500 text-xs mt-1"
            ></div>
        </div>
        <div class="mb-6">
            <button
                type="submit"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                id="submit"
                :disabled="form.processing"
            >
                Submit
            </button>
        </div>
    </form>

    <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-gray-600 font-semibold">Kapcsolattartó szerkesztése</h2>
                <span class="text-xs" id="contact_info_summary">A kapcsolattartó szerkesztése</span>
            </div>
            <div class="flex items-center justify-between">
                <div class="lg:ml-40 ml-10 space-x-8">
                    <button class="button-back"><a href="/">Vissza</a></button>
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
                                            <input type="text" name="name" size="35" maxlength="35" value="{{ $contact->name }}" class="border-2 border-solid border-gray-400 rounded-md p-1"/>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input type="text" name="email" size="128" maxlength="128" value="{{ $contact->email }}" class="border-2 border-solid border-gray-400 rounded-md p-1"/>
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













</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let props = defineProps({
    project: Object,
    contacts: Object
});

let form = useForm({
    name: props.project.name,
    desc: props.project.desc,
    state: props.project.state,
});


let submit = () => {
    form.post("/projects");
};

</script>
<style lang=""></style>
