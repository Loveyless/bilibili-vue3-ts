<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="i in navList" :key="i.id" :title="i.text"> </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

//定义一个列表定义接口
interface navItem{
  id:string,
  text:string
}

//tab选中的avtive
const active = ref(0);

//tab数据 //泛型数组 <navItem[]>代表数组的每一项都需遵循navItem
let navList = ref<navItem[]>([]);

//请求列表数据
axios.get("/navList").then(({ data }) => {
  navList.value = data.result;
});
</script> 
