import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import WpgTree from './tree';

Vue.use(Antd);
Vue.use(WpgTree);

new Vue({
  el: '#app',
  render: h => h(App)
})
