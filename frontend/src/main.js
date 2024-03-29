import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont'
import axios from 'axios'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vuetify);
new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')