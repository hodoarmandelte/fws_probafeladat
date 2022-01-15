<template lang="">
<form @submit.prevent="submit" class="grid grid-cols-4 crud-tr">
                                <div
                                    class="crud-td"
                                >
                                    <input
                                        type="hidden"
                                        id="new_contact_project_id"
                                        name="project_id"
                                        :value="props.project_id"
                                    />
                                    <p>Új</p>
                                </div>
                                <div
                                    class="crud-td"
                                >
                                    <input
                                        id="new_contact_name"
                                        placeholder="új kontaktszemély neve"
                                        type="text"
                                        name="name"
                                        size="50"
                                        maxlength="35"
                                        class="border-2 border-solid border-gray-400 rounded-md p-1"
                                    />
                                </div>
                                <div
                                    class="crud-td"
                                >
                                    <input
                                        id="new_contact_email"
                                        placeholder="új kontaktszemély email címe"
                                        type="text"
                                        name="email"
                                        size="50"
                                        maxlength="128"
                                        class="border-2 border-solid border-gray-400 rounded-md p-1"
                                    />
                                </div>
                                <div
                                    id="new_contact_buttons"
                                    class="crud-td flex item-center justify-start space-x-2"
                                >
                                    <div
                                        title="Mentés"
                                        v-on:click="addcontact()"
                                        class="w-6 mr-2 mt-1 transform hover:text-green-600 hover:scale-110 hover:cursor-pointer"
                                    >
                                        <span title="Mentés">
                                            <PlusIcon />
                                        </span>
                                    </div>
                                </div>
                            </form>
</template>
<script setup>

import PlusIcon from "./Svg/PlusIcon.vue";
import addcontact from "../create_contact.js";

let props = defineProps({
    project_id: Number,
    errors: Object,
});


</script>

<style lang="">

</style>
