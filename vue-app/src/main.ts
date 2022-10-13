import { createApp } from 'vue';
import App from './App.vue';
import './assets/bootstrap.min.css';
import './assets/styles.css';
import axios from 'axios';

const axiosInstance1 = axios.create({

    baseURL: 'https://reqres.in/api/',

});

const axiosInstance2 = axios.create({

    baseURL: 'https://reqres.in/api/',

});

createApp(App)
    .use({
        install(app) {
            app.config.globalProperties.$http1 = axiosInstance1;
            app.config.globalProperties.$http2 = axiosInstance2;
        },
    })
    .mount('#app')
