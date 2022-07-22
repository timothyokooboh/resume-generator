import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import AppButton from "./components/AppButton.vue"

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('AppButton', AppButton)
app.mount('#app')
