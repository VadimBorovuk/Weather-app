<template>
  <div>
    {{currentName}}
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute()
  const currentName = ref(route.params.id)
</script>

<style scoped>

</style>