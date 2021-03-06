// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//iview
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
Vue.config.productionTip = false

Vue.use(iView);
//mint-ui

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//fastclick
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);

import './style/usage/app.scss'
//swiper

import  '../node_modules/swiper/dist/css/swiper.min.css'
/* eslint-disable no-new */

//自定义指令
import './modules/directives'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
