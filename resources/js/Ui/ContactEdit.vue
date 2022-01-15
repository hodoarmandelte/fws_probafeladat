<template lang="">
<form @submit.prevent="submit" class="grid grid-cols-4 crud-tr">
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
                                        :value="contact.name"
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
                                        :value="contact.email"
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
                                    <div
                                        title="Mentés"
                                        v-on:click="editcontact(contact.id)"
                                        class="w-6 mr-2 mt-1 transform hover:text-blue-600 hover:scale-110 hover:cursor-pointer"
                                    >
                                        <span title="Mentés">
                                            <SaveIcon />
                                        </span>
                                    </div>
                                    <button
                                        title="Törlés"
                                        v-on:click="deletecontact(contact.id)"
                                        class="w-6 mr-2 transform hover:text-red-600 hover:scale-110"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </form>
</template>
<script setup>

import DeleteIcon from "../Ui/Svg/DeleteIcon.vue";
import SaveIcon from "../Ui/Svg/SaveIcon.vue";
import editcontact from "../edit_contact.js";
import deletecontact from "../delete_contact.js";

let props = defineProps({
    contact: Object,
    errors: Object,
});


</script>

<style lang="">

</style>
