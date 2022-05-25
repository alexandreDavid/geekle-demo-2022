import { createApp } from 'vue'
import App from './App.vue'
import Lib from './lib'
import Lib2 from 'geekle-vite'

import 'geekle-vite/dist/geekle-vite.css'

const app = createApp(App)
app.use(Lib)
app.use(Lib2)

app.mount('#app')
