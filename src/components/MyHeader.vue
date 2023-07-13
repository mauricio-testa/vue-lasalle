<template>
  <nav class="header">
    <router-link to="/">
      <img src="../assets/builderall.svg" height="30">
    </router-link>
    <router-link to="/aula1">Aula 1</router-link>
    <router-link to="/aula2">Aula 2</router-link>
  </nav>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: lightgray;
}
.header > * {
  padding: 15px;
}
</style>