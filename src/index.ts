import { createApp } from 'vue';
import App from '@/app/app.vue';
import "@/app/styles/base.css"
import {pinia} from "@/app/providers/store";
import {router} from "@/app/providers/router";

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#root');
