<template lang="">

<select
    v-model="statefilter"
    id="state-filter-selector"
    class="font-medium rounded-l-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-2 border-solid border-gray-600"
    :class="currentdata.buttonstyle"
>
    <option id="index_state_dropdown_option_0" value="0" >Összes</option>
    <option id="index_state_dropdown_option_-1" value="-1">Fejlesztésre vár</option>
    <option id="index_state_dropdown_option_1" value="1">Folyamatban</option>
    <option id="index_state_dropdown_option_2" value="2">Kész</option>
</select>






</template>
<script setup>

defineProps({
    statefilter: Number,
});
</script>

<script>
export default {
    computed: {
        currentdata()
        {
            let currentdata = {};
            let color = 'gray';
            switch (this.statefilter)
            {
                case 0:
                    currentdata.text = "Fejlesztésre vár";
                    color = 'orange';
                    break;
                case 1:
                    currentdata.text = "Folyamatban";
                    color = 'green';
                    break;
                case 2:
                    currentdata.text = "Kész";
                    color= 'sky';
                    break;
            }
            currentdata.buttonstyle='bg-'+color+'-200'+' text-'+color+'-900';

            return currentdata;
        }
    }
};
</script>

<style lang=""></style>
