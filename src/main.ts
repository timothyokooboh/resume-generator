import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import AppButton from "./components/AppButton.vue"


const app = createApp(App)
app.component('AppButton', AppButton)
app.use(router)
app.mount('#app')
