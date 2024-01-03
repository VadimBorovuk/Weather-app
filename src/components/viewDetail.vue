<template>
  <h2>{{ detail.name }}</h2>

  {{ detail.main.temp_min }}
  {{ detail.main.pressure }}

  <p>{{ detail.coord.lat }}, {{ detail.coord.lon }}</p> <button @click="copyValue(detail.coord.lat, detail.coord.lon)">copy</button>
  <img :src="`${linkIcon}/${detail.weather[0].icon}.png`" :alt="detail.weather.icon">
  <button @click="buttonClick('some key')"><- back</button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import copyId from "./mixins/copyId";
import {ElMessage} from "element-plus";

const props = defineProps<{ detail: object, linkIcon: string }>()
const emit = defineEmits(['openTab'])

const buttonClick = (key) => {
  emit('openTab', 111, key)
}

const copyValue = (lat, lon) => {
  let data = `${lat}, ${lon}`
  copyId(data)
  ElMessage({
    message: 'Copied.',
    type: 'success',
  })
}
</script>


<style>

</style>
