<template>
  <div class="card_info">
    <img class="card_copy"
         :src="copyIcon"
         title="copy value"
          @click="copyValue(info.content)"
          v-show="info.code === 9">
    <div class="card_icon">
      <img :src="info.icon" alt="no image">
    </div>
    <div class="card_description">
      <span class="card_description_title">{{ info.title }}</span>
      <span class="card_description_content">{{ info.content }} {{ info.units }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import copyIcon from '../assets/icons/copy.png'
import {defineProps} from 'vue'
import copyId from "./mixins/copyId";
import {ElMessage} from "element-plus";

const props = defineProps<{ info: object }>()


const copyValue = (content) => {
  copyId(content)
  ElMessage({
    message: 'Copied.',
    type: 'success',
  })
}
</script>

<style lang="scss">
.card_info {
  position: relative;
  width: 45%;
  display: flex;
  align-items: center;
  background: rgb(123 123 123 / 10%);
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 15px;

  .card_copy{
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    max-width: 18px;
    filter: invert(94%) sepia(90%) saturate(1%) hue-rotate(206deg) brightness(104%) contrast(100%);
  }

  .card_icon{
    max-width: 35px;
    margin-right: 10px;

    img{
      filter: invert(94%) sepia(90%) saturate(1%) hue-rotate(206deg) brightness(104%) contrast(100%);
      width: 100%;
      height: 100%;
    }
  }
  .card_description{
    display: flex;
    flex-direction: column;

    &_title, &_content{
      font-size: 14px;
    }
  }
}
</style>