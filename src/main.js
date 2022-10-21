import Vue from 'vue'
import App from './App.vue'
//import ElementUI from 'element-ui';							// 引入ElementUI组件库
//import 'element-ui/lib/theme-chalk/index.css';	// 引入ElementUI全部样式
import { Button,Row } from 'element-ui'	// 按需引入

Vue.config.productionTip = false

//Vue.use(ElementUI)	// 使用ElementUI
Vue.component('el-button', Button);
Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Row)
 */



new Vue({
    el:"#app",
    render: h => h(App),
})