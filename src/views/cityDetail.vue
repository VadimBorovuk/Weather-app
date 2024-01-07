<template>
    <view-detail
        v-if="cityInfo"
        :detail="cityInfo"
        :linkIcon="linkIcon"
        @openTab="openMoreDetail"
    />
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getDataCityById} from "../api/main";

// import {FilterCity} from "../types";
import ViewDetail from "../components/viewDetail.vue";

import {ElLoading, ElNotification} from "element-plus";

const route = useRoute()
const router = useRouter()

const linkIcon = ref(import.meta.env.VITE_API_ICON)
let cityInfo: any = ref(null)

const filtersCity = ref({
  id: route.params.id,
  lang: 'en',
  units: 'metric'
})

onMounted(() => {
  getInfoCityById()
})

const openMoreDetail = () => {
  router.go(-1)
}

const getInfoCityById = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  getDataCityById(filtersCity.value).then(answer => {
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

</script>

<style scoped>

</style>
