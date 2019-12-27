import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import AntYearPicker from '../dist/ant-year-picker';

Vue.use(Antd);
Vue.use(AntYearPicker);

new Vue({
  el: '#app',
  render: h => h(App)
})
