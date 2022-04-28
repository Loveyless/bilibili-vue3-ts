<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="i in swipeList" :key="i.imgSrc">
      <img :src="i.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

interface swipeItem{
  imgSrc:string,
  link:string
}

let swipeList = ref<swipeItem[]>([]);

axios.get("/swiperList").then(({ data }) => {
  swipeList.value = data.result;
});
</script> 


<style lang="less">
.my-swipe{
  img{
    width: 100%;
  }
}
</style>