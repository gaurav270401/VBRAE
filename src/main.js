import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/scss/custom-bootstrap.scss'
import '@/assets/scss/fonts.scss'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
