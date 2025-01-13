import { createApp, type Plugin } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/scss/app.scss'
import '@/assets/scss/icons.scss'

const app = createApp(App)

const MetaPlug: Plugin = {
  install: (app: any, options: any) => {
    const useMeta = (item: { [key: string]: any }) => {
      console.info(item)
    }
    app.mixin({
      methods: {
        useMeta(item: { [key: string]: any }) {
          document.head.querySelector('title')!.innerHTML =
            item['title'] + ' | 명인제약 - UBsales Dashboard'
        },
      },
    })
  },
}

app.use(createPinia())
app.use(router)
app.use(MetaPlug)

app.mount('#app')
