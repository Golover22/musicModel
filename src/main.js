import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
//写一个跳转网页到 /menu/discover，把最开始右边初始化