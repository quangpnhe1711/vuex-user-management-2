import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppModal from './layouts/AppModal.vue'
import store from './store'

const app = createApp(App)
app.use(store)
app.component('AppModal', AppModal)

app.mount('#app')
