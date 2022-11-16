<script setup>
import {ref} from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: "global" })
const props = defineProps({
    openSidebar: {
        type: Boolean,
        require: true
    }
})

const links = ref([
    {name: t('Typography'), href: '/typography'},
    {name: t('Button'), href: '/button'},
    {name: t('Checkbox'), href: '/checkbox'},
    {name: t('Radiobutton'), href: '/radiobutton'},
    {name: t('Progress'), href: '/progress'},
    {name: t('Inputs'), href: '/inputs'},
    {name: t('Tabs'), href: '/tabs'},
    {name: t('Table'), href: '/table'},
])

</script>

<template>
    <div :class="['sidebar', {sidebar__isopen: openSidebar}] ">
        <router-link 
        class="sidebar__link"
        v-for="link in links" 
        :key="link.name"
        :to="link.href"
        >{{link.name}}</router-link>
    </div>
</template>

<style lang="scss" scoped>
.sidebar{
    left: 0;
    top: 62px;
    height: 100%;
    background:#fff;
    position: fixed;
    width: 250px;
    padding: 20px;
    transition: 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    transform: translateX(-250px);
    &__isopen{
        transform: translateX(0px);
    }
    &__link{
        display: block;
        border-radius: 12px;
        padding: 10px;
        border: 2px solid #fff;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;
        text-decoration: none;
        &:hover{
            color: var(--primary);
        }
    }
}

</style>

