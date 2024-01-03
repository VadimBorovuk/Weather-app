<template>
  {{ detail.main.temp_min }}
  {{ detail.main.pressure }}
  <img :src="`${linkIcon}/${detail.weather[0].icon}.png`" :alt="detail.weather.icon">
  <button @click="buttonClick('some key')"><- back</button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps<{ detail: object, linkIcon: string }>()
const emit = defineEmits(['openTab'])

const buttonClick = (key) => {
  emit('openTab', 111, key)
}
</script>


<style>

</style>
