
v3路由需要引入一个泛型
```js
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [ //路由这里定义一个泛型
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/video/:id",
    name: "Video",
    component: () => import("../views/Video.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

```



main中引入初始化css和iconfont css
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import "@/assets/styles/iconfont.less"

createApp(App).use(router).mount('#app')
```

安装vant
仔细看文档
配置不在vue.config.js而是在babel.config.js




安装mockjs
```
npm i mockjs

ts中不能只安这个还要安语法提示包

npm i @types/mockjs --save--dev
```


随便写了写 轮播图什么的主要是看一下ts的应用




# bilibili-vue3-ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
