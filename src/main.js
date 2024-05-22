import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//導入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
//導入FontAwsome 5
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//測試接口函數
import { getCategory } from './apis/testapi'
getCategory().then(res=>{
    console.log(res)
})
//bootstrap
library.add(faPhone)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
