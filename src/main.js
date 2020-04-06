import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import './registerServiceWorker';
import Home from './pages/home/index.vue';
import Provider from './pages/provider/index.vue';
import Retailer from './pages/retailer/index.vue';
import Driver from './pages/driver/index.vue';
import ListRetailer from './pages/listRetailer/index.vue';
import GeoPlace from './components/geoPlace.vue';
import ListProvider from './pages/listProvider/index.vue';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);
Vue.component('GeoPlace', GeoPlace);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/register/provider',
    component: Provider,
  },
  {
    path: '/register/retailer',
    component: Retailer,
  },
  {
    path: '/register/driver',
    component: Driver,
  },
  {
    path: '/search/retailer',
    component: ListRetailer,
  },
  {
    path: '/search/provider',
    component: ListProvider,
  },
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: (h) => h(App),
  components: { App },
}).$mount('#app');
