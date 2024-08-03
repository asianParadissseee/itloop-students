import { createApp } from 'vue';
import App from './app/app.vue';
import Antd from "ant-design-vue"
const app = createApp(App)
app.use(Antd)
app.mount('#root');
