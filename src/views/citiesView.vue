<template>
  <div class="weather_app">
    <input id="f-city" class="weather_app_search" v-model="inputCity" @input="submitWeather"
           placeholder="Enter city...">

    <present-view
        v-if="cityInfo"
        @openView="openMoreDetail"
        :info="cityInfo"
        :linkIcon="linkIcon"
    />
  </div>
</template>

<script setup lang="ts">
import {ElLoading, ElNotification} from 'element-plus'

import {getDataByCityName} from "../api/main";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

// import {FilterW} from "../types";
import PresentView from "../components/presentView.vue";

const router = useRouter()

let inputCity: any = ref('')
let cityInfo: any = ref(null)

const loading: any = ref(false)
const queryTimeout: any = ref(null)
const linkIcon = ref(import.meta.env.VITE_API_ICON)

const filters = ref({
  lang: 'en',
  units: 'metric'
})

const openMoreDetail = (id: any) => {
  router.push({path: `city/${id}`})
}

onMounted(() => {
  inputCity.value = 'Kiev'
  submitWeather()
})

const submitWeather = () => {
  clearTimeout(queryTimeout.value)
  loading.value = true
  queryTimeout.value = setTimeout(() => {

    if (inputCity.value !== '') {

      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      getDataByCityName({...filters.value, q: inputCity.value}).then(answer => {
        cityInfo.value = answer.data
        loading.close()
      }).catch(e => {
        ElNotification({
          title: 'Error',
          message: e.response.data.message,
          type: 'error',
        })
        cityInfo.value = null
        loading.close()
      })
    }
    cityInfo.value = null

  }, 1000)
}


</script>

<style lang="scss">

.weather_app {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  &_search {
    margin: 8px 0 15px;
    padding: 15px 10px;
    width: 300px;
    outline: none;
    border: 2px solid #bbb;
    border-radius: 20px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -ms-transition: 0.2s ease all;
    -o-transition: 0.2s ease all;
    transition: 0.2s ease all;

    &:focus {
      border-color: goldenrod;
    }
  }

}


</style>
