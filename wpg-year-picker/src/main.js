import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import AntYearPicker from './yearPicker';

Vue.use(Antd);
Vue.use(AntYearPicker);

new Vue({
  el: '#app',
  render: h => h(App)
})
