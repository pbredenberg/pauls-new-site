<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
