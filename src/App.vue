<template>
  <router-view/>
</template>

<script>
import ShoeShop from './views/ShoeShop.vue'

export default {
  name: 'App',
  components: {
    ShoeShop
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
