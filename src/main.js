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
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit({ type: 'increment' })
            }, 2000)
        },
        increase(context, payLoad) {
            context.commit('increase', payLoad);
        }
    },

    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalValue = getters.finalCounter;
            if (finalValue < 0) {
                return 0;
            } else if (finalValue > 100) {
                return 100;
            } else {
                return finalValue
            }
        }
    }
});
app.use(store);
app.mount('#app');
