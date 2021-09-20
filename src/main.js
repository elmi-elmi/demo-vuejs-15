import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from 'vuex';

const app = createApp(App);
const store = createStore({
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1
        }
    }
});
app.use(store);
app.mount('#app');
