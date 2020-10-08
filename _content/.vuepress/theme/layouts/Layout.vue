<template>
  <div class="theme-container">
    <Navigation/>
    <h1>Blah</h1>
    <Content/>
  </div>
</template>

<script lang="ts">
import Navigation from '../components/Navigation.vue';

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
.theme-container {
  padding: 0 2%;
  @media screen and (min-width: 720px) {
    padding: 0 5%;
  }
}
</style>