<template>
  <header class="header">
    <router-link to="/" class="logo "><img src="@/assets/vue.svg" alt="" /> UI Kit </router-link>
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
  z-index: 1;
  position: relative;
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