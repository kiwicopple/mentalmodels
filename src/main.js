import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

app.use(createPinia())
app.use(router)

app.mount('#app')