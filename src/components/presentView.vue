<template>
  <div class="weather_app_info" @click="showDetail()">
    <p>{{ info.name }}, {{ info.sys.country }}</p>
    <p>{{ getTemperature(info) }} &#176;</p>
    <img :src="`${linkIcon}/${info.weather[0].icon}.png`" :alt="info.weather[0].icon">

    <p>{{ info.coord.lat }}, {{ info.coord.lon }}</p>
  </div>

</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue'

const props = defineProps<{ info: object, linkIcon: string }>()
const emit = defineEmits(['openView'])

const showDetail = () => {
  emit('openView', props.info.id)
}

const getTemperature = (data) => {
  const tempLabel = Math.round(data.main.temp)
  return `${tempLabel}`
}
</script>


<style lang="scss">
.weather_app {

  &_info {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;

    p{
      font-weight: bold;
    }

    &:hover {
      cursor: pointer;
      background: #cbcbcb;
      color: #000;

    }
  }

}
</style>
