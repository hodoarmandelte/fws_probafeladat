<template lang="">
<form @submit.prevent="contactsubmit" class="grid grid-cols-4 crud-tr">
                                <div
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <p>{{ contact.id }}</p>
                                </div>
                                <div
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <input
                                        :id="'contact_name_' + contact.id"
                                        v-model="contactform.name"
                                        type="text"
                                        name="name"
                                        size="35"
                                        maxlength="35"
                                        class="border-2 border-solid border-gray-400 rounded-md p-1"
                                    />
                                </div>
                                <div
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <input
                                        :id="'contact_email_' + contact.id"
                                        v-model="contactform.email"
                                        type="text"
                                        name="email"
                                        size="50"
                                        maxlength="128"
                                        class="border-2 border-solid border-gray-400 rounded-md p-1"
                                    />
                                </div>
                                <div
                                    :id="'contact_buttons_' + contact.id"
                                    class="crud-td flex item-center justify-start space-x-2"
                                >
                                    <button
                                        title="Mentés"
                                        type="submit"
                                        id="submit"
                                        class="w-6 mr-2 transform hover:text-blue-600 hover:scale-110"
                                        :disabled="contactform.processing"
                                    >
                                        <span title="Mentés">
                                            <SaveIcon />
                                        </span>
                                    </button>
                                    <div
                                        title="Törlés"
                                        class="w-6 mt-1 mr-2 transform hover:text-red-600 hover:scale-110"
                                    >
                                        <DeleteIcon />
                                    </div>
                                    <button
                                    :onclick="sendcontactinfo(contact.id)">
                                                            Klikk e
                                    </button>
                                </div>
                            </form>
</template>
<script setup>

import { useForm } from "@inertiajs/inertia-vue3";

import DeleteIcon from "../Ui/Svg/DeleteIcon.vue";
import SaveIcon from "../Ui/Svg/SaveIcon.vue";

let props = defineProps({
    contact: Object,
    errors: Object,
});

let contactform = useForm({
    _method: 'put',
    id: props.contact.id,
    name: props.contact.name,
    email: props.contact.email,
});

let submitcontact = () => {
    contactform.post("/contacts/" + contact.id);
};

let sendcontactinfo = (id) =>
{
    axios.put('/contacts/'+id, contactform);
};

</script>


<style lang="">

</style>
