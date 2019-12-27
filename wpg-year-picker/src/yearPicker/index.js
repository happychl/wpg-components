/*
 * @Date: 2019-11-19 14:27:46
 * @Version: 0.0.1
 * @Author: chenhengling
 * @Description:
 * @LastEditTime: 2019-11-20 16:02:16
 * @LastEditors: chenhengling
 */
import YearPicker from "./yearPicker.vue";

/* istanbul ignore next */
YearPicker.install = function (Vue) {
  Vue.component(YearPicker.name, YearPicker);
};

export default YearPicker;
