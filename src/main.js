import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from 'vuex';

const app = createApp(App);
const store = createStore({
    state() {
        return {
            counter: 1,
            isLoggedIn: false
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1
        },
        increase(state, payLoad) {
            state.counter = state.counter + payLoad.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
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
        },
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })

        }
    },

    getters: {
        userAuthenticated(state) {
            return state.isLoggedIn
        },
        finalCounter(state) {
            return state.counter;
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
