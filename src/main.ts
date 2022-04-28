import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import "@/assets/styles/iconfont.less"

// 导入mockjs文件
import "@/mock/index"


//vant
//全局注册 //局部注册不知道为什么用不了
import { Tabs,Tab } from "vant";
import { Swipe, SwipeItem } from "vant";

const app = createApp(App)


//注册组件
app.use(Tabs);
app.use(Tab);
app.use(Swipe);
app.use(SwipeItem);

app.use(router)
app.mount('#app')
