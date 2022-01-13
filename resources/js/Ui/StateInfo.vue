<template lang="">
    <span
        class="relative inline-block px-3 py-1 font-semibold leading-tight"
        :class="currentdata.textcolor"
    >
        <span
            aria-hidden
            class="absolute inset-0 rounded-full"
            :class="currentdata.bgcolor"
        ></span>
        <span class="relative">{{ currentdata.text }}</span>
    </span>
</template>
<script setup>

defineProps({
    state: Number
});
</script>

<script>
export default {
    computed: {
        currentdata()
        {
            let currentdata = {};
            let color = 'gray';
            switch (this.state)
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
            currentdata.textcolor='text-'+color+'-800';
            currentdata.bgcolor='bg-'+color+'-200';

            return currentdata;
        }
    }
};
</script>

<style lang=""></style>
