import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart,faHand,faAddressBook,faCreditCard,faLemon,faHourglass  } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add([faHeart,faHand,faAddressBook,faCreditCard,faLemon,faHourglass])

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).component('font-awesome-icon', FontAwesomeIcon).use(router).use(i18n).mount('#app')
