<template>
  <div class="weather_app_present" @click="showDetail()">
    <p>{{ info.name }}, {{ info.sys.country }}</p>
    <p>{{ getDataTemperature }} &#176;</p>
    <img :src="`${linkIcon}/${info.weather[0].icon}.png`" :alt="info.weather[0].icon">

    <p>{{ info.coord.lat }}, {{ info.coord.lon }}</p>
  </div>
  <div>
<!--    <span>-->
<!--      {{getTimestamp}}-->
<!--    </span>-->
<!--    <p>{{info.timezone}}</p>-->
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
// import {setTimestamp} from './mixins/dateParse.ts'

const props = defineProps<{ info: any, linkIcon: string }>()
const emit = defineEmits(['openView'])

const showDetail = () => {
  emit('openView', props.info.id)
}

const getDataTemperature = computed(() => {
  return Math.round(props.info.main.temp)
})


// const getTimestamp =  computed(() => {
//
//   // props.info.timezone = 7200
//
//   return setTimestamp(props.info.dt)
// })

</script>


<style lang="scss">
.weather_app {

  &_present {
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
