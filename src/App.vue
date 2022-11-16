<script setup>
import { ref } from 'vue'
import Header from "./components/Layout/Header.vue";
import Sidebar from "./components/Layout/Sidebar.vue";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: "global" })

const isOpenMenu = ref(false)
const switchLang = () => {
  locale.value === 'en' ? locale.value = 'ru' : locale.value = 'en'
  localStorage.setItem('lang', locale.value)
}

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
    <Header> <span @click="switchLang">{{ $t('SwitchLanguage') }}</span>
    </Header>
    <Sidebar :openSidebar="isOpenMenu"></Sidebar>
    <div :class="['content', { content__full: !isOpenMenu }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/style.scss";

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 60px 30px;
  transition: 0.2s;

  &__full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style> 
