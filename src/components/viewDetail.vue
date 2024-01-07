<template>
  <div class="weather_app_details">
    <img class="icon-back" :src="iconBack" @click="emit('openTab')">
    <div class="weather_app_main">
      <div class="weather_app_name">
        <h2>{{ detail.name }}, {{ detail.sys.country }}</h2>
      </div>

      <div class="weather_app_type">
        {{ detail.weather[0].main }}
      </div>

      <div>
        <img :src="`${linkIcon}/${detail.weather[0].icon}.png`" :alt="detail.weather[0].icon">
      </div>

      <div>
          {{ getDataTemperature(5) }}  &#176;
      </div>

      <div>
        <span>
          Min: {{ getDataTemperature(6) }}  &#176;
        </span>
        <span>
        Max: {{ getDataTemperature(7) }}  &#176;
      </span>
      </div>
    </div>

    <div class="weather_app_blocks">
      <template v-for="item in listsDetails">
        <card-info :info="item"/>
      </template>

    </div>

  </div>
</template>

<script setup lang="ts">
import cardInfo from './cardInfo.vue'

/*icons*/
import iconWind from '../assets/icons/wind.png'
import iconPressure from '../assets/icons/pressure.png'
import iconWeather from '../assets/icons/weather.png'
import iconTemperature from '../assets/icons/thermometer.png'
import iconSun from '../assets/icons/sun.png'
import iconLocation from '../assets/icons/location.png'
import iconBack from '../assets/icons/back-arrow.png'


import {computed, defineEmits, defineProps, onMounted} from 'vue'
// import {CardType} from "../types";
import {setHourstamp} from "./mixins/dateParse.ts";

const props = defineProps<{ detail: any, linkIcon: string }>()
const emit = defineEmits(['openTab'])

onMounted(() => {
  console.log(props.detail)
})

const listsDetails = computed(() => {
  return [
    {
      title: "Real Feel",
      code: 1,
      units: '℃',
      content: getDataTemperature(1),
      icon: iconTemperature
    },
    {
      title: "Humidity",
      code: 2,
      units: '%',
      content: getDataTemperature(2),
      icon: iconWeather
    },
    {
      title: "Wind",
      code: 3,
      units: 'm/s',
      content: getDataTemperature(3),
      icon: iconWind
    },
    {
      title: "Pressure",
      code: 4,
      units: 'hPa',
      content: getDataTemperature(4),
      icon: iconPressure
    },
    {
      title: "Sunrise / Sunset",
      code: 8,
      units: 'hh',
      content: getDataTemperature(8),
      icon: iconSun
    },
    {
      title: "Location",
      code: 9,
      units: '',
      content: getDataTemperature(9),
      icon: iconLocation
    }
  ]
})

const getDataTemperature = (code: number) => {
  const path = props.detail
  switch (code){
    case 1:
      return Math.round(path.main.feels_like)

    case 2:
      return path.main.humidity

    case 3:
      return path.wind.speed

    case 4:
      return path.main.pressure

    case 5:
      return Math.round(path.main.temp)

    case 6:
      return Math.round(path.main.temp_min)

    case 7:
      return Math.round(path.main.temp_max)

    case 8:
      return `${setHourstamp(path.sys.sunrise)} / ${setHourstamp(path.sys.sunset)}`

    case 9:
      return `${path.coord.lat},${path.coord.lon}`

    default:
      return ''
  }

}

</script>


<style lang="scss">
.weather_app_details {
  width: 100%;
  position: relative;

  .icon-back{
    cursor: pointer;
    position: absolute;
    top: -20%;
    left: -4%;
    max-width: 30px;
    filter: invert(94%) sepia(90%) saturate(1%) hue-rotate(206deg) brightness(104%) contrast(100%);
  }

  .weather_app_main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;

    .weather_app_name{
      letter-spacing: 1.3px;
    }

    .weather_app_type{
      background: rgba(222, 207, 207, 0.1);
      padding: 7px;
      border-radius: 10px;
    }
  }

  .weather_app_blocks {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
