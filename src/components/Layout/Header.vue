<script setup>


</script>

<template>
  <header class="header">
    <router-link to="/" class="logo "><img src="@/assets/vue.svg" alt="" /> {{$t('UI Kit')}} </router-link>
    <slot></slot>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  font-weight: 500;
  padding: 0 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  width: 100%;
  a{
    text-decoration: none;
    font-size: 20px;
    color: #2c6d4f;
    font-weight: 500;
  }
}
.logo {
    display: flex;
    align-items: center;
  will-change: filter;
  transition: 0.5s;
  gap: 10px;
}

.logo:hover {
  filter: drop-shadow(0 0 0.3em #42b883aa);
}
</style>