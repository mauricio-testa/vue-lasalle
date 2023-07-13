<template>
  <MyHeader></MyHeader>
  <router-view></router-view>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
export default {
  components: {
    MyHeader
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>