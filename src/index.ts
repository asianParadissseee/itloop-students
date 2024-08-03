import { createApp } from 'vue';
import App from './app/app.vue';
import Antd from "ant-design-vue"
import "./app/styles/base.css"
const app = createApp(App)
app.use(Antd)
app.mount('#root');
