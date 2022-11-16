<script setup>
import { ref } from 'vue';
import AppTabs from '../components/AppTabs.vue';

const tabs = [
    { name: 'About', label: 'about the project' },
    { name: 'Vue', label: 'About Vue' },
    { name: 'More', label: 'More' },
]

const selectedTab = ref('Vue')

const changeTab = (tabName) => {
    selectedTab.value = tabName
}

</script>

<template>
    <h1 class="heading-1"> {{ $t('Tabs') }}</h1>
    <app-tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
        <div v-if="selectedTab === 'About'">
            {{ $t('About') }}
        </div>
        <div v-if="selectedTab === 'Vue'">
            Vue
        </div>
        <div v-if="selectedTab === 'More'">
            {{ $t('More') }}
        </div>

    </app-tabs>
</template>


<style>

</style>