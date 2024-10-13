import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引用 Bootstrap
// Import our custom CSS
import '@/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import only the Bootstrap components we need
import { Popover } from 'bootstrap'

// 引用 bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'

// 引用 fontawesome icon
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons */
import { faUserSecret, faUser, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faUser, faHouse, faMagnifyingGlass)

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
