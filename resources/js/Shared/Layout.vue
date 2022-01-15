<template lang="">
    <Head>
        <title>{{ $page.props.header_title}}</title>
        <meta
            type="description"
            content="Projekt lista"
            head-key="description"
        />
    </Head>

    <section class="p-6 bg-amber-500 opacity-80">
        <header class="flex justify-between">
            <a href="/">
                <div class="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <h1 class="text-white font-bold text-xl">
                        FWS-HA Próbafeladat - {{ $page.props.header_title}}
                    </h1>
                </div>
            </a>
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-full mx-auto"><slot /></div>
    </section>
</template>

<script setup>

import { Head } from "@inertiajs/inertia-vue3";

defineProps({
    header_title: String,
});

</script>
<style lang=""></style>
