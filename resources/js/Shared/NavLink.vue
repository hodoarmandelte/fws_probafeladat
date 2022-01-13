<template lang="">
    <Link
        class="text-black hover:underline"
        :class="{ 'font-bold underline': active }"
    >
        <slot />
    </Link>
</template>
<script setup>
defineProps({ active: Boolean });
</script>
<style lang=""></style>
