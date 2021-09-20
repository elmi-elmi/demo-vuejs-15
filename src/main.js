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
        },
        increase(state, payLoad) {
            state.counter = state.counter + payLoad.value;
        }
    }
});
app.use(store);
app.mount('#app');
