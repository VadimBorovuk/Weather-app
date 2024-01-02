<template>
  <div>
    <input id="f-city" v-model="inputCity" @input="submitWeather" placeholder="enter city">

    <div v-if="cityInfo">
      <h2>info</h2>
      {{ cityInfo }}
      <router-link :to="`city/${cityInfo.id}`">link</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElLoading, ElNotification} from 'element-plus'

import {getDataByCityName} from "../utils/getRequest";
import {onMounted, ref} from "vue";
import {FilterW} from "../types";

let inputCity: any = ref('')
const loading: any = ref(false)
const queryTimeout: any = ref(null)

const filters: FilterW = ref({
  q: 'Kiev',
  lang: 'ua',
  units: 'metric'
})

let cityInfo: any = ref(null)

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
      return
    }
    cityInfo.value = null

  }, 1000)
}


</script>

<style scoped>

</style>
