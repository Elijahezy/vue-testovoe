import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store/index.js';

const instance = createApp(App);

instance.use(store);

instance.mount('#app');

store.dispatch('items/action');
