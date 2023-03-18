/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniArrowUpLeft } from 'vue-unicons/dist/icons'
import router from './router'

Unicon.add([uniArrowUpLeft])
createApp(App).use(router)
.use(Unicon)
.mount('#app')
